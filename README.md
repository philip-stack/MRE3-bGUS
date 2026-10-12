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
| Kosten pro Jahr | 535.000 € | 455.300 € | **297.900 €** | 477.200 € | 169.100 € |
| Kapitalwert (NPV, 5 Jahre) | – | 50.100 € | **331.500 €** | −339.900 € | 801.100 € |
| Payback statisch | – | 3,5 Jahre | **2,6 Jahre** | > 5 Jahre | 1,6 Jahre |
| ROI (Σ Nutzen / Σ Kosten) | – | 124 % | **169 %** | 78 % | 289 % |

**Empfehlung:** Investition in die robotergestützte Prüfzelle freigeben. Sie ist die einzige
Variante, die die Kundenanforderung (lückenlose Prüfdokumentation für die E-Plattform) erfüllt
und gleichzeitig wirtschaftlich ist. Die Erkennungsrate wird vor der Abnahme mit realen
Fehlteilen nachgewiesen.

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
- Berücksichtigt werden auch Doppelaufwand im Anlauf, Fehlalarme (Pseudoausschuss)
  und manuelle Ersatzprüfung bei Ausfall einer Prüfzelle
- Nur direkt monetärer Nutzen ist in Euro bewertet; indirekter und nicht monetärer
  Nutzen ist bewusst nicht eingerechnet (keine Doppelzählung)

## Autor

Philip Stix – FH Technikum Wien, Oktober 2026
