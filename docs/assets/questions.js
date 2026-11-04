/* Fragenkatalog GUS – Geschäftsmodellentwicklung und Start-Up Management
   Quellen: Skriptum "Business Case" (Neussner, nach Brugger), Folien "Strategisches Management",
   WKO "Leitfaden zur Gründung 2026", LV-Info.

   Fragetypen:
     single – eine richtige Antwort (answer = Index)
     multi  – mehrere richtige Antworten (answer = Indizes), Moodle-Teilpunkte
     tf     – Wahr/Falsch (answer = true/false)
     match  – Zuordnung (pairs = [links, rechts], optional distractors)
     num    – Zahl (answer, tol, unit)
     gap    – Lückentext (text mit {} je Lücke, gaps = [[richtig, falsch, ...], ...])
*/
window.QUIZ_TOPICS = {
  bc:         { name: "Business Case – Grundlagen & Erstellung", short: "Business Case", anchor: "bc" },
  kosten:     { name: "Business Case – Kosten & Nutzen", short: "Kosten & Nutzen", anchor: "kosten" },
  kennzahlen: { name: "Investitionsrechnung & Kennzahlen (inkl. Rechnen)", short: "Kennzahlen", anchor: "kennzahlen" },
  strategie:  { name: "Strategiebegriff & Strategiearten", short: "Strategie", anchor: "strategie" },
  analyse:    { name: "Strategische Analyseinstrumente", short: "Analyseinstrumente", anchor: "analyse" },
  pricing:    { name: "Pricing", short: "Pricing", anchor: "pricing" },
  gruendung:  { name: "Gründung – Gewerbe, Rechtsformen, Ablauf", short: "Gründung: Recht", anchor: "gruendung" },
  planung:    { name: "Gründung – Planung, Finanzierung, Steuern & SV", short: "Gründung: Planung", anchor: "planung" },
};

window.QUESTIONS = [
  /* ===================== BUSINESS CASE – GRUNDLAGEN ===================== */
  { id: "bc01", topic: "bc", type: "single",
    q: "Welche Aussage gibt die Definition eines Business Case (nach Brugger) am besten wieder?",
    options: [
      "Ein Business Case fasst alle entscheidungsrelevanten Aspekte eines geplanten Vorhabens zusammen, um die wirtschaftliche Vorteilhaftigkeit und strategische Konformität aufzuzeigen und eine Management-Entscheidung zu ermöglichen.",
      "Ein Business Case ist ein Gesamtplan aller Einnahmen und Ausgaben eines Unternehmens für die nächsten drei bis fünf Jahre.",
      "Ein Business Case ist ein Dokument zur Gewinnung externer Investoren.",
      "Ein Business Case ist die nachträgliche Erfolgskontrolle eines abgeschlossenen Projekts.",
    ],
    answer: 0,
    explain: "Der BC betrachtet ein konkretes Vorhaben. Er soll wirtschaftliche Vorteilhaftigkeit und strategische Konformität zeigen und die Management-Entscheidung ermöglichen." },

  { id: "bc02", topic: "bc", type: "multi",
    q: "Welche Unterschiede zwischen Business Case und Business Plan sind korrekt?",
    options: [
      "Der Business Case betrachtet ein konkretes Projekt bzw. eine Investition, der Business Plan eine ganze organisatorische Einheit.",
      "Der Business Case hat eine ausschließlich nach innen gerichtete Funktion.",
      "Ein Business Plan kann auch für Außenstehende (z. B. Kapitalgeber, IPO) erstellt werden.",
      "Der Business Case ist immer einjährig, der Business Plan mehrjährig.",
      "Der Business Plan liefert die Detaildaten für den Business Case.",
    ],
    answer: [0, 1, 2],
    explain: "Beide sind mehrjährig und zukunftsorientiert. Die Richtung der Daten ist umgekehrt: Der Business Case liefert Angaben für den Business Plan (aggregierte Investitionsplanung)." },

  { id: "bc03", topic: "bc", type: "tf",
    q: "Ein Business Case wird sowohl für die unternehmensinterne Verwendung als auch für externe Investoren erstellt.",
    answer: false,
    explain: "Der BC hat eine ausschließlich nach innen gerichtete Funktion. Für externe Adressaten ist der Business Plan da." },

  { id: "bc04", topic: "bc", type: "gap",
    q: "Ergänzen Sie den Lückentext.",
    text: "Der Business Case zielt auf Effektivität („{}“) und Effizienz („{}“) ab.",
    gaps: [["die richtigen Dinge tun", "die Dinge richtig tun", "die Dinge billig tun"],
           ["die Dinge richtig tun", "die richtigen Dinge tun", "die Dinge schnell tun"]] },

  { id: "bc05", topic: "bc", type: "match",
    q: "Ordnen Sie die Ergebnisse einer Wirtschaftlichkeitsanalyse der passenden Konsequenz zu, wenn sich ein Projekt (vorerst) <b>nicht</b> rechnet.",
    pairs: [
      ["Aussichtsreich", "Projekt sinnvoll überarbeiten und Wirtschaftlichkeit erneut prüfen"],
      ["Aussichtslos, aber andere Gründe", "Umsetzung trotzdem möglich, z. B. wegen strategischem Beitrag"],
      ["Aussichtslos", "Ablehnung des Projekts"],
    ] },

  { id: "bc06", topic: "bc", type: "match",
    q: "Ordnen Sie die Begriffe der Wirtschaftlichkeitsanalyse zu.",
    pairs: [
      ["Durchführungsentscheidung", "Absolute Vorteilhaftigkeit – Ja/Nein zu einer einzigen Investition"],
      ["Auswahlentscheidung", "Relative Vorteilhaftigkeit – welches von mehreren Projekten ist wirtschaftlicher?"],
    ] },

  { id: "bc07", topic: "bc", type: "multi",
    q: "Worin liegt laut Skriptum die Sinnhaftigkeit eines Business Case als Entscheidungsbasis? Ein Business Case …",
    options: [
      "schafft Transparenz, weil er alle entscheidungsrelevanten Argumente (nicht nur finanzielle) zusammenfasst.",
      "schafft Nachvollziehbarkeit, weil Herleitung der Zahlen und Annahmen ersichtlich sind.",
      "ist eine „Qualitätsbarriere“ und dient der Vorauswahl von Projektideen.",
      "erleichtert das Projektcontrolling (Soll-/Ist-Vergleich).",
      "garantiert, dass das Projekt erfolgreich wird.",
      "ersetzt die technische Planung des Projekts.",
    ],
    answer: [0, 1, 2, 3],
    explain: "Weitere Punkte: Entscheidungsqualität, Entscheidungsspielraum (Szenarien), Verbindlichkeit, finanzielle Klarheit (Zahlenfriedhöfe → Kennzahlen), Vergleichbarkeit. Der BC ergänzt die technische Planung, er ersetzt sie nicht." },

  { id: "bc08", topic: "bc", type: "match",
    q: "Ordnen Sie die Investitionsarten dem passenden Beispiel zu.",
    pairs: [
      ["Rationalisierungsinvestition", "Neue Maschine mit geringem Personalbedarf ersetzt alte mit hohem Personalbedarf"],
      ["Erweiterungsinvestition", "Ein vorhandenes System wird um Bestandteile ergänzt"],
      ["Ablösungsinvestition", "Umstellung der alten Telefonanlage auf IP-Telefonie (Technologiewechsel)"],
    ] },

  { id: "bc09", topic: "bc", type: "multi",
    q: "Welche Merkmale einer Investition nennt das Skriptum?",
    options: [
      "Investitionen haben Einmalcharakter und übersteigen den täglichen Cashbedarf.",
      "Investitionen werden geplant und haben ein festgelegtes Ziel.",
      "Man erwartet einen Nutzen, der die Investition übersteigt.",
      "Einnahmen und Ausgaben sind unregelmäßig über die Nutzungsdauer verteilt.",
      "Investitionen fallen regelmäßig jeden Monat in gleicher Höhe an.",
    ],
    answer: [0, 1, 2, 3] },

  { id: "bc10", topic: "bc", type: "match",
    q: "Value Creation vs. Value Protection: Ordnen Sie die Projekte zu (Brugger).",
    pairs: [
      ["CRM-Einführung", "Wertgenerierung → Kosten/Nutzen-Vergleich"],
      ["Konsolidierungsprojekt", "Wertgenerierung → Kosten/Nutzen-Vergleich"],
      ["Euro-Einführung", "Wertsicherung → Kostenvergleich"],
      ["Monitoring-Lösung", "Wertsicherung → Kostenvergleich"],
    ] },

  { id: "bc11", topic: "bc", type: "single",
    q: "Ein Projekt ist aufgrund gesetzlicher Vorschriften (z. B. Datenschutz) zwingend umzusetzen. Es gibt mehrere Umsetzungsalternativen. Welcher Business-Case-Fokus ist laut Entscheidungsbaum angebracht?",
    options: ["Business Case als Kostenvergleich", "Business Case als Kosten/Nutzen-Vergleich", "Kein Business Case", "Nur eine Risikoanalyse"],
    answer: 0,
    explain: "Notwendig wegen staatlicher Regelungen oder vertraglicher Verpflichtungen, und Alternativen vorhanden → Kostenvergleich. Ohne Alternativen braucht es keinen Business Case." },

  { id: "bc12", topic: "bc", type: "tf",
    q: "Laut Entscheidungsbaum ist kein Business Case nötig, wenn die Kosten unter einem definierten Grenzbereich liegen.",
    answer: true,
    explain: "Erste Frage im Entscheidungsbaum: Kosten über definiertem Grenzbereich? Bei Nein gibt es keinen Business Case. Beispiel im Skript: ab 100.000 € verpflichtend." },

  { id: "bc13", topic: "bc", type: "single",
    q: "Bei einer vorweggenommenen Projektentscheidung (z. B. Systemintegration nach einer Übernahme) ist die Inhouse-Realisierung billiger, ein System-Integrator aber deutlich schneller fertig. Welche Aussage stimmt?",
    options: [
      "Die teurere Variante kann wirtschaftlich sinnvoller sein, wenn der Zeitvorteil als Nutzen quantifiziert wird (Kosten/Nutzen-Analyse).",
      "Es ist immer die kostengünstigste Variante zu wählen.",
      "Bei vorweggenommenen Entscheidungen ist kein Business Case erforderlich.",
      "Der Zeitfaktor darf im Business Case nicht berücksichtigt werden.",
    ],
    answer: 0,
    explain: "Ohne Risiko- und Strategiefaktoren wäre die billigste Option die wirtschaftlichste. Zeitliche Vor- und Nachteile werden aber als Nutzen quantifiziert, damit wird daraus eine Kosten/Nutzen-Analyse." },

  { id: "bc14", topic: "bc", type: "multi",
    q: "Welche Risiken nennt das Skriptum bei der Option „Inhouse-Realisierung“?",
    options: ["Die interne Personalsituation (genug Mitarbeiter verfügbar?)", "Das intern vorhandene Know-how", "Wechselkursrisiko", "Fehlende Neutralität externer Berater"],
    answer: [0, 1] },

  { id: "bc15", topic: "bc", type: "match",
    q: "Vor- und Nachteile externer Berater bei der Business-Case-Erstellung: Ordnen Sie zu.",
    pairs: [
      ["Neutralität", "Vorteil"],
      ["Glaubwürdigkeit gegenüber dem Management", "Vorteil"],
      ["Schlichtung bei divergierenden internen Standpunkten", "Vorteil"],
      ["Kein Know-how-Transfer in die eigene Organisation", "Nachteil"],
      ["Abhängigkeit bei späteren Änderungen", "Nachteil"],
      ["Eigener formaler Aufbau erschwert die Vergleichbarkeit (Standardisierung)", "Nachteil"],
    ] },

  { id: "bc16", topic: "bc", type: "single",
    q: "Wer trägt die Verantwortung für die Erstellung eines Business Case?",
    options: ["Der projektanfordernde Bereich", "Das Controlling", "Die Geschäftsführung", "Die IT-Abteilung"],
    answer: 0,
    explain: "Interne Dienstleister wie Controlling, Finanzen oder HR begleiten die Erstellung und verantworten die Qualität ihrer Zulieferungen. Das Management entscheidet." },

  { id: "bc17", topic: "bc", type: "match",
    q: "Stakeholder bei der BC-Erstellung (Beispiel Lager-IT): Wer liefert was?",
    pairs: [
      ["Finanzabteilung / Controlling", "Steuersatz, Kapitalisierungssatz, Abschreibungsregeln, Lohnsätze"],
      ["Personalabteilung", "Kosten für Neuanstellungen, Konzept für Abfindungen"],
      ["Business Unit", "Business-Anteil der Kosten und „Business-Benefits“"],
      ["Informatik", "IT-Anteil der Kosten und „Informatik-Benefits“"],
    ] },

  { id: "bc18", topic: "bc", type: "single",
    q: "Was ist laut Skriptum ein häufiger Fehler bei der Erstellung eines Business Case?",
    options: [
      "Man beginnt sofort mit der Kosten-Nutzen-Abschätzung, ohne zuerst Aktivitäten zu planen und die System-Lösung (Ist und Soll) zu konzipieren.",
      "Man schreibt das Management Summary zuletzt.",
      "Man berücksichtigt die Unterlassungsalternative.",
      "Man dokumentiert die Annahmen mit Quellenangaben.",
    ],
    answer: 0 },

  { id: "bc19", topic: "bc", type: "match",
    q: "Ordnen Sie die Tätigkeiten den drei Phasen der Business-Case-Erstellung zu.",
    pairs: [
      ["Organisation, Untersuchungsbereich, Analysemodell, Betrachtungshorizont festlegen", "Phase 1 – Initialisierung"],
      ["Kosten und Nutzen erheben, Wirtschaftlichkeitsmodell, Sensitivitäts-, Risiko- und Strategieanalyse", "Phase 2 – Entwicklung"],
      ["Annahmen validieren, Double Counting prüfen, Verabschiedung oder Ablehnung", "Phase 3 – Prüfung"],
    ] },

  { id: "bc20", topic: "bc", type: "single",
    q: "In welcher Phase wird der Kalkulationszinsfuß, der Steuersatz und die Abschreibungsdauer (Analysemodell) festgelegt?",
    options: ["Initialisierung", "Entwicklung", "Prüfung", "Umsetzung"],
    answer: 0 },

  { id: "bc21", topic: "bc", type: "single",
    q: "Was versteht man im Business Case unter „Double Counting“?",
    options: [
      "Nutzen wird zweimal verkauft – innerhalb dieses Business Case oder zusätzlich in einem anderen",
      "Kosten werden sowohl als intern als auch als extern ausgewiesen",
      "Das doppelte Prüfen der Berechnung durch Controlling",
      "Die Doppelaufwendungen in der Anlaufphase",
    ],
    answer: 0 },

  { id: "bc22", topic: "bc", type: "multi",
    q: "Welche Kapitel sollte die Dokumentation eines Business Case laut Skriptum mindestens enthalten?",
    options: ["Management Summary", "Projektübersicht", "Wirtschaftlichkeitsnachweis", "Projektdetails", "Bilanz der letzten drei Jahre", "Lebenslauf des Projektleiters"],
    answer: [0, 1, 2, 3] },

  { id: "bc23", topic: "bc", type: "tf",
    q: "Das Management Summary wird als erstes Kapitel geschrieben, da es die Struktur des restlichen Business Case vorgibt.",
    answer: false,
    explain: "Das Management Summary wird zuletzt geschrieben. Es ist die „Visitkarte“ der handelnden Personen." },

  { id: "bc24", topic: "bc", type: "multi",
    q: "Was gehört laut Skriptum in das Kapitel „Projektdetails“?",
    options: ["Projektorganisation (z. B. Projektsteuerungsausschuss)", "Projektplan mit Meilensteinen und Arbeitspaketen", "Kritische Erfolgsfaktoren (KEF)", "Erfolgsmessung über KPIs", "Kapitalwertberechnung", "SWOT-Analyse der Szenarien"],
    answer: [0, 1, 2, 3],
    explain: "Die Kapitalwertberechnung steht im Wirtschaftlichkeitsnachweis, die Szenarien bzw. SWOT in der Projektübersicht." },

  { id: "bc25", topic: "bc", type: "single",
    q: "Welche Alternative darf bei der Darstellung der Szenarien in der Projektübersicht laut Skriptum nicht vergessen werden?",
    options: ["Die Unterlassungsalternative („nichts tun“)", "Die Outsourcing-Alternative", "Die Leasing-Alternative", "Die Best-Case-Alternative"],
    answer: 0 },

  { id: "bc26", topic: "bc", type: "tf",
    q: "Im Wirtschaftlichkeitsnachweis dürfen nur Vorteile verarbeitet werden, die durch genau dieses Projekt generiert werden.",
    answer: true,
    explain: "Projekte dürfen nicht vermischt und Nutzen nicht mehrfach angerechnet werden." },

  { id: "bc27", topic: "bc", type: "single",
    q: "Warum gilt der direkte Vergleich mit dem Mitbewerb in der Projektübersicht als „zweischneidig“?",
    options: [
      "Er kann als Angriff auf die zuständigen Führungskräfte verstanden werden.",
      "Er ist rechtlich verboten.",
      "Mitbewerberdaten dürfen nicht verwendet werden.",
      "Er verfälscht die Kapitalwertberechnung.",
    ],
    answer: 0 },

  { id: "bc28", topic: "bc", type: "multi",
    q: "Laut LV-Info soll die Business-Case-Präsentation folgende Inhalte haben. Welche gehören dazu?",
    options: ["Ausgangssituation", "Was wird investiert?", "Sollsituation", "Risiken", "Kennzahlen (Payback, NPV und ROI)", "Investitionsempfehlung", "Marketingmix (4P)", "Organigramm des Unternehmens"],
    answer: [0, 1, 2, 3, 4, 5] },

  { id: "bc29", topic: "bc", type: "multi",
    q: "Welche Faktoren sind nach Brugger maßgebend für den Variantenentwurf einer Investition (Abb. „Investitionsentscheidung“)?",
    options: ["Risiken (Risiko-Optionen)", "Strategie (Strategie-Optionen)", "Kosten", "Nutzen"],
    answer: [0, 1],
    explain: "Kosten und Nutzen sind maßgebend für die Wirtschaftlichkeit, Risiken und Strategie für den Variantenentwurf." },

  /* ===================== KOSTEN & NUTZEN ===================== */
  { id: "ko01", topic: "kosten", type: "match",
    q: "Ordnen Sie die Kostenpositionen zu.",
    pairs: [
      ["Kosten für Softwarelizenzen", "Externe Kosten"],
      ["Consulting / Beratung", "Externe Kosten"],
      ["Löhne und Gehälter des Projektteams", "Interne Kosten"],
      ["Backfill-Kosten", "Interne Kosten"],
      ["Arbeitsplatz- und IT-Umlagen (Sekundärkosten)", "Interne Kosten"],
      ["Intern verrechnete Leistungen (z. B. HR, Controlling)", "Interne Kosten"],
    ] },

  { id: "ko02", topic: "kosten", type: "single",
    q: "Was versteht man unter „Backfill“-Kosten?",
    options: [
      "Kosten für Mitarbeiter, die Projektteammitglieder im Tagesgeschäft ersetzen",
      "Kosten für die Wiederauffüllung des Lagers",
      "Kosten für das Nachfüllen von Verbrauchsmaterial",
      "Rückbaukosten am Ende der Nutzungsdauer",
    ],
    answer: 0 },

  { id: "ko03", topic: "kosten", type: "tf",
    q: "Interne Kosten können im Business Case vernachlässigt werden, da sie (Fixkostencharakter) ohnehin anfallen.",
    answer: false,
    explain: "Für einen fairen Vergleich müssen sie einbezogen werden. Sonst wirkt ein Projekt mit nur internen Kosten künstlich rentabel. Sind die Kapazitäten ohne Projekt nicht ausgelastet, müsste man sie abbauen." },

  { id: "ko04", topic: "kosten", type: "single",
    q: "Welchen Vorteil haben interne Ressourcen kostenmäßig gegenüber externen?",
    options: ["Sie werden i. d. R. ohne Gewinnaufschlag kalkuliert.", "Sie verursachen keine Kosten.", "Sie müssen nicht abgeschrieben werden.", "Sie sind immer schneller verfügbar."],
    answer: 0 },

  { id: "ko05", topic: "kosten", type: "match",
    q: "Ordnen Sie zu: Wie werden externe Kosten nach Brugger gegliedert?",
    pairs: [
      ["Dienstleistungen", "erfolgswirksam (werden nicht abgeschrieben)"],
      ["Reisekosten", "erfolgswirksam (werden nicht abgeschrieben)"],
      ["Hardware", "bilanzwirksam (werden abgeschrieben)"],
      ["Software", "bilanzwirksam (werden abgeschrieben)"],
    ],
    explain: "Die Abbildung (Brugger Abb. 4.3) ordnet die Positionen nicht einzeln zu. Die Zuordnung folgt der Kostentabelle im Skript: Dienstleistungen und Reisen sind „Kosten für Dienstleistungen“, Hardware, Software und Daten sind „Kosten für Anschaffungen“." },

  { id: "ko06", topic: "kosten", type: "single",
    q: "Welche Unterscheidung nach dem zeitlichen Anfall ist bei der Erfassung von Projektkosten zu treffen?",
    options: ["Einmalige Kosten (Investitionskosten) und laufende Kosten (Betriebskosten)", "Fixe und variable Kosten", "Direkte und indirekte Kosten", "Primär- und Sekundärkosten"],
    answer: 0 },

  { id: "ko07", topic: "kosten", type: "tf",
    q: "Einmalkosten können auch am Ende der Nutzungsdauer anfallen (z. B. Abbau eines Windrads, Bodenreinigung bei einer Tankstelle).",
    answer: true },

  { id: "ko08", topic: "kosten", type: "single",
    q: "Was zeigt die Abbildung „Ablöse- vs. Anlaufkosten“ (Brugger)?",
    options: [
      "In der Einführungsphase fallen die Betriebskosten der bestehenden und der neuen Lösung parallel an (Doppelaufwendungen).",
      "Die neue Lösung verursacht sofort geringere Kosten.",
      "Die Projektkosten sinken linear über die Projektdauer.",
      "Ablösekosten fallen nur bei Leasing an.",
    ],
    answer: 0 },

  { id: "ko09", topic: "kosten", type: "multi",
    q: "Welche Positionen zählen zu den „sonstigen einmaligen Kosten“?",
    options: ["Unkosten für die vorzeitige Auflösung von Leasing-, Wartungs- oder Outsourcing-Verträgen", "Reisekosten", "Software-Lizenzen", "Schulung der Anwender"],
    answer: [0, 1],
    explain: "Lizenzen zählen zu den Investitionen, Anwenderschulungen zum Arbeits- bzw. Dienstleistungsaufwand." },

  { id: "ko10", topic: "kosten", type: "tf",
    q: "Bei IT-Projekten machen die Kosten für den Kauf von Hard- und Software in der Regel den größten Teil der Projektkosten aus.",
    answer: false,
    explain: "Sie sind meist nur ein kleiner Teil. Den größeren Anteil machen Anpassung, Installation, Integration, Administration und organisatorische Kosten aus." },

  { id: "ko11", topic: "kosten", type: "match",
    q: "Ordnen Sie die Nutzenbeispiele der richtigen Nutzenkategorie zu.",
    pairs: [
      ["Geringere Kosten für Wartungsverträge", "direkt monetär messbar"],
      ["Geringere Frachtkosten", "direkt monetär messbar"],
      ["Höhere Mitarbeiterproduktivität", "indirekt monetär messbar"],
      ["Höhere Kundenzufriedenheit", "indirekt monetär messbar"],
      ["Imagegewinn", "nicht monetär messbar"],
      ["Strategiekonformität", "nicht monetär messbar"],
    ] },

  { id: "ko12", topic: "kosten", type: "single",
    q: "Warum entfällt beim Nutzen die Unterscheidung zwischen Projekt- und Betriebsphase?",
    options: ["Weil Nutzen erst in der Betriebsphase eintreten kann", "Weil Nutzen nicht abgezinst wird", "Weil Nutzen immer einmalig ist", "Weil Nutzen nur geschätzt wird"],
    answer: 0 },

  { id: "ko13", topic: "kosten", type: "multi",
    q: "In welche Nutzenkategorien gliedert Brugger den Nutzen (Abb. „Klassifikation Nutzen“)?",
    options: ["Höherer Umsatz", "Produktivitätssteigerungen", "Geringere Betriebskosten", "Geringeres Umlaufvermögen", "Höhere Abschreibungen", "Höherer Fremdkapitalanteil"],
    answer: [0, 1, 2, 3] },

  { id: "ko14", topic: "kosten", type: "gap",
    q: "Ergänzen Sie.",
    text: "Nutzen wird in quantifizierbaren ({}) und nicht quantifizierbaren ({}) Nutzen unterschieden. Quantifizierbarer Nutzen ist entweder direkt oder {} quantifizierbar.",
    gaps: [["tangible", "intangible", "liquid"], ["intangible", "tangible", "fixed"], ["indirekt", "teilweise", "nachträglich"]] },

  { id: "ko15", topic: "kosten", type: "single",
    q: "Warum wird die Beurteilung auf Cashflow-Basis als „objektiver“ angesehen als auf GuV-Basis?",
    options: [
      "Der Cashflow kann nicht durch Bewertungsspielräume (z. B. Nutzungsdauer) beeinflusst werden.",
      "Der Cashflow enthält die Abschreibungen als Auszahlung.",
      "Der Cashflow ist immer höher als der Gewinn.",
      "Die GuV berücksichtigt keine Steuern.",
    ],
    answer: 0,
    explain: "Motto: „Profit is an opinion, cash is fact.“" },

  { id: "ko16", topic: "kosten", type: "single",
    q: "Vervollständigen Sie das Motto aus dem Skriptum: „Profit is an opinion, …“",
    options: ["cash is fact.", "cash is king.", "loss is reality.", "value is truth."],
    answer: 0 },

  { id: "ko17", topic: "kosten", type: "single",
    q: "In der Cashflow-Rechnung (E-Shop-Beispiel) werden die Abschreibungen zuerst abgezogen und nach den Steuern wieder addiert. Warum?",
    options: [
      "Abschreibungen sind nicht zahlungswirksam, mindern aber die Steuerbemessungsgrundlage.",
      "Abschreibungen werden doppelt besteuert.",
      "Damit der Cashflow kleiner wird.",
      "Weil Abschreibungen Einzahlungen sind.",
    ],
    answer: 0 },

  { id: "ko18", topic: "kosten", type: "multi",
    q: "Welche Fragen stellen sich bei der Vorab-Erfassung interner Kosten?",
    options: [
      "Welche Mitarbeiter sind in welchen Phasen in welchem Umfang beteiligt?",
      "Welcher Tages- bzw. Stundensatz ist sinnvoll?",
      "Müssen Abfertigungen bezahlt werden?",
      "Entstehen Backfill-Kosten?",
      "Wie hoch ist der Marktanteil des stärksten Konkurrenten?",
    ],
    answer: [0, 1, 2, 3] },

  /* ===================== KENNZAHLEN / INVESTITIONSRECHNUNG ===================== */
  { id: "ke01", topic: "kennzahlen", type: "match",
    q: "Ordnen Sie die Investitionsrechnungsverfahren der richtigen Gruppe zu (Brugger).",
    pairs: [
      ["Return on Investment (ROI)", "statisches Verfahren"],
      ["Payback (statisch)", "statisches Verfahren"],
      ["Net Present Value (NPV)", "dynamisches Verfahren"],
      ["Internal Rate of Return (IRR)", "dynamisches Verfahren"],
      ["Baldwin-Zinsfuß", "dynamisches Verfahren"],
      ["Value at Stake (VaS)", "value-orientiertes Verfahren"],
    ] },

  { id: "ke02", topic: "kennzahlen", type: "single",
    q: "Worin unterscheiden sich statische und dynamische Investitionsrechnungsverfahren?",
    options: [
      "Statische Verfahren betrachten Kosten und Nutzen zeitunabhängig, dynamische berücksichtigen den Zeitpunkt (Abzinsung).",
      "Statische Verfahren berücksichtigen Steuern, dynamische nicht.",
      "Dynamische Verfahren betrachten nur ein Jahr.",
      "Statische Verfahren sind aussagekräftiger.",
    ],
    answer: 0,
    explain: "Dynamische Verfahren (discounted analysis) sind die aussagekräftigeren." },

  { id: "ke03", topic: "kennzahlen", type: "num",
    q: "Eine Investition hat einen Kapitaleinsatz von 500.000 € und einen Gesamtnutzen über die Laufzeit von 750.000 €. Berechnen Sie den <b>kumulierten ROI</b> nach der Formel Gesamtnutzen / Kapitaleinsatz × 100 (in %).",
    answer: 150, tol: 0.5, unit: "%",
    explain: "750.000 / 500.000 × 100 = 150 %." },

  { id: "ke04", topic: "kennzahlen", type: "num",
    q: "Gleiche Investition (Kapitaleinsatz 500.000 €, Gesamtnutzen 750.000 €). Berechnen Sie den ROI nach der <b>anglo-amerikanischen Variante</b> (Gesamtnutzen − Kapitaleinsatz) / Kapitaleinsatz (in %).",
    answer: 50, tol: 0.5, unit: "%",
    explain: "(750.000 − 500.000) / 500.000 = 50 %." },

  { id: "ke05", topic: "kennzahlen", type: "single",
    q: "Welches Entscheidungskriterium gilt für den kumulierten ROI (Gesamtnutzen / Kapitaleinsatz × 100)?",
    options: ["ROI > 100 % (Kostendeckung); bei mehreren Investitionen die mit dem höchsten ROI", "ROI > 0 %", "ROI > Kalkulationszinssatz", "ROI < 100 %"],
    answer: 0,
    explain: "Bei der Variante (Nutzen − Einsatz) / Einsatz entspricht das einem ROI > 0 %." },

  { id: "ke06", topic: "kennzahlen", type: "single",
    q: "Was ist laut Skriptum ein schwerwiegendes Defizit der ROI-Kennzahl?",
    options: [
      "Es gibt kein einheitliches Verständnis, was unter „Kapitaleinsatz“ zu verstehen ist.",
      "Sie ist zu kompliziert zu berechnen.",
      "Sie berücksichtigt den Zinseszins zu stark.",
      "Sie kann nicht in Prozent angegeben werden.",
    ],
    answer: 0,
    explain: "Unklar ist etwa, ob nur einmalige Projektkosten oder auch laufende Betriebskosten zum Kapitaleinsatz zählen." },

  { id: "ke07", topic: "kennzahlen", type: "num",
    q: "Eine Anlage kostet 400.000 €. Sie bringt jährlich gleichbleibende Rückflüsse (Einsparungen) von 125.000 €. Wie lange ist die <b>statische Amortisationsdauer (Payback)</b> in Jahren?",
    answer: 3.2, tol: 0.01, unit: "Jahre",
    explain: "400.000 / 125.000 = 3,2 Jahre." },

  { id: "ke08", topic: "kennzahlen", type: "num",
    q: "Investition 300.000 € in t = 0. Rückflüsse: Jahr 1: 80.000 €, Jahr 2: 100.000 €, Jahr 3: 120.000 €, Jahr 4: 120.000 €. Wie hoch ist der <b>statische Payback</b> in Jahren (bei unterjährig gleichmäßigem Rückfluss)?",
    answer: 3, tol: 0.01, unit: "Jahre",
    explain: "Kumuliert: 80.000 → 180.000 → 300.000. Nach genau 3 Jahren ist die Investition zurückverdient." },

  { id: "ke09", topic: "kennzahlen", type: "num",
    q: "Berechnen Sie den Abzinsungsfaktor (Diskontierungsfaktor) für Jahr 3 bei einem Kalkulationszinssatz von 10 %. Runden Sie auf 4 Nachkommastellen.",
    answer: 0.7513, tol: 0.0002,
    explain: "1 / 1,10³ = 0,7513." },

  { id: "ke10", topic: "kennzahlen", type: "num",
    q: "Im Beispiel aus dem Skriptum (Kalkulationszins 12 %) fällt im Jahr 2 ein Nutzen von 20.000.000 € an. Der Diskontierungsfaktor beträgt 0,7972. Wie hoch ist der Barwert (in €)?",
    answer: 15944000, tol: 1000, unit: "€",
    explain: "20.000.000 × 0,7972 = 15.944.000 €." },

  { id: "ke11", topic: "kennzahlen", type: "num",
    q: "Investition 100.000 € in t = 0. Rückflüsse von je 40.000 € am Ende der Jahre 1, 2 und 3. Kalkulationszins 10 %. Berechnen Sie den <b>Kapitalwert (NPV)</b> in € (auf ganze Euro).",
    answer: -526, tol: 5, unit: "€",
    explain: "40.000 × (0,9091 + 0,8264 + 0,7513) = 40.000 × 2,4869 ≈ 99.474 €, abzüglich 100.000 € ergibt ≈ −526 €. Statisch wäre das ein Plus von 20.000 €, dynamisch ist die Investition knapp unvorteilhaft." },

  { id: "ke12", topic: "kennzahlen", type: "single",
    q: "Ein Projekt hat bei einem Kalkulationszinssatz von 8 % einen NPV von +250.000 €. Was bedeutet das?",
    options: [
      "Das Projekt erwirtschaftet über Mitteleinsatz und kalkulatorische Zinsen hinaus einen Überschuss (Barwert) von 250.000 €.",
      "Das Projekt bringt einen Gewinn von 250.000 € im ersten Jahr.",
      "Die Rendite des Projekts beträgt 8 %.",
      "Das Projekt amortisiert sich in 2,5 Jahren.",
    ],
    answer: 0 },

  { id: "ke13", topic: "kennzahlen", type: "match",
    q: "Ordnen Sie die Definitionen zu.",
    pairs: [
      ["NPV (Kapitalwert)", "Gesamtüberschuss über Mitteleinsatz und kalkulatorische Zinsen, auf t0 abgezinst"],
      ["IRR (interner Zinsfuß)", "Zinssatz, der für das gebundene Kapital erzielt wird (NPV = 0)"],
      ["Baldwin-Zinsfuß", "Rendite unter der Annahme, dass Überschüsse zu einer bestimmten Unternehmensrendite angelegt werden"],
      ["Payback dynamisch", "Amortisationsdauer auf Basis abgezinster Ein- und Auszahlungsüberschüsse"],
      ["Value at Stake", "Diskontierte Summe der Residualgewinne (Gewinn nach Kapitalkosten)"],
    ] },

  { id: "ke14", topic: "kennzahlen", type: "tf",
    q: "Bei einem positiven Kalkulationszinssatz ist der dynamische Payback immer länger als (oder gleich lang wie) der statische Payback.",
    answer: true,
    explain: "Abgezinste Rückflüsse sind kleiner. Es dauert also länger, bis die Investition zurückverdient ist." },

  { id: "ke15", topic: "kennzahlen", type: "single",
    q: "Ein Projekt hat einen internen Zinsfuß (IRR) von 12 %. Der Kalkulationszinssatz (WACC) beträgt 8 %. Welche Aussage ist richtig?",
    options: ["Der NPV ist positiv, das Projekt ist vorteilhaft.", "Der NPV ist negativ.", "Der NPV ist genau null.", "Keine Aussage möglich."],
    answer: 0 },

  { id: "ke16", topic: "kennzahlen", type: "multi",
    q: "Welche Begriffe sind laut Skriptum Synonyme für den Residualgewinn, auf dem der Value at Stake basiert?",
    options: ["EVA (Economic Value Added)", "Economic Profit", "OPAC (Operating Profit after Capital Charge and Taxes)", "EBITDA", "Cashflow nach Steuern"],
    answer: [0, 1, 2] },

  { id: "ke17", topic: "kennzahlen", type: "num",
    q: "Ein Kredit hat einen Zinssatz von 6,0 %. Der Steuersatz beträgt 25 %. Wie hoch sind die Fremdkapitalkosten <b>nach Steuern</b> (in %)?",
    answer: 4.5, tol: 0.01, unit: "%",
    explain: "6,0 % × (1 − 0,25) = 4,5 %. FK-Zinsen sind steuerlich abzugsfähig und werden deshalb „entsteuert“." },

  { id: "ke18", topic: "kennzahlen", type: "num",
    q: "Berechnen Sie die Eigenkapitalkosten nach CAPM: risikoloser Basiszins 3 %, Marktrendite 8 %, Beta 1,2 (in %).",
    answer: 9, tol: 0.01, unit: "%",
    explain: "3 % + (8 % − 3 %) × 1,2 = 9 %." },

  { id: "ke19", topic: "kennzahlen", type: "num",
    q: "Beispiel aus dem Skriptum: Risikofreier Basiszins 4,5 %, Marktrendite 8 %, Beta 1,3. Wie hoch sind die Eigenkapitalkosten (in %)?",
    answer: 9.05, tol: 0.01, unit: "%",
    explain: "4,5 % + (8 % − 4,5 %) × 1,3 = 9,05 %." },

  { id: "ke20", topic: "kennzahlen", type: "num",
    q: "Ein Unternehmen ist zu 40 % mit Eigenkapital (Kosten 10 %) und zu 60 % mit Fremdkapital (Kosten nach Steuern 4 %) finanziert. Wie hoch ist der WACC (in %)?",
    answer: 6.4, tol: 0.01, unit: "%",
    explain: "0,4 × 10 % + 0,6 × 4 % = 4 % + 2,4 % = 6,4 %." },

  { id: "ke21", topic: "kennzahlen", type: "single",
    q: "Was bedeutet ein Beta-Faktor größer 1?",
    options: [
      "Die Investition schwankt stärker als der Markt und ist riskanter.",
      "Die Investition schwankt weniger als der Markt.",
      "Die Investition ist risikolos.",
      "Die Marktrisikoprämie ist negativ.",
    ],
    answer: 0 },

  { id: "ke22", topic: "kennzahlen", type: "single",
    q: "Wie wird das Eigenkapital bei der WACC-Berechnung für ein <b>nicht börsennotiertes</b> Unternehmen bewertet?",
    options: ["Mit dem Buchwert", "Mit der Marktkapitalisierung", "Mit dem Nominale der Anleihen", "Gar nicht"],
    answer: 0,
    explain: "Börsennotierte Unternehmen: Marktkapitalisierung (Aktienkurs × Anzahl Aktien). Nicht gelistete: Buchwerte." },

  { id: "ke23", topic: "kennzahlen", type: "single",
    q: "Woraus wird die Marktrisikoprämie im CAPM abgeleitet?",
    options: [
      "Aus der Renditedifferenz zwischen einem Aktienindex und quasi risikolosen Staatsanleihen bonitätsstarker Länder",
      "Aus dem Beta-Faktor",
      "Aus dem Fremdkapitalzins",
      "Aus der Inflationsrate",
    ],
    answer: 0 },

  { id: "ke24", topic: "kennzahlen", type: "num",
    q: "Investition XY (Brugger): Kosten gesamt 30.000.000 €, Nutzen gesamt 75.000.000 €. Wie hoch ist das undiskontierte Delta (Nettonutzen) in €?",
    answer: 45000000, tol: 1, unit: "€" },

  { id: "ke25", topic: "kennzahlen", type: "num",
    q: "Gleiches Beispiel diskontiert (12 %): Barwert der Kosten 28.929.000 €, Barwert des Nutzens 56.283.500 €. Wie hoch ist der NPV in €?",
    answer: 27354500, tol: 1, unit: "€",
    explain: "56.283.500 − 28.929.000 = 27.354.500 €. Durch die Abzinsung sinkt der Überschuss deutlich gegenüber den undiskontierten 45 Mio. €." },

  { id: "ke26", topic: "kennzahlen", type: "single",
    q: "Bei welchem Ergebnis ist eine Investition nach der Kapitalwertmethode vorteilhaft?",
    options: ["NPV > 0", "NPV < 0", "NPV = Investitionssumme", "NPV > Kalkulationszinssatz"],
    answer: 0 },

  { id: "ke27", topic: "kennzahlen", type: "num",
    q: "Investition 100.000 €, Rückflüsse 50.000 € pro Jahr, Kalkulationszins 10 %. Barwerte: J1 45.455 €, J2 41.322 €, J3 37.566 €. Wie lange ist der <b>dynamische Payback</b> in Jahren (auf 2 Nachkommastellen)?",
    answer: 2.35, tol: 0.02, unit: "Jahre",
    explain: "Nach 2 Jahren sind 86.777 € zurückverdient, es fehlen 13.223 €. 13.223 / 37.566 ≈ 0,35, also ≈ 2,35 Jahre. Der statische Payback wäre 2,0 Jahre." },

  /* ===================== STRATEGIE ===================== */
  { id: "st01", topic: "strategie", type: "multi",
    q: "Welche Charakteristika des Strategiebegriffs werden in der LV genannt?",
    options: ["Zielbezogenheit", "Kreativer und innovativer Charakter", "Selektivität", "Lenkungsfunktion", "Umwelt- und Wettbewerbsbezogenheit", "Kurzfristigkeit", "Vollständige Standardisierbarkeit"],
    answer: [0, 1, 2, 3, 4] },

  { id: "st02", topic: "strategie", type: "match",
    q: "Ordnen Sie die Charakteristika des Strategiebegriffs ihrer Beschreibung zu.",
    pairs: [
      ["Zielbezogenheit", "Sehr enge Beziehung zu einem existierenden Zielsystem"],
      ["Kreativer und innovativer Charakter", "Nur gelegentlich standardisierbar, traditionelle Denkweisen werden hinterfragt"],
      ["Selektivität", "Bestimmt einzelne Segmente, in denen das Unternehmen seine Stärken umsetzen kann"],
      ["Lenkungsfunktion", "Gibt den Rahmen vor, in dem langfristige Maßnahmenbündel konkretisiert werden"],
      ["Umwelt- und Wettbewerbsbezogenheit", "Ausrichtung auf Umwelt und Wettbewerb"],
    ] },

  { id: "st03", topic: "strategie", type: "multi",
    q: "Welche Anforderungen an die Strategie werden genannt? Die Strategie …",
    options: [
      "umfasst Leitidee und Vision des Unternehmens.",
      "hält künftige Geschäftsfelder fest.",
      "beinhaltet Aussagen zu den Kernkompetenzen.",
      "gibt Hinweise auf die Marktpositionierung.",
      "legt die Tagesplanung der Mitarbeiter fest.",
    ],
    answer: [0, 1, 2, 3] },

  { id: "st04", topic: "strategie", type: "multi",
    q: "Welche Anforderungen muss eine strategische Erfolgsposition (SEP) erfüllen?",
    options: ["wichtig (für die Abnehmer wichtiges Leistungsmerkmal)", "wahrgenommen (wird tatsächlich als solche empfunden)", "dauerhaft (Konkurrenz kann sie nicht sofort nachahmen)", "billig", "patentiert"],
    answer: [0, 1, 2] },

  { id: "st05", topic: "strategie", type: "multi",
    q: "Welche Begriffe werden synonym zu „strategische Erfolgsposition“ verwendet?",
    options: ["Wettbewerbsvorteil", "Unique Selling Proposition (USP)", "Strategischer Erfolgsfaktor", "Kernkompetenz", "Cash Cow", "Basistechnologie"],
    answer: [0, 1, 2, 3] },

  { id: "st06", topic: "strategie", type: "match",
    q: "Ordnen Sie die SEP-Beispiele aus der LV zu.",
    pairs: [["3M", "Innovationsfähigkeit"], ["McDonald’s", "Optimale Standortwahl"]],
    distractors: ["Kostenführerschaft im Gesamtmarkt", "Patentportfolio"] },

  { id: "st07", topic: "strategie", type: "match",
    q: "Wertschöpfungskette nach Porter: Ordnen Sie die Aktivitäten zu.",
    pairs: [
      ["Interne Logistik", "Primäraktivität"],
      ["Produktion", "Primäraktivität"],
      ["Marketing und Verkauf", "Primäraktivität"],
      ["Service", "Primäraktivität"],
      ["Beschaffung", "Unterstützungsaktivität"],
      ["Technologie-Entwicklung", "Unterstützungsaktivität"],
      ["Human Resource Management", "Unterstützungsaktivität"],
      ["Unternehmens-Infrastruktur", "Unterstützungsaktivität"],
    ] },

  { id: "st08", topic: "strategie", type: "match",
    q: "Strategisches Geschäftsfeld vs. strategische Geschäftseinheit: Ordnen Sie zu.",
    pairs: [
      ["Strategisches Geschäftsfeld (SGF)", "extern – Attraktivität, Erfolgspotential (Kundengruppen, Kundenfunktionen, Technik)"],
      ["Strategische Geschäftseinheit (SGE)", "intern – Fähigkeiten, Leistungspotential (Marketing, F&E, Produktion, Planung)"],
    ] },

  { id: "st09", topic: "strategie", type: "multi",
    q: "Welche Anforderungen sollen strategische Geschäftseinheiten erfüllen?",
    options: [
      "eine organisatorische Einheit bilden",
      "in ihrer Marktaufgabe eigenständig sein",
      "in sich möglichst homogen und untereinander heterogen sein",
      "Erträge/Kosten zugerechnet bekommen (allein lebensfähig)",
      "möglichst große Synergieeffekte mit anderen SGE haben",
      "in sich möglichst heterogen sein",
    ],
    answer: [0, 1, 2, 3],
    explain: "SGE sollen unbedeutende Synergieeffekte haben, sich von der Konkurrenz abheben, eine bedeutende Marktstellung erreichen können und ein eigenständiges Bedürfnis einer Zielgruppe erfüllen." },

  { id: "st10", topic: "strategie", type: "match",
    q: "Unternehmens- vs. Geschäftsstrategie: Ordnen Sie die zentrale Frage zu.",
    pairs: [
      ["Unternehmensstrategie", "Machen wir das richtige Geschäft?"],
      ["Geschäftsstrategie", "Machen wir das Geschäft richtig?"],
    ] },

  { id: "st11", topic: "strategie", type: "multi",
    q: "Auf welche zwei grundsätzlichen Fragen geben Strategien Antwort?",
    options: [
      "In welchen Geschäftsfeldern wollen wir tätig sein?",
      "Wie wollen wir den Wettbewerb in diesen Geschäftsfeldern bestreiten?",
      "Wie hoch ist der Gewinn im nächsten Quartal?",
      "Welche Rechtsform wählen wir?",
    ],
    answer: [0, 1] },

  { id: "st12", topic: "strategie", type: "tf",
    q: "Die Unternehmensstrategie legt u. a. die Geschäftsfelder fest und verteilt die begrenzten Ressourcen (Kapital, Personal).",
    answer: true },

  { id: "st13", topic: "strategie", type: "match",
    q: "Ordnen Sie die Strategien der richtigen Strategieart zu.",
    pairs: [
      ["Kostenführerschaft", "Wettbewerbsstrategie"],
      ["Differenzierung", "Wettbewerbsstrategie"],
      ["Pionierstrategie", "Technologiestrategie"],
      ["Imitationsstrategie", "Technologiestrategie"],
      ["Push- vs. Pull-Strategie", "Absatzmittlerstrategie"],
    ] },

  { id: "st14", topic: "strategie", type: "multi",
    q: "Welche Marketingstrategien werden in der LV unterschieden?",
    options: ["Marktwahlstrategien", "Produktstrategien", "Instrumentalstrategien", "Absatzmittlerstrategien", "Konkurrenzstrategien", "Finanzierungsstrategien"],
    answer: [0, 1, 2, 3, 4] },

  { id: "st15", topic: "strategie", type: "match",
    q: "Ordnen Sie die Marketingstrategien ihrem Inhalt zu.",
    pairs: [
      ["Marktwahlstrategie", "Welche Märkte/Segmente werden bearbeitet – und welche nicht?"],
      ["Produktstrategie", "Mit welchen Produkten welche Kundengruppen ansprechen, welcher Kundennutzen?"],
      ["Instrumentalstrategie", "Schwerpunkte im Einsatz der Marketinginstrumente (Service, Marke, Vertrieb, Kommunikation)"],
      ["Absatzmittlerstrategie", "Zusammenarbeit mit Händlern (Akquisition, Selektion)"],
      ["Konkurrenzstrategie", "Abgrenzung zum Mitbewerb (Marktstellung, Angriff oder Verteidigung)"],
    ] },

  { id: "st16", topic: "strategie", type: "match",
    q: "Entwicklungsstufen nach Ansoff: Ordnen Sie dem Umfeld zu.",
    pairs: [
      ["Management by Control", "stabiles Umfeld"],
      ["Management by Extrapolation", "instabile Märkte"],
      ["Management by Anticipation", "handhabbare Märkte"],
      ["Management by Flexible/Rapid Response", "unvorhersehbare Überraschungen"],
    ] },

  { id: "st17", topic: "strategie", type: "match",
    q: "Ordnen Sie die Merkmale der richtigen Markteintrittsstrategie zu.",
    pairs: [
      ["Hohe Forschungsintensität, geringe Distanz zum Stand der Technik, hohe Risikobereitschaft", "First to Market (Pionier)"],
      ["Intensive Entwicklungsarbeit, ständige Reaktionsbereitschaft, geringere technologische Kompetenz als der Pionier", "Follow the Leader"],
      ["Strikte Orientierung an den Kundenanforderungen, enge Kooperation Verkauf und Entwicklung", "Application Engineering"],
      ["Imitation, rationelle Produktion, möglichst geringe F&E-Aufwendungen", "Me too"],
    ] },

  { id: "st18", topic: "strategie", type: "match",
    q: "Wettbewerbsstrategien nach Porter (vier Grundkonzeptionen): Ordnen Sie das Beispiel aus der LV zu.",
    pairs: [
      ["Qualitätsführerschaft (Gesamtmarkt)", "IBM"],
      ["Aggressive Kostenführerschaft (Gesamtmarkt)", "Vobis"],
      ["Selektive Qualitätsführerschaft (Nische)", "Toshiba"],
      ["Selektive Kostenführerschaft (Nische)", "Acer"],
    ] },

  { id: "st19", topic: "strategie", type: "single",
    q: "Was beschreibt das „Verlust der Mitte“-Phänomen bei Porter?",
    options: [
      "Wettbewerbsstrategien lassen keine mittlere Position zu – „einige“ Kosten- oder Leistungsvorteile reichen nicht.",
      "Mittelständische Unternehmen verschwinden durch Globalisierung.",
      "Der Marktanteil sinkt in der Reifephase.",
      "Produkte mittlerer Preislage sind immer am erfolgreichsten.",
    ],
    answer: 0,
    explain: "Beispiele aus der LV: Factory Outlet Parndorf und „Nur ein Mercedes ist ein Mercedes“." },

  { id: "st20", topic: "strategie", type: "multi",
    q: "Auf welchen zwei Dimensionen basieren Porters Wettbewerbsstrategien?",
    options: ["Art des Wettbewerbsvorteils (Kosten- vs. Leistungsvorteil)", "Marktabdeckung (Gesamtmarkt vs. Teilmarkt/Nische)", "Marktwachstum", "Relativer Marktanteil"],
    answer: [0, 1] },

  { id: "st21", topic: "strategie", type: "single",
    q: "Ein Unternehmen konzentriert sich auf eine Marktnische und bietet dort imitierte Produkte zu besonders günstigen Preisen an. Welche Strategie nach Porter verfolgt es?",
    options: ["Selektive Kostenführerschaft", "Aggressive Kostenführerschaft", "Selektive Qualitätsführerschaft", "Qualitätsführerschaft"],
    answer: 0 },

  { id: "st22", topic: "strategie", type: "single",
    q: "Was ist laut Folie die Pyramide „Ressourcen/Know-how → Kompetenzen → Kernkompetenzen → …“ an der Spitze?",
    options: ["Alleinstellungsmerkmale", "Basistechnologien", "Cash Cows", "Shared Values"],
    answer: 0 },

  { id: "st23", topic: "strategie", type: "single",
    q: "Was stellt die strategische Verflechtungsmatrix gegenüber?",
    options: [
      "Strategische Technologiefelder (aktuell/potentiell) und strategische Geschäftsfelder (aktuell/potentiell)",
      "Marktwachstum und relativen Marktanteil",
      "Marktattraktivität und Wettbewerbsvorteil",
      "Produkte und Märkte",
    ],
    answer: 0,
    explain: "Technology-Push-Analyse (horizontal) und Technologierelevanzanalyse (vertikal)." },

  /* ===================== ANALYSEINSTRUMENTE ===================== */
  { id: "an01", topic: "analyse", type: "match",
    q: "Technologielebenszyklus: Ordnen Sie die Technologietypen zu.",
    pairs: [
      ["Schrittmachertechnologie", "Großes Wettbewerbspotential, kann künftig Wettbewerbsvorteile bringen"],
      ["Schlüsseltechnologie", "Stark wettbewerbsbeeinflussend, patentrechtlich geschützt, hohes Verbesserungspotential"],
      ["Basistechnologie", "Allgemein bekannt, kein Wettbewerbsvorteil mehr"],
      ["Verdrängte Technologie", "Wird gerade verdrängt oder wurde verdrängt"],
    ] },

  { id: "an02", topic: "analyse", type: "match",
    q: "Technologielebenszyklus: Ordnen Sie die Phase der Höhe der F&E-Investitionen zu.",
    pairs: [["Entstehung", "mittel"], ["Wachstum", "hoch"], ["Reife", "niedrig"], ["Degeneration", "vernachlässigbar"]] },

  { id: "an03", topic: "analyse", type: "single",
    q: "In welcher Phase des Technologielebenszyklus ist das technische Risiko am höchsten?",
    options: ["Entstehung", "Wachstum", "Reife", "Degeneration"],
    answer: 0 },

  { id: "an04", topic: "analyse", type: "single",
    q: "Was beschreibt das S-Kurven-Konzept von McKinsey?",
    options: [
      "Die Leistungsfähigkeit einer Technologie in Abhängigkeit vom kumulierten F&E-Aufwand – mit Leistungsgrenze, ab der der Wechsel auf eine neue Technologie sinnvoll ist",
      "Den Zusammenhang zwischen kumulierter Menge und Stückkosten",
      "Den Verlauf des Umsatzes über den Produktlebenszyklus",
      "Die Kapitalwertfunktion in Abhängigkeit vom Zinssatz",
    ],
    answer: 0 },

  { id: "an05", topic: "analyse", type: "multi",
    q: "Was sind laut LV Ursachen des Erfahrungskurveneffekts?",
    options: ["Bessere Ausnutzung der Kapazitäten", "Einkaufsvorteile", "Fixkostendegression", "Lerneffekte bei der Arbeitsgeschwindigkeit", "Höhe des Ausschusses (sinkt)", "Steigende Rohstoffpreise"],
    answer: [0, 1, 2, 3, 4] },

  { id: "an06", topic: "analyse", type: "single",
    q: "Erfahrungskurve: Bei jeder Verdoppelung der kumulierten Menge sinken die Stückkosten um 20 %. Die erste Einheit kostet 10 €. Was kostet eine Einheit bei der 4-fachen kumulierten Menge?",
    options: ["6,40 €", "6,00 €", "8,00 €", "4,00 €"],
    answer: 0,
    explain: "10 € × 0,8 × 0,8 = 6,40 € (zwei Verdoppelungen)." },

  { id: "an07", topic: "analyse", type: "multi",
    q: "Welche Aussagen zu Portfolioanalysen sind laut LV richtig?",
    options: [
      "Sie zählen zu den am häufigsten verwendeten strategischen Analyseinstrumenten.",
      "Sie geben in mehrdimensionaler Darstellung einen Überblick über die Unternehmenssituation.",
      "Sie sind nicht dazu geeignet, Strategien inhaltlich auszufüllen.",
      "Ihren Ursprung haben sie in Diversifikationsüberlegungen im Bank- bzw. Finanzbereich.",
      "Sie eignen sich besonders gut zum Aufspüren völlig neuer Märkte.",
    ],
    answer: [0, 1, 2, 3] },

  { id: "an08", topic: "analyse", type: "multi",
    q: "Welche beiden Dimensionen verwendet das BCG-Portfolio?",
    options: ["Relativer Marktanteil", "Marktwachstum", "Marktattraktivität", "Relative Wettbewerbsvorteile", "Deckungsbeitrag"],
    answer: [0, 1] },

  { id: "an09", topic: "analyse", type: "single",
    q: "Wie wird der relative Marktanteil im BCG-Portfolio berechnet?",
    options: [
      "Eigener Marktanteil (Umsatz) / Marktanteil (Umsatz) des stärksten Konkurrenten",
      "Eigener Umsatz / Gesamtmarktvolumen",
      "Eigener Marktanteil / Marktwachstum",
      "Eigener Umsatz / Umsatz aller Konkurrenten",
    ],
    answer: 0 },

  { id: "an10", topic: "analyse", type: "match",
    q: "Ordnen Sie die BCG-Felder richtig zu.",
    pairs: [
      ["Hohes Marktwachstum, hoher relativer Marktanteil", "Star"],
      ["Hohes Marktwachstum, niedriger relativer Marktanteil", "Question Mark"],
      ["Niedriges Marktwachstum, hoher relativer Marktanteil", "Cash Cow"],
      ["Niedriges Marktwachstum, niedriger relativer Marktanteil", "Poor Dog"],
    ] },

  { id: "an11", topic: "analyse", type: "match",
    q: "Ordnen Sie die Normstrategien (Zielvorstellung) den BCG-Feldern zu.",
    pairs: [
      ["Star", "Halten bzw. leichter Ausbau des Marktanteils; Reinvestition des Netto-Cashflows"],
      ["Question Mark", "Selektiver Abbau bzw. Ausbau; Erweiterungsinvestition oder Verkauf"],
      ["Cash Cow", "Halten bzw. leichter Abbau; nur Rationalisierungs- und Ersatzinvestitionen"],
      ["Poor Dog", "Abbau des Marktanteils; Verkauf von Anlagen bzw. Stilllegung"],
    ] },

  { id: "an12", topic: "analyse", type: "num",
    q: "BCG-Beispiel (Nussriegel): eigener Umsatz 24.000.000 €, Umsatz des stärksten Konkurrenten 15.000.000 €. Wie hoch ist der relative Marktanteil? (2 Nachkommastellen)",
    answer: 1.6, tol: 0.01,
    explain: "24 / 15 = 1,60. Mit einem Marktwachstum von 4 % (niedrig) ist der Nussriegel eine Cash Cow." },

  { id: "an13", topic: "analyse", type: "match",
    q: "BCG-Beispiel aus der LV: Ordnen Sie die Riegel ihrem Portfoliofeld zu. (Umsatz / stärkster Konkurrent / Marktwachstum)",
    pairs: [
      ["Knusperriegel: 6 Mio. / 7,5 Mio. / +14 %", "Question Mark"],
      ["Nougatriegel: 10 Mio. / 50 Mio. / −4 %", "Poor Dog"],
      ["Schokoriegel: 30 Mio. / 16,7 Mio. / 0 %", "Cash Cow"],
      ["Krokantriegel: 8 Mio. / 5,7 Mio. / +16 %", "Star"],
    ],
    explain: "Rel. Marktanteile: Knusper 0,8 · Nougat 0,2 · Schoko 1,8 · Krokant 1,4. Laut LV soll der Nougatriegel eingestellt werden, die Cash Cows finanzieren Knusper und Krokant." },

  { id: "an14", topic: "analyse", type: "multi",
    q: "Welche Mängel der BCG-Matrix werden in der LV genannt?",
    options: [
      "Keine Hilfestellung bei der Definition des Marktes",
      "Die Annahme, dass der Marktanteil ein guter Indikator für Cash-Zuflüsse ist, trifft nicht unbedingt zu",
      "Die Annahme, dass das Marktwachstum den Cashbedarf anzeigt, trifft nicht unbedingt zu",
      "Die Normstrategien sind zu vereinfachend",
      "Sie kann die Vergangenheit der SGF nicht visualisieren",
    ],
    answer: [0, 1, 2, 3],
    explain: "Positiv: Die Darstellung visualisiert die Vergangenheit der SGF gut und zeigt das Portfolio auf einen Blick." },

  { id: "an15", topic: "analyse", type: "multi",
    q: "Welche Dimensionen verwendet das McKinsey-Portfolio?",
    options: ["Marktattraktivität", "Relative Wettbewerbsvorteile", "Relativer Marktanteil", "Marktwachstum"],
    answer: [0, 1] },

  { id: "an16", topic: "analyse", type: "match",
    q: "McKinsey-Portfolio: Ordnen Sie die Indikatoren der Dimension zu.",
    pairs: [
      ["Marktwachstum und Marktgröße", "Marktattraktivität"],
      ["Energie- und Rohstoffversorgung", "Marktattraktivität"],
      ["Umfeldsituation (Konjunktur, Gesetzgebung)", "Marktattraktivität"],
      ["Relatives Produktionspotential", "Relative Wettbewerbsvorteile"],
      ["Relatives F&E-Potential", "Relative Wettbewerbsvorteile"],
      ["Relative Qualifikation der Führungskräfte", "Relative Wettbewerbsvorteile"],
    ] },

  { id: "an17", topic: "analyse", type: "single",
    q: "Welche Normstrategie empfiehlt das McKinsey-Portfolio bei hoher Marktattraktivität und hohen relativen Wettbewerbsvorteilen?",
    options: ["Marktführerschaft halten", "Abschöpfung", "Desinvestition", "Investition oder Rückzug"],
    answer: 0,
    explain: "Die Ecken der Matrix: hoch/hoch bedeutet Marktführerschaft halten, niedrig/niedrig bedeutet Desinvestition. Die beiden anderen Ecken sind „Investition oder Rückzug“ und „Abschöpfung“. Achtung: Auf der Folie sind die Achsen nicht eindeutig beschriftet, deshalb sind diese zwei Ecken nicht sicher zuzuordnen. Nach üblicher Lehrmeinung gilt hohe Attraktivität bei niedrigem Vorteil als „Investition oder Rückzug“." },

  { id: "an48", topic: "analyse", type: "multi",
    q: "Welche Normstrategien kommen im McKinsey-Portfolio (9 Felder, Folie aus der LV) vor?",
    options: ["Marktführerschaft halten", "Investition", "Wachstum", "Übergang", "Abschöpfung und stufenweise Desinvestition", "Investition oder Rückzug", "Melken", "Diversifikation"],
    answer: [0, 1, 2, 3, 4, 5],
    explain: "Die 9 Felder sind: Marktführerschaft halten, Investition, Investition oder Rückzug, Wachstum, Übergang, 2× Abschöpfung und stufenweise Desinvestition, Abschöpfung, Desinvestition. „Melken“ ist BCG-Jargon für die Cash Cow." },

  { id: "an18", topic: "analyse", type: "single",
    q: "Wie werden die vielen Einzelindikatoren im McKinsey-Portfolio zweckmäßigerweise verknüpft?",
    options: ["Mit einem Punktbewertungsmodell (Gewichtung)", "Durch einfache Addition der Umsätze", "Durch Abzinsung", "Gar nicht – es wird nur ein Indikator verwendet"],
    answer: 0 },

  { id: "an19", topic: "analyse", type: "match",
    q: "Ansoff-Matrix: Ordnen Sie die Produkt/Markt-Kombination der Strategie zu.",
    pairs: [
      ["Bestehende Produkte – bestehende Märkte", "Marktdurchdringung"],
      ["Bestehende Produkte – neue Märkte", "Marktentwicklung"],
      ["Neue Produkte – bestehende Märkte", "Produktentwicklung"],
      ["Neue Produkte – neue Märkte", "Diversifikation"],
    ] },

  { id: "an20", topic: "analyse", type: "match",
    q: "Ordnen Sie die Arten der Diversifikation zu.",
    pairs: [
      ["Horizontale Diversifikation", "Ähnliche Produkte, gleiche Wertschöpfungsstufe"],
      ["Vertikale Diversifikation", "Produkte vor- oder nachgelagerter Produktionsstufen"],
      ["Laterale Diversifikation", "Produkte ohne Zusammenhang zu den bisherigen"],
    ] },

  { id: "an21", topic: "analyse", type: "single",
    q: "Ein Hersteller von Industrierobotern beginnt, seine bestehenden Roboter auch in der Medizintechnik (neuer Anwendungsbereich) zu verkaufen. Welche Ansoff-Strategie ist das?",
    options: ["Marktentwicklung", "Marktdurchdringung", "Produktentwicklung", "Diversifikation"],
    answer: 0 },

  { id: "an22", topic: "analyse", type: "single",
    q: "Ein Unternehmen steigert die Werbung, senkt die Preise und wirbt Kunden der Konkurrenz ab – mit bestehenden Produkten am bestehenden Markt. Welche Strategie?",
    options: ["Marktdurchdringung", "Marktentwicklung", "Produktentwicklung", "Laterale Diversifikation"],
    answer: 0 },

  { id: "an23", topic: "analyse", type: "multi",
    q: "Welche Kräfte umfasst Porters Five-Forces-Modell?",
    options: ["Verhandlungsstärke der Lieferanten", "Verhandlungsstärke der Abnehmer", "Bedrohung durch neue Konkurrenten", "Bedrohung durch Ersatzprodukte (Substitute)", "Rivalität unter den bestehenden Wettbewerbern", "Staatliche Regulierung", "Wechselkurse"],
    answer: [0, 1, 2, 3, 4] },

  { id: "an24", topic: "analyse", type: "single",
    q: "Was ist das Ziel der Five-Forces-Analyse?",
    options: [
      "Herausarbeiten, wie die Kräfte verteilt sind, die auf die Rendite einer Branche wirken (Branchenstrukturanalyse)",
      "Bewertung einzelner Investitionsprojekte",
      "Bestimmung des optimalen Preises",
      "Analyse der Unternehmenskultur",
    ],
    answer: 0 },

  { id: "an25", topic: "analyse", type: "match",
    q: "Five Forces: Ordnen Sie die Prüffragen der Kraft zu.",
    pairs: [
      ["Eintrittsbarrieren, Economies of Scale, Kapitalbedarf", "Gefahr neuer Konkurrenten"],
      ["Preis-/Leistung, Qualität der Lösung, Differenzierung möglich?", "Gefahr durch Ersatzprodukte"],
      ["Konzentrationsgrad, Drohung der Vorwärts-/Rückwärtsintegration, Umstellungskosten", "Verhandlungsstärke Abnehmer/Lieferanten"],
      ["Hohe Rivalität, Austrittsbarrieren, Anzahl Player, Marktwachstum", "Bestehender Wettbewerb"],
    ] },

  { id: "an26", topic: "analyse", type: "match",
    q: "7-S-Modell (McKinsey): Ordnen Sie die Elemente zu.",
    pairs: [
      ["Strategy (Strategie)", "harter Faktor"],
      ["Structure (Struktur)", "harter Faktor"],
      ["Systems (Systeme)", "harter Faktor"],
      ["Skills (Spezialfähigkeiten)", "weicher Faktor"],
      ["Staff (Personal)", "weicher Faktor"],
      ["Style (Stil)", "weicher Faktor"],
      ["Shared Values", "weicher Faktor"],
    ] },

  { id: "an27", topic: "analyse", type: "single",
    q: "Welches Element steht im Zentrum des 7-S-Modells?",
    options: ["Shared Values", "Strategy", "Structure", "Staff"],
    answer: 0 },

  { id: "an28", topic: "analyse", type: "single",
    q: "Was ist das Grundprinzip des Stage-Gate-Prozesses?",
    options: [
      "Feste Regeln, wann ein Projekt an einem Gate in die nächste Phase übergeht, abgebrochen wird, wartet oder zurückgegeben wird",
      "Alle Phasen laufen parallel ohne Entscheidungspunkte",
      "Nur am Projektende wird über Fortführung entschieden",
      "Der Kunde entscheidet allein über jede Phase",
    ],
    answer: 0 },

  { id: "an29", topic: "analyse", type: "gap",
    q: "Stage-Gate-Prozess aus der LV: Ergänzen Sie die Reihenfolge der Phasen.",
    text: "Ideengenerierung → {} → {} → Transfer → Serienentwicklung",
    gaps: [["Exploration", "Machbarkeit", "Markteinführung"], ["Machbarkeit", "Exploration", "Ideengenerierung"]] },

  { id: "an30", topic: "analyse", type: "match",
    q: "Stage-Gate (Variante mit 6 Gates, Folie 76): Ordnen Sie die Gates zu.",
    explain: "Achtung: Die LV zeigt zwei Varianten. Folie 76 hat 6 Gates (Gate 1 = Projektbeginn vor der Ideengenerierung). Folie 77 hat 4 Gates zwischen den 5 Phasen (Gate 1 nach der Ideengenerierung) und nennt dazu die Gate-Kriterien.",
    pairs: [
      ["Gate 1", "Projektbeginn"],
      ["Gate 2", "Konzeptfreigabe (Definition der Produktoptionen)"],
      ["Gate 3", "Produktfreigabe"],
      ["Gate 4", "Design-Festlegung"],
      ["Gate 5", "Erprobung"],
      ["Gate 6", "Markteinführung"],
    ] },

  { id: "an31", topic: "analyse", type: "single",
    q: "Was zeigt die GAP-Analyse?",
    options: [
      "Die Differenz zwischen dem angestrebten Soll-Zustand und dem ohne zusätzliche Aktivitäten erreichbaren Zustand",
      "Den Unterschied zwischen Ist- und Plankosten der letzten Periode",
      "Die Lücke zwischen eigenem Preis und Konkurrenzpreis",
      "Die Differenz zwischen statischem und dynamischem Payback",
    ],
    answer: 0,
    explain: "Die Lücke wird über strategische oder operative Maßnahmen geschlossen, etwa Diversifikation, Produkt- oder Marktentwicklung und Marktdurchdringung." },

  { id: "an32", topic: "analyse", type: "multi",
    q: "Welche gehören laut LV zu den vier wichtigsten Einflussfaktoren des ROI im PIMS-Programm?",
    options: ["Investitionsintensität", "Produktivität", "Marktanteil", "Vertikale Integration", "Werbebudget", "Anzahl der Patente"],
    answer: [0, 1, 2, 3] },

  { id: "an33", topic: "analyse", type: "multi",
    q: "Welche Grenzen des PIMS-Programms werden genannt?",
    options: ["Hohe Kosten", "Hoher Komplexitätsgrad", "Neue Märkte können nicht identifiziert werden", "Zu wenige empirische Daten", "Nur monokausale Analyse"],
    answer: [0, 1, 2],
    explain: "PIMS ist gerade nicht monokausal (rund 30 Einflussfaktoren) und stützt sich auf eine sehr große empirische Datenbasis." },

  { id: "an34", topic: "analyse", type: "tf",
    q: "Im Gegensatz zur BCG-Matrix strebt PIMS keine monokausale Analyse an und stützt sich auf eine große empirische Datenbank (ca. 3.000 Geschäftseinheiten).",
    answer: true },

  { id: "an35", topic: "analyse", type: "multi",
    q: "Welche Grundannahmen hat das PIMS-Programm?",
    options: ["Universalität der Gesetze (unabhängig von Ort und Zeit)", "Existenz von Marktgesetzen", "Erlernbarkeit von gesetzeskonformen Strategien", "Märkte sind grundsätzlich unvorhersehbar"],
    answer: [0, 1, 2] },

  { id: "an36", topic: "analyse", type: "match",
    q: "Risikofaktoren (F&E/Innovation): Ordnen Sie zu.",
    pairs: [
      ["Technisches Realisationsrisiko (kein Ergebnis)", "internes Risiko"],
      ["Serendipitätsrisiko (ein anderes Ergebnis)", "internes Risiko"],
      ["Kostenrisiko", "internes Risiko"],
      ["Zeitrisiko", "internes Risiko"],
      ["Verwertungsrisiko", "externes Risiko"],
      ["Mangelnde Nachfrage", "externes Risiko"],
      ["Innovationsrisiko (z. B. Patent)", "externes Risiko"],
    ] },

  { id: "an37", topic: "analyse", type: "single",
    q: "Was versteht man unter dem Serendipitätsrisiko?",
    options: ["Die Forschung liefert ein anderes Ergebnis als geplant", "Die Forschung liefert gar kein Ergebnis", "Die Kosten steigen", "Ein Patent eines Konkurrenten blockiert die Verwertung"],
    answer: 0 },

  { id: "an38", topic: "analyse", type: "single",
    q: "Was zeigt ein Veränderungsportfolio (Beispiel aus der LV)?",
    options: ["Veränderung des Umsatzes gegenüber der Veränderung des Deckungsbeitrags je Produkt", "Marktwachstum gegenüber Marktanteil", "Marktattraktivität gegenüber Wettbewerbsvorteil", "Produkte gegenüber Märkten"],
    answer: 0 },

  { id: "an39", topic: "analyse", type: "tf",
    q: "Laut LV ist das BCG-Portfolio mit dem Branchenlebenszyklus und der Erfahrungskurve verknüpft (hoher Marktanteil → niedrigere Stückkosten).",
    answer: true },

  /* ===================== PRICING ===================== */
  { id: "pr01", topic: "pricing", type: "single",
    q: "Worum geht es beim Pricing laut LV (Simon-Kucher) „im Grunde“?",
    options: ["Die volle Zahlungsbereitschaft abzuschöpfen", "Die Kosten zu decken", "Den Konkurrenzpreis zu unterbieten", "Den Marktanteil zu maximieren"],
    answer: 0 },

  { id: "pr02", topic: "pricing", type: "num",
    q: "Preis 100 €, variable Kosten 60 €/Stück, Absatzmenge 1 Mio. Stück, Fixkosten 30 Mio. €. Wie hoch ist der Gewinn in Mio. €?",
    answer: 10, tol: 0.01, unit: "Mio. €",
    explain: "(100 − 60) × 1 Mio. − 30 Mio. = 10 Mio. €." },

  { id: "pr03", topic: "pricing", type: "num",
    q: "Gleiches Beispiel (Preis 100 €, var. Kosten 60 €, 1 Mio. Stück, Fixkosten 30 Mio. €). Um wie viel <b>Prozent</b> steigt der Gewinn, wenn der Preis um 10 % erhöht wird (alles andere konstant)?",
    answer: 100, tol: 0.5, unit: "%",
    explain: "Neuer Gewinn: (110 − 60) × 1 Mio. − 30 Mio. = 20 Mio. €, das ist +100 %. Der Preis ist der stärkste Gewinnhebel." },

  { id: "pr04", topic: "pricing", type: "match",
    q: "Ausgangsgewinn 10 Mio. € (Preis 100, var. Kosten 60, 1 Mio. Stück, Fixkosten 30 Mio.). Ordnen Sie zu: Eine 10%-Verbesserung bei … erhöht den Gewinn um …",
    pairs: [["Fixkosten", "30 %"], ["Absatzmenge", "40 %"], ["Variable Stückkosten", "60 %"], ["Preis", "100 %"]] },

  { id: "pr05", topic: "pricing", type: "num",
    q: "Beispiel von der Folie „Preisreduktion von 10 %“: Preis 100 €, Kosten 80 € pro Stück. Der Preis wird um 10 % auf 90 € gesenkt. Um wie viel <b>Prozent</b> muss die Absatzmenge steigen, damit der Gewinn gleich bleibt?",
    answer: 100, tol: 0.5, unit: "%",
    explain: "Der Gewinn pro Stück halbiert sich von 20 € auf 10 €. Man muss also doppelt so viel verkaufen, das sind +100 % (so auch die Folie: „100 %!“)." },

  { id: "pr12", topic: "pricing", type: "num",
    q: "Anderes Zahlenbeispiel: Preis 100 €, variable Kosten 60 € pro Stück (Fixkosten bleiben gleich). Der Preis wird um 10 % auf 90 € gesenkt. Um wie viel <b>Prozent</b> muss die Absatzmenge steigen, damit der Gewinn gleich bleibt? (auf 1 Nachkommastelle)",
    answer: 33.3, tol: 0.2, unit: "%",
    explain: "Der Deckungsbeitrag pro Stück sinkt von 40 € auf 30 €. 40 / 30 = 1,333, also rund +33,3 % Menge. Das Ergebnis hängt immer davon ab, wie viel vom Preis pro Stück übrig bleibt: Je kleiner die Marge, desto größer die nötige Mehrmenge." },

  { id: "pr13", topic: "pricing", type: "single",
    q: "Weber-Grill-Beispiel aus der LV: „One Touch Gold“ kostet 159,70 €, „One Touch Silver“ 99,70 €. Was zeigt das Beispiel?",
    options: [
      "Für mehr Komfort sind Kunden bereit, deutlich mehr zu zahlen (+60 % Preis) – Preis nach Kundennutzen bzw. Zahlungsbereitschaft",
      "Höhere Produktionskosten müssen immer voll weitergegeben werden",
      "Kostenführerschaft ist im Konsumgüterbereich die einzige erfolgreiche Strategie",
      "Der Köder-Effekt bei Abonnements",
    ],
    answer: 0 },

  { id: "pr14", topic: "pricing", type: "match",
    q: "Pricing-Herausforderungen (Simon-Kucher): Welche Abteilung argumentiert typischerweise wofür?",
    pairs: [
      ["Sales („Ich weiß, was die Konkurrenz verlangt“)", "Low prices"],
      ["Product („Ich weiß, wie gut unser Produkt ist“)", "Brand premium"],
      ["Marketing („Ich weiß, was unsere Kunden sagen“)", "Value pricing"],
      ["Finance („Ich kenne unsere Kosten“)", "Target margins"],
    ] },

  { id: "pr06", topic: "pricing", type: "single",
    q: "The Economist bot zusätzlich eine unattraktive Option „nur Print“ zum gleichen Preis wie „Print + Online“ (125 USD) an. Kaum jemand wählte sie, aber der Anteil „Print + Online“ stieg von 32 % auf 84 %. Welcher Effekt wird hier genutzt?",
    options: ["Ein Köder- bzw. Ankereffekt (Decoy): Pricing ist Psychologie", "Erfahrungskurveneffekt", "Fixkostendegression", "Kannibalisierung"],
    answer: 0,
    explain: "Der Umsatz pro Kunde stieg von 80,12 auf 114,44 USD, also um 43 %." },

  { id: "pr07", topic: "pricing", type: "match",
    q: "Pricing-Prozess (Simon-Kucher): Ordnen Sie die Aufgaben der Phase zu.",
    pairs: [
      ["Pricing-Ziele, Preispositionierung, Segmentierung", "Preisstrategie"],
      ["Angebot (Bündel vs. Einzelelemente), profitoptimales Preisniveau, Preisdifferenzierung", "Preissetzung"],
      ["Verhandlungen und Großgeschäfte, Änderungsmanagement", "Preisimplementierung"],
      ["Incentives, Preisorganisation, „Kultur des Profits“", "Preismanagement"],
    ] },

  { id: "pr08", topic: "pricing", type: "single",
    q: "Michelin wechselte vom Preis pro Reifen zu einem Preis pro gefahrenem Kilometer („Keep your truck rolling“). Wie nennt man diesen Ansatz?",
    options: ["Value-based Pricing bzw. Preismodellinnovation", "Kostenplus-Kalkulation", "Penetrationspreisstrategie", "Skimming"],
    answer: 0,
    explain: "Beim neuen Modell steigt der Preis „automatisch“ mit dem gesteigerten Wert (Laufzeit). Weitere Beispiele: Schindler (Nutzungsrechte, Leasing), GE-Flugzeugmotoren (produktive Stunden), Wasseraufbereitung (pro Liter geklärtes Wasser)." },

  { id: "pr09", topic: "pricing", type: "single",
    q: "Ein Logistiker vereinbarte 2005 einen 5-Jahres-Vertrag mit Preis pro geliefertem TV-Gerät. Warum wurde das zur „Falle“?",
    options: ["Die TV-Geräte wurden immer größer, die Kosten stiegen, der Preis blieb gleich", "Die Nachfrage nach Fernsehern brach ein", "Der Vertrag war zu kurz", "Der Preis war an den Ölpreis gekoppelt"],
    answer: 0,
    explain: "Lösung: ein zukunftsfähiges Geschäftsmodell mit Preisen nach Displaygröße." },

  { id: "pr10", topic: "pricing", type: "tf",
    q: "Laut Warren Buffett ist die wichtigste Entscheidung bei der Bewertung eines Unternehmens dessen „Pricing Power“.",
    answer: true },

  { id: "pr11", topic: "pricing", type: "single",
    q: "Warum gilt der Preis in der Formel Gewinn = Preis × Menge − Kosten als besonderer Hebel?",
    options: ["Er wirkt multiplikativ und wird oft schlecht gemanagt", "Er ist gesetzlich geregelt", "Er beeinflusst nur die Fixkosten", "Er ist kurzfristig nicht veränderbar"],
    answer: 0,
    explain: "Bei der Menge sind die Möglichkeiten eingeschränkt, bei den Kosten ist oft schon alles ausgereizt." },

  /* ===================== GRÜNDUNG: GEWERBE, RECHTSFORMEN, ABLAUF ===================== */
  { id: "gr01", topic: "gruendung", type: "multi",
    q: "Wann ist eine Tätigkeit laut Gewerbeordnung „gewerbsmäßig“?",
    options: ["Selbstständig (auf eigene Rechnung und Gefahr)", "Regelmäßig (Wiederholung oder längere Dauer)", "In Ertragserzielungsabsicht", "Nur bei mehr als 10 Mitarbeitern", "Nur bei Eintragung ins Firmenbuch"],
    answer: [0, 1, 2] },

  { id: "gr02", topic: "gruendung", type: "match",
    q: "Ordnen Sie die Gewerbe der richtigen Gewerbeart zu.",
    pairs: [
      ["Handelsgewerbe, Werbeagentur, Büroservice", "Freies Gewerbe"],
      ["Unternehmensberatung, Tischler:in, Kosmetik", "Reglementiertes Gewerbe/Handwerk"],
      ["Baumeister:in, Pyrotechnik, Gas- und Sanitärtechnik", "Rechtskraftgewerbe"],
    ] },

  { id: "gr03", topic: "gruendung", type: "single",
    q: "Ab wann darf ein <b>Rechtskraftgewerbe</b> ausgeübt werden?",
    options: ["Ab Rechtskraft des Bescheids (nach Zuverlässigkeitsprüfung)", "Ab der Gewerbeanmeldung", "Ab Eintragung ins Firmenbuch", "Ab Anmeldung bei der SVS"],
    answer: 0 },

  { id: "gr04", topic: "gruendung", type: "tf",
    q: "Für ein freies Gewerbe ist kein Befähigungsnachweis nötig – eine Gewerbeberechtigung (Anmeldung) braucht man trotzdem.",
    answer: true },

  { id: "gr05", topic: "gruendung", type: "multi",
    q: "Wie kann man ein reglementiertes Gewerbe ausüben, wenn man selbst keinen Befähigungsnachweis hat?",
    options: [
      "Individuelle Befähigung beantragen (§ 19 GewO)",
      "Befähigungs- oder Meisterprüfung ablegen",
      "Eine Gesellschaft gründen, in der ein unbeschränkt haftender Gesellschafter den Nachweis einbringt",
      "Eine gewerberechtliche Geschäftsführung anstellen (mind. die Hälfte der Normalarbeitszeit)",
      "Den Befähigungsnachweis eines Bekannten übertragen lassen",
    ],
    answer: [0, 1, 2, 3],
    explain: "Der Befähigungsnachweis ist personengebunden und nicht übertragbar." },

  { id: "gr06", topic: "gruendung", type: "single",
    q: "Was kostet die Gewerbeanmeldung?",
    options: ["Sie ist kostenlos", "100 € Pauschale", "Abhängig vom Gewerbe 50–500 €", "1 % des geplanten Umsatzes"],
    answer: 0 },

  { id: "gr07", topic: "gruendung", type: "num",
    q: "Bis zu wie viel Prozent des Jahresumsatzes dürfen Unternehmer:innen laut Nebenrechten insgesamt ergänzende Leistungen aus anderen (reglementierten und freien) Gewerben erbringen, ohne eigene Gewerbeberechtigung?",
    answer: 30, tol: 0, unit: "%",
    explain: "Zusätzlich gilt: Leistungen aus reglementierten Gewerben dürfen nur bis 15 % des jeweiligen Auftragswertes bzw. Zeitaufwandes ausmachen." },

  { id: "gr08", topic: "gruendung", type: "match",
    q: "Ordnen Sie die Haftung der Rechtsform bzw. Rolle zu.",
    pairs: [
      ["Einzelunternehmer:in", "unbeschränkt mit dem Privatvermögen"],
      ["OG-Gesellschafter:in", "unmittelbar, solidarisch und unbeschränkt"],
      ["Komplementär (KG)", "unbeschränkt"],
      ["Kommanditist (KG)", "nur bis zur im Firmenbuch eingetragenen Haftsumme"],
      ["GmbH", "Gesellschaftsvermögen"],
    ] },

  { id: "gr09", topic: "gruendung", type: "num",
    q: "Wie hoch ist das gesetzliche Mindeststammkapital einer GmbH in Euro?",
    answer: 10000, tol: 0, unit: "€",
    explain: "Die Hälfte davon muss bar eingezahlt werden." },

  { id: "gr10", topic: "gruendung", type: "single",
    q: "Wie wird der Gesellschaftsvertrag einer GmbH (mehrere Gesellschafter) abgeschlossen?",
    options: ["Als Notariatsakt", "Formfrei, auch mündlich", "Schriftlich ohne Beglaubigung", "Durch Eintragung bei der Gewerbebehörde"],
    answer: 0,
    explain: "Die vereinfachte Gründung nach § 9a GmbHG geht ohne Notar, digital mit ID-Austria. Das ist nur möglich, wenn eine einzige natürliche Person zugleich alleinige Gesellschafterin und Geschäftsführerin ist." },

  { id: "gr11", topic: "gruendung", type: "tf",
    q: "Der Gesellschaftsvertrag einer OG ist formfrei und kann sogar mündlich geschlossen werden.",
    answer: true,
    explain: "Schriftlich wird empfohlen. Die OG entsteht erst mit dem Firmenbucheintrag." },

  { id: "gr12", topic: "gruendung", type: "single",
    q: "Wann entsteht eine OG?",
    options: ["Mit der Eintragung ins Firmenbuch", "Mit Abschluss des Gesellschaftsvertrags", "Mit der Gewerbeanmeldung", "Mit der ersten Rechnung"],
    answer: 0 },

  { id: "gr13", topic: "gruendung", type: "single",
    q: "Ab welchem Nettojahresumsatz muss ein Einzelunternehmen ins Firmenbuch eingetragen werden (Rechnungslegungspflicht, bei zweimaligem Überschreiten)?",
    options: ["700.000 €", "55.000 €", "1.000.000 €", "100.000 €"],
    answer: 0,
    explain: "Freiwillig ist der Eintrag jederzeit möglich, dann mit dem Zusatz „e.U.“." },

  { id: "gr14", topic: "gruendung", type: "single",
    q: "Ein GmbH-Gesellschafter ist zu 60 % beteiligt und zugleich Geschäftsführer. Wie ist er sozialversichert?",
    options: ["Immer GSVG", "Immer ASVG", "ASVG bei Weisungsbindung, sonst GSVG", "Gar nicht"],
    answer: 0,
    explain: "Bis 25 % Beteiligung: ASVG. Über 25 % bis unter 50 %: je nach Weisungsbindung. Ab 50 %: immer GSVG." },

  { id: "gr15", topic: "gruendung", type: "match",
    q: "Geschäftsführende GmbH-Gesellschafter: Ordnen Sie die Sozialversicherung nach Beteiligung zu.",
    pairs: [
      ["bis 25 %", "ASVG"],
      ["über 25 % bis unter 50 %", "ASVG bei Dienstvertrag und Weisungsbindung, sonst GSVG"],
      ["ab 50 %", "immer GSVG"],
    ] },

  { id: "gr16", topic: "gruendung", type: "num",
    q: "Wie hoch ist die Körperschaftsteuer (KöSt) für eine GmbH in Österreich (in %)?",
    answer: 23, tol: 0, unit: "%",
    explain: "Für Ausschüttungen kommen 27,5 % KESt dazu. Die Mindest-KöSt beträgt 500 € pro Jahr (5 % des gesetzlichen Mindeststammkapitals), vorausgezahlt zu je einem Viertel. Die Rechtsform-Tabelle im Leitfaden sagt „500 € p. a. in den ersten fünf Jahren“." },

  { id: "gr17", topic: "gruendung", type: "multi",
    q: "Welche Aussagen zur Flexiblen Kapitalgesellschaft (FlexKapG/FlexCo) sind richtig?",
    options: [
      "Mindeststammkapital 10.000 €, davon mind. 5.000 € bar",
      "Unternehmenswert-Anteile ohne Stimmrecht bis max. 24,99 % des Stammkapitals möglich",
      "Ermöglicht Umlaufbeschlüsse und erleichtert Mitarbeiterbeteiligung",
      "Inhaber von Unternehmenswert-Anteilen werden im Firmenbuch eingetragen",
      "Ist vor allem für Kleinbetriebe gedacht",
    ],
    answer: [0, 1, 2] },

  { id: "gr18", topic: "gruendung", type: "tf",
    q: "Der Name eines Kommanditisten darf in die Firma (den Firmenwortlaut) einer KG aufgenommen werden.",
    answer: false },

  { id: "gr19", topic: "gruendung", type: "single",
    q: "Bei welcher Abgabe haftet auch der Kommanditist einer KG unbeschränkt?",
    options: ["Kommunalsteuer", "Umsatzsteuer", "Einkommensteuer", "Grunderwerbsteuer"],
    answer: 0 },

  { id: "gr20", topic: "gruendung", type: "multi",
    q: "Welche Vorteile einer Gesellschaftsgründung gegenüber der Einzelgründung nennt der Leitfaden?",
    options: ["Know-how ergänzt sich", "Arbeitsteilung", "Leichtere Kapitalaufbringung", "Geringeres Risiko", "Schnellere Entscheidungen", "Volle Entscheidungsfreiheit"],
    answer: [0, 1, 2, 3] },

  { id: "gr21", topic: "gruendung", type: "multi",
    q: "Welche Angaben müssen im Firmenbuch eingetragene Unternehmen auf Geschäftsbriefen, E-Mails und Websites machen?",
    options: ["Firma", "Rechtsform", "Sitz", "Firmenbuchnummer", "Firmenbuchgericht", "Umsatz des Vorjahres"],
    answer: [0, 1, 2, 3, 4] },

  { id: "gr22", topic: "gruendung", type: "multi",
    q: "Welche Befreiungen bringt das Neugründungsförderungsgesetz (NeuFöG) bei einer Neugründung?",
    options: [
      "Gerichtsgebühren für die Firmenbucheintragung",
      "Stempelgebühren und Bundesverwaltungsabgaben",
      "Lohnabgaben (ca. 6 %) für Arbeitskräfte in den ersten 36 Monaten",
      "Umsatzsteuer in den ersten 3 Jahren",
      "Einkommensteuer im ersten Jahr",
    ],
    answer: [0, 1, 2],
    explain: "Die Befreiung von Lohnabgaben gilt nur bei Neugründungen, nicht bei Betriebsübertragungen." },

  { id: "gr23", topic: "gruendung", type: "multi",
    q: "Welche Voraussetzungen gelten für die NeuFöG-Begünstigung?",
    options: [
      "Neue betriebliche Struktur (bzw. Inhaberwechsel bei Übertragung)",
      "In den letzten 5 Jahren keine gleichartige selbstständige Tätigkeit",
      "Beratungsbestätigung (Gründerservice) und Formular NeuFö 2",
      "Mindestens 3 Mitarbeiter",
      "Stammkapital von mindestens 35.000 €",
    ],
    answer: [0, 1, 2] },

  { id: "gr24", topic: "gruendung", type: "single",
    q: "Wann müssen Arbeitskräfte bei der Österreichischen Gesundheitskasse (ÖGK) angemeldet werden?",
    options: ["Vor Arbeitsantritt", "Innerhalb eines Monats nach Arbeitsantritt", "Mit dem ersten Lohnzettel", "Bis Jahresende"],
    answer: 0 },

  { id: "gr25", topic: "gruendung", type: "single",
    q: "Innerhalb welcher Frist ist die Betriebseröffnung dem Finanzamt zu melden?",
    options: ["Innerhalb eines Monats", "Innerhalb einer Woche", "Innerhalb von 6 Monaten", "Mit der ersten Steuererklärung"],
    answer: 0 },

  { id: "gr26", topic: "gruendung", type: "match",
    q: "Ordnen Sie das Finanzamt-Formular (Fragebogen) der Rechtsform zu.",
    pairs: [["Einzelunternehmen", "Verf24"], ["Personengesellschaft", "Verf16"], ["Kapitalgesellschaft", "Verf15"]] },

  { id: "gr27", topic: "gruendung", type: "match",
    q: "Wie viele Gründungsschritte nennt der Leitfaden je Rechtsform?",
    pairs: [["Einzelunternehmen", "7 Schritte"], ["OG/KG", "9 Schritte"], ["GmbH/FlexKapG", "11 Schritte"]] },

  { id: "gr28", topic: "gruendung", type: "multi",
    q: "Welche allgemeinen Voraussetzungen gelten für die Ausübung eines Gewerbes (natürliche Person)?",
    options: ["Vollendetes 18. Lebensjahr und volle Geschäftsfähigkeit", "EU/EWR-Staatsbürgerschaft oder passender Aufenthaltstitel", "Keine Ausschlussgründe (z. B. bestimmte Verurteilungen)", "Abgeschlossenes Studium", "Mindestvermögen von 10.000 €"],
    answer: [0, 1, 2] },

  { id: "gr29", topic: "gruendung", type: "single",
    q: "Ein Einzelhandelsgeschäft mit 450 m² Verkaufsfläche: Ist eine Betriebsanlagengenehmigung nötig?",
    options: ["Nein, laut 2. Genehmigungsfreistellungsverordnung (bestimmte Arten von Einzelhandelsbetrieben bis 600 m²) in der Regel nicht", "Ja, jede Betriebsanlage ist genehmigungspflichtig", "Nur wenn mehr als 5 Mitarbeiter", "Nur in Wien"],
    answer: 0 },

  { id: "gr30", topic: "gruendung", type: "tf",
    q: "Im vereinfachten Betriebsanlagenverfahren haben die Nachbarn keine Parteistellung.",
    answer: true },

  { id: "gr31", topic: "gruendung", type: "multi",
    q: "Welche Standortfaktoren sind „harte“ (messbare) Faktoren?",
    options: ["Erreichbarkeit", "Kaufkraft", "Frequenz", "Flächenwidmung", "Image", "Wirtschaftsklima", "Innovatives Milieu"],
    answer: [0, 1, 2, 3] },

  { id: "gr32", topic: "gruendung", type: "match",
    q: "Schutzrechte: Ordnen Sie die maximale Schutzdauer zu.",
    pairs: [["Patent", "max. 20 Jahre"], ["Gebrauchsmuster", "max. 10 Jahre"], ["Urheberrecht", "bis 70 Jahre nach dem Tod"]],
    distractors: ["max. 5 Jahre"] },

  { id: "gr33", topic: "gruendung", type: "single",
    q: "Wie lange beträgt die gesetzliche Gewährleistungsfrist für bewegliche Sachen?",
    options: ["2 Jahre", "1 Jahr", "3 Jahre", "6 Monate"],
    answer: 0,
    explain: "Unbewegliche Sachen: 3 Jahre. Gewährleistung ist verschuldensunabhängig, die Garantie freiwillig." },

  { id: "gr34", topic: "gruendung", type: "match",
    q: "Ordnen Sie die Begriffe zu.",
    pairs: [
      ["Gewährleistung", "gesetzlich, verschuldensunabhängig, Mangel bei Übergabe"],
      ["Garantie", "freiwillige Zusage, oft des Herstellers"],
      ["Schadenersatz", "setzt Verschulden voraus"],
      ["Produkthaftung", "verschuldensunabhängig, nur Folgeschäden"],
    ] },

  { id: "gr35", topic: "gruendung", type: "match",
    q: "Ordnen Sie die Vertragsart der Beschreibung zu.",
    pairs: [
      ["Dienstvertrag", "persönliche Arbeitsleistung, Bindung an Zeit und Ort, weisungsgebunden"],
      ["Freier Dienstvertrag", "ohne Bindung an Arbeitszeit und Weisungen"],
      ["Werkvertrag", "geschuldet wird ein Erfolg bzw. ein abgeschlossenes Werk"],
    ] },

  { id: "gr36", topic: "gruendung", type: "single",
    q: "Wie lange darf eine Probezeit im Dienstvertrag maximal dauern?",
    options: ["1 Monat", "3 Monate", "6 Monate", "2 Wochen"],
    answer: 0 },

  { id: "gr37", topic: "gruendung", type: "multi",
    q: "Welche Wege zur Geschäftsidee nennt der Gründungsleitfaden?",
    options: ["Neue Ideen (Trends)", "Bewährtes verbessern", "Betriebsnachfolge", "Franchising", "Outsourcing", "Lotterie"],
    answer: [0, 1, 2, 3, 4] },

  { id: "gr38", topic: "gruendung", type: "single",
    q: "Worauf sollte man laut Leitfaden bei der Präsentation der Geschäftsidee vor Kunden den Fokus legen?",
    options: ["Auf Problemlösung und Kundennutzen", "Auf die technischen Details des Produkts", "Auf den niedrigsten Preis", "Auf die Rechtsform"],
    answer: 0 },

  { id: "gr39", topic: "gruendung", type: "tf",
    q: "Wer als Outsourcing-Partner nur für einen einzigen Auftraggeber arbeitet, riskiert, dass die ÖGK das als Arbeitsverhältnis einstuft – trotz Gewerbeschein.",
    answer: true },

  /* ===================== GRÜNDUNG: PLANUNG, FINANZIERUNG, STEUERN, SV ===================== */
  { id: "pl01", topic: "planung", type: "multi",
    q: "Welche Inhalte gehören laut WKO-Leitfaden in einen Businessplan?",
    options: ["Executive Summary", "Produkt/Dienstleistung", "Markt und Wettbewerb", "Marketing und Vertrieb", "Unternehmen und Management", "Erfolgs- und Finanzplanung", "Umsetzungsplanung/Meilensteine", "Steuererklärungen der Gründer"],
    answer: [0, 1, 2, 3, 4, 5, 6] },

  { id: "pl02", topic: "planung", type: "tf",
    q: "Die Executive Summary steht im Businessplan ganz vorne, wird aber zuletzt geschrieben.",
    answer: true },

  { id: "pl03", topic: "planung", type: "single",
    q: "Welchen Umfang sollte ein Businessplan laut WKO-Leitfaden haben?",
    options: ["Bis zu 20 Seiten", "Mindestens 50 Seiten", "Maximal 2 Seiten", "Genau 10 Seiten"],
    answer: 0 },

  { id: "pl04", topic: "planung", type: "gap",
    q: "Grundschema der Planrechnung (Ergebnisvorschau): Ergänzen Sie.",
    text: "Erlöse − variable Kosten = {}; {} − Personalkosten − sonstige Fixkosten = {}",
    gaps: [["Deckungsbeitrag", "Betriebsergebnis", "Cashflow"], ["Deckungsbeitrag", "Umsatz", "Cashflow"], ["Betriebsergebnis", "Deckungsbeitrag", "Liquidität"]] },

  { id: "pl05", topic: "planung", type: "match",
    q: "Ordnen Sie die Kosten zu.",
    pairs: [
      ["Wareneinsatz / Material", "variable Kosten"],
      ["Bezogene Leistungen", "variable Kosten"],
      ["Miete", "Fixkosten"],
      ["Versicherung", "Fixkosten"],
      ["Abschreibung (AfA)", "Fixkosten"],
    ] },

  { id: "pl06", topic: "planung", type: "single",
    q: "Welchen Planungszeitraum empfiehlt der Leitfaden für die Planrechnung?",
    options: ["Die ersten 4 Jahre auf Jahresbasis, das 1. Jahr auf Monats- oder Quartalsbasis", "Nur das erste Jahr", "10 Jahre auf Jahresbasis", "Die ersten 2 Jahre auf Wochenbasis"],
    answer: 0 },

  { id: "pl07", topic: "planung", type: "num",
    q: "Faustregel Personalkosten: (Bruttomonatslohn × 14) + 30 % Lohnnebenkosten. Wie hoch sind die jährlichen Personalkosten bei einem Bruttomonatslohn von 3.000 € (in €)?",
    answer: 54600, tol: 1, unit: "€",
    explain: "3.000 × 14 = 42.000 €. Mit 30 % Lohnnebenkosten (12.600 €) ergibt das 54.600 €." },

  { id: "pl08", topic: "planung", type: "num",
    q: "Ein Firmen-Pkw kostet 40.000 €. Der Leitfaden nennt für neue Pkw eine Nutzungsdauer von 8 Jahren. Wie hoch ist die jährliche lineare AfA (in €)?",
    answer: 5000, tol: 0, unit: "€" },

  { id: "pl09", topic: "planung", type: "num",
    q: "Ein Einzelunternehmer braucht einen Mindestumsatz von 92.000 € und hat 1.288 verkaufbare Stunden pro Jahr. Wie hoch muss sein Stundensatz mindestens sein? (in €, 2 Nachkommastellen)",
    answer: 71.43, tol: 0.02, unit: "€",
    explain: "Stundensatz = Mindestumsatz ÷ verkaufbare Stunden = 92.000 ÷ 1.288 = 71,43 €." },

  { id: "pl10", topic: "planung", type: "single",
    q: "Wie kommt der Leitfaden auf 1.288 verkaufbare Stunden einer Unternehmerin bzw. eines Unternehmers?",
    options: [
      "46 Wochen × 5 Tage × 8 h = 1.840 h, davon 30 % nicht verkaufbar",
      "52 Wochen × 40 h = 2.080 h, davon 38 % nicht verkaufbar",
      "48 Wochen × 5 Tage × 8 h, davon 15 % nicht verkaufbar",
      "220 Tage × 8 h, davon 25 % nicht verkaufbar",
    ],
    answer: 0 },

  { id: "pl11", topic: "planung", type: "single",
    q: "Wie hoch soll der kalkulatorische Unternehmerlohn (Einzelunternehmen/Personengesellschaft) laut Leitfaden mindestens angesetzt werden?",
    options: ["25.000 €", "13.539 €", "6.613,20 €", "55.000 €"],
    answer: 0 },

  { id: "pl12", topic: "planung", type: "match",
    q: "Erlösplanung in drei Szenarien: Ordnen Sie zu.",
    pairs: [["Best Case", "aggressiv"], ["Most Likely", "realistisch"], ["Worst Case", "konservativ"]] },

  { id: "pl13", topic: "planung", type: "multi",
    q: "Woraus setzt sich der Kapitalbedarf laut Leitfaden zusammen?",
    options: ["Investitionen (inkl. Nebenkosten)", "Waren-/Materiallager", "Laufende Kosten und Startkosten (inkl. private Lebensführung)", "Reserve", "Erwarteter Gewinn des ersten Jahres"],
    answer: [0, 1, 2, 3] },

  { id: "pl14", topic: "planung", type: "single",
    q: "Was ist das Hauptziel einer guten Kapitalbedarfs- bzw. Finanzplanung?",
    options: ["Sicherung der Liquidität und Vermeidung der Zahlungsunfähigkeit", "Maximierung des Gewinns", "Minimierung der Steuern", "Erhöhung des Marktanteils"],
    answer: 0 },

  { id: "pl15", topic: "planung", type: "match",
    q: "Finanzierungsformen: Ordnen Sie das passende Merkmal zu.",
    pairs: [
      ["Investitionskredit", "Für Anlagevermögen, 4–20 Jahre, Laufzeit = Nutzungsdauer"],
      ["Kontokorrentkredit", "Laufender Zahlungsverkehr, Zinsen nur auf Inanspruchnahme, teuer"],
      ["Leasing", "Objekt bleibt Eigentum der Leasinggesellschaft"],
      ["Business Angels", "Kapital plus Know-how und Kontakte, ab ca. 20.000 €"],
      ["Venture Capital", "Beteiligungsfinanzierung (Risikokapital), ab ca. 400.000 €"],
      ["Crowdfunding/-investing", "Viele Kleinanleger, meist ab 100 €"],
    ] },

  { id: "pl16", topic: "planung", type: "single",
    q: "Welche Finanzierungsform bezeichnet der Leitfaden als „bequemste, aber teuerste“?",
    options: ["Lieferantenkredit (Verzicht auf Skonto)", "Kontokorrentkredit", "Leasing", "Factoring"],
    answer: 0,
    explain: "Beispiel: 2 % Skonto bei Zahlung in 10 Tagen oder netto in 30 Tagen. 20 Tage Kredit für 2 % entsprechen rund 36 % Jahreszins." },

  { id: "pl17", topic: "planung", type: "num",
    q: "Zahlungsbedingung: 10 Tage 2 % Skonto, 30 Tage netto. Welchem ungefähren Jahreszins (in %) entspricht der Verzicht auf Skonto? Rechnen Sie mit 2 % × 360 / 20.",
    answer: 36, tol: 0.5, unit: "%" },

  { id: "pl18", topic: "planung", type: "single",
    q: "Welchen Eigenkapitalanteil verlangen Banken laut Leitfaden üblicherweise?",
    options: ["20–30 %", "5 %", "50–60 %", "100 %"],
    answer: 0 },

  { id: "pl19", topic: "planung", type: "multi",
    q: "Welche Regeln gelten laut Leitfaden für Förderungen?",
    options: [
      "Der Antrag ist vor der ersten rechtsverbindlichen Bestellung bzw. vor Beginn des Vorhabens zu stellen.",
      "Es besteht kein Rechtsanspruch auf Förderung.",
      "Die Einreichung erfolgt meist über die Hausbank.",
      "Förderungen können auch nachträglich nach Projektabschluss beantragt werden.",
      "Geförderte Kredite müssen nicht zurückgezahlt werden.",
    ],
    answer: [0, 1, 2] },

  { id: "pl20", topic: "planung", type: "match",
    q: "Ordnen Sie die Förderstellen ihrem Schwerpunkt zu.",
    pairs: [
      ["aws (Austria Wirtschaftsservice)", "Förderbank des Bundes: Gründung, Wachstum, Innovation"],
      ["FFG", "Unternehmensnahe Forschung und Entwicklung"],
      ["ÖHT", "Tourismus und Freizeit"],
      ["KPC", "Umwelt und Energie"],
      ["AMS", "Erstmalige Selbstständigkeit aus Arbeitslosigkeit, Personal"],
    ] },

  { id: "pl21", topic: "planung", type: "single",
    q: "Was versteht man unter Factoring?",
    options: [
      "Verkauf offener Forderungen – man erhält sofort ca. 80 % gegen eine Gebühr",
      "Langfristiger Kredit für Maschinen",
      "Beteiligung durch Business Angels",
      "Zahlung innerhalb der Skontofrist durch die Bank",
    ],
    answer: 0 },

  { id: "pl22", topic: "planung", type: "single",
    q: "Bei der Sozialversicherung der gewerblichen Selbstständigen (SVS): Nach welchem Gesetz sind Kranken- und Pensionsversicherung geregelt?",
    options: ["GSVG", "ASVG", "BSVG", "UGB"],
    answer: 0,
    explain: "Die Unfallversicherung läuft nach ASVG." },

  { id: "pl23", topic: "planung", type: "match",
    q: "SVS-Beitragssätze 2026: Ordnen Sie zu.",
    pairs: [["Pensionsversicherung", "18,5 %"], ["Krankenversicherung", "6,8 %"], ["Selbständigenvorsorge", "1,53 %"], ["Unfallversicherung", "fix 155,40 € pro Jahr"]] },

  { id: "pl24", topic: "planung", type: "single",
    q: "Wie hoch ist die jährliche Mindestbeitragsgrundlage in der SVS 2026?",
    options: ["6.613,20 €", "97.020 €", "13.539 €", "55.000 €"],
    answer: 0,
    explain: "Die Höchstbeitragsgrundlage liegt bei 97.020 € pro Jahr." },

  { id: "pl25", topic: "planung", type: "multi",
    q: "Kleinunternehmerregelung der <b>SVS</b> (Ausnahme von KV/PV): Welche Aussagen sind richtig?",
    options: [
      "Gilt nur für Einzelunternehmer:innen",
      "Gewinn max. 6.613,20 € und Umsatz max. 55.000 € pro Jahr",
      "Die Unfallversicherung (155,40 €) bleibt bestehen",
      "Der Antrag ist rückwirkend für die letzten 5 Jahre möglich",
      "Gilt auch für GmbH-Geschäftsführer",
    ],
    answer: [0, 1, 2] },

  { id: "pl26", topic: "planung", type: "multi",
    q: "Kleinunternehmerregelung im <b>Umsatzsteuerrecht</b>: Welche Aussagen sind richtig?",
    options: [
      "Jahresumsatz unter 55.000 € brutto",
      "Es wird keine USt in Rechnung gestellt",
      "Es besteht kein Vorsteuerabzug",
      "Es handelt sich um eine unechte Steuerbefreiung",
      "Man erhält trotzdem die Vorsteuer zurück",
    ],
    answer: [0, 1, 2, 3],
    explain: "Ein Verzicht ist möglich und z. B. bei B2B-Kunden sinnvoll. Die Regelung betrifft nur die Umsatzsteuer, nicht die Sozialversicherung." },

  { id: "pl27", topic: "planung", type: "match",
    q: "Ordnen Sie die Steuersätze zu.",
    pairs: [
      ["Körperschaftsteuer", "23 %"],
      ["Kapitalertragsteuer (Ausschüttung)", "27,5 %"],
      ["Umsatzsteuer Normalsatz", "20 %"],
      ["Kommunalsteuer (Bruttolohnsumme)", "3 %"],
      ["Einkommensteuer", "0–55 % progressiv"],
    ] },

  { id: "pl28", topic: "planung", type: "single",
    q: "Bis zu welchem Einkommen ist man 2026 laut Leitfaden einkommensteuerfrei?",
    options: ["13.539 €", "11.000 €", "6.613,20 €", "20.000 €"],
    answer: 0 },

  { id: "pl29", topic: "planung", type: "num",
    q: "Grundfreibetrag: 15 % des Gewinns bis 33.000 €. Wie hoch ist der Grundfreibetrag bei einem Gewinn von 30.000 € (in €)?",
    answer: 4500, tol: 0, unit: "€",
    explain: "15 % × 30.000 = 4.500 €. Das Maximum liegt bei 4.950 € (15 % von 33.000 €). Gilt nur für Einzelunternehmen und Personengesellschaften." },

  { id: "pl30", topic: "planung", type: "match",
    q: "Gewinnermittlungsarten: Ordnen Sie zu.",
    pairs: [
      ["Einnahmen-Ausgaben-Rechnung", "Zuflussprinzip, bis 700.000 € Umsatz"],
      ["Doppelte Buchführung", "Bilanz und GuV; Pflicht für Kapitalgesellschaften"],
      ["Basispauschalierung", "Betriebsausgabenpauschale, Vorjahresumsatz bis 420.000 €"],
    ] },

  { id: "pl31", topic: "planung", type: "tf",
    q: "Eine GmbH darf ihren Gewinn mit einer Einnahmen-Ausgaben-Rechnung ermitteln, solange der Umsatz unter 700.000 € liegt.",
    answer: false,
    explain: "Kapitalgesellschaften (GmbH, AG, FlexKapG) und die GmbH & Co KG sind immer buchführungspflichtig." },

  { id: "pl32", topic: "planung", type: "single",
    q: "Ab wann besteht Registrierkassenpflicht?",
    options: ["Jahresumsatz über 15.000 € und Barumsätze über 7.500 €", "Ab dem ersten Barumsatz", "Ab 55.000 € Jahresumsatz", "Nur für Gastronomiebetriebe"],
    answer: 0 },

  { id: "pl33", topic: "planung", type: "single",
    q: "Wie lange müssen Buchhaltungsunterlagen grundsätzlich aufbewahrt werden?",
    options: ["Mindestens 7 Jahre", "3 Jahre", "10 Jahre", "Bis zur nächsten Steuerprüfung"],
    answer: 0,
    explain: "Bei Grundstücken bis zu 22 Jahre." },

  { id: "pl34", topic: "planung", type: "single",
    q: "Bis zu welchem Betrag (brutto) gilt eine Rechnung als Kleinbetragsrechnung mit vereinfachten Angaben?",
    options: ["400 €", "1.000 €", "100 €", "10.000 €"],
    answer: 0 },

  { id: "pl35", topic: "planung", type: "single",
    q: "Was bedeutet „Reverse Charge“ bei der Umsatzsteuer?",
    options: ["Die Steuerschuld geht auf den Leistungsempfänger über", "Die Umsatzsteuer wird rückerstattet", "Der Lieferant zahlt doppelte USt", "Die Rechnung wird storniert"],
    answer: 0 },

  { id: "pl36", topic: "planung", type: "single",
    q: "Was meint der Leitfaden mit dem „verflixten 3. Jahr“?",
    options: [
      "Nachverrechnung von Steuer und SV laut Bescheid – deshalb Rücklagen bilden (je ca. ¼ des Einkommens für Steuern und SV)",
      "Im 3. Jahr endet die Gewerbeberechtigung",
      "Im 3. Jahr muss man ins Firmenbuch",
      "Im 3. Jahr entfallen alle Förderungen",
    ],
    answer: 0,
    explain: "Die vorläufige SV-Beitragsgrundlage stützt sich auf den Steuerbescheid des drittvorangegangenen Jahres. Am Anfang drohen deshalb hohe Nachzahlungen." },

  { id: "pl37", topic: "planung", type: "match",
    q: "Marketingmix: Ordnen Sie die Instrumente zu.",
    pairs: [
      ["Sortiment, Qualität, Marke, Kundendienst", "Produkt- und Sortimentspolitik"],
      ["Rabatt, Skonto, Kredit", "Preispolitik"],
      ["Logistik, Lager, Absatzkanäle, Lieferzeit", "Distributionspolitik"],
      ["PR, Verkaufsförderung, Social Media, Website/SEO", "Kommunikationspolitik"],
    ] },

  { id: "pl38", topic: "planung", type: "single",
    q: "Wofür steht im WKO-Leitfaden das „A“ in den SMART-Zielen?",
    options: ["aktiv", "attraktiv", "akzeptiert", "angemessen"],
    answer: 0,
    explain: "Der Leitfaden schreibt „spezifisch, messbar, aktiv, realistisch, terminiert“." },

  { id: "pl39", topic: "planung", type: "single",
    q: "Ein:e Einzelunternehmer:in ist erstmals GSVG-versichert (Jungunternehmer:in). Was gilt für die Krankenversicherung in den ersten 2 Kalenderjahren?",
    options: ["Fixbeitrag (auf Basis der Mindestbeitragsgrundlage), keine Nachbemessung", "Beitragsfrei", "Nachbemessung ab dem 1. Jahr", "Doppelter Beitragssatz"],
    answer: 0 },

  { id: "pl40", topic: "planung", type: "single",
    q: "Ab einem Umsatz von wie viel Euro muss die Umsatzsteuervoranmeldung monatlich statt quartalsweise abgegeben werden?",
    options: ["100.000 €", "55.000 €", "35.000 €", "700.000 €"],
    answer: 0 },

  /* ===================== ERGÄNZUNGEN NACH QUELLENPRÜFUNG ===================== */
  /* --- Business Case --- */
  { id: "bc30", topic: "bc", type: "multi",
    q: "Welche Möglichkeiten zur Erstellung eines Business Case nennt das Skriptum?",
    options: ["Interne Erstellung", "Erstellung durch externe Berater", "Gemeinschaftlich durch interne Mitarbeiter und externe Berater", "Erstellung mit Lieferanten", "Erstellung durch die Hausbank", "Erstellung durch das Finanzamt"],
    answer: [0, 1, 2, 3] },

  { id: "bc31", topic: "bc", type: "single",
    q: "Laut Entscheidungsbaum: Ein Projekt über dem Kosten-Grenzbereich betrifft ein Management- bzw. Führungsinformationssystem (z. B. Balanced Scorecard). Es gibt mehrere Umsetzungsalternativen. Welcher Business Case ist angebracht?",
    options: ["Business Case als Kostenvergleich", "Business Case als Kosten/Nutzen-Vergleich", "Kein Business Case", "Business Plan statt Business Case"],
    answer: 0,
    explain: "Wie bei gesetzlich oder vertraglich notwendigen Projekten wird geprüft, ob es Alternativen gibt. Gibt es welche, folgt ein Kostenvergleich. Gibt es keine, braucht es keinen Business Case." },

  { id: "bc32", topic: "bc", type: "multi",
    q: "Für welche Zwecke kann laut Skriptum ein <b>Business Plan</b> erstellt werden?",
    options: [
      "Als internes Werkzeug zur Planung der Geschäftsentwicklung und Strategieumsetzung",
      "Als Investment Memorandum, um Fremd- oder Risikokapitalgeber zu gewinnen",
      "Als Unterlage für einen Börsengang (IPO)",
      "Für die Öffentlichkeitsarbeit (Fragen von Analysten und Rating-Agenturen)",
      "Als Wirtschaftlichkeitsnachweis für ein einzelnes IT-Projekt",
    ],
    answer: [0, 1, 2, 3],
    explain: "Der Wirtschaftlichkeitsnachweis für ein einzelnes Projekt ist die Aufgabe des Business Case." },

  { id: "bc33", topic: "bc", type: "single",
    q: "Wie heißt das Gremium, dessen Aufbau im Kapitel „Projektdetails“ unter Projektorganisation beschrieben wird?",
    options: ["Projektsteuerungsausschuss", "Aufsichtsrat", "Betriebsrat", "Generalversammlung"],
    answer: 0 },

  /* --- Kosten & Nutzen --- */
  { id: "ko19", topic: "kosten", type: "multi",
    q: "In welche Kategorien unterteilt Brugger die Kosten (Abb. „Kostenunterteilung“)?",
    options: ["Investitionskosten (extern/intern)", "Betriebskosten (extern/intern)", "Umlaufvermögen (Erhöhung): Lager und Forderungen", "Opportunitätskosten", "Kalkulatorische Wagniskosten"],
    answer: [0, 1, 2],
    explain: "Wichtig ist die dritte Kategorie: Eine Erhöhung des Umlaufvermögens (mehr Lager, mehr Forderungen) bindet Kapital und zählt deshalb auch als Kosten." },

  { id: "ko20", topic: "kosten", type: "single",
    q: "Für einen Prototypen wird eine Lagerhalle benutzt. Zu welcher Kostenkategorie zählt das laut Skriptum?",
    options: ["Infrastrukturkosten (dritte Kostenkategorie)", "Externe Dienstleistungskosten", "Personalkosten (Primärkosten)", "Intern verrechnete Leistungen"],
    answer: 0 },

  { id: "ko21", topic: "kosten", type: "match",
    q: "Ordnen Sie die Positionen der Kostentabelle im Skriptum zu.",
    pairs: [
      ["Kosten für Daten", "Externe Kosten – Kosten für Anschaffungen"],
      ["Kosten für Programmierungen", "Externe Kosten – Kosten für Dienstleistungen"],
      ["Abfindungen", "Interne Kosten – Personalkosten (Primärkosten)"],
      ["IT-bezogene Umlagen (PC, E-Mail, Netzwerk)", "Interne Kosten – Personalkosten (Sekundärkosten)"],
      ["Raumkosten für Meetings und Schulungen", "Interne Kosten – Infrastrukturkosten"],
    ] },

  { id: "ko22", topic: "kosten", type: "single",
    q: "Ordnungsraster nach Brugger (Abb. „Klassifizierung Kosten“): Welche zwei Dimensionen werden dabei kombiniert?",
    options: [
      "Zeitlicher Anfall (Investitionskosten/Projektphase vs. Betriebskosten/Betriebsphase) und sachliche Abgrenzung (externe vs. interne Kosten)",
      "Fixe vs. variable Kosten und direkte vs. indirekte Kosten",
      "Marktwachstum und Marktanteil",
      "Erfolgswirksam vs. bilanzwirksam und Eigen- vs. Fremdkapital",
    ],
    answer: 0 },

  { id: "ko23", topic: "kosten", type: "num",
    q: "E-Shop-Beispiel (Cashflow-Rechnung): Im Jahr 1 beträgt der zu versteuernde Cashflow −600.000 €, die Ertragsteuern −180.000 €. Mit welchem Steuersatz (in %) wird gerechnet?",
    answer: 30, tol: 0, unit: "%",
    explain: "−180.000 / −600.000 = 30 %. Die Ertragsteuer ist negativ, das heißt: Der Verlust des Projekts senkt die Steuerlast des Gesamtunternehmens (Steuerersparnis)." },

  { id: "ko24", topic: "kosten", type: "tf",
    q: "Im E-Shop-Beispiel sind die Ertragsteuern in den Verlustjahren 1 und 2 negativ – der Projektverlust wirkt als Steuerersparnis.",
    answer: true },

  /* --- Strategie --- */
  { id: "st24", topic: "strategie", type: "single",
    q: "Wie wird „Strategisches Management“ in der LV definiert?",
    options: [
      "Ziele setzen und den Weg festlegen, der von der gegenwärtigen Unternehmenssituation zu den Zielen führt",
      "Die Kontrolle der operativen Kosten im laufenden Geschäftsjahr",
      "Die Erstellung des Jahresbudgets",
      "Die Auswahl des Managements durch den Aufsichtsrat",
    ],
    answer: 0 },

  { id: "st25", topic: "strategie", type: "single",
    q: "Wie bezeichnet die LV die Unternehmensstrategie bildhaft?",
    options: ["Als „strategische Leitplanken“", "Als „Cash Cow“", "Als „Alleinstellungsmerkmal“", "Als „Gate“"],
    answer: 0,
    explain: "Grundlage ist die Ist-Analyse: Stärken und Schwächen des Unternehmens sowie Chancen und Gefahren in der Unternehmensumwelt." },

  { id: "st26", topic: "strategie", type: "multi",
    q: "Welche Fähigkeiten können laut LV entlang der Wertschöpfungskette zu einer SEP werden?",
    options: [
      "Kundenbedürfnisse rasch und besser als die Konkurrenz erkennen",
      "Das Sortiment schneller den Marktbedürfnissen anpassen",
      "Durch laufende Innovationen schneller neue überlegene Produkte auf den Markt bringen",
      "Überlegene Beschaffungsquellen erschließen und sichern",
      "Möglichst viele Geschäftsfelder gleichzeitig bearbeiten",
    ],
    answer: [0, 1, 2, 3] },

  { id: "st27", topic: "strategie", type: "multi",
    q: "Welche Anforderungen an strategisches Management (Aufbau von SEP) werden in der LV aufgelistet?",
    options: [
      "Formulierung eines grundsätzlichen Unternehmensleitbildes (Vision)",
      "Festlegung der Tätigkeitsfelder (strategische Geschäftsfelder)",
      "Umwelt- und Unternehmensanalysen mit Früherkennungscharakter",
      "Unternehmensinterne Koordination der Geschäfts- und Funktionsbereiche",
      "Überprüfung und Steuerung durch ein strategisch ausgerichtetes Controlling",
      "Maximierung des kurzfristigen Quartalsgewinns",
    ],
    answer: [0, 1, 2, 3, 4],
    explain: "Weitere Punkte: dauerhafte Erfolgspotenziale aufbauen, Marktbearbeitungsstrategien unter Einbeziehung aller Funktionsbereiche, strukturelle und unternehmenskulturelle Maßnahmen." },

  /* --- Analyseinstrumente --- */
  { id: "an40", topic: "analyse", type: "match",
    q: "Ansoff-Matrix (Folie mit Unterstrategien): Ordnen Sie die Unterstrategien zu.",
    pairs: [
      ["Marktbesetzung, Verdrängung", "Marktdurchdringung"],
      ["Globalisierung, Marktsegmentierung", "Marktentwicklung"],
      ["Produktinnovation, Produktdifferenzierung", "Produktentwicklung"],
      ["vertikal, horizontal, lateral", "Diversifikation"],
    ] },

  { id: "an41", topic: "analyse", type: "match",
    q: "BCG-Portfoliostrategien: Wie verhält man sich jeweils gegenüber dem Risiko?",
    pairs: [["Star", "akzeptieren"], ["Question Mark", "akzeptieren"], ["Cash Cow", "einschränken"], ["Poor Dog", "stark reduzieren"]] },

  { id: "an42", topic: "analyse", type: "single",
    q: "In der Grafik zur GAP-Analyse: Was ist der „Gap“?",
    options: [
      "Die Differenz zwischen Zielwert und Prognosewert (ohne zusätzliche Maßnahmen); ein Teil davon lässt sich mit operativen Maßnahmen schließen, der Rest braucht strategische",
      "Die Differenz zwischen Umsatz und Kosten",
      "Die Differenz zwischen eigenem und Konkurrenz-Marktanteil",
      "Die Differenz zwischen Plan- und Istkosten des Vorjahres",
    ],
    answer: 0 },

  { id: "an43", topic: "analyse", type: "multi",
    q: "Welche Gate-Kriterien für Stop/Go-Entscheidungen nennt die LV beim Stage-Gate-Prozess?",
    options: ["Konformität mit Kundentrends", "Strategic Fit", "Wettbewerbsbarrieren", "Technische Machbarkeit ist gegeben", "Top-Management-Unterstützung", "Gewinn unter Risiko, Synergieeffekte", "Anzahl der Projektmitarbeiter", "Aktueller Börsenkurs"],
    answer: [0, 1, 2, 3, 4, 5] },

  { id: "an44", topic: "analyse", type: "multi",
    q: "Stage-Gate – Einbindung des Kunden: Welche drei Bereiche unterscheidet die LV?",
    options: ["Kundensicht einnehmen", "Kundenspezifisches Wissen zusammentragen", "Kunden einbinden", "Kunden finanziell beteiligen", "Kundendaten verkaufen"],
    answer: [0, 1, 2] },

  { id: "an45", topic: "analyse", type: "multi",
    q: "Welche Reports bzw. Outputs liefert das PIMS-Programm laut LV?",
    options: ["Par ROI / Cash Flow Report", "Strategy Analysis Report", "Optimum Strategy Report", "BCG-Matrix", "Five-Forces-Report"],
    answer: [0, 1, 2],
    explain: "PIMS unterscheidet außerdem analytische Modelle und Simulationsmodelle." },

  { id: "an46", topic: "analyse", type: "single",
    q: "Was betrachtet das Element „Struktur“ im 7-S-Modell?",
    options: [
      "Die Aufbauorganisation (Einlinien-, Mehrlinien-, Stablinien- oder Matrixorganisation)",
      "Die gemeinsamen Werte",
      "Die Abläufe in Produktion und Lagerbuchhaltung",
      "Das Know-how der Mitarbeiter",
    ],
    answer: 0,
    explain: "Abläufe sind „Systeme“, Werte sind „Shared Values“, Know-how sind „Skills“ (Spezialfähigkeiten)." },

  { id: "an47", topic: "analyse", type: "single",
    q: "Erfahrungskurve Speichermedien (Christensen): Was bedeutet die „53 %-Kurve“?",
    options: [
      "Bei jeder Verdoppelung der kumulierten Menge fällt der Preis pro Megabyte auf 53 % des vorherigen Werts",
      "Der Preis sinkt bei jeder Verdoppelung um 53 %",
      "53 % aller Hersteller verlassen den Markt",
      "Der Marktanteil des Marktführers beträgt 53 %",
    ],
    answer: 0 },

  /* --- Gründung: Recht --- */
  { id: "gr40", topic: "gruendung", type: "match",
    q: "Vertretung und Geschäftsführung in Personengesellschaften: Ordnen Sie zu.",
    pairs: [
      ["OG – Vertretung", "Jede:r Gesellschafter:in allein"],
      ["OG – außergewöhnliche Maßnahmen", "Einstimmiger Beschluss aller Gesellschafter:innen"],
      ["KG – Vertretung", "Nur die Komplementäre"],
    ] },

  { id: "gr41", topic: "gruendung", type: "multi",
    q: "Nach welchen Kriterien soll man laut Leitfaden die Rechtsform wählen?",
    options: ["Persönliche Kriterien", "Steuerliche Kriterien", "Betriebswirtschaftliche Kriterien", "Gesellschaftsrechtliche Kriterien", "Der Firmenname soll möglichst kurz sein"],
    answer: [0, 1, 2, 3],
    explain: "Keine Rechtsform ist dauerhaft ideal, man sollte die Wahl alle paar Jahre überprüfen." },

  { id: "gr42", topic: "gruendung", type: "single",
    q: "Was ist eine GmbH & Co KG?",
    options: [
      "Eine KG, bei der eine GmbH Komplementär ist – es werden zwei Gesellschaften gegründet",
      "Eine GmbH mit mehr als 10 Gesellschaftern",
      "Eine GmbH ohne Stammkapital",
      "Eine Genossenschaft mit GmbH-Anteilen",
    ],
    answer: 0,
    explain: "Wegen der zwei Gesellschaften sind die Kosten höher. Die GmbH & Co KG ist immer buchführungspflichtig." },

  { id: "gr43", topic: "gruendung", type: "tf",
    q: "Wenn kein schriftlicher Dienstvertrag abgeschlossen wird, ist ein Dienstzettel Pflicht.",
    answer: true,
    explain: "Dienstvertrag und Dienstzettel sind beide gebührenfrei." },

  /* --- Gründung: Planung, Finanzierung, Steuern, SV --- */
  { id: "pl41", topic: "planung", type: "single",
    q: "Kleinunternehmerregelung (USt): Was gilt, wenn man die 55.000-€-Grenze innerhalb eines Jahres leicht überschreitet?",
    options: [
      "Überschreitung um höchstens 10 % innerhalb eines Jahres erlaubt: die Befreiung gilt dann bis zum Ende des Kalenderjahres weiter",
      "Die Befreiung fällt rückwirkend für das ganze Jahr weg",
      "Es gibt keine Toleranz",
      "Die Grenze verdoppelt sich automatisch",
    ],
    answer: 0 },

  { id: "pl42", topic: "planung", type: "match",
    q: "Förderarten: Ordnen Sie zu.",
    pairs: [
      ["Zuschuss", "nicht rückzahlbar"],
      ["Geförderter Kredit", "muss besichert und zurückgezahlt werden"],
      ["Garantie/Haftung", "öffentliche Stelle übernimmt einen Teil des Kreditrisikos"],
    ] },

  { id: "pl43", topic: "planung", type: "single",
    q: "Wie hoch ist die AMS-EPU-Förderung für die erste Arbeitskraft eines Ein-Personen-Unternehmens?",
    options: ["25 % des Bruttogehalts für 12 Monate", "50 % des Bruttogehalts für 6 Monate", "100 % für 3 Monate", "Pauschal 5.000 €"],
    answer: 0 },

  { id: "pl44", topic: "planung", type: "single",
    q: "Wie hoch sind die Sozialversicherungsbeiträge laut Leitfaden im Durchschnitt, bezogen auf den Jahresgewinn?",
    options: ["Etwa 27 %", "Etwa 10 %", "Etwa 50 %", "Etwa 3 %"],
    answer: 0 },

  { id: "pl45", topic: "planung", type: "num",
    q: "Wie hoch sind die SVS-Mindestbeiträge 2026 insgesamt pro Jahr (PV + KV + Selbständigenvorsorge + UV) in €?",
    answer: 1929.72, tol: 0.01, unit: "€",
    explain: "Die Summe setzt sich zusammen aus PV 1.223,40 €, KV 449,76 €, Vorsorge 101,16 € und UV 155,40 €. Das ergibt 1.929,72 € pro Jahr bzw. 160,81 € pro Monat." },

  { id: "pl46", topic: "planung", type: "single",
    q: "Bis wann muss die Einkommensteuererklärung elektronisch (FinanzOnline) abgegeben werden?",
    options: ["30. Juni des Folgejahres", "30. April des Folgejahres", "31. Dezember des laufenden Jahres", "15. Februar des Folgejahres"],
    answer: 0,
    explain: "Die Papiererklärung ist bis 30. April fällig. Eine Anpassung der Vorauszahlung kann man bis 30. September beantragen." },

  { id: "pl47", topic: "planung", type: "multi",
    q: "Welche Aussagen zur Registrierkassenpflicht stimmen?",
    options: [
      "Beide Grenzen (15.000 € Jahresumsatz, 7.500 € Barumsatz) sind Nettobeträge",
      "Kartenzahlungen zählen als Barumsätze",
      "Es besteht zusätzlich eine Belegerteilungspflicht",
      "Onlineshops sind registrierkassenpflichtig",
    ],
    answer: [0, 1, 2],
    explain: "Onlineshops sind ausgenommen, ebenso Umsätze im Freien bis 30.000 € („kalte Hände“)." },

  { id: "pl48", topic: "planung", type: "single",
    q: "Ab welcher Höhe offener Forderungen kommt Factoring laut Leitfaden üblicherweise infrage?",
    options: ["Ab 150.000 €", "Ab 1.000 €", "Ab 1 Mio. €", "Ab 15.000 €"],
    answer: 0,
    explain: "Man erhält sofort ca. 80 % der Forderung. Die Gebühr beträgt 0,2 bis 1,5 % des Bruttoumsatzes." },

  { id: "pl49", topic: "planung", type: "single",
    q: "Ab welchem Rechnungsbetrag muss die UID-Nummer des Leistungsempfängers auf der Rechnung stehen?",
    options: ["Über 10.000 € (inkl. USt)", "Über 400 €", "Immer", "Über 100.000 €"],
    answer: 0,
    explain: "Die eigene UID-Nummer muss auf jeder Rechnung über 400 € stehen." },

  { id: "pl50", topic: "planung", type: "single",
    q: "Freiwillige Arbeitslosenversicherung für Selbstständige (Opting-in): Was gilt?",
    options: [
      "Entscheidung innerhalb von 6 Monaten, Bindung für 8 Jahre",
      "Jederzeit kündbar",
      "Pflicht für alle Einzelunternehmer",
      "Nur für GmbH-Geschäftsführer möglich",
    ],
    answer: 0 },
];
