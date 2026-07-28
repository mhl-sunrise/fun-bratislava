// Shared behaviour for every page: mobile nav, cookie consent, date picker, reveal.
// Single source of truth — index and the activity pages all load this file.
// ---------- mobile navigation ----------
(() => {
  const nav = document.querySelector('.nav'), burger = document.getElementById('navburger');
  if (!nav || !burger) return;
  const set = open => { nav.dataset.open = open ? '1' : '0'; burger.setAttribute('aria-expanded', String(open)); };
  burger.onclick = () => set(nav.dataset.open !== '1');
  nav.querySelectorAll('.nav-drawer a').forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  document.addEventListener('click', e => { if (!nav.contains(e.target)) set(false); });
  addEventListener('resize', () => { if (innerWidth > 920) set(false); });
})();

document.getElementById('dockclear').onclick = () => { picked.clear(); render(); };

// remove a single activity straight from the plan summary
document.getElementById('planlist').addEventListener('click', e => {
  const b = e.target.closest('.plan-x');
  if (!b) return;
  picked.delete(b.dataset.id);
  render();
});
render();



// ---------- cookie consent ----------
// ponytail: localStorage + two buttons. There are no analytics or marketing scripts on the
// page yet, so this records the choice and nothing else — wire real tags to consent()==='all'
// when you add them, otherwise the banner is theatre.
(() => {
  const KEY = 'fb-consent';
  const banner = document.getElementById('cc');
  const opener = document.getElementById('ccopen');
  if (!banner || !opener) return;

  const read = () => { try { return localStorage.getItem(KEY) } catch { return null } };
  const write = v => { try { localStorage.setItem(KEY, v) } catch {} };

  const paint = () => {
    const choice = read();
    banner.hidden = !!choice;
    opener.hidden = !choice;
  };

  banner.addEventListener('click', e => {
    const b = e.target.closest('[data-cc]');
    if (!b) return;
    write(b.dataset.cc);
    paint();
    document.dispatchEvent(new CustomEvent('consent', { detail: b.dataset.cc }));
  });
  opener.onclick = () => { banner.hidden = false; opener.hidden = true; };

  paint();
})();
// ---------- date picker ----------
// ponytail: no library. Upgrades every <input type="date"> in place — the input stays in the
// DOM and keeps carrying the value, so form submit and validation are untouched; if this
// script never runs, the native field is simply left visible.
(() => {
  const DOW = ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'];
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const parse = s => { const [y, m, d] = (s || '').split('-').map(Number); return y ? new Date(y, m - 1, d) : null; };
  const long = d => d.toLocaleDateString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' });
  const today = new Date(); today.setHours(0, 0, 0, 0);

  document.querySelectorAll('input[type="date"]').forEach(input => {
    const wrap = document.createElement('div'); wrap.className = 'dp';
    const field = document.createElement('button');
    field.type = 'button'; field.className = 'dp-field';
    field.setAttribute('aria-haspopup', 'dialog'); field.setAttribute('aria-expanded', 'false');
    const lbl = input.getAttribute('aria-label') ||
      document.querySelector(`label[for="${input.id}"]`)?.textContent.trim() || 'Dátum';
    field.setAttribute('aria-label', lbl);
    const pop = document.createElement('div');
    pop.className = 'dp-pop'; pop.hidden = true; pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-label', lbl);

    input.parentNode.insertBefore(wrap, input);
    wrap.append(input, field, pop);
    // keep the input in the DOM for form data, just out of sight
    Object.assign(input.style, {
      position: 'absolute', width: '1px', height: '1px', opacity: '0', pointerEvents: 'none'
    });

    let view = parse(input.value) || new Date(today);

    const paint = () => {
      const sel = parse(input.value);
      const y = view.getFullYear(), m = view.getMonth();
      const first = new Date(y, m, 1);
      const lead = (first.getDay() + 6) % 7;              // Monday-first
      const start = new Date(y, m, 1 - lead);
      const canBack = new Date(y, m, 0) >= today;

      let cells = '';
      for (let i = 0; i < 42; i++) {
        const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
        const out = d.getMonth() !== m;
        const past = d < today;
        cells += `<button type="button" class="dp-day" data-d="${iso(d)}"` +
          `${out ? ' data-out="1"' : ''}${+d === +today ? ' data-today="1"' : ''}` +
          `${past ? ' disabled' : ''}` +
          ` aria-pressed="${sel && +d === +sel}">${d.getDate()}</button>`;
      }
      pop.innerHTML =
        `<div class="dp-head">
           <button type="button" class="dp-nav" data-go="-1" ${canBack ? '' : 'disabled'} aria-label="Predchádzajúci mesiac">‹</button>
           <span class="dp-title">${view.toLocaleDateString('sk-SK', { month: 'long', year: 'numeric' })}</span>
           <button type="button" class="dp-nav" data-go="1" aria-label="Nasledujúci mesiac">›</button>
         </div>
         <div class="dp-grid">${DOW.map(d => `<span class="dp-dow">${d}</span>`).join('')}${cells}</div>
         <div class="dp-foot">
           <button type="button" data-act="clear">Zmazať</button>
           <button type="button" data-act="today">Dnes</button>
         </div>`;
    };

    const show = () => {
      const sel = parse(input.value);
      field.textContent = sel ? long(sel) : 'Vyberte dátum';
      field.dataset.empty = sel ? '0' : '1';
    };

    // .sec/.hero each create a stacking context (position+z-index), which caps the
    // popup no matter how high its own z-index is — so lift the host while open.
    const host = wrap.closest("section, footer") || document.body;
    const close = () => { pop.hidden = true; host.style.zIndex = ""; field.setAttribute("aria-expanded", "false"); };
    const open = () => { view = parse(input.value) || new Date(today); paint(); pop.hidden = false; host.style.zIndex = "50"; field.setAttribute("aria-expanded", "true"); };

    field.onclick = () => (pop.hidden ? open() : close());

    pop.addEventListener('click', e => {
      // paint() replaces innerHTML, so the clicked node is detached before this event reaches
      // document — where wrap.contains(target) would then read false and close the popup.
      e.stopPropagation();
      const nav = e.target.closest('[data-go]');
      if (nav) { view = new Date(view.getFullYear(), view.getMonth() + +nav.dataset.go, 1); return paint(); }
      const act = e.target.closest('[data-act]');
      if (act) {
        input.value = act.dataset.act === 'today' ? iso(today) : '';
        input.dispatchEvent(new Event('change', { bubbles: true }));
        show(); close(); return;
      }
      const day = e.target.closest('.dp-day');
      if (day && !day.disabled) {
        input.value = day.dataset.d;
        input.dispatchEvent(new Event('change', { bubbles: true }));
        show(); close();
      }
    });

    document.addEventListener('click', e => { if (!wrap.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    input.addEventListener('change', show);
    show();
  });
})();
// ---------- reveal on scroll ----------
// ponytail: plain scroll + getBoundingClientRect, NOT IntersectionObserver. IO reported
// nothing on the user's machine twice, leaving every .reveal element stuck at opacity:0 —
// i.e. a blank page. This path has no silent failure mode: the same check runs on load, on
// scroll, on resize, and once more after 400ms, and any throw reveals everything.
(() => {
  const grids = '.grid, .occ, .flow, .revs, .fgrid';
  const solo = '.head, .planner, .book';
  const sel = `${grids.split(', ').map(s => s + ' > *').join(', ')}, ${solo}`;
  const items = [...document.querySelectorAll(sel)];
  const showAll = () => items.forEach(e => e.classList.add('in'));

  try {
    document.querySelectorAll(grids).forEach(g => {
      const cols = getComputedStyle(g).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
      [...g.children].forEach((c, i) => c.style.setProperty('--i', i % cols));
    });
    items.forEach(e => e.classList.add('reveal'));

    let pending = items.slice();
    const check = () => {
      const h = innerHeight;
      pending = pending.filter(e => {
        const r = e.getBoundingClientRect();
        if (r.top < h * 0.94 && r.bottom > 0) { e.classList.add('in'); return false; }
        return true;                       // one-shot: never re-hidden on the way back up
      });
      if (!pending.length) removeEventListener('scroll', onScroll);
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; check(); });
    };

    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll, { passive: true });
    addEventListener('load', check);
    check();
    setTimeout(check, 400);
  } catch (err) {
    showAll();
  }
})();

// ---------- auto-growing textarea ----------
// ponytail: no wrapper element, no ghost div. Reset to auto first so the box can SHRINK —
// scrollHeight never reports less than the current height, so growing-only is the usual bug.
(() => {
  const grow = el => { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; };
  document.querySelectorAll('textarea').forEach(el => {
    el.style.overflowY = 'hidden';
    el.style.resize = 'none';
    el.addEventListener('input', () => grow(el));
    grow(el);
  });
})();

// ---------- add to plan, with add-ons ----------
// ponytail: writes into the same localStorage key the planner reads on load. Each entry is
// {id, addons:[{n,p}]} and carries its own labels and prices, so the planner never has to
// know anything about this page's data.
(() => {
  const KEY = 'fb-plan';
  const dlg = document.getElementById('pick');
  const trigger = document.querySelector('[data-add]');
  if (!dlg || !trigger) return;

  const open = () => { dlg.hidden = false; document.body.style.overflow = 'hidden'; };
  const close = () => { dlg.hidden = true; document.body.style.overflow = ''; };

  trigger.addEventListener('click', open);

  dlg.addEventListener('click', e => {
    if (e.target === dlg) return close();                 // click on the backdrop
    const act = e.target.closest('[data-pick]');
    if (!act) return;
    if (act.dataset.pick === 'cancel') return close();

    const addons = [...dlg.querySelectorAll('.pick-row input:checked')]
      .map(i => ({ n: i.dataset.n, p: +i.dataset.p || 0 }));
    try {
      const plan = (JSON.parse(localStorage.getItem(KEY)) || [])
        .filter(x => (typeof x === 'string' ? x : x.id) !== act.dataset.id);
      plan.push({ id: act.dataset.id, addons });
      localStorage.setItem(KEY, JSON.stringify(plan));
    } catch {}
    location.href = 'index.html#aktivity';
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dlg.hidden) close(); });
})();
