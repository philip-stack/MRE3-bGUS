/* Quiz-Engine im Stil eines Moodle-Tests.
   Fragetypen: single, multi, tf, match, num, gap (siehe questions.js). */
(function () {
  "use strict";

  const STORE_KEY = "gus-quiz-stats-v1";
  const TOPICS = window.QUIZ_TOPICS;
  const ALL = window.QUESTIONS;

  // ---------- Hilfsfunktionen ----------
  const $ = (sel, root) => (root || document).querySelector(sel);
  const el = (tag, attrs, html) => {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const fmtNum = (n) => Number(n).toLocaleString("de-AT", { maximumFractionDigits: 4 });
  const fmtPts = (n) => n.toLocaleString("de-AT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function parseNum(raw) {
    if (raw === undefined || raw === null) return NaN;
    let s = String(raw).replace(/[\s€%]/g, "");
    if (!s) return NaN;
    if (s.includes(",") && s.includes(".")) s = s.replace(/\./g, "").replace(",", ".");
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
    else s = s.replace(",", ".");
    return Number(s);
  }

  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveStats(stats) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) { /* privates Fenster */ }
  }
  function recordResult(qid, fraction) {
    const stats = loadStats();
    const s = stats[qid] || { right: 0, wrong: 0, last: null };
    if (fraction >= 0.999) s.right++; else s.wrong++;
    s.last = fraction >= 0.999 ? "right" : "wrong";
    stats[qid] = s;
    saveStats(stats);
  }

  // ---------- Bewertung ----------
  function grade(q, resp) {
    switch (q.type) {
      case "single":
      case "tf":
        return resp.value === q.answer ? 1 : 0;
      case "multi": {
        const correct = new Set(q.answer);
        const chosen = new Set(resp.value || []);
        const per = 1 / correct.size;
        let f = 0;
        chosen.forEach((i) => { f += correct.has(i) ? per : -per; });
        return Math.max(0, Math.min(1, Math.round(f * 1000) / 1000));
      }
      case "match": {
        const vals = resp.value || [];
        let ok = 0;
        q.pairs.forEach((p, i) => { if (vals[i] === p[1]) ok++; });
        return ok / q.pairs.length;
      }
      case "gap": {
        const vals = resp.value || [];
        let ok = 0;
        q.gaps.forEach((g, i) => { if (vals[i] === g[0]) ok++; });
        return ok / q.gaps.length;
      }
      case "num": {
        const v = parseNum(resp.value);
        if (isNaN(v)) return 0;
        return Math.abs(v - q.answer) <= (q.tol || 0) + 1e-9 ? 1 : 0;
      }
    }
    return 0;
  }

  function isAnswered(q, resp) {
    if (!resp || resp.value === undefined || resp.value === null) return false;
    if (q.type === "multi") return resp.value.length > 0;
    if (q.type === "match" || q.type === "gap") return resp.value.some((v) => v);
    if (q.type === "num") return String(resp.value).trim() !== "";
    return true;
  }

  function rightAnswerText(q, view) {
    switch (q.type) {
      case "single":
        return "Die richtige Antwort ist: " + q.options[q.answer];
      case "tf":
        return "Die richtige Antwort ist „" + (q.answer ? "Wahr" : "Falsch") + "“.";
      case "multi":
        return (q.answer.length > 1 ? "Die richtigen Antworten sind: " : "Die richtige Antwort ist: ") +
          q.answer.map((i) => q.options[i]).join(", ");
      case "match":
        return "Die richtige Antwort ist: " + q.pairs.map((p) => p[0] + " → " + p[1]).join("; ");
      case "num":
        return "Die richtige Antwort ist: " + fmtNum(q.answer) + (q.unit ? " " + q.unit : "") +
          (q.tol ? " (Toleranz ± " + fmtNum(q.tol) + ")" : "");
      case "gap": {
        let i = 0;
        return "Die richtige Antwort ist: " + q.text.replace(/\{\}/g, () => "[" + q.gaps[i++][0] + "]");
      }
    }
    return "";
  }

  // ---------- Darstellung einer Frage ----------
  function renderQuestion(slot, index, total, mode) {
    const q = slot.q;
    const wrap = el("div", { class: "que", id: "q" + index });
    const done = slot.finished;
    const frac = done ? slot.fraction : null;

    let stateText = isAnswered(q, slot.resp) ? "Beantwortet" : "Noch nicht beantwortet";
    if (done) stateText = frac >= 0.999 ? "Richtig" : frac > 0 ? "Teilweise richtig" : "Falsch";

    const info = el("div", { class: "info" });
    info.appendChild(el("span", { class: "qno" }, "Frage <span>" + (index + 1) + "</span>"));
    info.appendChild(el("span", { class: "state" }, stateText));
    info.appendChild(el("span", { class: "grade" },
      done ? "Erreichte Punkte " + fmtPts(frac) + " von 1,00" : "Erreichbare Punkte: 1,00"));
    const flag = el("span", { class: "flag" + (slot.flagged ? " on" : "") },
      slot.flagged ? "⚑ Markierung entfernen" : "⚐ Frage markieren");
    flag.addEventListener("click", () => { slot.flagged = !slot.flagged; App.refresh(); });
    info.appendChild(flag);
    info.appendChild(el("span", { class: "topic" }, TOPICS[q.topic].short));
    wrap.appendChild(info);

    const content = el("div", { class: "content" });
    const form = el("div", { class: "formulation" });
    form.appendChild(el("div", { class: "qtext" }, q.q));

    const name = "q" + index + "_" + q.id;
    const lock = done;
    const letters = "abcdefghij";

    if (q.type === "single" || q.type === "multi" || q.type === "tf") {
      form.appendChild(el("div", { class: "prompt" },
        q.type === "multi" ? "Wählen Sie eine oder mehrere Antworten:" : "Wählen Sie eine Antwort:"));
      const opts = q.type === "tf" ? ["Wahr", "Falsch"] : q.options;
      const order = q.type === "tf" ? [0, 1] : slot.order;
      order.forEach((oi, pos) => {
        const id = name + "_" + oi;
        const val = q.type === "tf" ? oi === 0 : oi;
        const row = el("div", { class: "answer-opt" });
        const input = el("input", { type: q.type === "multi" ? "checkbox" : "radio", name: name, id: id });
        if (q.type === "multi") input.checked = (slot.resp.value || []).includes(oi);
        else input.checked = slot.resp.value === val;
        input.disabled = lock;
        input.addEventListener("change", () => {
          if (q.type === "multi") {
            const set = new Set(slot.resp.value || []);
            input.checked ? set.add(oi) : set.delete(oi);
            slot.resp.value = Array.from(set);
          } else slot.resp.value = val;
          App.onChange();
        });
        row.appendChild(input);
        const lbl = el("label", { for: id },
          (q.type === "tf" ? "" : '<span class="letter">' + letters[pos] + ".</span>") + opts[oi]);
        row.appendChild(lbl);
        if (done) {
          const isRight = q.type === "multi" ? q.answer.includes(oi) : (q.type === "tf" ? val === q.answer : oi === q.answer);
          if (input.checked) {
            row.classList.add(isRight ? "correct" : "incorrect");
            row.appendChild(el("span", { class: "mark" }, isRight ? "✔" : "✘"));
          }
        }
        form.appendChild(row);
      });
    } else if (q.type === "match") {
      const table = el("table", { class: "match-table" });
      const choices = slot.choiceOrder;
      q.pairs.forEach((p, i) => {
        const tr = el("tr");
        tr.appendChild(el("td", { class: "left" }, p[0]));
        const td = el("td");
        const sel = el("select");
        sel.appendChild(el("option", { value: "" }, "Auswählen …"));
        choices.forEach((c) => {
          const o = el("option", { value: c }, c);
          if ((slot.resp.value || [])[i] === c) o.selected = true;
          sel.appendChild(o);
        });
        sel.disabled = lock;
        sel.addEventListener("change", () => {
          slot.resp.value = slot.resp.value || new Array(q.pairs.length).fill("");
          slot.resp.value[i] = sel.value;
          App.onChange();
        });
        if (done) sel.classList.add((slot.resp.value || [])[i] === p[1] ? "correct" : "incorrect");
        td.appendChild(sel);
        tr.appendChild(td);
        table.appendChild(tr);
      });
      form.appendChild(table);
    } else if (q.type === "gap") {
      const div = el("div", { class: "gap-text" });
      const parts = q.text.split("{}");
      parts.forEach((part, i) => {
        div.appendChild(document.createTextNode(part));
        if (i < q.gaps.length) {
          const sel = el("select", { class: "gap-select" });
          sel.appendChild(el("option", { value: "" }, " "));
          slot.gapOrders[i].forEach((c) => {
            const o = el("option", { value: c }, c);
            if ((slot.resp.value || [])[i] === c) o.selected = true;
            sel.appendChild(o);
          });
          sel.disabled = lock;
          sel.addEventListener("change", () => {
            slot.resp.value = slot.resp.value || new Array(q.gaps.length).fill("");
            slot.resp.value[i] = sel.value;
            App.onChange();
          });
          if (done) sel.classList.add((slot.resp.value || [])[i] === q.gaps[i][0] ? "correct" : "incorrect");
          div.appendChild(sel);
        }
      });
      form.appendChild(div);
    } else if (q.type === "num") {
      const row = el("div", { class: "num-row" });
      row.appendChild(el("label", { for: name }, "Antwort: "));
      const input = el("input", { type: "text", class: "num-input", id: name, inputmode: "decimal", autocomplete: "off" });
      input.value = slot.resp.value || "";
      input.disabled = lock;
      input.addEventListener("input", () => { slot.resp.value = input.value; App.onChange(true); });
      if (done) input.classList.add(frac >= 0.999 ? "correct" : "incorrect");
      const holder = el("div");
      holder.appendChild(input);
      if (q.unit) holder.appendChild(document.createTextNode(" " + q.unit));
      row.appendChild(holder);
      form.appendChild(row);
    }

    if (mode === "practice" && !done) {
      const act = el("div", { class: "que-actions" });
      act.appendChild(el("button", { class: "btn btn-secondary", type: "button", onclick: () => App.check(index) }, "Prüfen"));
      form.appendChild(act);
    }

    content.appendChild(form);

    if (done) {
      const out = el("div", { class: "outcome" });
      const cls = frac >= 0.999 ? "ok" : frac > 0 ? "part" : "bad";
      const txt = frac >= 0.999 ? "Ihre Antwort ist richtig." : frac > 0 ? "Ihre Antwort ist teilweise richtig." : "Ihre Antwort ist falsch.";
      out.appendChild(el("div", { class: "verdict " + cls }, txt));
      if (q.explain) out.appendChild(el("div", { class: "explain" }, q.explain));
      out.appendChild(el("div", { class: "rightanswer" }, rightAnswerText(q)));
      content.appendChild(out);
    }

    wrap.appendChild(content);
    return wrap;
  }

  // ---------- Ablaufsteuerung ----------
  const App = {
    slots: [],
    mode: "practice",
    current: 0,
    perPage: 1,
    timerEnd: null,
    timerId: null,
    submitted: false,

    init() {
      this.buildSetup();
      const params = new URLSearchParams(location.search);
      if (params.get("topic") || params.get("start")) {
        const topics = (params.get("topic") || Object.keys(TOPICS).join(",")).split(",");
        document.querySelectorAll("input[name=topic]").forEach((c) => { c.checked = topics.includes(c.value); });
        if (params.get("mode") === "exam") $("#mode-exam").checked = true;
        this.updateCount();
        if (params.get("start") !== "0") this.start();
      }
    },

    buildSetup() {
      const box = $("#topic-boxes");
      const stats = loadStats();
      Object.keys(TOPICS).forEach((key) => {
        const n = ALL.filter((q) => q.topic === key).length;
        const lbl = el("label");
        const cb = el("input", { type: "checkbox", name: "topic", value: key });
        cb.checked = true;
        cb.addEventListener("change", () => this.updateCount());
        lbl.appendChild(cb);
        lbl.appendChild(document.createTextNode(" " + TOPICS[key].name + " "));
        lbl.appendChild(el("span", { class: "pill" }, n + " Fragen"));
        box.appendChild(lbl);
      });
      const wrong = Object.keys(stats).filter((k) => stats[k].last === "wrong").length;
      $("#wrong-count").textContent = wrong;
      $("#total-count").textContent = ALL.length;
      document.querySelectorAll("input[name=mode], #only-wrong").forEach((r) => r.addEventListener("change", () => this.updateCount()));
      $("#start-btn").addEventListener("click", () => this.start());
      $("#reset-stats").addEventListener("click", () => {
        if (confirm("Lernstatistik (falsch beantwortete Fragen) wirklich löschen?")) {
          saveStats({});
          $("#wrong-count").textContent = "0";
          this.updateCount();
        }
      });
      this.updateCount();
    },

    pool() {
      const topics = Array.from(document.querySelectorAll("input[name=topic]:checked")).map((c) => c.value);
      let pool = ALL.filter((q) => topics.includes(q.topic));
      if ($("#only-wrong").checked) {
        const stats = loadStats();
        pool = pool.filter((q) => stats[q.id] && stats[q.id].last === "wrong");
      }
      return pool;
    },

    updateCount() {
      const n = this.pool().length;
      $("#pool-count").textContent = n;
      const exam = $("#mode-exam").checked;
      $("#exam-options").classList.toggle("hidden", !exam);
      $("#start-btn").disabled = n === 0;
    },

    start() {
      this.mode = $("#mode-exam").checked ? "exam" : "practice";
      let pool = shuffle(this.pool());
      if (this.mode === "exam") {
        const n = Math.max(1, parseInt($("#exam-n").value, 10) || 30);
        pool = pool.slice(0, n);
      }
      if (!pool.length) return;
      this.slots = pool.map((q) => ({
        q,
        resp: { value: q.type === "multi" ? [] : undefined },
        order: q.options ? (q.noShuffle ? q.options.map((_, i) => i) : shuffle(q.options.map((_, i) => i))) : null,
        choiceOrder: q.pairs ? shuffle(Array.from(new Set(q.pairs.map((p) => p[1]).concat(q.distractors || [])))) : null,
        gapOrders: q.gaps ? q.gaps.map((g) => shuffle(g)) : null,
        finished: false,
        fraction: 0,
        flagged: false,
      }));
      this.current = 0;
      this.submitted = false;
      this.perPage = this.mode === "exam" ? 1 : 1;
      $("#setup").classList.add("hidden");
      $("#summary").classList.add("hidden");
      $("#result").classList.add("hidden");
      $("#attempt").classList.remove("hidden");
      $("#attempt-title").textContent = this.mode === "exam" ? "Prüfungssimulation" : "Übungsmodus";
      clearInterval(this.timerId);
      if (this.mode === "exam") {
        const min = Math.max(1, parseInt($("#exam-min").value, 10) || 45);
        this.timerEnd = Date.now() + min * 60000;
        this.tick();
        this.timerId = setInterval(() => this.tick(), 1000);
      } else {
        this.timerEnd = null;
        $("#timer").textContent = "";
      }
      this.refresh();
      window.scrollTo(0, 0);
    },

    tick() {
      const left = Math.max(0, this.timerEnd - Date.now());
      const m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
      const t = $("#timer");
      t.textContent = "Verbleibende Zeit " + m + ":" + String(s).padStart(2, "0");
      t.classList.toggle("low", left < 5 * 60000);
      if (left <= 0) {
        clearInterval(this.timerId);
        alert("Die Zeit ist abgelaufen. Der Versuch wird abgegeben.");
        this.submit();
      }
    },

    onChange() {
      this.renderNav();
    },

    check(i) {
      const slot = this.slots[i];
      slot.fraction = grade(slot.q, slot.resp);
      slot.finished = true;
      recordResult(slot.q.id, slot.fraction);
      this.refresh();
    },

    refresh() {
      const area = $("#questions");
      area.innerHTML = "";
      const start = this.current;
      for (let i = start; i < Math.min(start + this.perPage, this.slots.length); i++) {
        area.appendChild(renderQuestion(this.slots[i], i, this.slots.length, this.mode));
      }
      $("#prev-btn").disabled = this.current === 0;
      const last = this.current + this.perPage >= this.slots.length;
      $("#next-btn").textContent = last ? (this.submitted ? "Überprüfung beenden" : "Versuch beenden …") : "Nächste Seite";
      this.renderNav();
    },

    renderNav() {
      const grid = $("#nav-grid");
      grid.innerHTML = "";
      this.slots.forEach((slot, i) => {
        const b = el("button", { class: "nav-btn", type: "button", title: "Frage " + (i + 1) }, String(i + 1));
        if (slot.finished) b.classList.add(slot.fraction >= 0.999 ? "correct" : slot.fraction > 0 ? "partial" : "incorrect");
        else if (isAnswered(slot.q, slot.resp)) b.classList.add("answered");
        if (slot.flagged) b.classList.add("flagged");
        if (i === this.current) b.classList.add("current");
        b.addEventListener("click", () => this.goto(i));
        grid.appendChild(b);
      });
      if (this.mode === "practice") {
        const done = this.slots.filter((s) => s.finished);
        const pts = done.reduce((a, s) => a + s.fraction, 0);
        $("#nav-score").textContent = done.length
          ? "Bisher: " + fmtPts(pts) + " / " + done.length + " Punkte (" + Math.round((pts / done.length) * 100) + " %)"
          : "Noch keine Frage geprüft.";
      } else $("#nav-score").textContent = "";
    },

    goto(i) {
      if (!$("#summary").classList.contains("hidden") || !$("#result").classList.contains("hidden")) {
        if (!this.submitted) {
          $("#summary").classList.add("hidden");
          $("#attempt").classList.remove("hidden");
        }
      }
      this.current = Math.floor(i / this.perPage) * this.perPage;
      $("#attempt").classList.remove("hidden");
      $("#result").classList.add("hidden");
      this.refresh();
      window.scrollTo(0, 0);
    },

    next() {
      if (this.current + this.perPage >= this.slots.length) {
        if (this.submitted) { this.showResult(); return; }
        this.showSummary();
        return;
      }
      this.current += this.perPage;
      this.refresh();
      window.scrollTo(0, 0);
    },

    prev() {
      this.current = Math.max(0, this.current - this.perPage);
      this.refresh();
      window.scrollTo(0, 0);
    },

    showSummary() {
      if (this.submitted) { this.showResult(); return; }
      $("#attempt").classList.add("hidden");
      const box = $("#summary");
      box.classList.remove("hidden");
      const tbody = $("#summary-body");
      tbody.innerHTML = "";
      this.slots.forEach((slot, i) => {
        const tr = el("tr");
        const a = el("a", { href: "#" }, String(i + 1));
        a.addEventListener("click", (e) => { e.preventDefault(); this.goto(i); });
        const td = el("td"); td.appendChild(a);
        tr.appendChild(td);
        let st = isAnswered(slot.q, slot.resp) ? "Antwort gespeichert" : "Bisher nicht beantwortet";
        if (slot.finished) st = slot.fraction >= 0.999 ? "Richtig" : slot.fraction > 0 ? "Teilweise richtig" : "Falsch";
        tr.appendChild(el("td", null, st + (slot.flagged ? " ⚑" : "")));
        tbody.appendChild(tr);
      });
      window.scrollTo(0, 0);
    },

    submit() {
      clearInterval(this.timerId);
      $("#timer").textContent = "";
      this.slots.forEach((slot) => {
        if (!slot.finished) {
          slot.fraction = grade(slot.q, slot.resp);
          slot.finished = true;
          recordResult(slot.q.id, slot.fraction);
        }
      });
      this.submitted = true;
      this.showResult();
    },

    showResult() {
      $("#attempt").classList.add("hidden");
      $("#summary").classList.add("hidden");
      const box = $("#result");
      box.classList.remove("hidden");
      const total = this.slots.length;
      const pts = this.slots.reduce((a, s) => a + s.fraction, 0);
      const pct = Math.round((pts / total) * 1000) / 10;
      $("#result-points").textContent = fmtPts(pts) + " / " + fmtPts(total);
      const big = $("#result-pct");
      big.textContent = pct.toLocaleString("de-AT") + " %";
      big.className = "big " + (pct >= 50 ? "pass" : "fail");

      const byTopic = {};
      this.slots.forEach((s) => {
        const t = s.q.topic;
        byTopic[t] = byTopic[t] || { n: 0, pts: 0 };
        byTopic[t].n++;
        byTopic[t].pts += s.fraction;
      });
      const tb = $("#result-topics");
      tb.innerHTML = "";
      Object.keys(byTopic).forEach((t) => {
        const r = byTopic[t];
        const tr = el("tr");
        tr.appendChild(el("td", null, TOPICS[t].name));
        tr.appendChild(el("td", null, fmtPts(r.pts) + " / " + r.n));
        tr.appendChild(el("td", null, Math.round((r.pts / r.n) * 100) + " %"));
        const td = el("td");
        td.appendChild(el("a", { href: "index.html#" + TOPICS[t].anchor }, "Skript"));
        tr.appendChild(td);
        tb.appendChild(tr);
      });
      window.scrollTo(0, 0);
    },

    review() {
      this.goto(0);
    },
  };

  window.App = App;
  document.addEventListener("DOMContentLoaded", () => {
    $("#next-btn").addEventListener("click", () => App.next());
    $("#prev-btn").addEventListener("click", () => App.prev());
    $("#back-to-attempt").addEventListener("click", () => App.goto(App.current));
    $("#submit-btn").addEventListener("click", () => {
      if (confirm("Alles abgeben und beenden? Nach der Abgabe können Sie Ihre Antworten nicht mehr ändern.")) App.submit();
    });
    $("#review-btn").addEventListener("click", () => App.review());
    $("#new-btn").addEventListener("click", () => {
      $("#result").classList.add("hidden");
      $("#attempt").classList.add("hidden");
      $("#setup").classList.remove("hidden");
      const stats = loadStats();
      $("#wrong-count").textContent = Object.keys(stats).filter((k) => stats[k].last === "wrong").length;
      App.updateCount();
      window.scrollTo(0, 0);
    });
    App.init();
  });
})();
