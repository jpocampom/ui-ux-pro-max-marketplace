/* =====================================================================
   Carlota Cebrián · Método CAR — app.js
   - i18n (ES/EN/IT) with ?lang=, localStorage and browser fallback
   - Services / Method phases / Deliverables / Pricing / Universe / FAQ
   - Questionnaire → recommendation → Calendly inline embed (prefilled)
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     CONFIG — the only block that needs editing before going live
     ------------------------------------------------------------------ */
  const CONFIG = {
    // TODO: replace with the real Calendly event link (e.g. https://calendly.com/carcebrian/primera-sesion)
    calendlyUrl: "https://calendly.com/carcebrian/primera-sesion",
    calendlyColors: { primary: "3e1707", background: "fdf7ed", text: "3e1707" },
    // Social platforms. Set `url: null` to hide one. Add a third one when Carlota confirms it.
    socials: [
      { key: "instagram", label: "Instagram", handle: "@car.cebrian", url: "https://www.instagram.com/car.cebrian/", icon: "i-instagram" },
      { key: "tiktok", label: "TikTok", handle: "@car.cebrian", url: "https://www.tiktok.com/@car.cebrian", icon: "i-tiktok" },
      { key: "other", label: "Pinterest", handle: "", url: null, icon: "i-link" }
    ],
    email: "info.carcebrian@gmail.com"
  };

  /* ------------------------------------------------------------------
     PRICING DATA (Método CAR) — "from" prices only, EUR.
     Final price depends on the client's needs; Renacer is bespoke
     (specific needs + place of residence).
     ------------------------------------------------------------------ */
  const PRICING = {
    estilizar:  { icon: "i-lamp",  img: "assets/estilizar.jpg",  from: 350 },
    reamueblar: { icon: "i-sofa",  img: "assets/reamueblar.jpg", from: 1125, includesStyle: true, featured: true },
    disenar:    { icon: "i-brush", img: "assets/disenar.jpg",    from: 1950, includesStyle: true },
    renacer:    { icon: "i-plan",  img: "assets/renacer.jpg",    custom: true }
  };
  const DELIVERABLE_ICONS = ["i-home", "i-list", "i-eye", "i-plan", "i-tag", "i-users"];
  const DELIVERABLE_IMGS = ["vision", "moodboards", "paleta", "plan", "sourcing", "acompanamiento"];
  const PHASE_IMGS = ["assets/fase-1.jpg", "assets/fase-3.jpg", "assets/fase-4.jpg"];

  /* ------------------------------------------------------------------
     STATE
     ------------------------------------------------------------------ */
  const state = { lang: "es", phase: 0, step: 0, answers: {}, calendlyLoaded: false, result: null };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const t = () => window.I18N[state.lang];
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
  // Always group thousands (es-ES Intl skips the separator on 4-digit numbers; the official table uses "1.125 €")
  const fmtEUR = (n) => { const g = String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, state.lang === "en" ? "," : "."); return state.lang === "en" ? `€${g}` : `${g} €`; };
  const icon = (id, cls = "ico") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     LANGUAGE
     ------------------------------------------------------------------ */
  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && window.I18N[q]) return q;
    try { const s = localStorage.getItem("cc-lang"); if (s && window.I18N[s]) return s; } catch (e) {}
    const nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return window.I18N[nav] ? nav : "es";
  }

  // The hero seal: one phrase repeated around the ring, refilled on language change
  // The running band under the hero: the four service names, in the page's language
  function renderMarquee() {
    const el = $("#marquee-track"); if (!el) return;
    const names = t().services.items.map((i) => i.name);
    const run = names.map((n) => `<span>${esc(n)}</span><i></i>`).join("");
    el.innerHTML = run + run + run;
  }

  function renderTestimonials() {
    const d = t().testimonials;
    $("#testimonios-grid").innerHTML = d.items.map((x) => `
      <figure class="testi reveal">
        <svg class="ico quote" aria-hidden="true"><use href="#i-quote"/></svg>
        <blockquote>${esc(x.q)}</blockquote>
        <figcaption><span class="t-name">${esc(x.a)}</span><span class="t-meta">${esc(x.r)}</span></figcaption>
      </figure>`).join("");
  }

  function renderSeal() {
    const el = $("#seal-text"); if (!el) return;
    const phrase = `${t().hero.badge} · `;
    el.textContent = (phrase + phrase).toUpperCase();
  }

  function applyStatic() {
    const dict = t();
    $$("[data-i18n]").forEach((el) => { const v = get(dict, el.dataset.i18n); if (v != null) el.textContent = v; });
    $$("[data-i18n-html]").forEach((el) => { const v = get(dict, el.dataset.i18nHtml); if (v != null) el.innerHTML = v; });
    $$("[data-i18n-content]").forEach((el) => { const v = get(dict, el.dataset.i18nContent); if (v != null) el.setAttribute("content", v); });
    document.documentElement.lang = state.lang;
    document.title = dict.meta.title;
    $$(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
  }

  function setLang(lang) {
    if (!window.I18N[lang]) return;
    state.lang = lang;
    try { localStorage.setItem("cc-lang", lang); } catch (e) {}
    const url = new URL(location.href); url.searchParams.set("lang", lang); history.replaceState(null, "", url);
    renderAll();
  }

  /* ------------------------------------------------------------------
     RENDERERS
     ------------------------------------------------------------------ */
  function renderServices() {
    const d = t().services;
    $("#services-grid").innerHTML = d.items.map((s, i) => {
      const pr = PRICING[s.key];
      const from = pr.custom ? `<span>${esc(d.custom)}</span><b class="b-sm">${esc(t().pricing.custom)}</b>` : `<span>${esc(d.from)}</span><b>${fmtEUR(pr.from)}</b>`;
      const pill = pr.includesStyle ? `<span class="pill">${icon("i-sparkle")}${esc(d.included)}</span>` : "";
      return `
        <article class="service-card reveal ${pr.custom ? "is-custom" : ""}" data-service="${s.key}" tabindex="0" role="link" aria-label="${esc(s.name)}">
          <span class="num">0${i + 1}</span>
          <figure><img src="${pr.img}" alt="" loading="lazy" width="519" height="346"></figure>
          <div class="service-body">
            <h3>${esc(s.name)}</h3>
            <p class="tag">${esc(s.tag)}</p>
            <p>${esc(s.desc)}</p>
            ${pill}
            <div class="from">${from}</div>
          </div>
        </article>`;
    }).join("");
    $$(".service-card").forEach((c) => {
      const go = () => { $("#precios").scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); highlightPrice(c.dataset.service); };
      c.addEventListener("click", go);
      c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
  }

  function highlightPrice(key) {
    const card = $(`.price-card[data-service="${key}"]`);
    if (!card) return;
    card.classList.add("is-featured");
    card.animate([{ transform: "scale(1)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }], { duration: 500, easing: "ease-out" });
  }

  function renderPhases() {
    const d = t().method;
    $("#phase-tabs").innerHTML = d.phases.map((p, i) => `
      <button type="button" class="phase-tab" role="tab" id="tab-${i}" aria-selected="${i === state.phase}" aria-controls="panel-${i}" data-phase="${i}">
        <span class="p-num">${p.num}</span>
        <span class="p-name">${esc(p.name)}</span>
        <span class="p-short">${esc(p.lead)}</span>
      </button>`).join("");
    renderPhasePanel();
    $$(".phase-tab").forEach((b) => b.addEventListener("click", () => { state.phase = +b.dataset.phase; renderPhases(); }));
    $("#phase-tabs").addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      state.phase = (state.phase + (e.key === "ArrowRight" ? 1 : 2)) % 3; renderPhases(); $(`#tab-${state.phase}`).focus();
    });
  }

  function renderPhasePanel() {
    const d = t().method; const p = d.phases[state.phase]; const next = (state.phase + 1) % 3;
    $("#phase-panel").innerHTML = `
      <div class="phase-content" role="tabpanel" id="panel-${state.phase}" aria-labelledby="tab-${state.phase}">
        <div>
          <p class="eyebrow">${esc(p.name)}</p>
          <h3>${p.title}</h3>
          <p class="p-lead">${esc(p.lead)}</p>
          <p>${esc(p.desc)}</p>
          <button type="button" class="phase-next" data-next="${next}">${esc(d.next)} · ${d.phases[next].num} ${icon("i-arrow")}</button>
        </div>
        <figure><img src="${PHASE_IMGS[state.phase]}" alt="" loading="lazy" width="531" height="299"></figure>
      </div>`;
    $(".phase-next").addEventListener("click", (e) => { state.phase = +e.currentTarget.dataset.next; renderPhases(); });
  }

  function renderDeliverables() {
    $("#deliverables-grid").innerHTML = t().method.deliverables.map((name, i) => `
      <div class="deliv">
        <div class="d-head">${icon(DELIVERABLE_ICONS[i])}<span>${esc(name)}</span></div>
        <figure><img src="assets/get-${DELIVERABLE_IMGS[i]}.jpg" alt="${esc(name)}" loading="lazy" width="400" height="284"></figure>
      </div>`).join("");
  }

  function renderPricing() {
    const d = t().pricing; const s = t().services;
    $("#pricing-grid").innerHTML = s.items.map((svc) => {
      const pr = PRICING[svc.key];
      const feats = d.features[svc.key].map((f) => `<li>${icon("i-check")}<span>${esc(f)}</span></li>`).join("");
      if (pr.custom) {
        return `
          <article class="price-card is-custom reveal is-in" data-service="${svc.key}">
            <h3>${icon(pr.icon)}${esc(svc.name)}</h3>
            <p class="p-tag">${esc(svc.tag)}</p>
            <div class="amount">${esc(d.custom)}</div>
            <span class="weeks">${icon("i-compass")}${esc(d.customNote)}</span>
            <ul>${feats}</ul>
            <a href="#reserva" class="btn btn-primary">${esc(d.ctaCustom)}</a>
          </article>`;
      }
      return `
        <article class="price-card reveal is-in ${pr.featured ? "is-featured" : ""}" data-service="${svc.key}">
          ${pr.featured ? `<span class="ribbon">${esc(d.popular)}</span>` : ""}
          <h3>${icon(pr.icon)}${esc(svc.name)}</h3>
          <p class="p-tag">${esc(svc.tag)}</p>
          <div class="amount"><small>${esc(d.fromLabel)}</small><span>${fmtEUR(pr.from)}</span></div>
          <span class="weeks">${icon("i-tag")}${esc(d.subject)}</span>
          ${pr.includesStyle ? `<div class="incl">${icon("i-sparkle")}${esc(d.inclFree)}</div>` : ""}
          <ul>${feats}</ul>
          <a href="#reserva" class="btn ${pr.featured ? "btn-primary" : "btn-ghost"}">${esc(d.cta)}</a>
        </article>`;
    }).join("");
  }

  function renderSocials() {
    const d = t().about;
    const live = CONFIG.socials.filter((s) => s.url);
    $("#socials").innerHTML = `<span class="tiny" style="align-self:center">${esc(d.follow)}</span>` + live.map((s) => `
      <a class="social" href="${esc(s.url)}" target="_blank" rel="noopener">${icon(s.icon)}<span>${esc(s.label)} ${s.handle ? `<small>${esc(s.handle)}</small>` : ""}</span></a>`).join("");
    $("#footer-socials").innerHTML = live.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${icon(s.icon)}</a>`).join("");
  }

  function renderUniverse() {
    const d = t().universe; const icons = [["i-users", "i-eye", "i-compass"], ["i-home", "i-list", "i-brush"], ["i-plan", "i-hardhat", "i-sofa"]];
    $("#universe-grid").innerHTML = d.items.map((u, i) => `
      <article class="uni reveal ${i === 1 ? "is-featured" : ""} ${i === 2 ? "is-dark" : ""}">
        ${i === 0 ? `<span class="pill">${esc(d.soon)}</span>` : ""}
        <span class="u-num">${i + 1}</span>
        <h3>${esc(u.name)}</h3>
        <p class="u-sub">${esc(u.sub)}</p>
        <p>${esc(u.desc)}</p>
        <div class="u-icons">${icons[i].map((ic) => icon(ic)).join("")}</div>
        ${i === 0 ? "" : `<a href="${i === 1 ? "#metodo" : "#reserva"}" class="u-link">${esc(i === 1 ? d.more : d.book)} ${icon("i-arrow")}</a>`}
      </article>`).join("");
  }

  function renderFaq() {
    $("#faq-list").innerHTML = t().faq.items.map((f) => `
      <details class="faq-item"><summary>${esc(f.q)}</summary><div class="faq-body"><p>${esc(f.a)}</p></div></details>`).join("");
  }

  /* ------------------------------------------------------------------
     QUIZ
     ------------------------------------------------------------------ */
  function renderQuiz() {
    const q = t().quiz;
    $("#quiz-steps").innerHTML = q.steps.map((s, i) => `
      <div class="quiz-step ${i === state.step ? "is-active" : ""}" data-step="${i}">
        <fieldset>
          <legend>${esc(s.title)}</legend>
          <p class="q-help">${esc(s.help)}</p>
          <div class="options">
            ${s.options.map((o, j) => {
              const id = `q-${s.key}-${j}`; const type = s.type === "check" ? "checkbox" : "radio";
              const checked = s.type === "check" ? (state.answers[s.key] || []).includes(o.v) : state.answers[s.key] === o.v;
              return `<div class="opt ${s.type === "check" ? "is-check" : ""}">
                <input type="${type}" id="${id}" name="${s.key}" value="${esc(o.v)}" ${checked ? "checked" : ""}>
                <label for="${id}"><span class="mark"></span><span class="o-text"><b>${esc(o.l)}</b>${o.s ? `<small>${esc(o.s)}</small>` : ""}</span></label>
              </div>`;
            }).join("")}
          </div>
          <p class="quiz-error" role="alert">${esc(q.error)}</p>
        </fieldset>
      </div>`).join("");
    updateQuizNav();
    // Auto-advance on radio selection for a snappier feel
    $$("#quiz-steps input[type=radio]").forEach((inp) => inp.addEventListener("change", () => { saveStep(); setTimeout(nextStep, 260); }));
    $$("#quiz-steps input[type=checkbox]").forEach((inp) => inp.addEventListener("change", () => { saveStep(); $(".quiz-step.is-active .quiz-error").classList.remove("is-visible"); }));
  }

  function updateQuizNav() {
    const q = t().quiz; const total = q.steps.length;
    $("#quiz-bar").style.width = `${(state.step / total) * 100}%`;
    $("#quiz-count").textContent = `${state.step + 1} ${q.of} ${total}`;
    $("#quiz-back").disabled = state.step === 0;
    $("#quiz-next").textContent = state.step === total - 1 ? q.finish : q.next;
    $$(".quiz-step").forEach((el) => el.classList.toggle("is-active", +el.dataset.step === state.step));
  }

  function saveStep() {
    const s = t().quiz.steps[state.step]; const active = $(`.quiz-step[data-step="${state.step}"]`);
    if (s.type === "check") state.answers[s.key] = $$("input:checked", active).map((i) => i.value);
    else { const c = $("input:checked", active); state.answers[s.key] = c ? c.value : undefined; }
  }

  function validStep() {
    const s = t().quiz.steps[state.step]; const v = state.answers[s.key];
    return s.type === "check" ? Array.isArray(v) && v.length > 0 : !!v;
  }

  function nextStep() {
    saveStep();
    const active = $(`.quiz-step[data-step="${state.step}"]`);
    if (!validStep()) { $(".quiz-error", active).classList.add("is-visible"); return; }
    $(".quiz-error", active).classList.remove("is-visible");
    if (state.step < t().quiz.steps.length - 1) { state.step++; updateQuizNav(); focusStep(); }
    else showResult();
  }
  function prevStep() { if (state.step > 0) { saveStep(); state.step--; updateQuizNav(); focusStep(); } }
  function focusStep() { const l = $(`.quiz-step[data-step="${state.step}"] legend`); if (l) { l.setAttribute("tabindex", "-1"); l.focus({ preventScroll: true }); } }

  function recommend(a) {
    let key = { amueblada: "estilizar", "funciona-mal": "reamueblar", vacia: "disenar", obra: "renacer" }[a.estado] || "estilizar";
    const order = ["estilizar", "reamueblar", "disenar", "renacer"];
    const bump = (min) => { if (order.indexOf(key) < order.indexOf(min)) key = min; };
    const nivel = a.nivel || []; const nec = a.necesidad || [];
    if (nivel.includes("distribucion")) bump("disenar");
    if (nivel.includes("piezas") || nivel.includes("definir")) bump("reamueblar");
    if (nec.includes("implementacion")) bump("reamueblar");
    const pr = PRICING[key];
    const budgetMax = { "<1000": 1000, "1000-2500": 2500, "2500-5000": 5000, ">5000": Infinity }[a.inversion] || Infinity;
    return { key, from: pr.custom ? null : pr.from, tight: !pr.custom && pr.from > budgetMax };
  }

  function showResult() {
    const q = t().quiz; const s = t().services; const r = recommend(state.answers); state.result = r;
    const svc = s.items.find((x) => x.key === r.key); const pr = PRICING[r.key];
    $("#quiz-bar").style.width = "100%";
    $("#quiz-form").hidden = true;
    const res = $("#quiz-result"); res.hidden = false;
    const note = pr.custom ? q.renacerNote : r.tight ? q.budgetNote : pr.includesStyle ? q.inclNote.replace("{service}", svc.name) : "";
    res.innerHTML = `
      <div class="result-head">${icon("i-sparkle")}<div><p class="eyebrow" style="margin:0">${esc(q.resultEyebrow)}</p><h3 style="font-size:1.6rem">${esc(q.resultTitle)}</h3></div></div>
      <div class="result-card">
        <div>
          <h3>${icon(pr.icon)} ${esc(svc.name)}</h3>
          <p class="r-tag">${esc(svc.tag)}</p>
          <p class="r-desc">${esc(svc.desc)}</p>
          ${note ? `<div class="result-note">${icon("i-check")}<span>${esc(note)}</span></div>` : ""}
        </div>
        <div class="result-nums is-single">
          <div>
            <span class="k">${esc(q.estimate)}</span>
            <div class="v">${pr.custom ? esc(q.customPrice) : `<small>${esc(q.fromLabel)}</small> ${fmtEUR(r.from)}`}</div>
            <p class="tiny">${esc(pr.custom ? q.customNote : q.subject)}</p>
          </div>
        </div>
      </div>
      <div class="result-next">
        <p class="eyebrow" style="margin:0 0 8px">${esc(q.nextStep)}</p>
        <div class="result-actions">
          <a href="#reserva" class="btn btn-primary btn-lg" id="result-book">${icon("i-calendar")}${esc(q.bookCta)}</a>
          <button type="button" class="link-btn" id="quiz-restart">${esc(q.restart)}</button>
        </div>
        <p class="tiny" style="margin-top:12px">${esc(q.prefillNote)}</p>
      </div>`;
    $("#quiz-restart").addEventListener("click", () => { state.step = 0; state.answers = {}; state.result = null; state.autoScrolled = false; res.hidden = true; $("#quiz-form").hidden = false; renderQuiz(); });
    $("#result-book").addEventListener("click", () => { openCalendly(); });
    res.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    // Step 2 of the funnel: load the Calendly calendar right away (prefilled with the answers)
    // so the booking is one scroll away, and pull it into view after the result has been read.
    openCalendly();
    if (!state.autoScrolled) {
      state.autoScrolled = true;
      setTimeout(() => { $("#reserva").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }); }, reduced ? 0 : 2600);
    }
  }

  /* ------------------------------------------------------------------
     CALENDLY
     ------------------------------------------------------------------ */
  function answerLabels() {
    // Calendly prefill uses a1..aN in the order of the event's custom questions,
    // and matches option text exactly: we always send the Spanish labels of the
    // Calendly form, whatever the site language.
    const es = window.I18N.es.quiz.steps; const a = state.answers;
    const label = (stepKey, v) => { const s = es.find((x) => x.key === stepKey); const o = s && s.options.find((x) => x.v === v); return o ? o.l : ""; };
    const CALENDLY_LABELS = {
      estado: { amueblada: "Amueblada, pero le falta alma", "funciona-mal": "No termina de funcionar", vacia: "Vacía o sin amueblar", obra: "Quiero replantearla desde la base" },
      estancias: { "0": "1-2 estancias", "1": "3-5 estancias", "2": "+5 estancias" },
      necesidad: { estilo: "Definir el estilo", identidad: "Identidad estética/plan por estancia", implementacion: "Ayuda durante la implementación" },
      nivel: { orientacion: "Orientación estética y recomendaciones generales", definir: "Definir mobiliario, iluminación, textiles, arte y decoración", distribucion: "Distribución", piezas: "Selección de piezas concretas para comprar" },
      inversion: { "<1000": "Menos de 1.000€?", "1000-2500": "1.000-2.500 €", "2500-5000": "2.500–5.000 €", ">5000": "+5.000 €" }
    };
    const pick = (k, v) => (CALENDLY_LABELS[k] && CALENDLY_LABELS[k][v]) || label(k, v);
    return {
      a1: a.estado ? pick("estado", a.estado) : "",
      a2: a.estancias != null ? pick("estancias", a.estancias) : "",
      a3: (a.necesidad || []).map((v) => pick("necesidad", v)).join(","),
      a4: (a.nivel || []).map((v) => pick("nivel", v)).join(","),
      a5: a.inversion ? pick("inversion", a.inversion) : ""
    };
  }

  function calendlyUrl() {
    const u = new URL(CONFIG.calendlyUrl);
    u.searchParams.set("hide_gdpr_banner", "1");
    u.searchParams.set("primary_color", CONFIG.calendlyColors.primary);
    u.searchParams.set("background_color", CONFIG.calendlyColors.background);
    u.searchParams.set("text_color", CONFIG.calendlyColors.text);
    if (state.result) {
      const ans = answerLabels();
      Object.entries(ans).forEach(([k, v]) => { if (v) u.searchParams.set(k, v); });
      const svcName = window.I18N.es.services.items.find((x) => x.key === state.result.key).name;
      u.searchParams.set("utm_content", `recomendado-${svcName.toLowerCase()}`);
    }
    u.searchParams.set("utm_source", "landing"); u.searchParams.set("utm_medium", "web"); u.searchParams.set("utm_campaign", `lang-${state.lang}`);
    return u.toString();
  }

  function openCalendly() {
    const widget = $("#calendly-widget"); const ph = $("#calendly-placeholder");
    ph.hidden = true; widget.hidden = false;
    const mount = () => {
      widget.innerHTML = "";
      if (window.Calendly && window.Calendly.initInlineWidget) {
        window.Calendly.initInlineWidget({ url: calendlyUrl(), parentElement: widget });
      } else {
        widget.innerHTML = `<iframe src="${esc(calendlyUrl())}" title="Calendly" style="width:100%;height:100%;border:0" loading="lazy"></iframe>`;
      }
    };
    if (state.calendlyLoaded) return mount();
    let done = false;
    const finish = () => { if (done) return; done = true; state.calendlyLoaded = true; mount(); };
    const s = document.createElement("script"); s.src = "https://assets.calendly.com/assets/external/widget.js"; s.async = true;
    s.onload = finish; s.onerror = finish;
    document.head.appendChild(s);
    // If the script hangs (slow network, blocker), fall back to a plain iframe so the calendar always shows
    setTimeout(finish, 2500);
  }

  /* ------------------------------------------------------------------
     UI BEHAVIOURS
     ------------------------------------------------------------------ */
  function initReveal() {
    if (reduced || !("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal:not(.is-in)").forEach((el) => io.observe(el));
  }

  function initHeader() {
    const toggle = $(".nav-toggle"); const nav = $("#mobile-nav");
    toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); nav.hidden = open; });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => { toggle.setAttribute("aria-expanded", "false"); nav.hidden = true; }));
    $$(".lang-switch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    // Sticky mobile CTA appears after hero, hides on booking section
    const sticky = $(".sticky-cta"); const hero = $(".hero"); const booking = $("#reserva");
    const onScroll = () => {
      const pastHero = window.scrollY > hero.offsetHeight * 0.7;
      const b = booking.getBoundingClientRect(); const inBooking = b.top < window.innerHeight && b.bottom > 0;
      sticky.classList.toggle("is-visible", pastHero && !inBooking);
    };
    let ticking = false;
    window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; } }, { passive: true });
    onScroll();
  }

  function initQuiz() {
    $("#quiz-next").addEventListener("click", nextStep);
    $("#quiz-back").addEventListener("click", prevStep);
    $("#quiz-form").addEventListener("submit", (e) => { e.preventDefault(); nextStep(); });
    $("#open-calendly").addEventListener("click", openCalendly);
  }

  /* ------------------------------------------------------------------
     RENDER ALL (re-run on language change)
     ------------------------------------------------------------------ */
  function renderAll() {
    applyStatic();
    renderSeal(); renderMarquee(); renderTestimonials();
    renderServices(); renderPhases(); renderDeliverables(); renderPricing(); renderSocials(); renderUniverse(); renderFaq();
    if ($("#quiz-form").hidden && state.result) showResult(); else renderQuiz();
    if (!$("#calendly-widget").hidden) openCalendly();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    state.lang = detectLang();
    initHeader(); initQuiz();
    renderAll();
    $$(".hero .reveal, .hero-visual").forEach((el) => el.classList.add("is-in"));
  });
})();
