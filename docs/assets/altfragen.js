/* Altfragen im Original-Prüfungsstil: "Welche der nachfolgenden Aussagen sind richtig?"
   Vier Aussagen, eine oder mehrere richtig, Moodle-Teilpunkte.
   Aufbau je Frage: [Aussage, richtig?, Begründung]. Optionen, Lösung und Erklärung werden daraus erzeugt. */
(function () {
  "use strict";

  const ALT_TOPICS = {
    alt:      { name: "Originale Altfragen", short: "Altfragen", anchor: "ziele" },
    ziele:    { name: "Neu: Ziele, Management & Planung", short: "Ziele & Planung", anchor: "ziele" },
    lv:       { name: "Neu: Strategie, Business Case, Kennzahlen & Gründung", short: "LV-Stoff (Altfragenstil)", anchor: "strategie" },
    aussagen: { name: "Einzelaussagen aller Altfragen als Wahr/Falsch (schnelles Durchklicken)", short: "Einzelaussagen", anchor: "ziele", off: true },
  };

  const Q = "Welche der nachfolgenden Aussagen sind richtig?";

  const RAW = [
    /* ===================== ORIGINALE ALTFRAGEN ===================== */
    ["alt1", "alt", [
      ["Formalziele basieren auf dem ökonomischen Prinzip und haben angestrebte wirtschaftliche Ergebnisse (z.B. Gewinn, Eigenkapitalrentabilität, Shareholder Value) zum Inhalt.", true,
        "Formalziele sind die finanziellen Erfolgsziele (Gewinn, Rentabilität, Shareholder Value)."],
      ["Unter dem Stakeholder Value versteht man den Marktwert des Fremdkapitals eines Unternehmens.", false,
        "Stakeholder Value meint den Wert für alle Anspruchsgruppen (Mitarbeiter, Kunden, Lieferanten, Kapitalgeber, Öffentlichkeit), nicht den Marktwert des Fremdkapitals."],
      ["Manager sorgen für eine zielorientierte Koordination der in einem Unternehmen ablaufenden güter-, informations- und finanzwirtschaftlichen Prozesse. Dabei werden sie von Controllern unterstützt.", true,
        "Management koordiniert zielorientiert, das Controlling unterstützt mit Planung, Kontrolle und Informationen."],
      ["Die Vorstandsmitglieder einer Aktiengesellschaft gehören dem Lower Management der Gesellschaft an.", false,
        "Der Vorstand gehört zum Top Management."],
    ]],
    ["alt2", "alt", [
      ["Formalziele beziehen sich auf die Leistungssphäre eines Unternehmens, Sachziele hingegen auf dessen Finanzsphäre.", false,
        "Vertauscht: Sachziele betreffen die Leistungssphäre (Produkte, Qualität, Menge), Formalziele die Finanzsphäre (Gewinn, Rentabilität)."],
      ["Zu den Stakeholdern eines Unternehmens gehören u.a. dessen Mitarbeiter, Kunden und Lieferanten.", true,
        "Stakeholder sind alle Anspruchsgruppen, z. B. Mitarbeiter, Kunden, Lieferanten, Kapitalgeber und Staat."],
      ["Der Shareholder Value entspricht dem Buchwert des Eigenkapitals. Er ist auf der Aktivseite der Bilanz auszuweisen.", false,
        "Shareholder Value ist der Marktwert des Eigenkapitals und wird nicht in der Bilanz ausgewiesen. Eigenkapital steht außerdem auf der Passivseite."],
      ["Bei Corporate Social Responsibility geht es darum, dass Unternehmen neben ökonomischen Zielen v.a. auch ökologische und soziale Ziele verfolgen sollen.", true,
        "CSR heißt: Unternehmen übernehmen neben der wirtschaftlichen auch ökologische und soziale Verantwortung."],
    ]],
    ["alt3", "alt", [
      ["Agile Managementansätze betonen die Unveränderbarkeit von verabschiedeten Plänen.", false,
        "Agile Ansätze betonen gerade Flexibilität und laufende Anpassung."],
      ["Eine reine Top-Down-Planung dauert in der Regel viel länger als eine Planung nach dem Gegenstrom-Verfahren.", false,
        "Top-down ist meist schneller. Das Gegenstromverfahren dauert wegen der Abstimmungsschleifen länger."],
      ["Je mehr geplant wird, desto mehr muss in der Regel auch improvisiert werden.", false,
        "Lehrbuchaussage ist umgekehrt: Planung ersetzt Improvisation. Je mehr geplant wird, desto weniger muss improvisiert werden. Achtung: ChatGPT hat diese Aussage als richtig gewertet. Wir werten sie wie das Lehrbuch als falsch, im Zweifel also nur die Definition ankreuzen."],
      ["Planung kann definiert werden als geistige Vorwegnahme zukünftigen Handelns. Durch Pläne soll die Wahrscheinlichkeit der Erreichung von Zielen erhöht werden.", true,
        "Klassische Definition von Planung."],
    ]],
    ["alt4", "alt", [
      ["Das Business Model Canvas ist ein Konzept zur Visualisierung und Evaluierung von Geschäftsmodellen.", true,
        "Das BMC stellt ein Geschäftsmodell auf einer Seite in neun Bausteinen dar."],
      ["Die Planung einer Gewinnsteigerung gegenüber dem Vorjahr um 10% ist ein Sachziel.", false,
        "Gewinn ist eine Finanzgröße, also ein Formalziel."],
      ["Ziele sollten SMART formuliert sein.", true,
        "SMART: spezifisch, messbar, aktiv/attraktiv, realistisch, terminiert."],
      ["Das Leitbild formuliert kurz und prägnant den Zweck, die Ziele sowie die Werte eines Unternehmens. Nach innen soll es die Koordination erleichtern und motivierend wirken. Nach außen soll es deutlich machen, wofür ein Unternehmen steht, und insofern v.a. vertrauensbildend wirken.", true,
        "Genau die Innen- und Außenwirkung eines Leitbilds."],
    ]],
    ["alt5", "alt", [
      ["Eine Blockplanung ist aufwändiger als eine rollierende Planung.", false,
        "Umgekehrt: Die rollierende Planung ist aufwändiger, weil laufend neu geplant wird."],
      ["Die taktische Planung ist das Bindeglied zwischen strategischer und operativer Planung.", true,
        "Die taktische (mittelfristige) Planung verbindet die langfristige strategische mit der kurzfristigen operativen Planung."],
      ["Strategische Pläne werden vom Management vorbereitet und vom Controlling genehmigt.", false,
        "Das Top Management beschließt strategische Pläne. Das Controlling unterstützt, genehmigt aber nicht."],
      ["Bei der rollierenden Planung erfolgt noch während der laufenden Planperiode eine Neuplanung, indem nach Ablauf eines Zeitabschnitts (z.B. ein Jahr, ein Monat) ein neuer Zeitabschnitt angefügt und auch die Planung der zuvor bereits geplanten Zeitabschnitte überarbeitet wird.", true,
        "Das ist die Definition der rollierenden Planung."],
    ]],

    /* ===================== NEU: ZIELE, MANAGEMENT & PLANUNG ===================== */
    ["z01", "ziele", [
      ["Sachziele legen fest, welche Leistungen (Produkte, Dienstleistungen) ein Unternehmen in welcher Menge und Qualität erstellt.", true,
        "Sachziele beziehen sich auf die Leistungssphäre."],
      ["Formalziele und Sachziele stehen in keinem Zusammenhang zueinander.", false,
        "Die Sachziele sind das Mittel, um die Formalziele (z. B. Gewinn) zu erreichen."],
      ["Die Eigenkapitalrentabilität ist ein Sachziel.", false,
        "Die Eigenkapitalrentabilität ist eine Finanzkennzahl und damit ein Formalziel."],
      ["Ein Unternehmen verfolgt in der Regel mehrere Ziele gleichzeitig; diese können zueinander komplementär, konkurrierend oder indifferent sein.", true,
        "Zielbeziehungen: Komplementär heißt, ein Ziel fördert das andere. Konkurrierend heißt Zielkonflikt. Indifferent heißt, die Ziele beeinflussen sich nicht."],
    ]],
    ["z02", "ziele", [
      ["Der Shareholder-Value-Ansatz stellt die Interessen der Eigentümer (Aktionäre) in den Mittelpunkt der Unternehmensführung.", true,
        "Ziel ist die Steigerung des Marktwerts des Eigenkapitals."],
      ["Der Stakeholder-Ansatz berücksichtigt neben den Eigentümern auch die Interessen weiterer Anspruchsgruppen wie Mitarbeiter, Kunden, Lieferanten, Fremdkapitalgeber und Staat.", true,
        "Genau das unterscheidet den Stakeholder- vom Shareholder-Ansatz."],
      ["Der Shareholder Value entspricht dem Buchwert des Fremdkapitals.", false,
        "Der Shareholder Value ist der Marktwert des Eigenkapitals."],
      ["Zwischen den Interessen verschiedener Stakeholder kann es keine Zielkonflikte geben.", false,
        "Konflikte sind typisch, z. B. höhere Löhne (Mitarbeiter) gegen höhere Ausschüttung (Eigentümer) oder niedrigere Preise (Kunden)."],
    ]],
    ["z03", "ziele", [
      ["Das Top Management (z. B. Vorstand, Geschäftsführung) trifft vor allem strategische Entscheidungen.", true,
        "Das Top Management ist für die langfristige Ausrichtung zuständig."],
      ["Das Lower Management (z. B. Meister, Gruppenleiter) ist vor allem für die Umsetzung im operativen Tagesgeschäft verantwortlich.", true,
        "Das Lower Management ist die unterste Führungsebene, nahe am Tagesgeschäft."],
      ["Das Middle Management (z. B. Bereichs- und Abteilungsleiter) ist das Bindeglied zwischen Top und Lower Management.", true,
        "Es übersetzt die Strategie in Bereichsziele und Maßnahmen."],
      ["Der Aufsichtsrat einer Aktiengesellschaft führt die laufenden Geschäfte der Gesellschaft.", false,
        "Die Geschäfte führt der Vorstand. Der Aufsichtsrat bestellt und überwacht den Vorstand."],
    ]],
    ["z04", "ziele", [
      ["Controlling unterstützt das Management bei Planung, Steuerung und Kontrolle und sorgt durch Informationsbereitstellung für Transparenz.", true,
        "Das ist die Servicefunktion des Controllings."],
      ["Controller tragen die Ergebnisverantwortung und treffen die strategischen Entscheidungen anstelle des Managements.", false,
        "Entscheidung und Ergebnisverantwortung liegen beim Management. Controller beraten und unterstützen."],
      ["Controlling ist mit Kontrolle gleichzusetzen und beschränkt sich auf den nachträglichen Soll-Ist-Vergleich.", false,
        "Controlling heißt Steuern (to control) und umfasst auch Planung und Koordination, nicht nur die Kontrolle im Nachhinein."],
      ["Abweichungsanalysen (Soll-Ist-Vergleiche) sind ein typisches Instrument des Controllings.", true,
        "Abweichungen werden analysiert, um Gegenmaßnahmen abzuleiten."],
    ]],
    ["z05", "ziele", [
      ["SMART steht für Ziele, die spezifisch, messbar, aktiv (bzw. attraktiv), realistisch und terminiert formuliert sind.", true,
        "So steht es im WKO-Gründungsleitfaden: spezifisch, messbar, aktiv, realistisch, terminiert."],
      ["„Wir wollen unseren Umsatz deutlich steigern“ ist ein SMART formuliertes Ziel.", false,
        "Es fehlen eine messbare Größe und ein Termin."],
      ["„Steigerung des Umsatzes im Segment X um 10 % bis 31.12.2027“ erfüllt die Kriterien messbar und terminiert.", true,
        "Die Größe ist messbar (10 %) und der Termin festgelegt (31.12.2027)."],
      ["Ziele sollten möglichst vage formuliert sein, damit sie flexibel interpretiert werden können.", false,
        "Vage Ziele sind nicht überprüfbar. Nur präzise Ziele zeigen, ob sie erreicht wurden."],
    ]],
    ["z06", "ziele", [
      ["Bei der Top-down-Planung werden die Pläne von der Unternehmensspitze ausgehend schrittweise für die unteren Ebenen konkretisiert.", true,
        "Top-down heißt von oben nach unten."],
      ["Bei der Bottom-up-Planung beginnt die Planung auf den unteren Ebenen; die Teilpläne werden nach oben verdichtet.", true,
        "Bottom-up heißt von unten nach oben."],
      ["Das Gegenstromverfahren kombiniert Top-down- und Bottom-up-Planung: Die Spitze gibt Rahmenziele vor, die unteren Ebenen erstellen Teilpläne, die rückgekoppelt und abgestimmt werden.", true,
        "Das ist die Definition des Gegenstromverfahrens. Es ist am besten abgestimmt, dauert aber am längsten."],
      ["Ein Nachteil der Bottom-up-Planung ist, dass das Wissen der Mitarbeiter auf den unteren Ebenen nicht genutzt wird.", false,
        "Umgekehrt: Genau dieses Wissen nutzt Bottom-up. Der Nachteil ist, dass die Teilpläne oft schlecht auf die Gesamtziele abgestimmt sind."],
    ]],
    ["z07", "ziele", [
      ["Die strategische Planung ist langfristig ausgerichtet und betrifft das Unternehmen als Ganzes.", true,
        "Sie legt Geschäftsfelder und Erfolgspotenziale fest."],
      ["Die operative Planung ist kurzfristig (meist bis zu einem Jahr) und vergleichsweise detailliert.", true,
        "Beispiele sind Jahresbudget, Absatz- und Produktionspläne."],
      ["Je langfristiger ein Plan ist, desto höher ist in der Regel sein Detaillierungsgrad.", false,
        "Umgekehrt: Langfristige Pläne sind grob, kurzfristige sind detailliert."],
      ["Die operative Planung wird typischerweise vom Top Management bis ins letzte Detail selbst erstellt.", false,
        "Operative Pläne entstehen vor allem im Middle und Lower Management."],
    ]],
    ["z08", "ziele", [
      ["Bei der Blockplanung wird ein Plan für einen festen Zeitraum erstellt und erst nach dessen Ablauf ein neuer Plan aufgestellt.", true,
        "Das ist die Definition der Blockplanung."],
      ["Die rollierende Planung ermöglicht es, neue Informationen laufend in die Planung einzubeziehen.", true,
        "Das ist der Vorteil gegenüber der Blockplanung, um den Preis eines höheren Aufwands."],
      ["Planung und Improvisation schließen einander vollständig aus; ein gut geplantes Unternehmen muss nie improvisieren.", false,
        "Nicht alles ist planbar, etwas Improvisation bleibt immer nötig. Planung verringert aber den Improvisationsbedarf."],
      ["Pläne haben eine Koordinationsfunktion, weil sie die Aktivitäten verschiedener Unternehmensbereiche aufeinander abstimmen.", true,
        "Die Koordination ist eine Hauptfunktion der Planung."],
    ]],
    ["z09", "ziele", [
      ["Die Vision beschreibt ein langfristiges, anzustrebendes Zukunftsbild des Unternehmens.", true,
        "Die Vision ist das Wohin. Das Leitbild baut darauf auf (Folien: Unternehmensleitbild als Vision)."],
      ["Ein Leitbild enthält typischerweise detaillierte Monatsbudgets für alle Abteilungen.", false,
        "Budgets gehören zur operativen Planung. Das Leitbild enthält grundsätzliche Werte und Ziele."],
      ["Im Leitbild von Hewlett-Packard (Beispiel aus den LV-Folien) werden u. a. Grundsätze zu Kunden, Mitarbeitern, Wachstum und gesellschaftlicher Verantwortung formuliert.", true,
        "Das HP-Leitbild nennt u. a. Kunden, Betätigungsgebiet, Wachstum, Mitarbeiter, Führungsstil und gesellschaftliche Verantwortung."],
      ["Ein Leitbild wirkt ausschließlich nach außen und hat für die Mitarbeiter keine Bedeutung.", false,
        "Das Leitbild wirkt nach innen (Koordination, Motivation) und nach außen (Vertrauen)."],
    ]],
    ["z10", "ziele", [
      ["Das Business Model Canvas besteht aus neun Bausteinen, u. a. Kundensegmente, Wertangebot, Kanäle, Einnahmequellen und Kostenstruktur.", true,
        "Die neun Bausteine: Kundensegmente, Wertangebot, Kanäle, Kundenbeziehungen, Einnahmequellen, Schlüsselressourcen, Schlüsselaktivitäten, Schlüsselpartner, Kostenstruktur."],
      ["Das Wertangebot (Value Proposition) beschreibt, welchen Nutzen das Unternehmen seinen Kundensegmenten stiftet.", true,
        "Das Wertangebot steht im Zentrum des Canvas."],
      ["Das Business Model Canvas ersetzt eine detaillierte Finanz- und Liquiditätsplanung vollständig.", false,
        "Das BMC ist ein Visualisierungswerkzeug. Zahlen liefern Finanzplan und Business Case."],
      ["Schlüsselpartner, Schlüsselaktivitäten und Schlüsselressourcen gehören zu den Bausteinen des Business Model Canvas.", true,
        "Diese drei bilden die linke Seite des Canvas (Infrastruktur)."],
    ]],
    ["z11", "ziele", [
      ["Der Ansatz der „Triple Bottom Line“ berücksichtigt ökonomische, ökologische und soziale Ziele gleichermaßen.", true,
        "Gemeint sind die drei Säulen der Nachhaltigkeit (People, Planet, Profit)."],
      ["Corporate Social Responsibility bedeutet, dass ein Unternehmen ausschließlich die gesetzlichen Mindestanforderungen erfüllt.", false,
        "CSR ist freiwillige Verantwortung über das gesetzlich Geforderte hinaus."],
      ["CSR-Maßnahmen können auch ökonomisch sinnvoll sein, z. B. durch Reputationsgewinn oder höhere Mitarbeiterbindung.", true,
        "Ökonomische und soziale bzw. ökologische Ziele können sich ergänzen."],
      ["Gesellschaftliche Verantwortung kann auch im Leitbild eines Unternehmens verankert sein, wie im HP-Beispiel aus der LV.", true,
        "Das HP-Leitbild enthält einen eigenen Punkt „Gesellschaftliche Verantwortung“."],
    ]],
    ["z12", "ziele", [
      ["Agile Ansätze (z. B. Scrum) arbeiten in kurzen Iterationen und passen Pläne laufend an neue Erkenntnisse an.", true,
        "Agil heißt iterativ und anpassungsfähig."],
      ["Bei agilem Vorgehen wird zu Projektbeginn ein vollständiger, danach unveränderlicher Detailplan erstellt.", false,
        "Das beschreibt das klassische Wasserfall-Vorgehen."],
      ["Regelmäßiges Feedback von Kunden bzw. Nutzern ist ein zentrales Element agiler Ansätze.", true,
        "Das Feedback steuert die nächste Iteration."],
      ["Agile Methoden eignen sich besonders bei hoher Unsicherheit und sich ändernden Anforderungen.", true,
        "Bei stabilen, klar planbaren Vorhaben passt klassische Planung oft besser."],
    ]],

    /* ===================== NEU: LV-STOFF IM GLEICHEN STIL ===================== */
    ["l01", "lv", [
      ["Strategische Erfolgspositionen müssen für den Abnehmer wichtig sein, von ihm wahrgenommen werden und dauerhaft sein.", true,
        "Die drei Anforderungen an SEP laut Folien: wichtig, wahrgenommen, dauerhaft."],
      ["Die Unternehmensstrategie beantwortet die zentrale Frage „Machen wir das Geschäft richtig?“", false,
        "Die Unternehmensstrategie fragt „Machen wir das richtige Geschäft?“, die Geschäftsstrategie „Machen wir das Geschäft richtig?“."],
      ["Statt von strategischen Erfolgspositionen spricht man auch von Wettbewerbsvorteilen, USP, strategischen Erfolgsfaktoren oder Kernkompetenzen.", true,
        "So steht es in den Folien."],
      ["Strategische Geschäftseinheiten sollen untereinander möglichst homogen und in sich möglichst heterogen sein.", false,
        "Umgekehrt: in sich homogen, untereinander heterogen."],
    ]],
    ["l02", "lv", [
      ["Zu den Wettbewerbsstrategien zählen Kostenführerschaft, Differenzierung und Fokussierung/Spezialisierung.", true,
        "Das sind die generischen Wettbewerbsstrategien nach Porter."],
      ["Pionier-, Imitations-, Nischen- und Kooperationsstrategien sind Technologiestrategien.", true,
        "So sind sie in den Folien den Technologiestrategien zugeordnet."],
      ["Strategisches Management heißt, Ziele zu setzen und den Weg festzulegen, der von der gegenwärtigen Unternehmenssituation zu diesen Zielen führt.", true,
        "Definition aus den Folien."],
      ["Die Unternehmensstrategie legt im Detail fest, wie einzelne Mitarbeiter ihre täglichen Aufgaben erledigen.", false,
        "Die Unternehmensstrategie legt Geschäftsfelder und Ressourcenverteilung fest. Tagesaufgaben gehören zur operativen Ebene."],
    ]],
    ["l03", "lv", [
      ["Die BCG-Matrix ordnet Geschäftsfelder nach Marktwachstum und relativem Marktanteil.", true,
        "Die beiden Achsen der BCG-Matrix."],
      ["Cash Cows haben einen hohen relativen Marktanteil bei geringem Marktwachstum.", true,
        "Sie liefern viel Cash bei geringem Investitionsbedarf."],
      ["Für Poor Dogs wird typischerweise eine Investitions- und Wachstumsstrategie empfohlen.", false,
        "Für Poor Dogs gilt Desinvestition: Marktanteil abbauen, verkaufen oder stilllegen."],
      ["Die SWOT-Analyse verbindet interne Stärken und Schwächen mit externen Chancen und Gefahren.", true,
        "S/W kommen aus der Unternehmensanalyse, O/T aus der Umweltanalyse."],
    ]],
    ["l04", "lv", [
      ["Ein Business Case soll die wirtschaftliche Vorteilhaftigkeit und die strategische Konformität eines Vorhabens aufzeigen und eine Management-Entscheidung ermöglichen.", true,
        "Definition nach Brugger aus dem Skriptum."],
      ["Ein Business Case bezieht sich auf ein ganzes Unternehmen, ein Business Plan auf ein einzelnes Projekt.", false,
        "Umgekehrt: Der Business Case betrachtet ein konkretes Vorhaben, der Business Plan eine ganze organisatorische Einheit."],
      ["Im Business Case sollten Annahmen offengelegt und Unsicherheiten z. B. über Szenarien (Best Case, Worst Case) abgebildet werden.", true,
        "Transparenz der Annahmen und Szenario- bzw. Sensitivitätsanalysen gehören dazu."],
      ["Kosten im Business Case werden üblicherweise in einmalige Kosten (Investitionskosten) und laufende Kosten (Betriebskosten) gegliedert.", true,
        "Das ist die Grundgliederung der Kosten im Skriptum."],
    ]],
    ["l05", "lv", [
      ["Der Kapitalwert (NPV) ist die Summe der auf den Entscheidungszeitpunkt abgezinsten Zahlungsüberschüsse abzüglich der Anfangsinvestition.", true,
        "Definition des Kapitalwerts."],
      ["Eine Investition ist bei einem Kapitalwert größer als null vorteilhaft, weil sie mehr als die geforderte Mindestverzinsung erwirtschaftet.", true,
        "NPV > 0 heißt: Die Investition verdient mehr als den Kalkulationszinssatz."],
      ["Die statische Amortisationsrechnung (Payback) berücksichtigt den Zeitwert des Geldes.", false,
        "Die statische Variante zinst nicht ab. Das tut erst die dynamische Amortisationsrechnung."],
      ["Ein höherer Kalkulationszinssatz erhöht den Kapitalwert einer typischen Investition (Auszahlung am Anfang, Rückflüsse später).", false,
        "Höherer Zins heißt stärkere Abzinsung der späteren Rückflüsse, der NPV sinkt."],
    ]],
    ["l06", "lv", [
      ["Der WACC ist der mit den Kapitalanteilen gewichtete Durchschnitt aus Eigen- und Fremdkapitalkosten.", true,
        "WACC = EK-Anteil × EK-Kosten + FK-Anteil × FK-Kosten (ggf. nach Steuern)."],
      ["Nach dem CAPM ergeben sich die Eigenkapitalkosten aus risikolosem Zinssatz plus Beta mal Marktrisikoprämie.", true,
        "r(EK) = rf + β × (rm − rf)."],
      ["Ein Beta von 1,3 bedeutet, dass die Aktie im Durchschnitt weniger schwankt als der Gesamtmarkt.", false,
        "Ein Beta über 1 heißt: Die Aktie schwankt stärker als der Markt, also höheres Risiko und höhere geforderte Rendite."],
      ["Fremdkapitalzinsen sind steuerlich absetzbar; deshalb werden die Fremdkapitalkosten im WACC häufig nach Steuern angesetzt.", true,
        "Tax Shield: r(FK) × (1 − s)."],
    ]],
    ["l07", "lv", [
      ["Der Preis ist in der Regel ein stärkerer Gewinnhebel als Absatzmenge oder variable Kosten.", true,
        "Eine Preiserhöhung wirkt voll auf den Gewinn, weil die Kosten gleich bleiben."],
      ["Eine Preissenkung lohnt sich immer, weil der Umsatz dadurch automatisch steigt.", false,
        "Die Menge muss überproportional steigen, um den Deckungsbeitragsverlust auszugleichen. Das gelingt oft nicht."],
      ["Beim Erfahrungskurveneffekt sinken die Stückkosten bei jeder Verdoppelung der kumulierten Produktionsmenge um einen bestimmten Prozentsatz.", true,
        "Laut Literatur typischerweise um 20 bis 30 %, wenn die Potenziale ausgeschöpft werden."],
      ["Ein Köder- bzw. Ankerangebot (Decoy) zeigt, dass beim Pricing auch Psychologie eine Rolle spielt.", true,
        "Ein bewusst unattraktives Angebot lenkt die Wahl auf das gewünschte Produkt."],
    ]],
    ["l08", "lv", [
      ["Beim Einzelunternehmen haftet der Inhaber unbeschränkt mit seinem gesamten Privatvermögen.", true,
        "Es gibt keine Trennung zwischen Betriebs- und Privatvermögen bei der Haftung."],
      ["Bei der GmbH haften die Gesellschafter grundsätzlich persönlich und unbeschränkt für die Schulden der Gesellschaft.", false,
        "Bei der GmbH haftet grundsätzlich nur das Gesellschaftsvermögen."],
      ["Bei der KG haftet mindestens ein Gesellschafter (Komplementär) unbeschränkt, die Kommanditisten nur bis zur Höhe ihrer Einlage.", true,
        "Komplementär haftet unbeschränkt, Kommanditist beschränkt."],
      ["Das Mindeststammkapital einer GmbH beträgt 10.000 €, davon sind mindestens 5.000 € bar einzuzahlen.", true,
        "Stand WKO-Gründungsleitfaden 2026."],
    ]],
    ["l09", "lv", [
      ["Für ein freies Gewerbe ist kein Befähigungsnachweis erforderlich, eine Gewerbeanmeldung ist trotzdem nötig.", true,
        "Freies Gewerbe heißt: anmelden, aber kein Befähigungsnachweis."],
      ["Reglementierte Gewerbe erfordern einen Befähigungsnachweis, z. B. eine Meister- oder Befähigungsprüfung.", true,
        "Beispiele sind Meisterprüfung, Befähigungsprüfung oder Konzessionsprüfung."],
      ["Wer keinen Befähigungsnachweis hat, kann sich den Nachweis eines Bekannten übertragen lassen.", false,
        "Der Befähigungsnachweis ist personengebunden. Man kann aber einen gewerberechtlichen Geschäftsführer bestellen."],
      ["Voraussetzungen für eine Gewerbeausübung sind u. a. das vollendete 18. Lebensjahr und das Fehlen von Ausschlussgründen.", true,
        "Allgemeine Voraussetzungen laut Gründungsleitfaden."],
    ]],
    ["l10", "lv", [
      ["Ein Unternehmen kann trotz Gewinn zahlungsunfähig werden; daher ist neben der Rentabilitäts- auch eine Liquiditätsplanung nötig.", true,
        "Gewinn ist nicht gleich Liquidität, z. B. wegen offener Forderungen oder Investitionen."],
      ["Die umsatzsteuerliche Kleinunternehmerregelung gilt bei einem Jahresumsatz bis 55.000 € (brutto).", true,
        "Grenze laut Gründungsleitfaden 2026."],
      ["Ein Businessplan dient ausschließlich internen Zwecken und wird nie Banken oder Investoren vorgelegt.", false,
        "Der Businessplan ist gerade auch für Kapitalgeber (Bank, Förderstellen, Investoren) gedacht."],
      ["Der Break-even-Punkt ist erreicht, wenn die Erlöse die Gesamtkosten (fixe und variable Kosten) gerade decken.", true,
        "Am Break-even ist der Gewinn null, darüber beginnt die Gewinnzone."],
    ]],
    ["l11", "lv", [
      ["Der ROI ist ein statisches Verfahren der Investitionsrechnung.", true,
        "Der ROI zinst nicht ab."],
      ["Der Kapitalwert ist ein dynamisches Verfahren, weil er den Zeitpunkt der Zahlungen berücksichtigt.", true,
        "Dynamische Verfahren sind z. B. Kapitalwert, interner Zinsfuß und dynamische Amortisation."],
      ["Die statische Amortisationsdauer gibt an, nach wie vielen Jahren die Anfangsinvestition durch die Rückflüsse wieder hereingespielt ist.", true,
        "Payback = Investition ÷ durchschnittlicher jährlicher Rückfluss (bei gleichen Rückflüssen)."],
      ["Je länger die Amortisationsdauer, desto geringer ist das Risiko einer Investition.", false,
        "Umgekehrt: Eine lange Amortisationsdauer heißt längere Kapitalbindung und höheres Risiko."],
    ]],
  ];

  const multi = RAW.map(([id, topic, st]) => ({
    id, topic, type: "multi", q: Q,
    options: st.map((s) => s[0]),
    answer: st.map((s, i) => (s[1] ? i : -1)).filter((i) => i >= 0),
    explain: "<ul style=\"margin:4px 0 0; padding-left:18px\">" + st.map((s) =>
      `<li><b>${s[1] ? "Richtig" : "Falsch"}:</b> ${s[0].length > 70 ? s[0].slice(0, 67).replace(/\s+\S*$/, "") + " …" : s[0]}<br><span class="muted">${s[2]}</span></li>`
    ).join("") + "</ul>",
  }));

  // Jede Aussage einzeln als Wahr/Falsch-Frage
  const single = [];
  RAW.forEach(([id, topic, st]) => st.forEach((s, i) => single.push({
    id: id + "_" + "abcd"[i], topic: "aussagen", type: "tf",
    q: s[0] + (topic === "alt" ? ' <span class="muted small">(Altfrage)</span>' : ""),
    answer: s[1], explain: s[2],
  })));

  const ALL = multi.concat(single);

  if (window.QUESTIONS && window.QUIZ_TOPICS) {
    // Fragenkatalog / Karteikarten: Altfragen als zusätzliche Themen anhängen
    Object.assign(window.QUIZ_TOPICS, ALT_TOPICS);
    ALL.forEach((q) => window.QUESTIONS.push(q));
  } else {
    // eigene Altfragen-Seite
    window.QUIZ_TOPICS = ALT_TOPICS;
    window.QUESTIONS = ALL;
  }
})();
