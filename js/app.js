// ─────────────────────────────────────────────────────────────
// Sullivans Meet — application
// A single-page experience. All state is local. All men are Sullivan.
// ─────────────────────────────────────────────────────────────
(() => {
  "use strict";

  /* ───────────── Icons ───────────── */
  const I = {
    heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-10-9.3C.5 8 2.3 4.5 5.9 4.1c2-.2 3.9.8 5 2.4a.13.13 0 0 0 .2 0c1.1-1.6 3-2.6 5-2.4 3.6.4 5.4 3.9 3.9 7.6C17.5 16.3 12 21 12 21Z"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6.2 4.8 12 10.6l5.8-5.8 1.4 1.4L13.4 12l5.8 5.8-1.4 1.4L12 13.4l-5.8 5.8-1.4-1.4L10.6 12 4.8 6.2z"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M12 1.8 15 4l3.7.3.3 3.7 2.2 3-2.2 3-.3 3.7-3.7.3-3 2.2-3-2.2-3.7-.3-.3-3.7L2.8 12l2.2-3 .3-3.7L9 4l3-2.2Zm-1.4 13.4 5.6-5.6-1.4-1.4-4.2 4.2-2-2-1.4 1.4 3.4 3.4Z"/></svg>',
    chevL: '<svg viewBox="0 0 24 24"><path d="M15.4 5.4 8.8 12l6.6 6.6-1.4 1.4-8-8 8-8z"/></svg>',
    chevR: '<svg viewBox="0 0 24 24"><path d="m8.6 5.4 8 8-8 8-1.4-1.4 6.6-6.6L7.2 6.8z"/></svg>',
    chevD: '<svg viewBox="0 0 24 24"><path d="m5.4 8.6 6.6 6.6 6.6-6.6 1.4 1.4-8 8-8-8z"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="M3 11.5 21 3l-8.5 18-2.3-7.2L3 11.5Zm9 .5 2.5 5 4-9.6L8.9 11.4 12 12Z"/></svg>',
    search: '<svg viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l4.3 4.3-1.4 1.4-4.3-4.3A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5Z"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3Z"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="m12 2.5 2.9 6.2 6.7.8-5 4.6 1.4 6.7L12 17.4l-6 3.4 1.4-6.7-5-4.6 6.7-.8z"/></svg>',
    crown: '<svg viewBox="0 0 24 24"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8Zm2.4 9h13.2l.9-5.7-2.7 2.4L12 8.8l-4.8 4.9-2.7-2.4.9 5.7Z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3Zm-1.2 13.4-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6Z"/></svg>',
    radar: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V7Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>',
    filter: '<svg viewBox="0 0 24 24"><path d="M3 5h18v2l-7 7v6l-4-2v-4L3 7V5Z"/></svg>',
    msg: '<svg viewBox="0 0 24 24"><path d="M12 4a8 8 0 0 0-6.9 12l-1 3.5a.6.6 0 0 0 .8.7l3.6-1.1A8 8 0 1 0 12 4Z"/></svg>',
    undo: '<svg viewBox="0 0 24 24"><path d="M8 7h6a5 5 0 0 1 0 10H9v-2h5a3 3 0 0 0 0-6H8v3L3 8l5-4v3Z"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M12 5c5 0 9 3.5 10.5 7C21 15.5 17 19 12 19S3 15.5 1.5 12C3 8.5 7 5 12 5Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M12 2a6 6 0 0 1 6 6v4l2 3v2H4v-2l2-3V8a6 6 0 0 1 6-6Zm-2 17h4a2 2 0 0 1-4 0Z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1 8v7h2v-7h-2Zm0-3v2h2V7h-2Z"/></svg>',
    ruler: '<svg viewBox="0 0 24 24"><path d="M3 7h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm1 2v6h16V9h-2v3h-2V9h-2v3h-2V9H10v3H8V9H6v3H4V9Z"/></svg>',
    brief: '<svg viewBox="0 0 24 24"><path d="M9 4h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm0 3h6V6H9v1Z"/></svg>',
    gridLg: '<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z"/></svg>',
    gridSm: '<svg viewBox="0 0 24 24"><path d="M3 3h5v5H3V3Zm6.5 0h5v5h-5V3ZM16 3h5v5h-5V3ZM3 9.5h5v5H3v-5Zm6.5 0h5v5h-5v-5Zm6.5 0h5v5h-5v-5ZM3 16h5v5H3v-5Zm6.5 0h5v5h-5v-5Zm6.5 0h5v5h-5v-5Z"/></svg>',
  };

  /* ───────────── Card density (comfortable | compact) ─────────────
     Remembered per browser. Phones default to compact when nothing is saved. */
  const DENSITY_KEY = "sullivans-meet:density";
  function loadDensity() {
    try {
      const v = localStorage.getItem(DENSITY_KEY);
      if (v === "compact" || v === "comfortable") return v;
    } catch (e) { /* storage unavailable */ }
    return window.innerWidth <= 600 ? "compact" : "comfortable";
  }
  function saveDensity(v) {
    try { localStorage.setItem(DENSITY_KEY, v); } catch (e) { /* ignore */ }
  }

  /* ───────────── State ───────────── */
  const state = {
    liked: new Set(),
    passed: new Set(),
    matches: new Set(SULLIVANS.filter((s) => s.seedMatch).map((s) => s.id)),
    newMatches: new Set(),
    matchedAt: {},
    convos: {},
    filters: { sort: "recommended", distance: 99, intention: "all", likedYou: false },
    activeConvo: null,
    threadOpen: false,
    convoSearch: "",
    settings: {
      lookingFor: "Men",
      middleName: false,
      ageMin: 24,
      ageMax: 45,
      notifNew: true,
      notifLiked: true,
      notifWeekly: true,
      notifNonSullivan: false,
      showDistance: true,
      incognito: false,
    },
    modalOpen: false,
    replyTimers: [],
    // Sullivan Reserve membership. Reserve Sullivans stay blurred until active.
    reserve: { active: false, plan: null, billing: "annual", since: null },
    pendingScroll: null,
    density: loadDensity(),
  };
  const gridClass = () => `grid${state.density === "compact" ? " grid--compact" : ""}`;

  SEED_CONVERSATIONS.forEach((c) => {
    state.convos[c.sullivanId] = {
      id: c.sullivanId,
      messages: c.messages.map((m) => ({ ...m })),
      unread: c.unread,
      replies: c.replies.slice(),
      replyIdx: 0,
      typing: false,
      order: SEED_CONVERSATIONS.indexOf(c),
    };
  });
  state.matchedAt[4] = "Matched Tuesday";
  state.matchedAt[3] = "Matched Monday";
  state.matchedAt[5] = "Matched Sunday";

  /* ───────────── Utilities ───────────── */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = (id) => SULLIVANS.find((s) => s.id === Number(id));
  const first = (s) => s.name.split(" ")[0];
  const surname = (s) => s.name.split(" ").slice(1).join(" ");
  const nowTime = () => new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const todayLabel = () => new Date().toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  const activeRank = (s) => {
    const t = s.lastActive.toLowerCase();
    if (t.includes("now")) return 0;
    const m = t.match(/(\d+)\s*(m|h)/);
    if (m) return m[2] === "m" ? Number(m[1]) : Number(m[1]) * 60;
    return 24 * 60;
  };
  const intentKeys = (s) => {
    const t = s.intention.toLowerCase();
    const k = [];
    if (t.includes("long") || t.includes("serious") || t.includes("marriage")) k.push("long");
    if (t.includes("short") || t.includes("figuring") || t.includes("no rush")) k.push("open");
    if (t.includes("marriage")) k.push("marriage");
    return k;
  };
  const isMatched = (id) => state.matches.has(Number(id));
  const isLiked = (id) => state.liked.has(Number(id));
  const isPassed = (id) => state.passed.has(Number(id));
  const pendingLikes = () => SULLIVANS.filter((s) => s.likedYou && !isLiked(s.id) && !isPassed(s.id) && !isMatched(s.id));

  /* Reserve helpers. A Reserve Sullivan you've already matched with stays unlocked even if you cancel. */
  const isPremium = (s) => !!s.premium;
  const isLocked = (s) => isPremium(s) && !state.reserve.active && !isMatched(s.id);
  const premiumSullivans = () => SULLIVANS.filter(isPremium);
  const lockedSullivans = () => SULLIVANS.filter(isLocked);
  const planById = (id) => RESERVE_PLANS.find((p) => p.id === id);
  const planPrice = (p, billing = state.reserve.billing) => (billing === "annual" ? Math.round(p.annual / 12) : p.monthly);
  const money = (n) => `$${Number(n).toLocaleString()}`;
  // Redacted text keeps word shapes but scrambles the letters, so nothing leaks through the blur or the DOM.
  const scramble = (text) =>
    String(text).replace(/[A-Za-z]/g, (ch, i) => {
      const pool = /[A-Z]/.test(ch) ? "KDRWBSHMTLGNP" : "aeoumnrstlhkd";
      return pool[(ch.charCodeAt(0) + i * 7) % pool.length];
    });
  const redacted = (text) => `<span class="redacted" aria-label="Withheld">${esc(scramble(text))}</span>`;
  const reserveBadge = (label = "Reserve") => `<span class="pill pill--reserve">${I.crown} ${label}</span>`;

  const compatRing = (pct, size = 26) =>
    `<span class="compat-ring" style="width:${size}px;height:${size}px;background:conic-gradient(var(--accent) ${pct}%, var(--line) 0)">${I.spark}</span>`;

  const verifiedBadge = (label = "Verified Sullivan") => `<span class="verified" title="Name verified by the Bureau of Sullivan Affairs">${I.check}<span>${label}</span></span>`;

  /* ───────────── Routing ───────────── */
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [view, param] = hash.split("/");
    return { view: view || "discover", param };
  }
  function go(path) {
    const target = `#/${path}`;
    if (location.hash === target) render();
    else location.hash = target;
  }
  window.addEventListener("hashchange", render);

  /* ───────────── Toasts ───────────── */
  function toast(text, opts = {}) {
    const root = $("#toast-root");
    while (root.children.length >= 2) root.firstElementChild.remove();
    const el = document.createElement("div");
    el.className = `toast${opts.type ? ` toast--${opts.type}` : ""}`;
    const icon = opts.type === "like" ? I.heart : opts.type === "match" ? I.spark : opts.type === "green" ? I.check : I.info;
    el.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${text}</span>${opts.action ? `<button class="toast-action">${esc(opts.action.label)}</button>` : ""}`;
    if (opts.action) {
      $(".toast-action", el).addEventListener("click", () => {
        opts.action.fn();
        dismiss();
      });
    }
    root.appendChild(el);
    let gone = false;
    const dismiss = () => {
      if (gone) return;
      gone = true;
      el.classList.add("is-leaving");
      setTimeout(() => el.remove(), 300);
    };
    setTimeout(dismiss, opts.duration || 3800);
    return dismiss;
  }

  /* ───────────── Modals ───────────── */
  function openModal(html, opts = {}) {
    closeModal(true);
    const root = $("#overlay-root");
    root.innerHTML = `<div class="overlay" role="dialog" aria-modal="true"><div class="modal ${opts.modalClass || ""}">${html}</div></div>`;
    document.body.classList.add("no-scroll");
    state.modalOpen = true;
    const overlay = $(".overlay", root);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  function closeModal(immediate = false) {
    const root = $("#overlay-root");
    const overlay = $(".overlay", root);
    state.modalOpen = false;
    document.body.classList.remove("no-scroll");
    if (!overlay) return;
    if (immediate) return (root.innerHTML = "");
    overlay.classList.add("is-closing");
    setTimeout(() => {
      if (overlay.parentNode) overlay.remove();
    }, 200);
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.modalOpen) closeModal();
  });

  function dialog({ eyebrow, title, body, actions }) {
    openModal(
      `<div class="dialog">
        ${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ""}
        <h2 class="h2">${title}</h2>
        <p class="lede">${body}</p>
        <div class="dialog-actions">${actions
          .map((a, i) => `<button class="btn ${a.cls || "btn-ghost"}" data-action="dialog-act" data-idx="${i}">${esc(a.label)}</button>`)
          .join("")}</div>
      </div>`
    );
    $$("[data-action='dialog-act']").forEach((b) =>
      b.addEventListener("click", () => {
        const a = actions[Number(b.dataset.idx)];
        closeModal();
        if (a.fn) a.fn();
      })
    );
  }

  /* ───────────── Match logic ───────────── */
  function ensureConvo(id, opener) {
    if (state.convos[id]) return state.convos[id];
    const s = byId(id);
    state.convos[id] = {
      id,
      messages: [{ from: "s", text: opener, time: nowTime() }],
      unread: 1,
      replies: (PERSONA_REPLIES[id] || GENERIC_REPLIES).slice(),
      replyIdx: 0,
      typing: false,
      order: -Date.now(),
    };
    void s;
    return state.convos[id];
  }

  function makeMatch(id, { silent = false } = {}) {
    id = Number(id);
    if (isMatched(id)) return;
    const s = byId(id);
    const copy = MATCH_COPY[id] || DEFAULT_MATCH_COPY;
    state.matches.add(id);
    state.newMatches.add(id);
    state.matchedAt[id] = "Matched just now";
    ensureConvo(id, copy.opener);
    updateBadges();
    if (silent) return;
    showMatchModal(s, copy);
  }

  function showMatchModal(s, copy) {
    const colors = ["var(--accent)", "var(--gold)", "var(--green)", "#e9a58f", "#d9b25d"];
    const confetti = Array.from({ length: 28 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 0.6;
      const dur = 1.8 + Math.random() * 1.2;
      const c = colors[i % colors.length];
      return `<i style="left:${left}%;background:${c};animation-delay:${delay}s;animation-duration:${dur}s;transform:rotate(${Math.random() * 90}deg)"></i>`;
    }).join("");
    openModal(
      `<div class="match-modal">
        <div class="confetti">${confetti}</div>
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="Close">${I.x}</button>
        <span class="match-badge">${I.check} Sullivan Verified Match</span>
        <div class="match-pair">
          <span class="hope-avatar">H</span>
          <span class="avatar-lg"><img src="${s.img}" alt="${esc(s.name)}"></span>
        </div>
        <h2 class="display">${esc(copy.title)}</h2>
        <p class="lede">${esc(copy.sub)}</p>
        <div class="match-opener">
          <span class="convo-avatar"><img src="${s.img}" alt=""></span>
          <div><small>${esc(s.name)} · just now</small><p>${esc(copy.opener)}</p></div>
        </div>
        <div class="match-actions">
          <button class="btn btn-ghost btn-lg" data-action="close-modal">Keep browsing</button>
          <button class="btn btn-primary btn-lg" data-action="open-convo" data-id="${s.id}">${I.msg} Reply to Sullivan</button>
        </div>
      </div>`
    );
  }

  // Take the user to the Reserve plans. If we're already on the page, scroll; otherwise navigate and scroll after render.
  function scrollToPlans(smooth = true) {
    const plans = $("#plans");
    if (plans) plans.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }
  function goPlans() {
    if (state.modalOpen) closeModal();
    if (route().view === "premium") return scrollToPlans();
    state.pendingScroll = "#plans";
    go("premium");
  }

  function paywall(s) {
    toast(`<b>${esc(first(s))} ${"●".repeat(Math.min(surname(s).length, 8))}</b> is a Reserve Sullivan. Lift the rope to see the rest of his name.`, {
      type: "match",
      action: { label: "See plans", fn: goPlans },
    });
  }

  function like(id, { fromCard } = {}) {
    id = Number(id);
    if (isLiked(id)) return;
    const s = byId(id);
    if (isLocked(s)) return paywall(s);
    state.liked.add(id);
    state.passed.delete(id);
    const after = () => {
      if (s.likedYou) {
        makeMatch(id);
        if (route().view === "discover") renderDiscoverGrid();
        else if (route().view === "profile") render();
      } else {
        toast(`You liked <b>${esc(s.name)}</b>. He's been notified. He's probably rereading your profile right now.`, { type: "like" });
        if (route().view === "discover") renderDiscoverGrid();
        else render();
        scheduleLikeBack(id);
      }
      updateBadges();
    };
    if (fromCard) animateCardOut(id, "right", after);
    else after();
  }

  function scheduleLikeBack(id) {
    const s = byId(id);
    // Odd-numbered Sullivans are quick to like back. It's a personality thing. `likesBack: true` opts an even one in.
    if (id % 2 === 0 && !s.likesBack) return;
    const t = setTimeout(() => {
      if (!isLiked(id) || isMatched(id)) return;
      if (state.modalOpen) {
        makeMatch(id, { silent: true });
        toast(`<b>${esc(s.name)}</b> liked you back. It's a Sullivan.`, {
          type: "match",
          action: { label: "View", fn: () => go("matches") },
        });
      } else {
        makeMatch(id);
        if (route().view === "matches" || route().view === "discover") render();
      }
    }, 6500 + Math.random() * 3000);
    state.replyTimers.push(t);
  }

  function pass(id, { fromCard } = {}) {
    id = Number(id);
    if (isPassed(id)) return;
    const s = byId(id);
    if (isLocked(s)) return paywall(s);
    state.passed.add(id);
    state.liked.delete(id);
    const after = () => {
      toast(`Passed on <b>${esc(s.name)}</b>. He remains a Sullivan, just not yours.`, {
        action: {
          label: "Undo",
          fn: () => {
            state.passed.delete(id);
            render();
          },
        },
      });
      if (route().view === "discover") renderDiscoverGrid();
      else render();
      updateBadges();
    };
    if (fromCard) animateCardOut(id, "left", after);
    else after();
  }

  function animateCardOut(id, dir, cb) {
    const card = $(`.pcard[data-id="${id}"]`);
    if (!card) return cb();
    card.classList.add(dir === "right" ? "is-leaving-right" : "is-leaving-left");
    setTimeout(cb, 320);
  }

  /* ───────────── Badges & nav ───────────── */
  function updateBadges() {
    const m = state.newMatches.size + pendingLikes().length;
    const u = Object.values(state.convos).reduce((n, c) => n + c.unread, 0);
    ["#badge-matches", "#badge-matches-tab"].forEach((sel) => {
      const el = $(sel);
      el.hidden = m === 0;
      el.textContent = m;
    });
    ["#badge-messages", "#badge-messages-tab"].forEach((sel) => {
      const el = $(sel);
      el.hidden = u === 0;
      el.textContent = u;
    });
  }

  function setActiveNav(view) {
    const key = view === "profile" ? "discover" : view;
    $$(".nav-link, .tab-link").forEach((b) => b.classList.toggle("is-active", b.dataset.nav === key));
  }

  /* ───────────── Discover ───────────── */
  function visibleSullivans() {
    const f = state.filters;
    let list = SULLIVANS.filter((s) => !isLiked(s.id) && !isPassed(s.id) && !state.newMatches.has(s.id));
    if (f.distance < 99) list = list.filter((s) => s.distance <= f.distance); // 99 means "Anywhere", Cork included
    if (f.intention !== "all") list = list.filter((s) => intentKeys(s).includes(f.intention));
    if (f.likedYou) list = list.filter((s) => s.likedYou);
    const sorters = {
      recommended: (a, b) => b.compat - a.compat,
      nearest: (a, b) => a.distance - b.distance,
      active: (a, b) => activeRank(a) - activeRank(b),
      youngest: (a, b) => a.age - b.age,
      oldest: (a, b) => b.age - a.age,
    };
    return list.sort(sorters[f.sort] || sorters.recommended);
  }

  function lockedCardHTML(s) {
    return `
      <article class="pcard pcard--locked" data-id="${s.id}">
        <span class="ribbon ribbon--reserve">${I.crown} Reserve Sullivan</span>
        <div class="pcard-media" data-action="open-profile" data-id="${s.id}" role="button" tabindex="0" aria-label="Preview this Reserve Sullivan">
          <img class="is-blurred" src="${s.img}" alt="A Reserve Sullivan, blurred" loading="lazy">
          <div class="pcard-top">
            <span>${s.likedYou ? `<span class="pill pill--gold">${I.heart} Liked you</span>` : ""}</span>
            <span class="pcard-top-right">
              <span class="compat">${compatRing(s.compat)} ${s.compat}%<span class="compat-word"> match</span></span>
              <span class="pill pill--glass pill--dot" style="color:${activeRank(s) === 0 ? "#2f7a58" : "var(--ink-2)"}">${esc(s.lastActive)}</span>
            </span>
          </div>
          <div class="lock-overlay">
            <span class="lock-glyph">${I.lock}</span>
            <span class="lock-title">Members only</span>
            <span class="lock-sub">Surname withheld</span>
          </div>
          <div class="pcard-caption">
            <h3 class="pcard-name">Sullivan ${redacted(surname(s))} <span>${s.age}</span></h3>
            <div class="pcard-meta"><span>${esc(s.occupation)}</span><span class="dot">·</span><span>${esc(s.city)}</span><span class="dot">·</span><span>${s.distance.toLocaleString()} mi</span></div>
          </div>
        </div>
        <div class="pcard-body">
          <p class="pcard-bio pcard-bio--locked">${esc(s.teaser)}</p>
          <div class="pcard-tags">${s.tags.map((t) => `<span class="pill">${I.lock} ${redacted(t)}</span>`).join("")}</div>
          <div class="pcard-footer">
            <button class="btn-text" data-action="open-profile" data-id="${s.id}">Preview ${I.chevR}</button>
            <div class="pcard-actions">
              <button class="btn btn-gold" data-action="go-plans">${I.crown} Unlock Sullivan</button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function cardHTML(s, isTop) {
    if (isLocked(s)) return lockedCardHTML(s);
    const matched = isMatched(s.id);
    let topLeft = isTop ? "" : matched ? `<span class="pill pill--green">${I.check} Matched</span>` : s.likedYou ? `<span class="pill pill--gold">${I.heart} Liked you</span>` : "";
    if (isPremium(s)) topLeft = `<span class="pill-stack">${reserveBadge()}${topLeft}</span>`;
    return `
      <article class="pcard ${isTop ? "pcard--top" : ""} ${isPremium(s) ? "pcard--reserve" : ""}" data-id="${s.id}">
        ${isTop ? `<span class="ribbon">Top Sullivan pick</span>` : ""}
        <div class="pcard-media" data-action="open-profile" data-id="${s.id}" role="button" tabindex="0" aria-label="Open ${esc(s.name)}'s profile">
          <img src="${s.img}" alt="${esc(s.name)}" loading="lazy">
          <div class="pcard-top">
            <span>${topLeft}</span>
            <span class="pcard-top-right">
              <span class="compat">${compatRing(s.compat)} ${s.compat}%<span class="compat-word"> match</span></span>
              <span class="pill pill--glass pill--dot" style="color:${activeRank(s) === 0 ? "#2f7a58" : "var(--ink-2)"}">${esc(s.lastActive)}</span>
            </span>
          </div>
          <div class="pcard-caption">
            <h3 class="pcard-name">${esc(first(s))} ${esc(surname(s))} <span>${s.age}</span> ${verifiedBadge("")}</h3>
            <div class="pcard-meta"><span>${esc(s.occupation)}</span><span class="dot">·</span><span>${esc(s.city)}</span><span class="dot">·</span><span>${s.distance.toLocaleString()} mi</span></div>
          </div>
        </div>
        <div class="pcard-body">
          <p class="pcard-bio">${esc(s.bio)}</p>
          <div class="pcard-tags">${s.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>
          <div class="pcard-footer">
            <button class="btn-text" data-action="open-profile" data-id="${s.id}">View profile ${I.chevR}</button>
            <div class="pcard-actions">
              ${matched
                ? `<button class="btn btn-green" data-action="open-convo" data-id="${s.id}">${I.msg} Message</button>`
                : `<button class="action-btn action-btn--pass" data-action="pass" data-id="${s.id}" aria-label="Pass on ${esc(s.name)}">${I.x}</button>
              <button class="action-btn action-btn--like" data-action="like" data-id="${s.id}" aria-label="Like ${esc(s.name)}">${I.heart}</button>`}
            </div>
          </div>
        </div>
      </article>`;
  }

  function gridHTML() {
    const list = visibleSullivans();
    const f = state.filters;
    const reviewed = state.liked.size + state.passed.size + state.matches.size;
    if (!list.length) {
      const filtered = f.distance < 99 || f.intention !== "all" || f.likedYou;
      if (filtered && reviewed < SULLIVANS.length) {
        return `<div class="empty">
          <span class="empty-glyph">${I.radar}</span>
          <h3 class="h2">No Sullivans match these filters</h3>
          <p class="lede">Everyone in our database is named Sullivan, so the issue is elsewhere. Try widening your distance or intentions.</p>
          <button class="btn btn-dark" data-action="clear-filters">Clear filters</button>
        </div>`;
      }
      return `<div class="empty">
        <span class="empty-glyph">${I.radar}</span>
        <h3 class="h2">You've reviewed every Sullivan in range</h3>
        <p class="lede">Our sourcing team is verifying more Sullivans as we speak. In the meantime, you have ${state.matches.size} match${state.matches.size === 1 ? "" : "es"} who would love to hear from you.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:8px">
          ${state.passed.size ? `<button class="btn btn-ghost" data-action="restore-passed">${I.undo} Reconsider passed Sullivans</button>` : ""}
          <button class="btn btn-primary" data-action="nav" data-nav="messages">${I.msg} Go to messages</button>
        </div>
      </div>`;
    }
    const topPick = f.sort === "recommended" ? list.find((s) => !isLocked(s)) : null;
    const topId = topPick ? topPick.id : null;
    return `<div class="${gridClass()}">${list.map((s) => cardHTML(s, s.id === topId)).join("")}</div>`;
  }

  function renderDiscoverGrid() {
    const host = $("#deck");
    if (!host) return;
    host.innerHTML = gridHTML();
    const n = visibleSullivans().length;
    const count = $("#deck-count");
    if (count) count.innerHTML = `<b>${n}</b> ${n === 1 ? "Sullivan" : "Sullivans"} near you`;
    const stat = $("#stat-near");
    if (stat) stat.textContent = n;
  }

  function discoverHTML() {
    const f = state.filters;
    const pend = pendingLikes().length;
    const distChips = [
      [5, "5 mi"],
      [10, "10 mi"],
      [15, "15 mi"],
      [99, "Anywhere"],
    ];
    return `
      <section class="hero">
        <div class="hero-greet">
          <div>
            <div class="eyebrow">${esc(todayLabel())} · Only Sullivans shown</div>
            <h1 class="display">Welcome back, Hope.<br>Your <em>Sullivans</em> are waiting.</h1>
            <p class="lede">We reviewed 4,212 eligible men in your area and removed everyone not named Sullivan. ${["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"][SULLIVANS.length] || SULLIVANS.length} remain. ${state.reserve.active ? "All of them have been told you're here." : `${premiumSullivans().length} of them are waiting behind a velvet rope.`}</p>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary btn-lg" data-action="scroll-deck">${I.spark} Browse today's Sullivans</button>
            <button class="btn btn-ghost btn-lg" data-action="nav" data-nav="matches">${I.heart} ${pend ? `${pend} Sullivans liked you` : "See your matches"}</button>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat stat--accent">
            <span class="stat-label">Sullivans near you</span>
            <span class="stat-value"><span id="stat-near">${visibleSullivans().length}</span></span>
            <span class="stat-sub">${SULLIVANS.some((s) => s.distance > 99) ? "Mostly within 15 miles. One is in Ireland." : "Within 15 miles, all verified"}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Named Sullivan</span>
            <span class="stat-value">100<small>%</small></span>
            <span class="stat-sub">Audited nightly. Never lower.</span>
          </div>
          <div class="stat stat--gold">
            <span class="stat-label">Liked your profile</span>
            <span class="stat-value">${pend + state.matches.size}</span>
            <span class="stat-sub">${pend} awaiting your response</span>
          </div>
          <div class="stat">
            <span class="stat-label">Non-Sullivans shown</span>
            <span class="stat-value">0</span>
            <span class="stat-sub">Since launch. We're very proud.</span>
          </div>
        </div>
      </section>

      ${reserveBannerHTML()}

      <section class="section" id="discover">
        <div class="section-head">
          <h2 class="h2">Discover <span class="count-pill" id="deck-count"><b>${visibleSullivans().length}</b> Sullivans near you</span></h2>
          <span class="small muted">Ranked by the Sullivan Index™</span>
        </div>
        <div class="toolbar">
          <div class="toolbar-left">
            <div class="chip-group" role="group" aria-label="Distance">
              ${distChips.map(([v, l]) => `<button class="chip ${f.distance === v ? "is-active" : ""}" data-action="set-distance" data-value="${v}">${l}</button>`).join("")}
            </div>
            <label class="select-wrap">
              <select class="select" id="filter-intent" aria-label="Dating intentions">
                <option value="all" ${f.intention === "all" ? "selected" : ""}>All intentions</option>
                <option value="long" ${f.intention === "long" ? "selected" : ""}>Long-term</option>
                <option value="open" ${f.intention === "open" ? "selected" : ""}>Open-minded</option>
                <option value="marriage" ${f.intention === "marriage" ? "selected" : ""}>Marriage-ready</option>
              </select>${I.chevD}
            </label>
            <button class="toggle-btn ${f.likedYou ? "is-active" : ""}" data-action="toggle-liked-you">${I.heart} Liked you</button>
          </div>
          <div class="toolbar-right">
            <div class="segment density-toggle" role="group" aria-label="Card size">
              <button class="${state.density === "comfortable" ? "is-active" : ""}" data-action="set-density" data-value="comfortable" title="Larger cards" aria-label="Larger cards" aria-pressed="${state.density === "comfortable"}">${I.gridLg}</button>
              <button class="${state.density === "compact" ? "is-active" : ""}" data-action="set-density" data-value="compact" title="Smaller cards" aria-label="Smaller cards" aria-pressed="${state.density === "compact"}">${I.gridSm}</button>
            </div>
            <label class="select-wrap">
              <select class="select" id="filter-sort" aria-label="Sort">
                <option value="recommended" ${f.sort === "recommended" ? "selected" : ""}>Recommended</option>
                <option value="nearest" ${f.sort === "nearest" ? "selected" : ""}>Nearest first</option>
                <option value="active" ${f.sort === "active" ? "selected" : ""}>Recently active</option>
                <option value="youngest" ${f.sort === "youngest" ? "selected" : ""}>Youngest first</option>
                <option value="oldest" ${f.sort === "oldest" ? "selected" : ""}>Oldest first</option>
              </select>${I.chevD}
            </label>
          </div>
        </div>
        <div id="deck">${gridHTML()}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2 class="h2">How Sullivans Meet works</h2>
          <span class="small muted">Trusted by one (1) Hope</span>
        </div>
        <div class="insights">
          <div class="card insight">
            <span class="insight-icon">${I.filter}</span>
            <div><h4>Name-first matching</h4><p>Our algorithm weights first name at 100%. Everything else shares whatever's left, which is nothing, and yet it works.</p></div>
          </div>
          <div class="card insight">
            <span class="insight-icon">${I.shield}</span>
            <div><h4>Sullivan Verified</h4><p>Every profile is checked against a birth certificate, a coffee cup with his name on it, and one grandmother.</p></div>
          </div>
          <div class="card insight">
            <span class="insight-icon">${I.radar}</span>
            <div><h4>Continuous sourcing</h4><p>We monitor all 50 states for newly single Sullivans. Average alert time is 4 minutes. We are not sure how, either.</p></div>
          </div>
        </div>
      </section>`;
  }

  function reserveBannerHTML() {
    const locked = lockedSullivans();
    if (!locked.length) return "";
    const likedYou = locked.filter((s) => s.likedYou).length;
    return `
      <section class="reserve-banner" role="region" aria-label="Sullivan Reserve">
        <div class="stack-avatars" aria-hidden="true">
          ${locked.map((s, i) => `<span class="stack-avatar" style="--i:${i}"><img class="is-blurred" src="${s.img}" alt=""></span>`).join("")}
          <span class="stack-avatar stack-avatar--lock">${I.lock}</span>
        </div>
        <div class="reserve-banner-text">
          <div class="eyebrow">${I.crown} Sullivan Reserve</div>
          <h3 class="h3">${locked.length} Reserve Sullivans are behind the velvet rope.</h3>
          <p>Surnames so remarkable we charge for them. ${likedYou ? `<b>${likedYou === 1 ? "One of them has" : `${likedYou} of them have`} already liked you.</b>` : "They know you're here."}</p>
        </div>
        <div class="reserve-banner-actions">
          <button class="btn btn-gold btn-lg" data-action="go-plans">${I.crown} See Reserve plans</button>
          <span class="small">From ${money(planPrice(RESERVE_PLANS[0], "annual"))}/mo · cancel anytime</span>
        </div>
      </section>`;
  }

  function bindDiscover() {
    const sortEl = $("#filter-sort");
    const intentEl = $("#filter-intent");
    if (sortEl) sortEl.addEventListener("change", (e) => {
      state.filters.sort = e.target.value;
      renderDiscoverGrid();
    });
    if (intentEl) intentEl.addEventListener("change", (e) => {
      state.filters.intention = e.target.value;
      renderDiscoverGrid();
    });
  }

  /* ───────────── Profile ───────────── */
  function pagerHTML(s) {
    const idx = SULLIVANS.indexOf(s);
    const prev = SULLIVANS[(idx - 1 + SULLIVANS.length) % SULLIVANS.length];
    const next = SULLIVANS[(idx + 1) % SULLIVANS.length];
    return `
      <div class="back-row">
        <button class="back-btn" data-action="nav" data-nav="discover">${I.chevL} Back to Discover</button>
        <div class="pager">
          <span class="pager-label">Sullivan ${idx + 1} of ${SULLIVANS.length}</span>
          <button class="icon-btn" data-action="open-profile" data-id="${prev.id}" aria-label="Previous Sullivan">${I.chevL}</button>
          <button class="icon-btn" data-action="open-profile" data-id="${next.id}" aria-label="Next Sullivan">${I.chevR}</button>
        </div>
      </div>`;
  }

  function lockedProfileHTML(s) {
    const bars = [
      ["First name", 100, "is-gold"],
      ["Shared values", clamp(s.compat - 3, 60, 99), ""],
      ["Sense of humor", clamp(s.compat + 4, 60, 99), ""],
      ["Lifestyle", clamp(s.compat - 9, 55, 99), ""],
      ["Name pronunciation", 100, "is-green"],
    ];
    const plan = RESERVE_PLANS[0];
    return `
      ${pagerHTML(s)}
      <div class="profile profile--locked">
        <aside class="profile-media">
          <div class="profile-photo">
            <img class="is-blurred" src="${s.img}" alt="A Reserve Sullivan, blurred">
            <div class="pcard-top">
              <span>${s.likedYou ? `<span class="pill pill--gold">${I.heart} Liked you</span>` : ""}</span>
              <span class="compat">${compatRing(s.compat)} ${s.compat}%<span class="compat-word"> match</span></span>
            </div>
            <div class="lock-overlay lock-overlay--lg">
              <span class="lock-glyph">${I.lock}</span>
              <span class="lock-title">Reserve Sullivan</span>
              <span class="lock-sub">Photo and surname are for members</span>
            </div>
            <div class="profile-photo-caption">
              <span class="pill pill--glass pill--dot" style="color:${activeRank(s) === 0 ? "#2f7a58" : "var(--ink-2)"}">${esc(s.lastActive)}</span>
              <span class="pill pill--dark">${I.crown} ${esc(s.badge.split(" · ")[0])}</span>
            </div>
          </div>
          <div class="locked-cta">
            <div class="eyebrow">${I.crown} Sullivan Reserve</div>
            <h3 class="h3">Unlock ${esc(first(s))} ${redacted(surname(s))}</h3>
            <p>And two more Reserve Sullivans. From ${money(planPrice(plan, "annual"))}/mo, billed annually. Cancel anytime; you won't.</p>
            <button class="btn btn-gold btn-lg btn-block" data-action="go-plans">${I.crown} See Reserve plans</button>
          </div>
          <div class="profile-fact">
            ${I.star}
            <div><div class="eyebrow">Sullivan fact</div><p>${redacted(s.fact)}</p></div>
          </div>
        </aside>

        <div class="profile-main">
          <div>
            <div class="profile-title">
              <h1 class="h1">Sullivan ${redacted(surname(s))} <span>${s.age}</span></h1>
              ${s.likedYou ? `<span class="pill pill--gold">${I.heart} Liked your profile</span>` : reserveBadge("Reserve Sullivan")}
            </div>
            <div class="profile-sub">
              ${verifiedBadge()}
              <span class="dot">·</span>
              <span>${esc(s.city)}, ${s.distance.toLocaleString()} miles away</span>
              <span class="dot">·</span>
              <span>${esc(s.intention)}</span>
            </div>
          </div>

          <div class="meta-grid">
            <div class="meta"><div class="eyebrow">Occupation</div><div class="meta-value">${esc(s.occupation)}</div></div>
            <div class="meta"><div class="eyebrow">Height</div><div class="meta-value">${esc(s.height)}</div></div>
            <div class="meta"><div class="eyebrow">Location</div><div class="meta-value">${esc(s.city)}</div></div>
            <div class="meta"><div class="eyebrow">Surname</div><div class="meta-value">${redacted(surname(s))} <span class="verified" style="font-size:.7rem;color:var(--gold)">${I.lock}</span></div></div>
          </div>

          <div class="card compat-card">
            <div class="compat-big" style="background:conic-gradient(var(--gold) ${s.compat}%, var(--surface-2) 0)">
              <div class="compat-big-value"><b style="color:#8a6420">${s.compat}%</b><small>Sullivan Index</small></div>
            </div>
            <div class="compat-bars">
              ${bars.map(([l, v, c]) => `<div class="bar-row"><span class="bar-label">${l}</span><span class="bar"><i class="${c}" style="width:${v}%"></i></span><span class="bar-value">${v}%</span></div>`).join("")}
            </div>
            <p class="compat-note">The Sullivan Index™ is computed for every Sullivan, Reserve or not. We show it to you for free because we are confident it will make you want to pay.</p>
          </div>

          <div class="card block block--locked">
            <div class="eyebrow">About Sullivan</div>
            <p class="block-body">${redacted(s.bio)}</p>
            <div class="block-lock">${I.lock} ${esc(s.teaser)}</div>
          </div>

          <div class="prompts">
            ${s.prompts.map((p) => `<div class="prompt prompt--locked"><div class="prompt-q">${esc(p.q)}…</div><div class="prompt-a">${redacted(p.a)}</div></div>`).join("")}
          </div>

          <div class="card block">
            <div class="eyebrow">How others describe him</div>
            <div class="tags">${s.tags.map((t) => `<span class="tag">${I.lock} ${redacted(t)}</span>`).join("")}<span class="tag">Named Sullivan</span></div>
          </div>
        </div>
      </div>`;
  }

  function profileHTML(s) {
    if (isLocked(s)) return lockedProfileHTML(s);
    const liked = isLiked(s.id) || isMatched(s.id);
    const passed = isPassed(s.id);
    const matched = isMatched(s.id);
    const fullSullivan = surname(s) === "Sullivan";
    const bars = [
      ["First name", 100, "is-gold"],
      ...(fullSullivan ? [["Last name", 100, "is-gold"], ["Middle name", 100, "is-gold"]] : []),
      ["Shared values", fullSullivan ? 100 : clamp(s.compat - 3, 60, 99), ""],
      ["Sense of humor", fullSullivan ? 100 : clamp(s.compat + 4, 60, 99), ""],
      ["Lifestyle", fullSullivan ? 100 : clamp(s.compat - 9, 55, 99), ""],
      ["Name pronunciation", 100, "is-green"],
    ];
    const status = matched
      ? `<span class="pill pill--green">${I.check} You're matched</span>`
      : liked
      ? `<span class="pill pill--accent">${I.heart} You liked him</span>`
      : passed
      ? `<span class="pill">Passed</span>`
      : s.likedYou
      ? `<span class="pill pill--gold">${I.heart} Liked your profile</span>`
      : `<span class="pill">Hasn't seen you yet</span>`;

    return `
      ${pagerHTML(s)}
      <div class="profile ${isPremium(s) ? "profile--reserve" : ""}">
        <aside class="profile-media">
          <div class="profile-photo">
            <img src="${s.img}" alt="${esc(s.name)}">
            <div class="pcard-top">
              <span class="pill-stack">${isPremium(s) ? reserveBadge() : ""}${s.likedYou && !matched ? `<span class="pill pill--gold">${I.heart} Liked you</span>` : matched ? `<span class="pill pill--green">${I.check} Matched</span>` : ""}</span>
              <span class="compat">${compatRing(s.compat)} ${s.compat}%<span class="compat-word"> match</span></span>
            </div>
            <div class="profile-photo-caption">
              <span class="pill pill--glass pill--dot" style="color:${activeRank(s) === 0 ? "#2f7a58" : "var(--ink-2)"}">${esc(s.lastActive)}</span>
              <span class="pill pill--dark">${I.crown} ${esc(s.badge)}</span>
            </div>
          </div>
          <div class="profile-actions">
            <button class="action-btn action-btn--lg action-btn--pass ${passed ? "is-passed" : ""}" data-action="pass" data-id="${s.id}" aria-label="Pass">${I.x}</button>
            ${matched
              ? `<button class="btn btn-green btn-lg" data-action="open-convo" data-id="${s.id}">${I.msg} Message Sullivan</button>`
              : `<button class="action-btn action-btn--lg action-btn--like ${liked ? "is-liked" : ""}" data-action="like" data-id="${s.id}" aria-label="Like">${I.heart}</button>`}
          </div>
          <div class="profile-fact">
            ${I.star}
            <div><div class="eyebrow">Sullivan fact</div><p>${esc(s.fact)}</p></div>
          </div>
        </aside>

        <div class="profile-main">
          <div>
            <div class="profile-title">
              <h1 class="h1">${esc(s.name)} <span>${s.age}</span></h1>
              ${status}
            </div>
            <div class="profile-sub">
              ${verifiedBadge()}
              <span class="dot">·</span>
              <span>${I.pin ? "" : ""}${esc(s.city)}, ${s.distance.toLocaleString()} miles away</span>
              <span class="dot">·</span>
              <span>${esc(s.intention)}</span>
            </div>
          </div>

          <div class="meta-grid">
            <div class="meta"><div class="eyebrow">Occupation</div><div class="meta-value">${esc(s.occupation)}</div></div>
            <div class="meta"><div class="eyebrow">Height</div><div class="meta-value">${esc(s.height)}</div></div>
            <div class="meta"><div class="eyebrow">Location</div><div class="meta-value">${esc(s.city)}</div></div>
            <div class="meta"><div class="eyebrow">First name</div><div class="meta-value">Sullivan <span class="verified" style="font-size:.7rem">${I.check}</span></div></div>
          </div>

          <div class="card compat-card">
            <div class="compat-big" style="background:conic-gradient(var(--accent) ${s.compat}%, var(--surface-2) 0)">
              <div class="compat-big-value"><b>${s.compat}%</b><small>Sullivan Index</small></div>
            </div>
            <div class="compat-bars">
              ${bars.map(([l, v, c]) => `<div class="bar-row"><span class="bar-label">${l}</span><span class="bar"><i class="${c}" style="width:${v}%"></i></span><span class="bar-value">${v}%</span></div>`).join("")}
            </div>
            <p class="compat-note">The Sullivan Index™ is a proprietary compatibility model with one very heavily weighted feature. ${s.compat === 100 ? "This is the maximum possible score. The model has nothing left to measure and has been sent home." : s.compat >= 95 ? "This is the highest score on record for a Sullivan whose last name isn't also Sullivan." : "Scores above 80% are considered exceptional. Scores below 80% do not exist."}</p>
          </div>

          <div class="card block">
            <div class="eyebrow">About ${esc(first(s))}</div>
            <p class="block-body">${esc(s.bio)}</p>
          </div>

          <div class="prompts">
            ${s.prompts.map((p) => `<div class="prompt"><div class="prompt-q">${esc(p.q)}…</div><div class="prompt-a">${esc(p.a)}</div></div>`).join("")}
          </div>

          <div class="card block">
            <div class="eyebrow">Interests</div>
            <div class="interests">${s.interests.map((i) => `<span class="interest">${esc(i)}</span>`).join("")}</div>
          </div>

          <div class="card block">
            <div class="eyebrow">How others describe him</div>
            <div class="tags">${s.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}<span class="tag">Named Sullivan</span></div>
          </div>
        </div>
      </div>`;
  }

  /* ───────────── Matches ───────────── */
  function matchesHTML() {
    const matched = SULLIVANS.filter((s) => isMatched(s.id)).sort((a, b) => (state.newMatches.has(b.id) ? 1 : 0) - (state.newMatches.has(a.id) ? 1 : 0));
    const pending = pendingLikes();
    const sent = SULLIVANS.filter((s) => isLiked(s.id) && !isMatched(s.id));

    const statusPills = (s) => {
      const pills = [`<span class="pill pill--accent">${s.compat}% Sullivan compatibility</span>`];
      if (state.newMatches.has(s.id)) pills.push(`<span class="pill pill--gold">${I.spark} New match</span>`);
      else if (s.id === 5) pills.push(`<span class="pill pill--green">${I.check} Recently Sullivan-certified</span>`);
      else if (s.id === 3) pills.push(`<span class="pill">Replies in under 4 min</span>`);
      else if (s.id === 4) pills.push(`<span class="pill">Sent you a poem</span>`);
      const c = state.convos[s.id];
      if (c && c.unread) pills.push(`<span class="pill pill--dark">${c.unread} unread</span>`);
      return pills.join("");
    };

    return `
      <div class="page-head">
        <div class="eyebrow">Matches</div>
        <h1 class="h1">Your <em>Sullivans</em></h1>
        <p class="lede">Everyone here has liked you back. Everyone here is named Sullivan. The system works exactly as designed.</p>
      </div>

      <section>
        <div class="section-head" style="margin-bottom:8px">
          <h2 class="h3">New connections</h2>
          <span class="small muted">${matched.length} matched · ${pending.length} pending</span>
        </div>
        <div class="avatar-row">
          <div class="avatar-item avatar-item--hope">
            <span class="avatar-lg"><span class="hope-avatar">H</span></span>
            <span class="name">You</span><span class="sub">Verified Hope</span>
          </div>
          ${matched
            .map(
              (s) => `<div class="avatar-item" data-action="open-convo" data-id="${s.id}">
                <span class="avatar-lg ${state.newMatches.has(s.id) ? "avatar-lg--new" : ""}"><img src="${s.img}" alt="${esc(s.name)}"></span>
                <span class="name">${esc(surname(s))}</span><span class="sub">${s.compat}% · ${esc(s.city.split(",")[0])}</span>
              </div>`
            )
            .join("")}
          ${pending
            .map((s) =>
              isLocked(s)
                ? `<div class="avatar-item" data-action="open-profile" data-id="${s.id}">
                <span class="avatar-lg avatar-lg--locked" style="box-shadow:0 0 0 2px var(--gold), var(--shadow-sm)"><img class="is-blurred" src="${s.img}" alt="A Reserve Sullivan"><span class="avatar-lock">${I.lock}</span></span>
                <span class="name">Reserve</span><span class="sub">Liked you</span>
              </div>`
                : `<div class="avatar-item" data-action="open-profile" data-id="${s.id}" style="opacity:.75">
                <span class="avatar-lg" style="box-shadow:0 0 0 2px var(--gold), var(--shadow-sm)"><img src="${s.img}" alt="${esc(s.name)}"></span>
                <span class="name">${esc(surname(s))}</span><span class="sub">Liked you</span>
              </div>`
            )
            .join("")}
        </div>
      </section>

      ${pending.length
        ? `<section class="section">
          <div class="section-head">
            <h2 class="h2">Sullivans who liked you <span class="count-pill"><b>${pending.length}</b> waiting</span></h2>
            <span class="small muted">Like back to match instantly</span>
          </div>
          <div class="liked-you">
            ${pending
              .map((s) =>
                isLocked(s)
                  ? `<div class="card lcard lcard--locked">
                  <div class="mcard-photo mcard-photo--locked" data-action="open-profile" data-id="${s.id}"><img class="is-blurred" src="${s.img}" alt="A Reserve Sullivan"><span class="avatar-lock">${I.lock}</span></div>
                  <div class="mcard-body">
                    <div class="mcard-name">Sullivan ${redacted(surname(s))} <span>${s.age}</span> ${reserveBadge()}</div>
                    <div class="mcard-sub">${esc(s.occupation)} · ${esc(s.city)}</div>
                    <div class="mcard-status">
                      <span class="pill pill--gold">${I.heart} A Reserve Sullivan liked your profile</span>
                      <span class="pill pill--accent">${s.compat}% Sullivan compatibility</span>
                    </div>
                    <div class="lcard-actions">
                      <button class="btn btn-gold btn-sm" data-action="go-plans">${I.crown} Unlock to see who</button>
                      <button class="btn btn-ghost btn-sm" data-action="open-profile" data-id="${s.id}">Preview</button>
                    </div>
                  </div>
                </div>`
                  : `<div class="card lcard">
                  <div class="mcard-photo" data-action="open-profile" data-id="${s.id}"><img src="${s.img}" alt="${esc(s.name)}"></div>
                  <div class="mcard-body">
                    <div class="mcard-name">${esc(s.name)} <span>${s.age}</span></div>
                    <div class="mcard-sub">${esc(s.occupation)} · ${esc(s.city)}</div>
                    <div class="mcard-status">
                      <span class="pill pill--gold">${I.heart} Sullivan liked your profile</span>
                      <span class="pill pill--accent">${s.compat}% Sullivan compatibility</span>
                    </div>
                    <div class="lcard-actions">
                      <button class="btn btn-primary btn-sm" data-action="like" data-id="${s.id}">${I.heart} Like back</button>
                      <button class="btn btn-ghost btn-sm" data-action="open-profile" data-id="${s.id}">View profile</button>
                      <button class="btn-text" data-action="pass" data-id="${s.id}" style="color:var(--muted)">Pass</button>
                    </div>
                  </div>
                </div>`
              )
              .join("")}
          </div>
        </section>`
        : ""}

      <section class="section">
        <div class="section-head">
          <h2 class="h2">Your matches <span class="count-pill"><b>${matched.length}</b> Sullivans</span></h2>
          <span class="small muted">Sorted by Sullivan-ness (tie)</span>
        </div>
        ${matched.length
          ? `<div class="match-list">
            ${matched
              .map(
                (s) => `<div class="card mcard">
                  <div class="mcard-photo" data-action="open-profile" data-id="${s.id}"><img src="${s.img}" alt="${esc(s.name)}"></div>
                  <div class="mcard-body">
                    <div class="mcard-name">${esc(s.name)} <span>${s.age}</span> ${verifiedBadge("")}</div>
                    <div class="mcard-sub">${esc(state.matchedAt[s.id] || "Matched recently")} · ${esc(s.occupation)}</div>
                    <div class="mcard-status">${statusPills(s)}</div>
                    <div class="mcard-actions">
                      <button class="btn btn-dark btn-sm" data-action="open-convo" data-id="${s.id}">${I.msg} Message</button>
                      <button class="btn btn-ghost btn-sm" data-action="open-profile" data-id="${s.id}">Profile</button>
                    </div>
                  </div>
                </div>`
              )
              .join("")}
          </div>`
          : `<div class="empty"><span class="empty-glyph">${I.heart}</span><h3 class="h2">No matches yet</h3><p class="lede">Which is odd, given the odds.</p><button class="btn btn-primary" data-action="nav" data-nav="discover">Browse Sullivans</button></div>`}
      </section>

      ${sent.length
        ? `<section class="section">
          <div class="section-head">
            <h2 class="h2">Likes you've sent <span class="count-pill"><b>${sent.length}</b></span></h2>
            <span class="small muted">Average Sullivan response time: 6 minutes</span>
          </div>
          <div class="card" style="padding:6px 20px">
            <div class="timeline">
              ${sent
                .map(
                  (s) => `<div class="tl-item">
                    <span class="tl-avatar"><img src="${s.img}" alt=""></span>
                    <span class="tl-text">You liked <b>${esc(s.name)}</b>. He's been notified and is, in all likelihood, composing something.</span>
                    <button class="btn btn-ghost btn-sm" data-action="open-profile" data-id="${s.id}">View</button>
                  </div>`
                )
                .join("")}
            </div>
          </div>
        </section>`
        : ""}

      <section class="section">
        <div class="section-head">
          <h2 class="h2">Recent activity</h2>
        </div>
        <div class="card" style="padding:6px 20px">
          <div class="timeline">
            ${[
              isLocked(byId(8))
                ? [8, `<b>A Reserve Sullivan</b> liked your profile. His surname has been withheld pending your membership. It's a lot of surname.`, "2m ago", true]
                : [8, `<b>Sullivan KnobSlauch</b> liked your profile. He would like you to know he is “so, so excited.” His words. His grandmother's too.`, "2m ago"],
              [11, `<b>Sullivan Sullivan</b> was verified in your area. He verified himself. The sourcing team is still deciding how to feel about that.`, "Just now"],
              [6, `<b>Sullivan Grimsby</b> liked your profile. Our systems flagged the compatibility score for manual review. It held.`, "5m ago"],
              [10, `<b>Sullivan Pfefferknuckle</b> liked your profile, then spent forty minutes on a wood-splitting break. He's back. He's pleased.`, "40m ago"],
              [12, `<b>Sullivan Vandersmooth</b> liked your profile and 3,999 others. He would like to connect. He has a guy.`, "1h ago"],
              [13, `<b>Sullivan Yeehawthorne</b> was verified in your area. Verification took a while. He was on a horse.`, "2h ago"],
              [14, `<b>Sullivan O'Sullivan</b> was verified in Cork, Ireland. The Bureau's first international case. Both spellings held.`, "3h ago"],
              [null, `Your Sullivan Index was recalculated overnight. Still <b>100% Sullivan</b>. No action needed.`, "1h ago"],
              [4, `<b>Sullivan Marchetti</b> sent you a poem. It has stanzas.`, "Tue"],
              [2, `<b>Sullivan Draeger</b> liked your profile. He did not smile while doing so, but he did do it.`, "Tue"],
              [3, `<b>Sullivan St. Croix</b> viewed your profile four times. We're told this is normal for actors.`, "Mon"],
              [null, `<b>1 new Sullivan</b> verified in your area. Sourcing team celebrated quietly.`, "Sun"],
            ]
              .map(
                ([id, text, time, locked]) => `<div class="tl-item">
                  ${id ? `<span class="tl-avatar ${locked ? "tl-avatar--locked" : ""}"><img class="${locked ? "is-blurred" : ""}" src="${byId(id).img}" alt="">${locked ? `<span class="avatar-lock">${I.lock}</span>` : ""}</span>` : `<span class="tl-avatar tl-avatar--sys">${I.bolt}</span>`}
                  <span class="tl-text">${text}</span>
                  <span class="tl-time">${time}</span>
                </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
  }

  /* ───────────── Messages ───────────── */
  function convoList() {
    return Object.values(state.convos)
      .filter((c) => {
        if (!state.convoSearch) return true;
        return byId(c.id).name.toLowerCase().includes(state.convoSearch.toLowerCase());
      })
      .sort((a, b) => a.order - b.order);
  }

  function messagesHTML() {
    const list = convoList();
    const all = Object.values(state.convos);
    if (state.activeConvo === null || !state.convos[state.activeConvo]) {
      state.activeConvo = all.length ? all.sort((a, b) => a.order - b.order)[0].id : null;
    }
    const unread = all.reduce((n, c) => n + c.unread, 0);
    return `
      <div class="card messages ${state.threadOpen ? "is-thread-open" : ""}" id="messages">
        <aside class="convo-list">
          <div class="convo-list-head">
            <h1 class="h2">Messages ${unread ? `<span class="count-pill"><b>${unread}</b> unread</span>` : ""}</h1>
            <label class="search">${I.search}<input type="search" id="convo-search" placeholder="Search Sullivans (they're all here)" value="${esc(state.convoSearch)}"></label>
          </div>
          <div class="convo-items" id="convo-items">${convoItemsHTML(list)}</div>
        </aside>
        <section class="thread" id="thread">${threadHTML()}</section>
      </div>`;
  }

  function convoItemsHTML(list) {
    if (!list.length) return `<div class="convo-empty">No Sullivans found. Which is a first.</div>`;
    return list
      .map((c) => {
        const s = byId(c.id);
        const last = c.messages[c.messages.length - 1];
        return `<button class="convo-item ${c.id === state.activeConvo ? "is-active" : ""} ${c.unread ? "is-unread" : ""}" data-action="open-convo" data-id="${c.id}">
          <span class="convo-avatar"><img src="${s.img}" alt="">${activeRank(s) === 0 ? '<span class="online"></span>' : ""}</span>
          <span class="convo-text">
            <span class="convo-name">${esc(s.name)} ${verifiedBadge("")}</span>
            <span class="convo-preview">${last.from === "h" ? "You: " : ""}${esc(last.text)}</span>
          </span>
          <span class="convo-meta">
            <span class="convo-time">${esc(/^[A-Z][a-z]{2} /.test(last.time) ? last.time.split(" ")[0] : last.time)}</span>
            ${c.unread ? `<span class="unread-dot">${c.unread}</span>` : ""}
          </span>
        </button>`;
      })
      .join("");
  }

  function threadHTML() {
    const c = state.convos[state.activeConvo];
    if (!c) {
      return `<div class="thread-placeholder"><div><h3 class="h3">Select a Sullivan</h3><p>Every conversation here is with a man named Sullivan. Choose your Sullivan.</p></div></div>`;
    }
    const s = byId(c.id);
    const quick = QUICK_REPLIES[c.id] || QUICK_REPLIES.default;
    return `
      <div class="thread-head">
        <button class="back-btn" data-action="close-thread" aria-label="Back to conversations">${I.chevL}<span>Back</span></button>
        <span class="convo-avatar" data-action="open-profile" data-id="${s.id}"><img src="${s.img}" alt="">${activeRank(s) === 0 ? '<span class="online"></span>' : ""}</span>
        <div class="thread-head-text">
          <div class="thread-head-name">${esc(s.name)} ${verifiedBadge()} <span class="pill pill--accent">${s.compat}%</span></div>
          <div class="thread-head-sub">${esc(s.lastActive)} · ${esc(s.city)} <span class="thread-head-occ">· ${esc(s.occupation)}</span></div>
        </div>
        <button class="icon-btn" data-action="open-profile" data-id="${s.id}" aria-label="View profile">${I.eye}</button>
      </div>
      <div class="thread-body" id="thread-body">${threadBodyHTML(c)}</div>
      <div class="quick-replies">${quick.map((q) => `<button class="quick-reply" data-action="quick-reply" data-text="${esc(q)}">${esc(q)}</button>`).join("")}</div>
      <form class="composer" id="composer">
        <label class="composer-input">
          <input type="text" id="composer-input" placeholder="Message ${esc(first(s))}…" autocomplete="off" maxlength="280">
          <button class="send-btn" type="submit" aria-label="Send">${I.send}</button>
        </label>
      </form>`;
  }

  function threadBodyHTML(c) {
    const s = byId(c.id);
    const day = (c.messages[0].time || "").split(" ")[0];
    const dayLabel = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/.test(day) ? { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" }[day] : "Today";
    return `
      <span class="thread-day">${dayLabel}</span>
      <div class="thread-sys">You matched with <b>${esc(s.name)}</b> · ${s.compat}% Sullivan compatibility · Name verified</div>
      ${c.messages
        .map((m, i) => {
          const next = c.messages[i + 1];
          const showTime = !next || next.from !== m.from;
          return `<div class="msg msg--${m.from}"><span class="bubble">${esc(m.text)}</span>${showTime ? `<span class="msg-time">${esc(m.time)}</span>` : ""}</div>`;
        })
        .join("")}
      ${c.typing ? `<div class="msg msg--s"><span class="bubble typing"><i></i><i></i><i></i></span></div>` : ""}`;
  }

  function refreshThreadBody() {
    const c = state.convos[state.activeConvo];
    const body = $("#thread-body");
    if (!c || !body) return;
    body.innerHTML = threadBodyHTML(c);
    body.scrollTop = body.scrollHeight;
    const items = $("#convo-items");
    if (items) items.innerHTML = convoItemsHTML(convoList());
  }

  function sendMessage(text) {
    const c = state.convos[state.activeConvo];
    text = text.trim();
    if (!c || !text) return;
    c.messages.push({ from: "h", text, time: nowTime() });
    c.order = -Date.now();
    refreshThreadBody();
    const t1 = setTimeout(() => {
      c.typing = true;
      refreshThreadBody();
    }, 700);
    const t2 = setTimeout(() => {
      c.typing = false;
      const reply = c.replies[c.replyIdx % c.replies.length];
      c.replyIdx++;
      c.messages.push({ from: "s", text: reply, time: nowTime() });
      if (state.activeConvo !== c.id || route().view !== "messages") c.unread++;
      refreshThreadBody();
      updateBadges();
    }, 1800 + Math.random() * 1200);
    state.replyTimers.push(t1, t2);
  }

  function bindMessages() {
    const form = $("#composer");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = $("#composer-input");
        sendMessage(input.value);
        input.value = "";
        input.focus();
      });
    }
    const search = $("#convo-search");
    if (search) {
      search.addEventListener("input", (e) => {
        state.convoSearch = e.target.value;
        $("#convo-items").innerHTML = convoItemsHTML(convoList());
      });
    }
    const body = $("#thread-body");
    if (body) body.scrollTop = body.scrollHeight;
  }

  function openConvo(id) {
    id = Number(id);
    closeModal();
    if (!state.convos[id]) {
      const copy = MATCH_COPY[id] || DEFAULT_MATCH_COPY;
      ensureConvo(id, copy.opener);
    }
    state.activeConvo = id;
    state.threadOpen = true;
    state.convos[id].unread = 0;
    state.newMatches.delete(id);
    updateBadges();
    go(`messages/${id}`);
  }

  const QUICK_REPLIES = {
    4: ["Read me the long version.", "Is the mustache single too?", "What pairs with this conversation?"],
    3: ["Say something in Chekhov.", "Opening night. Obviously.", "Was that rehearsed?"],
    5: ["My walk-out song is orchestral.", "Send the demo.", "Space Jam is a strong choice."],
    7: ["Chudwick.", "Tell me about the boat.", "What does a dock taste like?"],
    8: ["Tell Grandpa hi.", "Spell it for me.", "I do like doors, actually."],
    9: ["Which hand is this?", "Describe a sunset anyway.", "Thrustworth. Okay."],
    10: ["Pancakes as a warning?", "Pepper knuckle. Explain.", "Show me the owl."],
    11: ["Sullivan.", "Do you have a nickname?", "Verify me."],
    12: ["Coffee. Obviously.", "What's the wrong answer?", "Do not put me on the podcast."],
    13: ["Thursday works.", "Tell me about the hat.", "Which cow is Hope?"],
    14: ["Go on.", "Say it in Irish.", "Tell Mam hello."],
    default: ["Hi, Sullivan.", "Tell me about the name.", "How's your Saturday, Sullivan?"],
  };

  /* ───────────── Hope's profile ───────────── */
  function hopeHTML() {
    const st = state.settings;
    const sw = (key, locked) =>
      `<button class="switch ${st[key] ? "is-on" : ""} ${locked === "on" ? "is-locked" : ""} ${locked === "off" ? "is-locked-off" : ""}" data-action="${locked ? "locked-setting" : "toggle-setting"}" data-key="${key}" role="switch" aria-checked="${st[key]}"></button>`;
    return `
      <div class="page-head">
        <div class="eyebrow">Your profile</div>
        <h1 class="h1">Hope, <em>verified</em></h1>
        <p class="lede">Your preferences are the foundation of this entire company. Handle them with care.</p>
      </div>
      <div class="hope-layout">
        <aside>
          <div class="card hope-card">
            <span class="hope-avatar hope-avatar--lg">H</span>
            <div>
              <h2 class="h2">Hope</h2>
              <div class="muted small" style="margin-top:4px">Member since ${esc(HOPE.memberSince)} · Founder's Circle</div>
            </div>
            <span class="pill ${state.reserve.active ? "pill--reserve" : "pill--gold"} plan">${I.crown} ${esc(hopePlanLabel())}</span>
            <p class="hope-quote">“I just think he should be named Sullivan.”<br><span class="small muted" style="font-style:normal;font-family:var(--font-body)">— Hope, founding statement</span></p>
            <div class="hope-stats">
              <div class="hope-stat"><b>${state.liked.size + state.matches.size}</b><span>Sullivans liked</span></div>
              <div class="hope-stat"><b>${state.matches.size}</b><span>Matches</span></div>
              <div class="hope-stat"><b>0</b><span>Non-Sullivans seen</span></div>
            </div>
          </div>
          <div class="card hope-side-note">
            <b>Your Sullivan Index is 100%.</b> This is the maximum possible score and cannot be improved. Our team has stopped trying. Congratulations.
          </div>
        </aside>

        <div class="settings">
          <div class="card settings-group">
            <div class="settings-group-head"><h3>Dating preferences</h3><span class="small">Some settings are permanent by design</span></div>
            <div class="setting">
              <div><div class="setting-label">Looking for</div><div class="setting-help">Gender preference. Sullivans only, naturally.</div></div>
              <div class="segment">${["Men", "Women", "Everyone"].map((v) => `<button class="${st.lookingFor === v ? "is-active" : ""}" data-action="set-looking" data-value="${v}">${v}</button>`).join("")}</div>
            </div>
            <div class="setting setting--locked">
              <div><div class="setting-label">Preferred name</div><div class="setting-help">The first name your matches must have.</div></div>
              <div class="setting-value">Sullivan <span class="pill pill--accent">${I.lock} Locked</span></div>
            </div>
            <div class="setting setting--locked">
              <div><div class="setting-label">Name flexibility</div><div class="setting-help">How much variation from “Sullivan” you'll accept.</div></div>
              <div class="setting-value">Absolutely none <span class="pill pill--accent">${I.lock} Locked</span></div>
            </div>
            <div class="setting">
              <div><div class="setting-label">Accept “Sully”</div><div class="setting-help">Sully is not Sullivan. This setting cannot be enabled.</div></div>
              ${sw("acceptSully", "off")}
            </div>
            <div class="setting">
              <div><div class="setting-label">Accept Sullivan as a middle name</div><div class="setting-help">Bold. Expands your pool by an estimated 0 men.</div></div>
              ${sw("middleName")}
            </div>
            <div class="setting">
              <div><div class="setting-label">Age range</div><div class="setting-help">Currently ${st.ageMin}–${st.ageMax}. ${SULLIVANS.filter((s) => s.age >= st.ageMin && s.age <= st.ageMax).length} of ${SULLIVANS.length} Sullivans qualify.</div></div>
              <div class="range-row"><input type="range" min="18" max="65" value="${st.ageMax}" id="age-range" aria-label="Maximum age"><output id="age-out">${st.ageMin}–${st.ageMax}</output></div>
            </div>
            <div class="setting">
              <div><div class="setting-label">Maximum distance</div><div class="setting-help">We'll go further for a Sullivan. So should you.</div></div>
              <div class="range-row"><input type="range" min="5" max="50" step="5" value="${state.filters.distance === 99 ? 50 : state.filters.distance}" id="dist-range" aria-label="Maximum distance"><output id="dist-out">${state.filters.distance === 99 ? "Anywhere" : state.filters.distance + " mi"}</output></div>
            </div>
          </div>

          <div class="card settings-group">
            <div class="settings-group-head"><h3>Notifications</h3></div>
            <div class="setting">
              <div><div class="setting-label">New Sullivan verified nearby</div><div class="setting-help">Average alert time: 4 minutes.</div></div>
              ${sw("notifNew")}
            </div>
            <div class="setting">
              <div><div class="setting-label">A Sullivan liked you</div><div class="setting-help">Push, email, and one handwritten card.</div></div>
              ${sw("notifLiked")}
            </div>
            <div class="setting">
              <div><div class="setting-label">Weekly Sullivan Report</div><div class="setting-help">Market trends in the regional Sullivan pool.</div></div>
              ${sw("notifWeekly")}
            </div>
            <div class="setting">
              <div><div class="setting-label">Alerts for men not named Sullivan</div><div class="setting-help">There is no setting for this. There never will be.</div></div>
              ${sw("notifNonSullivan", "off")}
            </div>
          </div>

          <div class="card settings-group">
            <div class="settings-group-head"><h3>Privacy & visibility</h3></div>
            <div class="setting">
              <div><div class="setting-label">Show my distance</div><div class="setting-help">Sullivans will see roughly how far away you are.</div></div>
              ${sw("showDistance")}
            </div>
            <div class="setting">
              <div><div class="setting-label">Incognito mode</div><div class="setting-help">Browse Sullivans without being seen by Sullivans.</div></div>
              ${sw("incognito")}
            </div>
            <div class="setting">
              <div><div class="setting-label">Identity verification</div><div class="setting-help">Confirmed via selfie, ID, and vibe check.</div></div>
              <div class="setting-value"><span class="pill pill--green">${I.check} Verified Hope</span></div>
            </div>
          </div>

          <div class="card settings-group">
            <div class="settings-group-head"><h3>Membership</h3><span class="small">${esc(hopePlanLabel())} · Founder's Circle</span></div>
            <div class="setting">
              <div><div class="setting-label">Current plan</div><div class="setting-help">Unlimited Sullivans. Priority verification. A dedicated Sullivan concierge.</div></div>
              <button class="btn btn-ghost btn-sm" data-action="manage-plan">Manage plan</button>
            </div>
            <div class="setting">
              <div><div class="setting-label">Sullivan Reserve</div><div class="setting-help">${state.reserve.active ? `${esc(planById(state.reserve.plan).name)}, billed ${state.reserve.billing === "annual" ? "annually" : "monthly"}. Member since ${esc(state.reserve.since)}.` : `${premiumSullivans().length} Reserve Sullivans are currently blurred. This is fixable.`}</div></div>
              ${state.reserve.active
                ? `<button class="btn btn-ghost btn-sm" data-action="nav" data-nav="premium">${I.crown} Manage Reserve</button>`
                : `<button class="btn btn-gold btn-sm" data-action="go-plans">${I.crown} Upgrade</button>`}
            </div>
            <div class="setting">
              <div><div class="setting-label">Export my data</div><div class="setting-help">A complete history of every Sullivan you've considered.</div></div>
              <button class="btn btn-ghost btn-sm" data-action="export-data">Request export</button>
            </div>
          </div>

          <div class="card settings-group danger-zone">
            <div class="settings-group-head"><h3 style="color:var(--accent-ink)">Danger zone</h3></div>
            <div class="setting">
              <div><div class="setting-label">Pause my account</div><div class="setting-help">The Sullivans will wait. They've been quite patient.</div></div>
              <button class="btn btn-ghost btn-sm" data-action="pause-account">Pause</button>
            </div>
            <div class="setting">
              <div><div class="setting-label">Expand search to non-Sullivans</div><div class="setting-help">Permanently disabled at the founder's request.</div></div>
              <button class="btn btn-soft btn-sm" data-action="expand-search">${I.lock} Expand</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  function bindHope() {
    const age = $("#age-range");
    if (age) age.addEventListener("input", (e) => {
      state.settings.ageMax = Number(e.target.value);
      $("#age-out").textContent = `${state.settings.ageMin}–${state.settings.ageMax}`;
    });
    if (age) age.addEventListener("change", () => {
      const cut = SULLIVANS.filter((s) => s.age > state.settings.ageMax).length;
      toast(cut ? `Age range saved. ${cut} Sullivan${cut === 1 ? "" : "s"} now fall${cut === 1 ? "s" : ""} outside it. Tragic.` : "Age range saved. All Sullivans remain eligible.", { type: "green" });
    });
    const dist = $("#dist-range");
    if (dist) {
      dist.addEventListener("input", (e) => {
        const v = Number(e.target.value);
        $("#dist-out").textContent = v >= 50 ? "Anywhere" : `${v} mi`;
      });
      dist.addEventListener("change", (e) => {
        const v = Number(e.target.value);
        state.filters.distance = v >= 50 ? 99 : v;
        toast(`Distance updated. Discover will show Sullivans ${v >= 50 ? "from anywhere" : `within ${v} miles`}.`, { type: "green" });
      });
    }
  }

  /* ───────────── Sullivan Reserve (premium) ───────────── */
  function hopePlanLabel() {
    return state.reserve.active ? `${planById(state.reserve.plan).name} · Platinum` : HOPE.plan;
  }
  function syncPlanChip() {
    const chip = $("#hope-chip-plan");
    if (chip) chip.textContent = hopePlanLabel();
  }

  function planCardHTML(p) {
    const r = state.reserve;
    const current = r.active && r.plan === p.id;
    const price = planPrice(p);
    const cta = current ? "Current plan" : r.active ? `Switch to ${p.name}` : p.cta;
    return `
      <div class="plan ${p.popular ? "plan--popular" : ""} ${current ? "plan--current" : ""}">
        ${p.popular ? `<span class="plan-flag">${I.star} Most popular</span>` : ""}
        <div class="plan-name">${esc(p.name)}</div>
        <div class="plan-tag">${esc(p.tagline)}</div>
        <div class="plan-price"><span class="plan-cur">$</span><b>${price}</b><span class="plan-per">/mo</span></div>
        <div class="plan-bill">${r.billing === "annual" ? `Billed ${money(p.annual)} yearly · save ${RESERVE.annualSavingsPct}%` : `Billed ${money(p.monthly)} monthly`}</div>
        <ul class="plan-features">${p.features.map((f) => `<li>${I.check}<span>${esc(f)}</span></li>`).join("")}</ul>
        <button class="btn ${p.popular ? "btn-gold" : "btn-dark"} btn-block btn-lg" data-action="choose-plan" data-plan="${p.id}" ${current ? "disabled" : ""}>${current ? I.check : I.crown} ${esc(cta)}</button>
      </div>`;
  }

  function plansSectionHTML() {
    const r = state.reserve;
    return `
      <section class="section" id="plans">
        <div class="section-head">
          <h2 class="h2">${r.active ? "Change your Reserve" : "Choose your Reserve"}</h2>
          <div class="billing-toggle" role="group" aria-label="Billing period">
            <button class="${r.billing === "monthly" ? "is-active" : ""}" data-action="set-billing" data-value="monthly">Monthly</button>
            <button class="${r.billing === "annual" ? "is-active" : ""}" data-action="set-billing" data-value="annual">Annual <span class="save">Save ${RESERVE.annualSavingsPct}%</span></button>
          </div>
        </div>
        <div class="plans">${RESERVE_PLANS.map(planCardHTML).join("")}</div>
        <p class="plans-note">Every plan unlocks all ${premiumSullivans().length} Reserve Sullivans. Higher tiers unlock things we made up afterward. Prices in USD; Sullivan tax waived.</p>
      </section>`;
  }

  function faqHTML() {
    return `
      <section class="section">
        <div class="section-head"><h2 class="h2">Questions members ask</h2><span class="small muted">Answered by the Bureau of Sullivan Affairs</span></div>
        <div class="faq">
          ${RESERVE_FAQ.map((f, i) => `<details class="faq-item" ${i === 0 ? "open" : ""}><summary>${esc(f.q)}${I.chevD}</summary><p>${esc(f.a)}</p></details>`).join("")}
        </div>
      </section>`;
  }

  function premiumHTML() {
    const r = state.reserve;
    const prem = premiumSullivans();
    if (r.active) return memberHTML();
    const likedYou = prem.filter((s) => s.likedYou && !isMatched(s.id)).length;
    return `
      <section class="reserve-hero">
        <div class="reserve-hero-text">
          <div class="eyebrow">${I.crown} Sullivan Reserve</div>
          <h1 class="display">Some Sullivans are <em>premium</em>.</h1>
          <p class="lede">Three verified Sullivans with surnames so extraordinary we had to put them behind a velvet rope. Not for exclusivity. For everyone's safety.</p>
          <div class="hero-actions">
            <button class="btn btn-gold btn-lg" data-action="scroll-to" data-target="#plans">${I.crown} See plans</button>
            <button class="btn btn-ghost btn-lg" data-action="scroll-to" data-target="#reserve-preview">Peek behind the rope</button>
          </div>
          <div class="reserve-trust">
            <span>${I.shield} Names triple-verified</span>
            <span>${I.lock} Cancel anytime</span>
            <span>${I.check} Still 100% Sullivan</span>
          </div>
        </div>
        <div class="reserve-hero-stack" aria-hidden="true">
          ${prem.map((s, i) => `<div class="stack-card" style="--i:${i}"><img class="is-blurred" src="${s.img}" alt=""><span class="stack-lock">${I.lock}</span><span class="stack-label"><b>${s.compat}%</b> · ${esc(s.occupation)}</span></div>`).join("")}
        </div>
      </section>

      <section class="reserve-stats">
        <div class="stat stat--gold"><span class="stat-label">Reserve Sullivans</span><span class="stat-value">${prem.length}</span><span class="stat-sub">Verified, blurred, waiting</span></div>
        <div class="stat"><span class="stat-label">Average Sullivan Index</span><span class="stat-value">${Math.round(prem.reduce((n, s) => n + s.compat, 0) / prem.length)}<small>%</small></span><span class="stat-sub">Higher than the free tier. Suspiciously.</span></div>
        <div class="stat stat--accent"><span class="stat-label">Already liked you</span><span class="stat-value">${likedYou}</span><span class="stat-sub">${likedYou ? "He's been asked to wait patiently" : "Give them a minute"}</span></div>
        <div class="stat"><span class="stat-label">Combined surname length</span><span class="stat-value">${prem.reduce((n, s) => n + surname(s).length, 0)}</span><span class="stat-sub">Letters. You've been warned.</span></div>
      </section>

      <section class="section" id="reserve-preview">
        <div class="section-head">
          <h2 class="h2">Behind the rope <span class="count-pill"><b>${prem.length}</b> Reserve Sullivans</span></h2>
          <span class="small muted">Surnames withheld. For now.</span>
        </div>
        <div class="${gridClass()}">${prem.map((s) => cardHTML(s)).join("")}</div>
      </section>

      ${plansSectionHTML()}

      <section class="section">
        <div class="section-head"><h2 class="h2">What the rope is for</h2></div>
        <div class="insights">
          <div class="card insight"><span class="insight-icon insight-icon--gold">${I.eye}</span><div><h4>See everything</h4><p>Photos un-blurred, bios un-redacted, and surnames displayed in full. We recommend sitting down for KnobSlauch.</p></div></div>
          <div class="card insight"><span class="insight-icon insight-icon--gold">${I.heart}</span><div><h4>Like, match, message</h4><p>Reserve Sullivans behave like regular Sullivans once unlocked: they like back quickly and text like men who have thought about it.</p></div></div>
          <div class="card insight"><span class="insight-icon insight-icon--gold">${I.shield}</span><div><h4>Keep what you match</h4><p>Cancel any time. Any Reserve Sullivan you've already matched with stays yours. We're a business, not a villain.</p></div></div>
        </div>
      </section>

      ${faqHTML()}`;
  }

  function memberHTML() {
    const r = state.reserve;
    const plan = planById(r.plan);
    const prem = premiumSullivans();
    const next = new Date();
    if (r.billing === "annual") next.setFullYear(next.getFullYear() + 1);
    else next.setMonth(next.getMonth() + 1);
    return `
      <section class="reserve-hero reserve-hero--member">
        <div class="reserve-hero-text">
          <div class="eyebrow">${I.crown} Sullivan Reserve · Member</div>
          <h1 class="display">You're in the <em>Reserve</em>, Hope.</h1>
          <p class="lede">The rope is lifted. All ${prem.length} Reserve Sullivans are un-blurred, un-redacted, and aware that you can see them now. Two of them have straightened their posture.</p>
          <div class="hero-actions">
            <button class="btn btn-gold btn-lg" data-action="nav" data-nav="discover">${I.spark} Browse all Sullivans</button>
            <button class="btn btn-ghost btn-lg" data-action="scroll-to" data-target="#plans">Change plan</button>
          </div>
        </div>
        <div class="member-card">
          <div class="eyebrow">Your membership</div>
          <div class="member-plan">${esc(plan.name)}</div>
          <div class="member-rows">
            <div><span>Billing</span><b>${r.billing === "annual" ? `${money(plan.annual)} / year` : `${money(plan.monthly)} / month`}</b></div>
            <div><span>Member since</span><b>${esc(r.since)}</b></div>
            <div><span>Next renewal</span><b>${esc(next.toLocaleDateString([], { month: "long", day: "numeric", year: "numeric" }))}</b></div>
            <div><span>Sullivans unlocked</span><b>${prem.length} of ${prem.length}</b></div>
          </div>
          <button class="btn-text member-cancel" data-action="cancel-reserve">Cancel Reserve</button>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2 class="h2">Your Reserve Sullivans <span class="count-pill"><b>${prem.length}</b> unlocked</span></h2>
          <span class="small muted">Surnames displayed in full. Deep breath.</span>
        </div>
        <div class="${gridClass()}">${prem.map((s) => cardHTML(s)).join("")}</div>
      </section>

      ${plansSectionHTML()}
      ${faqHTML()}`;
  }

  function openCheckout(planId) {
    const p = planById(planId);
    if (!p) return;
    const r = state.reserve;
    const total = r.billing === "annual" ? p.annual : p.monthly;
    const period = r.billing === "annual" ? "year" : "month";
    openModal(
      `<div class="checkout">
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="Close">${I.x}</button>
        <div class="eyebrow">${I.lock} Secure checkout · Sullivan Reserve</div>
        <h2 class="h2">${esc(p.name)}</h2>
        <p class="small muted" style="margin-top:4px">${esc(p.tagline)}</p>
        <div class="checkout-summary">
          <div><span>${esc(p.name)} · billed ${r.billing === "annual" ? "annually" : "monthly"}</span><b>${money(total)}</b></div>
          <div><span>Velvet rope maintenance</span><b>$0.00</b></div>
          <div><span>Sullivan tax</span><b>Waived</b></div>
          <div class="checkout-total"><span>Due today</span><b>${money(total)}<small>/${period}</small></b></div>
        </div>
        <form class="checkout-form" id="checkout-form" novalidate>
          <label class="field"><span>Name on card</span><input id="cc-name" type="text" value="Hope" autocomplete="off"></label>
          <label class="field"><span>Card number</span><input id="cc-num" type="text" inputmode="numeric" placeholder="4242 4242 4242 4242" autocomplete="off" maxlength="23"></label>
          <div class="field-row">
            <label class="field"><span>Expiry</span><input id="cc-exp" type="text" inputmode="numeric" placeholder="MM/YY" autocomplete="off" maxlength="5"></label>
            <label class="field"><span>CVC</span><input id="cc-cvc" type="text" inputmode="numeric" placeholder="123" autocomplete="off" maxlength="4"></label>
          </div>
          <p class="checkout-note">${I.info} This is a demo. Nothing is charged and no Sullivan is harmed. Any card-shaped number works.</p>
          <button class="btn btn-gold btn-lg btn-block" type="submit" id="pay-btn">${I.crown} Pay ${money(total)} and lift the rope</button>
        </form>
      </div>`,
      { modalClass: "modal--checkout" }
    );
    const num = $("#cc-num");
    const exp = $("#cc-exp");
    const cvc = $("#cc-cvc");
    num.addEventListener("input", () => {
      num.value = num.value.replace(/\D/g, "").slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 ");
    });
    exp.addEventListener("input", () => {
      const d = exp.value.replace(/\D/g, "").slice(0, 4);
      exp.value = d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
    });
    cvc.addEventListener("input", () => (cvc.value = cvc.value.replace(/\D/g, "").slice(0, 4)));
    setTimeout(() => num.focus(), 50);
    $("#checkout-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#cc-name").value.trim();
      const digits = num.value.replace(/\s/g, "");
      const expOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(exp.value);
      const problems = [];
      if (!name) problems.push("a name");
      if (digits.length < 12) problems.push("a card number");
      if (!expOk) problems.push("an expiry (MM/YY)");
      if (cvc.value.length < 3) problems.push("a CVC");
      if (problems.length) {
        toast(`The Bureau needs ${problems.join(", ").replace(/, ([^,]*)$/, " and $1")}. It's very thorough.`, { type: "like" });
        return;
      }
      const btn = $("#pay-btn");
      btn.disabled = true;
      btn.classList.add("is-busy");
      btn.innerHTML = `<span class="spinner"></span> Verifying with the Bureau…`;
      const t = setTimeout(() => {
        activateReserve(p.id);
      }, 1600);
      state.replyTimers.push(t);
    });
  }

  function activateReserve(planId) {
    const wasActive = state.reserve.active;
    state.reserve.active = true;
    state.reserve.plan = planId;
    state.reserve.since = state.reserve.since || new Date().toLocaleDateString([], { month: "long", day: "numeric", year: "numeric" });
    syncPlanChip();
    updateBadges();
    const p = planById(planId);
    if (wasActive) {
      closeModal();
      toast(`Switched to <b>${esc(p.name)}</b>. We charged the difference. It was a lot.`, { type: "green" });
      render();
      return;
    }
    render();
    showReserveWelcome(p);
  }

  function showReserveWelcome(p) {
    const prem = premiumSullivans();
    const colors = ["var(--gold)", "#d9b25d", "var(--accent)", "#fff", "#e9a58f"];
    const confetti = Array.from({ length: 32 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 0.6;
      const dur = 1.8 + Math.random() * 1.2;
      return `<i style="left:${left}%;background:${colors[i % colors.length]};animation-delay:${delay}s;animation-duration:${dur}s;transform:rotate(${Math.random() * 90}deg)"></i>`;
    }).join("");
    openModal(
      `<div class="match-modal welcome-modal">
        <div class="confetti">${confetti}</div>
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="Close">${I.x}</button>
        <span class="match-badge match-badge--gold">${I.crown} ${esc(p.name)} · Active</span>
        <h2 class="display">Welcome to the Reserve.</h2>
        <p class="lede">The rope has been lifted. ${prem.length} Sullivans are un-blurred, and their surnames are now, legally, your problem.</p>
        <div class="welcome-row">
          ${prem.map((s) => `<button class="welcome-item" data-action="open-profile" data-id="${s.id}"><span class="avatar-lg"><img src="${s.img}" alt="${esc(s.name)}"></span><span class="name">${esc(surname(s))}</span><span class="sub">${s.compat}%</span></button>`).join("")}
        </div>
        <div class="match-actions">
          <button class="btn btn-ghost btn-lg" data-action="nav" data-nav="premium">View membership</button>
          <button class="btn btn-gold btn-lg" data-action="browse-reserve">${I.spark} Meet your Sullivans</button>
        </div>
      </div>`
    );
  }

  function cancelReserve() {
    const plan = planById(state.reserve.plan);
    const keep = premiumSullivans().filter((s) => isMatched(s.id)).length;
    dialog({
      eyebrow: "Cancel Sullivan Reserve",
      title: "Lower the rope?",
      body: `Your ${plan.name} membership ends immediately. The Reserve Sullivans will be re-blurred and gently informed. ${keep ? `The ${keep} you've already matched with stay${keep === 1 ? "s" : ""} yours.` : "Chudwick will take it well. He takes everything well. It's the coat."}`,
      actions: [
        { label: "Keep Reserve", cls: "btn-gold" },
        {
          label: "Cancel anyway",
          fn: () => {
            state.reserve.active = false;
            state.reserve.plan = null;
            syncPlanChip();
            updateBadges();
            toast("Reserve cancelled. The rope is back. The Sullivans have been told. One of them sighed.", { type: "green" });
            render();
          },
        },
      ],
    });
  }

  /* ───────────── Render ───────────── */
  function render() {
    const { view, param } = route();
    const host = $("#view");
    state.replyTimers.forEach(clearTimeout);
    state.replyTimers = [];
    Object.values(state.convos).forEach((c) => (c.typing = false));
    setActiveNav(view);

    if (view === "profile") {
      const s = byId(param);
      if (!s) return go("discover");
      host.innerHTML = profileHTML(s);
      window.scrollTo({ top: 0 });
    } else if (view === "matches") {
      host.innerHTML = matchesHTML();
      window.scrollTo({ top: 0 });
    } else if (view === "messages") {
      if (param && state.convos[Number(param)]) {
        state.activeConvo = Number(param);
        state.convos[state.activeConvo].unread = 0;
      }
      host.innerHTML = messagesHTML();
      bindMessages();
      window.scrollTo({ top: 0 });
    } else if (view === "hope") {
      host.innerHTML = hopeHTML();
      bindHope();
      window.scrollTo({ top: 0 });
    } else if (view === "premium") {
      host.innerHTML = premiumHTML();
      if (state.pendingScroll) {
        const target = state.pendingScroll;
        state.pendingScroll = null;
        window.scrollTo({ top: 0 });
        requestAnimationFrame(() => {
          const el = $(target);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        window.scrollTo({ top: 0 });
      }
    } else {
      host.innerHTML = discoverHTML();
      bindDiscover();
      if (view !== "discover") location.hash = "#/discover";
      if (!param) window.scrollTo({ top: 0 });
    }
    updateBadges();
  }

  /* ───────────── Global event delegation ───────────── */
  document.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn && !navBtn.dataset.action) {
      e.preventDefault();
      state.threadOpen = false;
      go(navBtn.dataset.nav);
      return;
    }
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const { action, id } = el.dataset;
    const s = id ? byId(id) : null;

    switch (action) {
      case "nav":
        state.threadOpen = false;
        go(el.dataset.nav);
        break;
      case "open-profile":
        if (state.modalOpen) closeModal();
        go(`profile/${id}`);
        break;
      case "like":
        like(id, { fromCard: !!el.closest(".pcard") });
        break;
      case "pass":
        pass(id, { fromCard: !!el.closest(".pcard") });
        break;
      case "open-convo":
        openConvo(id);
        break;
      case "close-thread":
        state.threadOpen = false;
        $("#messages").classList.remove("is-thread-open");
        break;
      case "close-modal":
        closeModal();
        break;
      case "scroll-deck":
        $("#discover").scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "set-distance":
        state.filters.distance = Number(el.dataset.value);
        $$("[data-action='set-distance']").forEach((c) => c.classList.toggle("is-active", c === el));
        renderDiscoverGrid();
        break;
      case "set-density": {
        const v = el.dataset.value === "compact" ? "compact" : "comfortable";
        if (v === state.density) break;
        state.density = v;
        saveDensity(v);
        $$("[data-action='set-density']").forEach((b) => {
          const on = b.dataset.value === v;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", on);
        });
        if (route().view === "discover") renderDiscoverGrid();
        else render();
        break;
      }
      case "toggle-liked-you":
        state.filters.likedYou = !state.filters.likedYou;
        el.classList.toggle("is-active", state.filters.likedYou);
        renderDiscoverGrid();
        break;
      case "clear-filters":
        state.filters = { sort: "recommended", distance: 99, intention: "all", likedYou: false };
        render();
        break;
      case "restore-passed":
        state.passed.clear();
        toast("Passed Sullivans restored. They've agreed to pretend this never happened.", { type: "green" });
        render();
        break;
      case "quick-reply":
        sendMessage(el.dataset.text);
        break;
      case "toggle-setting": {
        const key = el.dataset.key;
        state.settings[key] = !state.settings[key];
        el.classList.toggle("is-on", state.settings[key]);
        el.setAttribute("aria-checked", state.settings[key]);
        const msgs = {
          middleName: state.settings.middleName ? "Noted. We've alerted our Middle Name division. It's one guy." : "Middle names disabled. Standards restored.",
          incognito: state.settings.incognito ? "Incognito on. The Sullivans can no longer see you. They've noticed." : "Incognito off. Welcome back. They missed you.",
          notifNew: state.settings.notifNew ? "You'll be alerted the moment a new Sullivan is verified." : "New Sullivan alerts off. Risky, but we respect it.",
        };
        toast(msgs[key] || "Preference saved.", { type: "green" });
        break;
      }
      case "locked-setting": {
        const key = el.dataset.key;
        toast(key === "acceptSully" ? "“Sully” is not “Sullivan.” This setting cannot be enabled. You made that very clear." : "This setting does not exist and cannot be created. Our legal team was firm.", { type: "like" });
        break;
      }
      case "set-looking":
        state.settings.lookingFor = el.dataset.value;
        $$("[data-action='set-looking']").forEach((b) => b.classList.toggle("is-active", b === el));
        toast(`Looking for: ${el.dataset.value}. Filtering to Sullivans regardless.`, { type: "green" });
        break;
      case "manage-plan":
        if (state.reserve.active) {
          dialog({
            eyebrow: hopePlanLabel(),
            title: "You have everything.",
            body: `Sullivan+ Platinum plus ${planById(state.reserve.plan).name}. Every Sullivan, every surname, priority verification, and a concierge. There is genuinely nothing above this, and we've looked.`,
            actions: [{ label: "Manage Reserve", cls: "btn-ghost", fn: () => go("premium") }, { label: "Understood", cls: "btn-dark" }],
          });
        } else {
          dialog({
            eyebrow: "Sullivan+ Platinum",
            title: "You're on our highest standard tier.",
            body: "It includes every regular Sullivan, priority verification, and a dedicated concierge. It does not include the Reserve. Until recently there was nothing to upgrade to. There is now. We're sorry, and also not.",
            actions: [{ label: "Not now" }, { label: "See Sullivan Reserve", cls: "btn-gold", fn: goPlans }],
          });
        }
        break;
      case "choose-plan":
        if (state.reserve.active) activateReserve(el.dataset.plan);
        else openCheckout(el.dataset.plan);
        break;
      case "set-billing": {
        state.reserve.billing = el.dataset.value;
        const plans = $("#plans");
        if (plans) plans.outerHTML = plansSectionHTML();
        break;
      }
      case "scroll-to": {
        const target = $(el.dataset.target);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      }
      case "cancel-reserve":
        cancelReserve();
        break;
      case "go-plans":
        goPlans();
        break;
      case "browse-reserve":
        closeModal();
        state.filters = { sort: "recommended", distance: 99, intention: "all", likedYou: false };
        go("discover");
        setTimeout(() => {
          const deck = $("#discover");
          if (deck) deck.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
        break;
      case "export-data":
        toast("Preparing your export. It's mostly Sullivans.", { type: "green" });
        break;
      case "pause-account":
        dialog({
          eyebrow: "Pause account",
          title: "Take a break from the Sullivans?",
          body: "Your profile will be hidden and your matches will be told you're “thinking.” They've been remarkably patient so far.",
          actions: [
            { label: "Never mind" },
            { label: "Pause anyway", cls: "btn-primary", fn: () => toast("Account paused for 0 seconds. Welcome back.", { type: "green" }) },
          ],
        });
        break;
      case "expand-search":
        dialog({
          eyebrow: "Feature unavailable",
          title: "Expand to non-Sullivans?",
          body: "This feature has been permanently disabled at the founder's request. The founder is Hope. The request was firm. There is no appeal process, and frankly, there's no need for one.",
          actions: [{ label: "Fair enough", cls: "btn-dark" }],
        });
        break;
      default:
        break;
    }
    void s;
  });

  /* ───────────── Splash ───────────── */
  function runSplash() {
    const splash = $("#splash");
    const sub = $("#splash-sub");
    const lines = ["Curating your Sullivans…", "Removing men named Greg…", "Verifying birth certificates…", "Polishing the velvet rope…", "Fourteen Sullivans found. Three are Reserve. One is Irish."];
    let i = 0;
    const tick = setInterval(() => {
      i++;
      if (i >= lines.length) return clearInterval(tick);
      sub.classList.add("is-swapping");
      setTimeout(() => {
        sub.textContent = lines[i];
        sub.classList.remove("is-swapping");
      }, 250);
    }, 520);
    setTimeout(() => {
      splash.classList.add("is-done");
      setTimeout(() => splash.remove(), 700);
    }, 2800);
  }

  /* ───────────── Boot ───────────── */
  runSplash();
  render();
})();
