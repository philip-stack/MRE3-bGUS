# MRE3-bGUS – Business Case: Automatisierte optische Qualitätsprüfung

Business Case für die LV **Geschäftsmodellentwicklung und Start-Up Management**
(Master Robotics Engineering, 3. Semester, FH Technikum Wien).

Untersucht wird, ob sich bei einem Aluminium-Druckguss-Zulieferer die manuelle Sichtprüfung
am Bandende durch **zwei robotergestützte Prüfzellen mit Kamera und ML-Bildauswertung**
ersetzen lässt. Das Unternehmen (Steyrtal Präzisionsguss GmbH) ist fiktiv, die Kennzahlen
sind realistische Planannahmen.

## Ergebnis

| | Status quo | Stationäre Kamera | **Roboter + ML** | Worst Case | Best Case |
|---|---|---|---|---|---|
| Investition | – | 250.000 € | **504.900 €** | 600.000 € | 450.000 € |
| Kosten pro Jahr | 535.000 € | 490.300 € | **349.200 €** | 530.300 € | 219.800 € |
| Beanstandete Teile beim Kunden | 100 ppm | 73 ppm | **47 ppm** | 67 ppm | 40 ppm |
| Kapitalwert (NPV, 5 Jahre) | – | −60.100 € | **170.200 €** | −507.200 € | 641.800 € |
| Payback statisch | – | > 5 Jahre | **3,2 Jahre** | > 5 Jahre | 1,8 Jahre |
| ROI (Σ Nutzen / Σ Kosten) | – | 97 % | **143 %** | 61 % | 255 % |

**Empfehlung:** Investition in die robotergestützte Prüfzelle freigeben. Sie ist die einzige
Variante, die die Kundenanforderungen für die E-Plattform (lückenlose Prüfdokumentation,
höchstens 50 ppm beanstandete Teile) erfüllt und gleichzeitig wirtschaftlich ist. Die
Erkennungsrate wird vor der Abnahme mit realen Fehlteilen nachgewiesen.

## Ordnerstruktur

```
01 Abgabe/      Abgabeversion: Präsentation (.pptx) und Berechnung (.xlsx)
02 Entwürfe/    Zwischenstände der Präsentation (v1–v4), ältere Berechnung, Themenbeschreibung
Kursinhalte/    Unterlagen zur Lehrveranstaltung
```

## Präsentation

Gegliedert nach den Vorgaben der LV:

1. Ausgangssituation (Unternehmen, Problem)
2. Was wird investiert? (Investitionsvorhaben, Kosten & Szenarien)
3. Sollsituation (Soll-Zustand, Nutzen)
4. Risiken
5. Kennzahlen (Payback, NPV und ROI)
6. Investitionsempfehlung

## Berechnung (Excel)

| Blatt | Inhalt |
|---|---|
| Ergebnis | Kostenvergleich, Kennzahlen aller Szenarien, Werte für die Präsentation, Kosten- und Nutzengliederung |
| Annahmen | Alle Eingabewerte (gelb) mit Einheit und Quelle bzw. Begründung, Szenario-Parameter |
| Kosten | Investition und laufende Kosten nach Positionen, gegliedert nach extern/intern |
| Berechnung | Cashflow-Rechnung Jahr 0–5 je Szenario mit Abschreibung, Steuern, Barwerten und Kennzahlen |
| Plausibilität | Herleitung und Kontrolle der Zahlen aus der Präsentation |

Alle Werte außerhalb der gelben Eingabefelder sind Formeln. Eine geänderte Annahme
rechnet sich durch die gesamte Datei durch.

**Methodik**

- Betrachtungszeitraum 5 Jahre, Vergleich jeweils gegen den Status quo
- Cashflows nach Steuern (23 % KöSt), lineare Abschreibung über 5 Jahre
- Kalkulationszins 7,1 % (WACC mit Fremdkapitalzins nach Steuern)
- Kennzahlen: Kapitalwert, interner Zinsfuß, Payback statisch und dynamisch,
  ROI als Σ Nutzen / Σ Kosten sowie als Rückflüsse / Investition
- Personalbedarf inklusive Reserve für Urlaub, Krankenstand und Schulung
- Qualität: 15 Reklamationen pro Jahr, davon 10 durch optische Oberflächenfehler. Nur diese
  kann die Prüfzelle verhindern; Maß-, Dichtheits- und Transportfehler bleiben unverändert
- Berücksichtigt werden auch Doppelaufwand im Anlauf, Fehlalarme (Pseudoausschuss)
  und manuelle Ersatzprüfung bei Ausfall einer Prüfzelle
- Nur direkt monetärer Nutzen ist in Euro bewertet; indirekter und nicht monetärer
  Nutzen ist bewusst nicht eingerechnet (keine Doppelzählung)

## Prüfungsvorbereitung (GitHub Pages)

Lernskript für einen Lerntag und ein Fragenkatalog im Stil eines Moodle-Tests (226 Fragen,
inkl. Rechenaufgaben) unter **https://philip-stack.github.io/MRE3-bGUS/**. Quellcode in `docs/`.

## Autor

Philip Stix – FH Technikum Wien, Oktober 2026
