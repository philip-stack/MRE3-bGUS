/* Karteikarten aus dem Fragenkatalog. Nutzt denselben Lernstand wie der Fragenkatalog. */
(function () {
  "use strict";

  const STORE_KEY = "gus-quiz-stats-v1";
  const TOPICS = window.QUIZ_TOPICS;
  const ALL = window.QUESTIONS;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s);
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const fmtNum = (n) => Number(n).toLocaleString("de-AT", { maximumFractionDigits: 4 });

  function loadStats() { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; } }
  function saveStats(s) { try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) { /* privates Fenster */ } }
  function record(id, ok) {
    const st = loadStats(); const s = st[id] || { right: 0, wrong: 0, last: null };
    ok ? s.right++ : s.wrong++; s.last = ok ? "right" : "wrong"; st[id] = s; saveStats(st);
  }

  function front(q) {
    let h = `<div>${q.q}</div>`;
    if (q.type === "single" || q.type === "multi") {
      h += `<p class="small muted" style="margin:10px 0 0">${q.type === "multi" ? "Mehrere Antworten können richtig sein:" : "Eine Antwort ist richtig:"}</p>`;
      h += "<ol type=\"a\">" + q.options.map((o) => `<li>${esc(o)}</li>`).join("") + "</ol>";
    } else if (q.type === "tf") {
      h += `<p class="small muted" style="margin:10px 0 0">Wahr oder falsch?</p>`;
    } else if (q.type === "match") {
      h += `<p class="small muted" style="margin:10px 0 0">Zuordnen:</p><ul>` + q.pairs.map((p) => `<li>${esc(p[0])}</li>`).join("") + "</ul>";
    } else if (q.type === "gap") {
      h += `<p style="margin:10px 0 0">${esc(q.text).replace(/\{\}/g, "_____")}</p>`;
    }
    return h;
  }

  function back(q) {
    let a;
    switch (q.type) {
      case "single": a = `<b>${esc(q.options[q.answer])}</b>`; break;
      case "multi": a = "<ul>" + q.answer.map((i) => `<li><b>${esc(q.options[i])}</b></li>`).join("") + "</ul>"; break;
      case "tf": a = `<b>${q.answer ? "Wahr" : "Falsch"}</b>`; break;
      case "match": a = "<ul>" + q.pairs.map((p) => `<li>${esc(p[0])} → <b>${esc(p[1])}</b></li>`).join("") + "</ul>"; break;
      case "gap": { let i = 0; a = esc(q.text).replace(/\{\}/g, () => `<b>${esc(q.gaps[i++][0])}</b>`); break; }
      case "num": a = `<b>${fmtNum(q.answer)}${q.unit ? " " + q.unit : ""}</b>`; break;
      default: a = "";
    }
    let h = `<div class="answer">${a}</div>`;
    if (q.explain) h += `<div class="explain">${q.explain}</div>`;
    return h;
  }

  let deck = [], idx = 0, total = 0, known = 0, unknown = 0, flipped = false;

  function selection() {
    const topics = Array.from(document.querySelectorAll("input[name=k-topic]:checked")).map((c) => c.value);
    let cards = ALL.filter((q) => topics.includes(q.topic));
    if (topics.includes("rechnen") && window.makeGenerated) cards = cards.concat(window.makeGenerated());
    if (document.querySelector("input[name=k-mode]:checked").value === "open") {
      const st = loadStats();
      cards = cards.filter((q) => !(st[q.id] && st[q.id].last === "right"));
    }
    return cards;
  }

  function updateCount() { const n = selection().length; $("#k-count").textContent = n; $("#k-start").disabled = n === 0; }

  function show() {
    const q = deck[idx];
    flipped = false;
    $("#k-front").innerHTML = front(q);
    $("#k-back").innerHTML = back(q);
    $("#k-back").classList.add("hidden");
    $("#k-show-row").classList.remove("hidden");
    $("#k-rate-row").classList.add("hidden");
    $("#k-pos").textContent = `Karte ${Math.min(idx + 1, deck.length)} von ${deck.length} · gewusst ${known}`;
    $("#k-topic").textContent = TOPICS[q.topic].short;
    $("#k-bar").style.width = (known / total * 100) + "%";
  }

  function flip() {
    if (flipped) return;
    flipped = true;
    $("#k-back").classList.remove("hidden");
    $("#k-show-row").classList.add("hidden");
    $("#k-rate-row").classList.remove("hidden");
  }

  function rate(ok) {
    if (!flipped) return;
    const q = deck[idx];
    record(q.id, ok);
    if (ok) known++; else { unknown++; deck.push(q); }  // nicht gewusste Karte kommt später nochmal
    idx++;
    if (idx >= deck.length) return finish();
    show();
    window.scrollTo(0, 0);
  }

  function finish() {
    $("#k-run").classList.add("hidden");
    $("#k-done").classList.remove("hidden");
    $("#k-summary").textContent = `${total} Karten durchgearbeitet, ${unknown}× „nicht gewusst“ wiederholt. Alle Karten zum Schluss gewusst.`;
  }

  function start() {
    deck = shuffle(selection());
    if (!deck.length) return;
    idx = 0; total = deck.length; known = 0; unknown = 0;
    $("#k-setup").classList.add("hidden");
    $("#k-done").classList.add("hidden");
    $("#k-run").classList.remove("hidden");
    show();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const box = $("#k-topics");
    Object.keys(TOPICS).forEach((key) => {
      const lbl = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox"; cb.name = "k-topic"; cb.value = key; cb.checked = key !== "rechnen" && !TOPICS[key].off;
      cb.addEventListener("change", updateCount);
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(" " + TOPICS[key].name));
      box.appendChild(lbl);
    });
    document.querySelectorAll("input[name=k-mode]").forEach((r) => r.addEventListener("change", updateCount));
    $("#k-start").addEventListener("click", start);
    $("#k-show").addEventListener("click", flip);
    $("#k-yes").addEventListener("click", () => rate(true));
    $("#k-no").addEventListener("click", () => rate(false));
    $("#k-again").addEventListener("click", () => { $("#k-done").classList.add("hidden"); $("#k-setup").classList.remove("hidden"); updateCount(); });
    $("#k-stop").addEventListener("click", (e) => { e.preventDefault(); $("#k-run").classList.add("hidden"); $("#k-setup").classList.remove("hidden"); updateCount(); });
    document.addEventListener("keydown", (e) => {
      if ($("#k-run").classList.contains("hidden")) return;
      if (e.code === "Space") { e.preventDefault(); flip(); }
      else if (e.key === "1") rate(false);
      else if (e.key === "2") rate(true);
    });
    updateCount();
  });
})();
