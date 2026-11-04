/* Rechentraining: Aufgaben mit zufälligen Zahlen (bei jedem Durchgang neu).
   Jeder Generator liefert eine Frage im Format von questions.js. */
(function () {
  "use strict";

  window.QUIZ_TOPICS.rechnen = { name: "Rechentraining mit Zufallszahlen (unbegrenzt)", short: "Rechentraining", anchor: "kennzahlen" };

  const rnd = (min, max, step) => {
    step = step || 1;
    const n = Math.floor((max - min) / step + 1e-9) + 1;
    return Math.round((min + Math.floor(Math.random() * n) * step) * 1e6) / 1e6;
  };
  const de = (v, dec) => Number(v).toLocaleString("de-AT", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  const eur = (v) => de(v) + " €";
  const pct = (v, dec) => de(v * 100, dec === undefined ? 1 : dec) + " %";
  const df = (i, t) => 1 / Math.pow(1 + i, t);

  const G = [
    { key: "roi_kum", make() {
      const K = rnd(200000, 900000, 10000), N = Math.round(K * rnd(0.6, 2.2, 0.05) / 10000) * 10000;
      const a = N / K * 100;
      return { q: `Kapitaleinsatz ${eur(K)}, Gesamtnutzen über die Laufzeit ${eur(N)}. Berechnen Sie den <b>kumulierten ROI</b> (Gesamtnutzen / Kapitaleinsatz × 100) in %.`,
        answer: a, tol: 0.5, unit: "%",
        explain: `${eur(N)} / ${eur(K)} × 100 = ${de(a, 1)} %. ${a > 100 ? "Über 100 %: die Kosten sind gedeckt." : "Unter 100 %: die Kosten sind nicht gedeckt."}` };
    } },
    { key: "roi_var", make() {
      const K = rnd(200000, 900000, 10000), N = Math.round(K * rnd(0.6, 2.2, 0.05) / 10000) * 10000;
      const a = (N - K) / K * 100;
      return { q: `Kapitaleinsatz ${eur(K)}, Gesamtnutzen ${eur(N)}. Berechnen Sie den ROI nach der <b>anglo-amerikanischen Variante</b> (Gesamtnutzen − Kapitaleinsatz) / Kapitaleinsatz in %.`,
        answer: a, tol: 0.5, unit: "%",
        explain: `(${eur(N)} − ${eur(K)}) / ${eur(K)} = ${de(a, 1)} %. Bei dieser Variante liegt die Grenze bei 0 % statt 100 %.` };
    } },
    { key: "payback_stat", make() {
      const I = rnd(100000, 800000, 10000), CF = rnd(40000, 250000, 5000);
      const a = I / CF;
      return { q: `Investition ${eur(I)}, gleichbleibende jährliche Rückflüsse ${eur(CF)}. Wie lange ist die <b>statische Amortisationsdauer</b> in Jahren? (2 Nachkommastellen)`,
        answer: a, tol: 0.011, unit: "Jahre",
        explain: `Payback = Investition / jährlicher Rückfluss = ${eur(I)} / ${eur(CF)} = ${de(a, 2)} Jahre.` };
    } },
    { key: "payback_uneven", make() {
      let I, cf, a;
      do {
        I = rnd(200000, 600000, 10000);
        cf = [0, 0, 0, 0].map(() => rnd(60000, 220000, 10000));
        let cum = 0; a = null;
        for (let t = 0; t < 4; t++) { if (cum + cf[t] >= I) { a = t + (I - cum) / cf[t]; break; } cum += cf[t]; }
      } while (a === null || a < 1.2);
      return { q: `Investition ${eur(I)} in t = 0. Rückflüsse: Jahr 1 ${eur(cf[0])}, Jahr 2 ${eur(cf[1])}, Jahr 3 ${eur(cf[2])}, Jahr 4 ${eur(cf[3])}. Wie lange ist der <b>statische Payback</b> in Jahren (unterjährig gleichmäßige Rückflüsse, 2 Nachkommastellen)?`,
        answer: a, tol: 0.011, unit: "Jahre",
        explain: `Rückflüsse kumulieren, bis die Investition erreicht ist, den Rest anteilig rechnen: Ergebnis ${de(a, 2)} Jahre.` };
    } },
    { key: "abzinsung", make() {
      const i = rnd(0.04, 0.15, 0.01), t = rnd(1, 6, 1);
      const a = df(i, t);
      return { q: `Berechnen Sie den <b>Abzinsungsfaktor</b> für Jahr ${t} bei einem Kalkulationszinssatz von ${pct(i, 0)} (4 Nachkommastellen).`,
        answer: a, tol: 0.0002,
        explain: `Abzinsungsfaktor = 1 / (1 + i)^t = 1 / ${de(1 + i, 2)}^${t} = ${de(a, 4)}.` };
    } },
    { key: "barwert", make() {
      const V = rnd(50000, 2000000, 10000), i = rnd(0.04, 0.12, 0.01), t = rnd(1, 5, 1);
      const a = V * df(i, t);
      return { q: `Im Jahr ${t} fließt ein Nutzen von ${eur(V)} zu. Kalkulationszins ${pct(i, 0)}. Wie hoch ist der <b>Barwert</b> in € (auf ganze Euro)?`,
        answer: a, tol: Math.max(2, V * 0.0001), unit: "€",
        explain: `Barwert = ${eur(V)} × 1 / ${de(1 + i, 2)}^${t} = ${eur(a)}. Die Toleranz deckt Rundung des Abzinsungsfaktors auf 4 Stellen ab.` };
    } },
    { key: "npv", make() {
      const I = rnd(100000, 500000, 10000), i = rnd(0.05, 0.12, 0.01), n = rnd(3, 4, 1);
      const cf = Array.from({ length: n }, () => Math.round(I / n * rnd(0.8, 1.6, 0.05) / 1000) * 1000);
      const pv = cf.reduce((s, c, k) => s + c * df(i, k + 1), 0), a = pv - I;
      return { q: `Investition ${eur(I)} in t = 0. Rückflüsse: ${cf.map((c, k) => `Jahr ${k + 1} ${eur(c)}`).join(", ")}. Kalkulationszins ${pct(i, 0)}. Berechnen Sie den <b>Kapitalwert (NPV)</b> in € (auf ganze Euro).`,
        answer: a, tol: Math.max(5, cf.reduce((s, c) => s + c, 0) * 0.0001), unit: "€",
        explain: `Barwert der Rückflüsse = ${eur(pv)}, minus Investition ${eur(I)} ergibt NPV = ${eur(a)}. ${a > 0 ? "NPV größer 0: vorteilhaft." : "NPV kleiner 0: nicht vorteilhaft."}` };
    } },
    { key: "fk_steuer", make() {
      const z = rnd(0.03, 0.08, 0.0025), s = rnd(0.2, 0.3, 0.01);
      const a = z * (1 - s) * 100;
      return { q: `Fremdkapitalzins ${pct(z, 2)}, Steuersatz ${pct(s, 0)}. Wie hoch sind die <b>Fremdkapitalkosten nach Steuern</b> in %? (2 Nachkommastellen)`,
        answer: a, tol: 0.006, unit: "%",
        explain: `FK-Zinsen sind steuerlich abzugsfähig: ${pct(z, 2)} × (1 − ${de(s, 2)}) = ${de(a, 2)} %.` };
    } },
    { key: "capm", make() {
      const rf = rnd(0.015, 0.04, 0.0025), rm = rnd(0.06, 0.1, 0.005), b = rnd(0.6, 1.8, 0.1);
      const a = (rf + (rm - rf) * b) * 100;
      return { q: `CAPM: risikoloser Basiszins ${pct(rf, 2)}, Marktrendite ${pct(rm, 1)}, Beta ${de(b, 1)}. Wie hoch sind die <b>Eigenkapitalkosten</b> in %? (2 Nachkommastellen)`,
        answer: a, tol: 0.006, unit: "%",
        explain: `EK-Kosten = Basiszins + (Marktrendite − Basiszins) × Beta = ${pct(rf, 2)} + (${pct(rm, 1)} − ${pct(rf, 2)}) × ${de(b, 1)} = ${de(a, 2)} %.` };
    } },
    { key: "wacc", make() {
      const ek = rnd(0.3, 0.7, 0.05), kek = rnd(0.08, 0.14, 0.005), kfk = rnd(0.02, 0.06, 0.005);
      const a = (ek * kek + (1 - ek) * kfk) * 100;
      return { q: `Eigenkapitalanteil ${pct(ek, 0)} mit Kosten von ${pct(kek, 1)}, Fremdkapitalanteil ${pct(1 - ek, 0)} mit Kosten nach Steuern von ${pct(kfk, 1)}. Wie hoch ist der <b>WACC</b> in %? (2 Nachkommastellen)`,
        answer: a, tol: 0.006, unit: "%",
        explain: `WACC = ${de(ek, 2)} × ${pct(kek, 1)} + ${de(1 - ek, 2)} × ${pct(kfk, 1)} = ${de(a, 2)} %.` };
    } },
    { key: "rel_marktanteil", make() {
      const own = rnd(2, 40, 1) * 1e6, comp = rnd(2, 40, 1) * 1e6;
      const a = own / comp;
      return { q: `Eigener Umsatz ${de(own / 1e6)} Mio. €, Umsatz des stärksten Konkurrenten ${de(comp / 1e6)} Mio. €. Wie hoch ist der <b>relative Marktanteil</b> (BCG)? (2 Nachkommastellen)`,
        answer: a, tol: 0.006,
        explain: `Relativer Marktanteil = eigener Marktanteil / Marktanteil des stärksten Konkurrenten = ${de(own / 1e6)} / ${de(comp / 1e6)} = ${de(a, 2)}. ${a >= 1 ? "Größer 1: man ist selbst Marktführer." : "Kleiner 1: ein Konkurrent ist größer."}` };
    } },
    { key: "bcg_feld", make() {
      const own = rnd(2, 40, 1), comp = rnd(2, 40, 1), g = rnd(-5, 18, 1);
      const rel = own / comp, high = g >= 10;
      const field = rel >= 1 ? (high ? "Star" : "Cash Cow") : (high ? "Question Mark" : "Poor Dog");
      const opts = ["Star", "Question Mark", "Cash Cow", "Poor Dog"];
      return { type: "single", noShuffle: true,
        q: `Ein Produkt hat ${de(own)} Mio. € Umsatz, der stärkste Konkurrent ${de(comp)} Mio. €. Das Marktwachstum beträgt ${de(g)} %. In welches <b>BCG-Feld</b> gehört das Produkt? (hohes Wachstum hier: ab 10 %)`,
        options: opts, answer: opts.indexOf(field),
        explain: `Relativer Marktanteil ${de(rel, 2)} (${rel >= 1 ? "hoch, mindestens 1" : "niedrig, unter 1"}), Wachstum ${de(g)} % (${high ? "hoch" : "niedrig"}) ergibt ${field}.` };
    } },
    { key: "pricing_hebel", make() {
      const P = rnd(50, 200, 10), vc = Math.round(P * rnd(0.4, 0.7, 0.05)), Q = rnd(0.5, 3, 0.5) * 1e6;
      const profit0 = (P - vc) * Q, F = Math.round(profit0 * rnd(0.5, 0.8, 0.05) / 1e6) * 1e6, x = rnd(0.05, 0.1, 0.01);
      const g0 = (P - vc) * Q - F, g1 = (P * (1 + x) - vc) * Q - F, a = (g1 / g0 - 1) * 100;
      return { q: `Preis ${eur(P)}, variable Kosten ${eur(vc)} pro Stück, Absatz ${de(Q / 1e6, 1)} Mio. Stück, Fixkosten ${de(F / 1e6)} Mio. €. Um wie viel <b>Prozent steigt der Gewinn</b>, wenn der Preis um ${pct(x, 0)} erhöht wird (alles andere gleich)? (1 Nachkommastelle)`,
        answer: a, tol: 0.15, unit: "%",
        explain: `Gewinn vorher ${de(g0 / 1e6, 2)} Mio. €, nachher ${de(g1 / 1e6, 2)} Mio. €, das sind +${de(a, 1)} %. Der Preis ist der stärkste Gewinnhebel.` };
    } },
    { key: "pricing_senkung", make() {
      const P = rnd(50, 200, 10), c = Math.round(P * rnd(0.5, 0.8, 0.05)), x = rnd(0.05, 0.15, 0.01);
      const m0 = P - c, m1 = P * (1 - x) - c;
      if (m1 <= 0) return this.make();
      const a = (m0 / m1 - 1) * 100;
      return { q: `Preis ${eur(P)}, Kosten ${eur(c)} pro Stück. Der Preis wird um ${pct(x, 0)} gesenkt. Um wie viel <b>Prozent muss die Absatzmenge steigen</b>, damit der Gewinn gleich bleibt? (1 Nachkommastelle)`,
        answer: a, tol: 0.15, unit: "%",
        explain: `Marge pro Stück sinkt von ${eur(m0)} auf ${de(m1, 2)} €. Nötige Mehrmenge = ${de(m0, 2)} / ${de(m1, 2)} − 1 = ${de(a, 1)} %.` };
    } },
    { key: "erfahrungskurve", make() {
      const c0 = rnd(5, 50, 1), r = rnd(0.1, 0.3, 0.05), k = rnd(1, 4, 1);
      const a = c0 * Math.pow(1 - r, k);
      return { q: `Erfahrungskurve: Bei jeder Verdoppelung der kumulierten Menge sinken die Stückkosten um ${pct(r, 0)}. Heute kostet ein Stück ${eur(c0)}. Was kostet es nach ${k} Verdoppelung${k > 1 ? "en" : ""} (in €, 2 Nachkommastellen)?`,
        answer: a, tol: 0.011, unit: "€",
        explain: `${eur(c0)} × (1 − ${de(r, 2)})^${k} = ${de(a, 2)} €.` };
    } },
    { key: "skonto", make() {
      const s = rnd(1, 3, 0.5), frist = rnd(7, 14, 1), ziel = rnd(30, 60, 10);
      const a = s * 360 / (ziel - frist);
      return { q: `Zahlungsbedingung: ${de(s, 1)} % Skonto bei Zahlung innerhalb von ${frist} Tagen, sonst netto in ${ziel} Tagen. Welchem ungefähren <b>Jahreszins</b> entspricht der Verzicht auf Skonto? Rechnen Sie mit Skontosatz × 360 / (Zahlungsziel − Skontofrist), in %, 1 Nachkommastelle.`,
        answer: a, tol: 0.15, unit: "%",
        explain: `${de(s, 1)} % × 360 / (${ziel} − ${frist}) = ${de(a, 1)} % p. a. Der Lieferantenkredit ist deshalb der teuerste Kredit.` };
    } },
  ];

  window.QUIZ_GENERATORS = G;
  window.makeGenerated = function (keys) {
    return (keys || G.map((g) => g.key)).map((k) => {
      const g = G.find((x) => x.key === k);
      const q = g.make();
      return Object.assign({ id: "gen_" + k, topic: "rechnen", type: "num" }, q);
    });
  };
})();
