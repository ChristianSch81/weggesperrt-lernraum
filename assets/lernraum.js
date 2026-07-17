(() => {
  "use strict";

  const LEVELS = {
    mindest: {
      code: "M10",
      label: "Mindeststandard",
      short: "Fundamentum · reaktiv",
      hero: "Den Roman sicher erschließen",
      intro: "Du sicherst zentrale Handlungsschritte, Figuren, Räume und historische Grundinformationen. Satzstarter, Begriffshilfen und überschaubare Schreibaufträge unterstützen dich.",
      goals: [
        "Ich kann zentrale Stationen von Anjas Weg in richtiger Reihenfolge wiedergeben.",
        "Ich kann Figuren, Räume und Regeln mit passenden Romanbelegen beschreiben.",
        "Ich kann Grundzüge des historischen Hintergrunds verständlich benennen.",
        "Ich kann eine eigene Meinung in ganzen Sätzen und mit mindestens einem Beleg formulieren."
      ],
      guidance: "Nutze die Satzstarter und konzentriere dich zuerst auf das Wesentliche.",
      evidence: "Ein genauer Romanbeleg oder eine passende Seitenangabe genügt."
    },
    regel: {
      code: "R10",
      label: "Regelstandard",
      short: "Rekonstruktion · aktiv",
      hero: "Zusammenhänge analysieren und begründen",
      intro: "Du rekonstruierst Ursachen und Folgen, untersuchst Sprache und Macht und formulierst begründete Urteile. Dabei verknüpfst du Romanbelege mit historischen Informationen.",
      goals: [
        "Ich kann Handlungsschritte als Ursache-Folge-Zusammenhang rekonstruieren.",
        "Ich kann sprachliche und räumliche Gestaltungsmittel in ihrer Wirkung analysieren.",
        "Ich kann Roman und historische Quelle sachgerecht unterscheiden und verknüpfen.",
        "Ich kann ein differenziertes Urteil mit Beleg, Einwand und Schlussfolgerung formulieren."
      ],
      guidance: "Erkläre nicht nur was geschieht, sondern wie und warum es wirkt.",
      evidence: "Nutze mindestens zwei konkrete Belege und verknüpfe sie mit deiner Deutung."
    },
    experte: {
      code: "E10",
      label: "Expertenstandard",
      short: "Transformation · konstruktiv",
      hero: "Transfer leisten und Positionen reflektieren",
      intro: "Du prüfst Deutungen, reflektierst konkurrierende Perspektiven und überträgst Erkenntnisse auf Fragen von Menschenwürde, Erinnerungskultur und demokratischem Handeln.",
      goals: [
        "Ich kann Deutungen prüfen und alternative Lesarten argumentativ gegeneinander abwägen.",
        "Ich kann literarische Gestaltung, historische Quellen und ethische Maßstäbe vernetzen.",
        "Ich kann Grenzen von Quellen und eigenen Urteilen transparent reflektieren.",
        "Ich kann ein adressatengerechtes Produkt mit eigenständigem Transfer gestalten."
      ],
      guidance: "Mache Voraussetzungen, Gegenpositionen und Grenzen deiner Aussage sichtbar.",
      evidence: "Verknüpfe Roman, Sachquelle und begründeten Transfer; kennzeichne die Ebenen."
    }
  };

  const MODULES = [
    {
      id: "einstieg", part: "Einstieg · vor der Lektüre", title: "Freiheit hat Grenzen – aber wer setzt sie?", time: "45 Min.", form: "Think · Pair · Share", icon: "↔", spectrum: true,
      focus: "Zwischen Schutz und Kontrolle unterscheiden und Leseerwartungen entwickeln.",
      question: "Wann wird staatliche Erziehung zu unrechtmäßiger Kontrolle?",
      quick: { prompt: "Welche Aussage ist als Lesevermutung am besten formuliert?", options: ["Anja hat bestimmt keine Freiheit.", "Ich vermute, dass Anjas Spielraum kleiner wird, weil andere über ihren Aufenthaltsort entscheiden; beim Lesen prüfe ich diese Annahme.", "In der DDR war alles Kontrolle."], answer: 1, explanation: "Die zweite Aussage kennzeichnet die Vermutung, begründet sie und bleibt überprüfbar." },
      tasks: {
        mindest: [
          { title: "Start-Statement", prompt: "Formuliere deine Vermutung zu Anjas Handlungsspielraum. Nutze: „Ich vermute …, weil …“", min: 35, criteria: ["Ich kennzeichne meine Aussage als Vermutung.", "Ich nenne einen nachvollziehbaren Grund."] },
          { title: "Fragen an den Roman", prompt: "Notiere zwei Fragen, die der Roman für dich beantworten soll.", min: 18, criteria: ["Ich formuliere zwei vollständige Fragen.", "Beide Fragen passen zu Freiheit, Schutz oder Kontrolle."] }
        ],
        regel: [
          { title: "Begründete Hypothese", prompt: "Entwickle eine überprüfbare Hypothese darüber, wodurch Anjas Handlungsspielraum eingeschränkt werden könnte.", min: 65, criteria: ["Ich unterscheide Vermutung und Wissen.", "Ich formuliere Ursache und erwartete Wirkung.", "Meine Hypothese ist beim Lesen überprüfbar."] },
          { title: "Kriterien entwickeln", prompt: "Formuliere drei Kriterien, mit denen du legitimen Schutz von unrechtmäßiger Kontrolle unterscheiden würdest.", min: 70, criteria: ["Ich nenne drei unterschiedliche Kriterien.", "Ich erläutere jedes Kriterium kurz.", "Ich beziehe Rechte oder Mitbestimmung ein."] }
        ],
        experte: [
          { title: "Begriffe problematisieren", prompt: "Prüfe, warum dieselbe Maßnahme zugleich als Schutz und als Kontrolle gedeutet werden kann. Entwickle eine differenzierte Ausgangsthese.", min: 110, criteria: ["Ich berücksichtige mindestens zwei Perspektiven.", "Ich benenne ein Abwägungskriterium.", "Meine These vermeidet ein vorschnelles Schwarz-Weiß-Urteil."] },
          { title: "Untersuchungsdesign", prompt: "Entwirf drei Leitfragen, mit denen du beim Lesen Macht, Zustimmung und Handlungsspielraum systematisch untersuchen kannst. Begründe die Auswahl.", min: 100, criteria: ["Meine Leitfragen erschließen verschiedene Dimensionen.", "Ich begründe ihre Bedeutung.", "Ich zeige, welche Textsignale ich beachten werde."] }
        ]
      }
    },
    {
      id: "weg", part: "Teil I · „Sonst wohin“ · S. 8–169", title: "Anjas Weg ins Heim rekonstruieren", time: "2 × 45 Min.", form: "Leselogbuch", icon: "→",
      focus: "Wendepunkte, Ursachen und Folgen von Anjas zunehmendem Kontrollverlust erfassen.",
      question: "Wie erzeugt der Roman das Gefühl, dass Anja die Kontrolle über ihr Leben verliert?",
      quick: { prompt: "Was macht eine Ereigniskette analytisch?", options: ["Sie zählt möglichst viele Ereignisse auf.", "Sie verbindet ausgewählte Ereignisse durch Ursache und Folge.", "Sie nennt nur die Seitenzahlen."], answer: 1, explanation: "Eine analytische Ereigniskette macht den Zusammenhang zwischen ausgewählten Handlungsschritten sichtbar." },
      tasks: {
        mindest: [
          { title: "Handlung sichern", prompt: "Gib vier wichtige Stationen von Anjas Weg bis zum Heim in der richtigen Reihenfolge und im Präsens wieder.", min: 70, criteria: ["Ich nenne vier Stationen.", "Die Reihenfolge stimmt.", "Ich schreibe im Präsens."] },
          { title: "Wendepunkt erklären", prompt: "Wähle einen Wendepunkt. Beschreibe, was geschieht und wie Anja reagiert.", min: 55, criteria: ["Ich benenne das Ereignis.", "Ich beschreibe Anjas Reaktion.", "Ich nenne eine Seitenangabe."] }
        ],
        regel: [
          { title: "Ursache–Folge-Kette", prompt: "Verbinde drei zentrale Ereignisse durch Ursache–Folge-Beziehungen. Erläutere, wie Anjas Handlungsspielraum jeweils kleiner wird.", min: 120, criteria: ["Ich verknüpfe drei Ereignisse.", "Ich erkläre zwei Ursache–Folge-Beziehungen.", "Ich sichere meine Darstellung mit Seitenangaben."] },
          { title: "Erzählwirkung", prompt: "Untersuche an einer Passage, wie Perspektive, Informationsvergabe oder Tempo Anjas Kontrollverlust für Lesende erfahrbar machen.", min: 130, criteria: ["Ich benenne ein Gestaltungsmittel.", "Ich belege meine Beobachtung.", "Ich erkläre die Wirkung auf Lesende."] }
        ],
        experte: [
          { title: "Kontrollverlust als Konstruktion", prompt: "Entwickle eine Deutung, wie individuelle Entscheidungen, familiäre Konflikte und staatliche Strukturen in Anjas Weg zusammenwirken. Gewichte die Faktoren.", min: 180, criteria: ["Ich unterscheide drei Einflussbereiche.", "Ich zeige Wechselwirkungen.", "Ich begründe meine Gewichtung mit Belegen."] },
          { title: "Alternative Lesart", prompt: "Formuliere und prüfe eine Gegenlesart zur These des vollständigen Kontrollverlusts: Wo bewahrt oder gewinnt Anja Handlungsmacht?", min: 160, criteria: ["Ich formuliere eine Gegenposition.", "Ich nutze mindestens zwei Belege.", "Ich ziehe ein abgewogenes Fazit."] }
        ]
      }
    },
    {
      id: "raeume", part: "Teil I · Räume und Regeln", title: "Durchgangsheim und Jugendwerkhof vergleichen", time: "90 Min.", form: "Belegmatrix", icon: "▦",
      focus: "Räume, Regeln, Sanktionen und soziales Miteinander vergleichend untersuchen.",
      question: "Wie werden Räume zu Instrumenten der Macht?",
      quick: { prompt: "Welche Formulierung trennt Beobachtung und Deutung?", options: ["Die verschlossene Tür ist schlimm.", "Die Tür ist verschlossen (Beobachtung); sie kann Anjas Abhängigkeit symbolisieren (Deutung).", "Die Tür bedeutet Gefängnis, das ist sicher."], answer: 1, explanation: "Die zweite Formulierung kennzeichnet Textbeobachtung und mögliche Deutung transparent." },
      tasks: {
        mindest: [
          { title: "Orte beschreiben", prompt: "Beschreibe Durchgangsheim und Jugendwerkhof mit je drei Merkmalen aus dem Roman.", min: 80, criteria: ["Ich nenne für jeden Ort drei Merkmale.", "Ich trenne die beiden Orte klar.", "Ich nutze mindestens eine Seitenangabe."] },
          { title: "Regeln und Folgen", prompt: "Nenne zwei Regeln oder Sanktionen und beschreibe ihre Folgen für Anja.", min: 60, criteria: ["Ich nenne zwei konkrete Regeln oder Sanktionen.", "Ich erkläre jeweils eine Folge."] }
        ],
        regel: [
          { title: "Vergleichsmatrix", prompt: "Vergleiche beide Einrichtungen nach Raum, Tagesablauf, Vorschriften, Sanktionen und sozialem Miteinander. Formuliere Gemeinsamkeit und Verschärfung.", min: 150, criteria: ["Ich verwende alle fünf Kategorien.", "Ich nenne Gemeinsamkeiten und Unterschiede.", "Ich stütze den Vergleich auf Belege."] },
          { title: "Raum und Macht", prompt: "Analysiere, wie ein konkreter Raum Machtverhältnisse sichtbar macht und Anjas Verhalten beeinflusst.", min: 130, criteria: ["Ich beschreibe den Raum präzise.", "Ich deute mindestens zwei Details.", "Ich erkläre die Wirkung auf Anjas Verhalten."] }
        ],
        experte: [
          { title: "Institutionelle Logik", prompt: "Rekonstruiere, welche institutionelle Logik hinter Raumordnung, Zeitregime und Sanktionen erkennbar wird. Prüfe, wo der Roman diese Logik bricht oder irritiert.", min: 190, criteria: ["Ich verknüpfe Raum, Zeit und Sanktion.", "Ich formuliere eine übergreifende Deutung.", "Ich prüfe eine Irritation oder Grenze meiner Deutung."] },
          { title: "Transfer: Architektur und Würde", prompt: "Entwickle Kriterien für eine menschenwürdige pädagogische Einrichtung und kontrastiere sie mit den dargestellten Räumen.", min: 170, criteria: ["Ich entwickle mindestens vier Kriterien.", "Ich begründe sie normativ.", "Ich führe den Vergleich textbezogen durch."] }
        ]
      }
    },
    {
      id: "sprache", part: "Teil II · Torgau · S. 171–270", title: "Sprache als Instrument der Macht", time: "90 Min.", form: "Sprachanalyse", icon: "!",
      focus: "Befehle, Wortwahl, Satzbau und Sprechsituationen in ihrer Wirkung analysieren.",
      question: "Wie kann Sprache Gehorsam erzwingen und Menschen entwürdigen?",
      quick: { prompt: "Welche Beobachtung gehört zur Sprachanalyse?", options: ["Der Direktor ist böse.", "Kurze Imperativsätze lassen keinen sprachlichen Raum für Widerspruch.", "Anja sollte weglaufen."], answer: 1, explanation: "Die zweite Aussage benennt ein sprachliches Mittel und seine mögliche Wirkung." },
      tasks: {
        mindest: [
          { title: "Befehle sammeln", prompt: "Notiere vier Befehle aus Anjas erstem Tag in Torgau und ordne ihnen eine Wirkung zu.", min: 70, criteria: ["Ich notiere vier Befehle oder genaue Paraphrasen.", "Ich ordne jedem Beispiel eine Wirkung zu.", "Ich nenne Seitenangaben."] },
          { title: "Wirkung beschreiben", prompt: "Beschreibe, wie Anja auf die Sprache der Erziehenden reagiert.", min: 55, criteria: ["Ich nenne eine konkrete Reaktion.", "Ich beziehe mich auf eine Szene."] }
        ],
        regel: [
          { title: "Sprachliche Mittel", prompt: "Untersuche Satzbau, Wortwahl, Wiederholung und Sprechsituation an mindestens drei Befehlen. Erkläre die Wirkung.", min: 150, criteria: ["Ich untersuche mindestens drei Beispiele.", "Ich benenne passende Fachbegriffe.", "Ich verknüpfe Mittel und Wirkung."] },
          { title: "Machtkommunikation", prompt: "Analysiere, wie die Rollen von Sprechenden und Angesprochenen sprachlich festgelegt werden. Beziehe mögliche Reaktionen ein.", min: 130, criteria: ["Ich beschreibe die asymmetrische Sprechsituation.", "Ich nutze Textbelege.", "Ich erkläre Folgen für Handlungsmöglichkeiten."] }
        ],
        experte: [
          { title: "Sprache, Körper, Institution", prompt: "Deute das Zusammenspiel von Sprache, körperlicher Disziplinierung und institutionellem Raum. Zeige, wie Macht dadurch normalisiert wird.", min: 190, criteria: ["Ich verknüpfe drei Analyseebenen.", "Ich erläutere den Begriff Normalisierung am Text.", "Ich reflektiere eine alternative Deutung."] },
          { title: "Gegenrede gestalten", prompt: "Entwickle eine kurze Gegenrede aus Anjas Perspektive und kommentiere anschließend, welche sprachlichen Entscheidungen Würde und Handlungsmacht zurückgeben.", min: 170, criteria: ["Meine Gegenrede bleibt figuren- und situationsnah.", "Mein Kommentar analysiert eigene sprachliche Mittel.", "Ich reflektiere das Risiko der Gegenrede."] }
        ]
      }
    },
    {
      id: "quellen", part: "Teil II · Roman und Geschichte", title: "Fiktion, Quelle oder Urteil?", time: "2 × 45 Min.", form: "Quellenwerkstatt", icon: "?",
      focus: "Romanbeleg, historische Quelle und persönliche Wertung unterscheiden und verbinden.",
      question: "Was kann ein Roman über Geschichte zeigen – und was nicht?",
      quick: { prompt: "Welche Aussage ist methodisch sauber?", options: ["Der Roman beweist genau, wie es in jedem Jugendwerkhof war.", "Der Roman gestaltet eine mögliche Erfahrung; historische Aussagen prüfe ich zusätzlich an Quellen.", "Historische Quellen sind immer neutral."], answer: 1, explanation: "Literarische Gestaltung und historische Sachinformation müssen unterschieden und transparent verknüpft werden." },
      tasks: {
        mindest: [
          { title: "Aussagen zuordnen", prompt: "Formuliere je ein Beispiel für Romanbeleg, historische Information und persönliche Wertung. Kennzeichne die drei Kategorien.", min: 65, criteria: ["Ich formuliere drei Beispiele.", "Ich kennzeichne jede Kategorie richtig."] },
          { title: "Roman und Sachtext", prompt: "Nenne eine Gemeinsamkeit und einen Unterschied zwischen einer Romanszene und einer Sachinformation zum Jugendwerkhof Torgau.", min: 60, criteria: ["Ich nenne Gemeinsamkeit und Unterschied.", "Ich beziehe mich auf beide Materialien."] }
        ],
        regel: [
          { title: "Quellencheck", prompt: "Vergleiche eine Romanszene mit einer Information der Gedenkstätte Torgau. Unterscheide Darstellung, Aussageabsicht und Erkenntniswert.", min: 150, criteria: ["Ich benenne beide Materialien genau.", "Ich unterscheide drei Vergleichsaspekte.", "Ich formuliere ein methodisch vorsichtiges Fazit."] },
          { title: "Belegtes Urteil", prompt: "Formuliere ein Urteil über die historische Plausibilität der Szene und nutze mindestens zwei verschiedene Belegarten transparent.", min: 130, criteria: ["Ich formuliere ein klares Urteil.", "Ich nutze Roman und Sachquelle.", "Ich kennzeichne Grenzen meiner Aussage."] }
        ],
        experte: [
          { title: "Erkenntnisgrenzen", prompt: "Diskutiere, welche besondere Erkenntnis Literatur gegenüber Sachquellen ermöglichen kann und wo die Gefahr der Verallgemeinerung liegt.", min: 200, criteria: ["Ich entwickle Chancen und Grenzen.", "Ich nutze konkrete Beispiele.", "Ich unterscheide emotionale Plausibilität und historische Belegbarkeit."] },
          { title: "Multiperspektivischer Quellenkommentar", prompt: "Verfasse einen Quellenkommentar, der Roman, institutionelle Information und Betroffenenperspektive zueinander in Beziehung setzt.", min: 190, criteria: ["Ich berücksichtige drei Perspektiven.", "Ich prüfe Interessen und Reichweite.", "Ich komme zu einer eigenständigen Synthese."] }
        ]
      }
    },
    {
      id: "wuerde", part: "Teil II/III · Menschenwürde", title: "Schuld, Verantwortung und Menschenrechte", time: "90 Min.", form: "Streitgespräch", icon: "§",
      focus: "Vorwürfe rekonstruieren und Behandlung anhand ethischer und rechtsstaatlicher Maßstäbe beurteilen.",
      question: "Wer trägt Verantwortung, wenn ein System Unrecht als Erziehung bezeichnet?",
      quick: { prompt: "Was gehört zu einem begründeten Urteil?", options: ["Nur eine starke Meinung.", "Maßstab, Belege, Abwägung und Schlussfolgerung.", "Möglichst viele Fachwörter."], answer: 1, explanation: "Ein Urteil wird nachvollziehbar, wenn Maßstab, Belege, Abwägung und Schlussfolgerung zusammenwirken." },
      tasks: {
        mindest: [
          { title: "Vorwurf und Gegenargument", prompt: "Gib zwei Vorwürfe des Direktors und je ein mögliches Gegenargument Anjas wieder.", min: 75, criteria: ["Ich nenne zwei Vorwürfe.", "Ich formuliere zwei passende Gegenargumente.", "Ich bleibe bei der Szene."] },
          { title: "Menschenwürde", prompt: "Erkläre in eigenen Worten, was Menschenwürde bedeutet, und beziehe den Begriff auf eine Romanszene.", min: 65, criteria: ["Ich erkläre den Begriff verständlich.", "Ich wende ihn auf eine konkrete Szene an."] }
        ],
        regel: [
          { title: "Normengeleitete Prüfung", prompt: "Prüfe die Behandlung Anjas anhand von Menschenwürde, Freiheit und Rechtsstaatlichkeit. Nutze für jeden Maßstab einen Beleg.", min: 160, criteria: ["Ich erläutere drei Maßstäbe.", "Ich ordne jedem Maßstab einen Beleg zu.", "Ich formuliere ein begründetes Gesamturteil."] },
          { title: "Einwand und Entkräftung", prompt: "Formuliere den stärksten möglichen Einwand gegen dein Urteil und entkräfte oder begrenze ihn sachlich.", min: 110, criteria: ["Der Einwand ist ernst zu nehmen.", "Meine Antwort nutzt einen Maßstab oder Beleg.", "Ich vermeide ein bloßes Wiederholen."] }
        ],
        experte: [
          { title: "Verantwortungsmodell", prompt: "Entwickle ein Modell geteilter Verantwortung zwischen handelnden Personen, Institution und politischem System. Begründe Gewichtungen und mögliche Entlastungsgründe.", min: 210, criteria: ["Ich unterscheide drei Verantwortungsebenen.", "Ich begründe Gewichtungen.", "Ich diskutiere Handlungsspielräume und Entlastungsgründe."] },
          { title: "Historisches Urteil reflektieren", prompt: "Untersuche, wie heutige Menschenrechtsmaßstäbe auf historisches Handeln angewendet werden können, ohne den historischen Kontext als Entschuldigung zu benutzen.", min: 190, criteria: ["Ich unterscheide Erklärung und Rechtfertigung.", "Ich reflektiere Gegenwartsmaßstäbe.", "Ich ziehe ein differenziertes Urteil."] }
        ]
      }
    },
    {
      id: "dilemma", part: "Teil III · „Draußen“ · S. 271–320", title: "Engagement oder Sicherheit?", time: "2 × 45 Min.", form: "Dilemma-Diskussion", icon: "⚖",
      focus: "Anjas und Toms Positionen vergleichen und demokratisches Handeln abwägen.",
      question: "Wann ist persönliches Risiko für politische Veränderung vertretbar?",
      quick: { prompt: "Was macht ein Dilemma aus?", options: ["Eine Seite ist eindeutig richtig.", "Zwei wichtige Werte geraten in Konflikt und jede Entscheidung hat Kosten.", "Niemand weiß, worum es geht."], answer: 1, explanation: "Im Dilemma kollidieren begründbare Werte; eine Entscheidung löst den Konflikt nicht folgenlos auf." },
      tasks: {
        mindest: [
          { title: "Argumente sammeln", prompt: "Nenne je zwei Argumente von Anja und Tom aus ihrem Streit. Ordne sie den Werten Sicherheit oder Engagement zu.", min: 80, criteria: ["Ich nenne vier Argumente.", "Ich ordne die Werte passend zu.", "Ich beziehe mich auf die Szene."] },
          { title: "Eigene Position", prompt: "Entscheide dich begründet: Welche Position überzeugt dich in dieser Situation mehr?", min: 65, criteria: ["Ich formuliere eine klare Position.", "Ich nenne einen Grund und ein Gegenargument."] }
        ],
        regel: [
          { title: "Argumentationsvergleich", prompt: "Vergleiche Motive, Risiken und Werte beider Figuren. Beziehe die Montagsdemonstrationen in die Bewertung ein.", min: 160, criteria: ["Ich untersuche beide Figuren ausgewogen.", "Ich ordne Motive, Risiken und Werte.", "Ich nutze historischen Kontext."] },
          { title: "Positionspapier", prompt: "Verfasse ein abgewogenes Positionspapier mit These, zwei Argumenten, Gegenargument und begründetem Schluss.", min: 170, criteria: ["Mein Text folgt der geforderten Struktur.", "Ich nutze Romanbelege.", "Mein Schluss wägt individuelles und kollektives Handeln ab."] }
        ],
        experte: [
          { title: "Dilemma transformieren", prompt: "Prüfe, ob die Alternative Engagement oder Sicherheit zu eng formuliert ist. Entwickle eine dritte Handlungsoption und bewerte ihre Realisierbarkeit im historischen Kontext.", min: 200, criteria: ["Ich kritisiere die Ausgangsalternative begründet.", "Ich entwickle eine konkrete dritte Option.", "Ich prüfe Chancen, Risiken und historische Grenzen."] },
          { title: "Transfer in die Demokratie", prompt: "Leite aus der Szene Kriterien für verantwortliches zivilgesellschaftliches Handeln heute ab, ohne die historischen Situationen gleichzusetzen.", min: 190, criteria: ["Ich formuliere mindestens vier Kriterien.", "Ich markiere Unterschiede zwischen damals und heute.", "Ich begründe meinen Transfer."] }
        ]
      }
    },
    {
      id: "abschluss", part: "Abschluss · Transfer und Reflexion", title: "Erinnern, urteilen, weiterfragen", time: "2–3 × 45 Min.", form: "Portfolio-Werkstatt", icon: "★",
      focus: "Roman, Sachquelle und eigenes Urteil in einem adressatengerechten Produkt verbinden.",
      question: "Wie kann die Geschichte Anjas heute verantwortungsvoll weitererzählt werden?",
      quick: { prompt: "Was erhöht die Glaubwürdigkeit eines Abschlussprodukts?", options: ["Roman, Quelle und eigenes Urteil werden kenntlich gemacht.", "Alle Aussagen klingen möglichst dramatisch.", "Quellen werden nicht genannt, damit der Text flüssig bleibt."], answer: 0, explanation: "Transparenz über Romanbeleg, Sachquelle und eigene Wertung macht das Produkt nachvollziehbar und überprüfbar." },
      tasks: {
        mindest: [
          { title: "Produkt planen", prompt: "Wähle Infoseite, Schülerzeitungsartikel, Podcast-Skript oder Ausstellungstafel. Notiere Zielgruppe, Kernaussage und drei Inhalte.", min: 85, criteria: ["Ich benenne Produkt und Zielgruppe.", "Ich formuliere eine Kernaussage.", "Ich plane drei passende Inhalte."] },
          { title: "Lernreflexion", prompt: "Beschreibe, was du über Anja, den Jugendwerkhof und die Bedeutung von Freiheit gelernt hast.", min: 80, criteria: ["Ich beziehe mich auf alle drei Bereiche.", "Ich nenne einen Beleg oder ein Beispiel.", "Ich formuliere eine offene Frage."] }
        ],
        regel: [
          { title: "Produktkonzept", prompt: "Plane ein adressatengerechtes Produkt. Verknüpfe Roman, historische Sachinformation und eigenes Urteil; notiere Aufbau und Belege.", min: 150, criteria: ["Ich definiere Zielgruppe und Absicht.", "Ich plane einen nachvollziehbaren Aufbau.", "Ich kennzeichne drei Belegebenen."] },
          { title: "Reflexion und Überarbeitung", prompt: "Formuliere Kriterien für Peer-Feedback und erläutere anschließend, welche Änderung dein Produkt inhaltlich oder sprachlich verbessert.", min: 120, criteria: ["Ich entwickle konkrete Feedbackkriterien.", "Ich begründe eine Überarbeitung.", "Ich reflektiere Wirkung auf die Zielgruppe."] }
        ],
        experte: [
          { title: "Kuratorisches Konzept", prompt: "Entwickle ein kuratorisches Konzept für eine digitale Ausstellung oder einen Podcast: Welche Stimmen werden hörbar, welche Leerstellen bleiben und wie vermeidest du eine vereinnahmende Darstellung?", min: 220, criteria: ["Ich treffe begründete Auswahlentscheidungen.", "Ich reflektiere Stimmen und Leerstellen.", "Ich entwickle Regeln für verantwortungsvolle Darstellung."] },
          { title: "Metareflexion", prompt: "Prüfe, wie der Roman dein historisches und ethisches Urteil beeinflusst hat. Unterscheide emotionale Wirkung, Wissenserwerb und begründeten Transfer.", min: 190, criteria: ["Ich unterscheide drei Reflexionsebenen.", "Ich belege Veränderungen meines Urteils.", "Ich formuliere eine weiterführende Forschungsfrage."] }
        ]
      }
    }
  ];

  const SPECTRUM_ITEMS = [
    "Eltern legen für ein zehnjähriges Kind eine feste Schlafenszeit fest.",
    "Eine Schule kontrolliert Taschen ohne konkreten Anlass.",
    "Eine Ärztin ordnet nach einem Unfall vorübergehend Bettruhe an.",
    "Eine Behörde bestimmt gegen den Willen eines Jugendlichen seinen Aufenthaltsort.",
    "Eine App meldet den Eltern dauerhaft den Standort ihres Kindes."
  ];

  const params = new URLSearchParams(location.search);
  const levelId = LEVELS[params.get("niveau")] ? params.get("niveau") : "regel";
  const level = LEVELS[levelId];
  const storageKey = `weggesperrt10_${levelId}`;
  let state = loadState();
  let activeId = "overview";

  const el = id => document.getElementById(id);
  const stationNav = el("stationNav");
  const overviewView = el("overviewView");
  const stationView = el("stationView");

  function emptyState() { return { completed: [], taskDone: {}, answers: {}, criteria: {}, quiz: {}, spectrum: {}, spectrumTouched: {} }; }
  function loadState() {
    try { return Object.assign(emptyState(), JSON.parse(localStorage.getItem(storageKey) || "{}")); }
    catch (_) { return emptyState(); }
  }
  function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); updateOverviewStats(); }
  function esc(value) { return String(value).replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch])); }
  function wordCount(value) { return String(value).trim() ? String(value).trim().split(/\s+/).length : 0; }
  function moduleById(id) { return MODULES.find(module => module.id === id); }
  function taskKey(moduleId, index) { return `${moduleId}_${index}`; }
  function completedSet() { return new Set(state.completed); }

  function configureLevel() {
    document.title = `${level.label} ${level.code} – Weggesperrt`;
    el("courseTitle").textContent = `Deutsch: Literatur Phase 10 ${level.label} – Weggesperrt`;
    el("levelBadge").textContent = `${level.label} ${level.code}`;
    el("heroTitle").textContent = level.hero;
    el("heroText").textContent = level.intro;
    el("targetList").innerHTML = level.goals.map(goal => `<li>${esc(goal)}</li>`).join("");
    document.querySelectorAll("[data-level-link]").forEach(link => {
      if (link.dataset.levelLink === levelId) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function renderNav() {
    const done = completedSet();
    stationNav.innerHTML = MODULES.map((module, index) => `
      <button class="nav-button ${activeId === module.id ? "active" : ""} ${done.has(module.id) ? "done" : ""}" type="button" data-open="${module.id}">
        <span class="nav-number">${index + 1}</span><span>${esc(module.title)}</span><span class="done-mark">${done.has(module.id) ? "✓" : ""}</span>
      </button>`).join("");
    stationNav.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => showStation(button.dataset.open)));
  }

  function renderStampGrid() {
    const done = completedSet();
    el("stampGrid").innerHTML = MODULES.map((module, index) => `
      <button class="stamp-card ${done.has(module.id) ? "done" : ""}" type="button" data-stamp="${module.id}">
        <span class="stamp-no">${index + 1}</span><span><span class="stamp-title">${esc(module.title)}</span><span class="stamp-focus">${esc(module.focus)}</span></span><strong>${done.has(module.id) ? "✓" : "→"}</strong>
      </button>`).join("");
    el("stampGrid").querySelectorAll("[data-stamp]").forEach(button => button.addEventListener("click", () => showStation(button.dataset.stamp)));
  }

  function updateOverviewStats() {
    const done = state.completed.length;
    const taskTotal = Object.values(state.taskDone).filter(Boolean).length;
    const words = Object.values(state.answers).reduce((sum, value) => sum + wordCount(value), 0);
    el("progressText").textContent = `${done} / ${MODULES.length}`;
    el("progressFill").style.width = `${Math.round(done / MODULES.length * 100)}%`;
    el("statDone").textContent = `${done} / ${MODULES.length}`;
    el("statTasks").textContent = String(taskTotal);
    el("statWords").textContent = String(words);
    renderStampGrid();
    renderNav();
  }

  function showOverview() {
    activeId = "overview";
    overviewView.classList.remove("hidden");
    stationView.classList.add("hidden");
    el("currentPath").textContent = "Überblick";
    updateOverviewStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function stationHeader(module) {
    return `<section class="section station-header">
      <div><span class="eyebrow">${esc(level.code)} · ${esc(module.part)}</span><h1>${esc(module.title)}</h1><p class="section-intro">${esc(module.focus)}</p>
        <div class="station-meta"><span class="pill">${esc(module.time)}</span><span class="pill">${esc(module.form)}</span><span class="pill">${esc(level.short)}</span></div>
        <div class="guidance"><div class="guidance-box"><strong>Leitfrage</strong><p>${esc(module.question)}</p></div><div class="guidance-box"><strong>Arbeitshinweis</strong><p>${esc(level.guidance)} ${esc(level.evidence)}</p></div></div>
      </div><div class="station-icon" aria-hidden="true">${esc(module.icon)}</div>
    </section>`;
  }

  function spectrumCard(module) {
    const values = state.spectrum[module.id] || [50, 50, 50, 50, 50];
    const touched = state.spectrumTouched[module.id] || [];
    return `<article class="task-card ${state.taskDone[taskKey(module.id, "spectrum")] ? "complete" : ""}" data-task="spectrum">
      <div class="task-head"><div><span class="task-index">Visualisierung</span><h2>Schutz–Kontrolle-Linie</h2><p class="task-prompt">Ordne die fünf Situationen ein. Links steht Schutz, rechts Kontrolle. Begründe anschließend mindestens eine schwierige Einordnung im Austausch.</p></div><span class="task-status">${state.taskDone[taskKey(module.id, "spectrum")] ? "erledigt" : "offen"}</span></div>
      <div class="spectrum-wrap"><div class="spectrum-axis"><span>Schutz</span><span>Kontrolle</span></div><div class="spectrum-line"></div>
        ${SPECTRUM_ITEMS.map((item, index) => `<label class="spectrum-item"><strong>${index + 1}. ${esc(item)}</strong><input type="range" min="0" max="100" step="5" value="${values[index]}" data-spectrum="${index}" aria-label="Position für Situation ${index + 1}"><span class="spectrum-value" data-spectrum-value="${index}">${spectrumLabel(values[index])}${touched[index] ? " · gesetzt" : ""}</span></label>`).join("")}
      </div><button class="button" type="button" data-check-spectrum>Positionen speichern</button><div class="feedback" data-spectrum-feedback aria-live="polite"></div>
    </article>`;
  }

  function spectrumLabel(value) {
    const n = Number(value);
    if (n < 20) return "klarer Schutz";
    if (n < 40) return "eher Schutz";
    if (n <= 60) return "zwischen beiden Polen";
    if (n <= 80) return "eher Kontrolle";
    return "klare Kontrolle";
  }

  function writingCard(module, task, index) {
    const key = taskKey(module.id, index);
    const value = state.answers[key] || "";
    const checked = state.criteria[key] || [];
    const done = !!state.taskDone[key];
    return `<article class="task-card ${done ? "complete" : ""}" data-writing-card="${index}">
      <div class="task-head"><div><span class="task-index">Aufgabe ${index + 1}</span><h2>${esc(task.title)}</h2><p class="task-prompt">${esc(task.prompt)}</p></div><span class="task-status">${done ? "erledigt" : "offen"}</span></div>
      <div class="field"><label for="answer_${module.id}_${index}">Deine Antwort</label><textarea id="answer_${module.id}_${index}" data-answer-index="${index}" placeholder="Schreibe hier in vollständigen Sätzen.">${esc(value)}</textarea><div class="counter"><span data-word-count>${wordCount(value)} Wörter</span><span>Orientierung: mindestens ${task.min} Wörter</span></div></div>
      <div class="criteria" role="group" aria-label="Selbstcheck">
        <strong>Selbstcheck</strong>${task.criteria.map((criterion, criterionIndex) => `<label class="criterion"><input type="checkbox" data-criterion="${criterionIndex}" ${checked[criterionIndex] ? "checked" : ""}> <span>${esc(criterion)}</span></label>`).join("")}
      </div>
      <button class="button" type="button" data-check-writing="${index}">Aufgabe prüfen</button><div class="feedback" data-writing-feedback aria-live="polite"></div>
    </article>`;
  }

  function quizCard(module) {
    const selected = state.quiz[module.id];
    const key = taskKey(module.id, "quiz");
    const done = !!state.taskDone[key];
    return `<article class="task-card ${done ? "complete" : ""}" data-quiz-card>
      <div class="task-head"><div><span class="task-index">Kurzcheck</span><h2>Verständnis prüfen</h2><p class="task-prompt">${esc(module.quick.prompt)}</p></div><span class="task-status">${done ? "richtig" : "offen"}</span></div>
      <div class="choice-list">${module.quick.options.map((option, index) => `<label class="choice"><input type="radio" name="quiz_${module.id}" value="${index}" ${Number(selected) === index ? "checked" : ""}> <span>${esc(option)}</span></label>`).join("")}</div>
      <button class="button" type="button" data-check-quiz>Antwort prüfen</button><div class="feedback" data-quiz-feedback aria-live="polite"></div>
    </article>`;
  }

  function showStation(id) {
    const module = moduleById(id);
    if (!module) return;
    activeId = id;
    overviewView.classList.add("hidden");
    stationView.classList.remove("hidden");
    el("currentPath").textContent = `${module.part} · ${module.title}`;
    const tasks = module.tasks[levelId];
    const currentIndex = MODULES.indexOf(module);
    stationView.innerHTML = stationHeader(module) + `<div class="task-list">${module.spectrum ? spectrumCard(module) : ""}${tasks.map((task, index) => writingCard(module, task, index)).join("")}${quizCard(module)}</div>
      <div class="station-actions"><button class="button" type="button" data-prev>${currentIndex === 0 ? "Zum Überblick" : "← Vorherige Station"}</button><button class="button primary" type="button" data-complete-station>${completedSet().has(module.id) ? "Markierung zurücknehmen" : "Station abschließen"}</button><button class="button" type="button" data-next>${currentIndex === MODULES.length - 1 ? "Zum Überblick" : "Nächste Station →"}</button></div>
      <div class="feedback" data-station-feedback aria-live="polite"></div>`;
    bindStation(module, tasks);
    renderNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindStation(module, tasks) {
    stationView.querySelectorAll("[data-answer-index]").forEach(textarea => {
      const index = Number(textarea.dataset.answerIndex);
      const key = taskKey(module.id, index);
      const counter = textarea.closest(".task-card").querySelector("[data-word-count]");
      textarea.addEventListener("input", () => { state.answers[key] = textarea.value; counter.textContent = `${wordCount(textarea.value)} Wörter`; saveState(); });
    });
    stationView.querySelectorAll("[data-writing-card]").forEach(card => {
      const index = Number(card.dataset.writingCard);
      const key = taskKey(module.id, index);
      card.querySelectorAll("[data-criterion]").forEach(box => box.addEventListener("change", () => {
        state.criteria[key] = Array.from(card.querySelectorAll("[data-criterion]")).map(item => item.checked); saveState();
      }));
    });
    stationView.querySelectorAll("[data-check-writing]").forEach(button => button.addEventListener("click", () => {
      const index = Number(button.dataset.checkWriting);
      const key = taskKey(module.id, index);
      const card = button.closest(".task-card");
      const words = wordCount(card.querySelector("textarea").value);
      const boxes = Array.from(card.querySelectorAll("[data-criterion]"));
      const met = boxes.filter(box => box.checked).length;
      const ok = words >= tasks[index].min && met === boxes.length;
      state.taskDone[key] = ok;
      const feedback = card.querySelector("[data-writing-feedback]");
      feedback.className = `feedback ${ok ? "good" : "warn"}`;
      feedback.textContent = ok ? "Selbstcheck vollständig: Die Aufgabe ist als erledigt gespeichert." : `Noch offen: ${Math.max(0, tasks[index].min - words)} Wörter bis zur Orientierung; ${boxes.length - met} Kriterium/Kriterien noch nicht bestätigt.`;
      card.classList.toggle("complete", ok);
      card.querySelector(".task-status").textContent = ok ? "erledigt" : "offen";
      saveState();
    }));
    const quizButton = stationView.querySelector("[data-check-quiz]");
    quizButton.addEventListener("click", () => {
      const selected = stationView.querySelector(`[name="quiz_${module.id}"]:checked`);
      const feedback = stationView.querySelector("[data-quiz-feedback]");
      if (!selected) { feedback.className = "feedback warn"; feedback.textContent = "Wähle zuerst eine Antwort aus."; return; }
      state.quiz[module.id] = Number(selected.value);
      const ok = Number(selected.value) === module.quick.answer;
      state.taskDone[taskKey(module.id, "quiz")] = ok;
      feedback.className = `feedback ${ok ? "good" : "warn"}`;
      feedback.textContent = `${ok ? "Richtig. " : "Noch nicht richtig. "}${module.quick.explanation}`;
      const card = quizButton.closest(".task-card");
      card.classList.toggle("complete", ok);
      card.querySelector(".task-status").textContent = ok ? "richtig" : "offen";
      saveState();
    });
    stationView.querySelectorAll(`[name="quiz_${module.id}"]`).forEach(radio => radio.addEventListener("change", () => { state.quiz[module.id] = Number(radio.value); saveState(); }));

    if (module.spectrum) {
      const values = state.spectrum[module.id] || [50, 50, 50, 50, 50];
      const touched = state.spectrumTouched[module.id] || [];
      stationView.querySelectorAll("[data-spectrum]").forEach(input => input.addEventListener("input", () => {
        const index = Number(input.dataset.spectrum);
        values[index] = Number(input.value); touched[index] = true;
        state.spectrum[module.id] = values; state.spectrumTouched[module.id] = touched;
        stationView.querySelector(`[data-spectrum-value="${index}"]`).textContent = `${spectrumLabel(input.value)} · gesetzt`;
        saveState();
      }));
      stationView.querySelector("[data-check-spectrum]").addEventListener("click", () => {
        const ok = SPECTRUM_ITEMS.every((_, index) => touched[index]);
        state.taskDone[taskKey(module.id, "spectrum")] = ok;
        const feedback = stationView.querySelector("[data-spectrum-feedback]");
        feedback.className = `feedback ${ok ? "good" : "warn"}`;
        feedback.textContent = ok ? "Alle fünf Positionen sind gespeichert. Es gibt hier nicht nur eine richtige Lösung – wichtig ist deine Begründung." : `Bewege noch ${SPECTRUM_ITEMS.length - touched.filter(Boolean).length} Regler, damit alle Situationen bewusst eingeordnet sind.`;
        const card = stationView.querySelector("[data-task=spectrum]");
        card.classList.toggle("complete", ok); card.querySelector(".task-status").textContent = ok ? "erledigt" : "offen";
        saveState();
      });
    }

    stationView.querySelector("[data-complete-station]").addEventListener("click", event => {
      const done = completedSet();
      if (done.has(module.id)) { state.completed = state.completed.filter(item => item !== module.id); saveState(); showStation(module.id); return; }
      const expected = tasks.length + 1 + (module.spectrum ? 1 : 0);
      const solved = [0, 1].filter(index => state.taskDone[taskKey(module.id, index)]).length + (state.taskDone[taskKey(module.id, "quiz")] ? 1 : 0) + (module.spectrum && state.taskDone[taskKey(module.id, "spectrum")] ? 1 : 0);
      const feedback = stationView.querySelector("[data-station-feedback]");
      if (solved < expected) { feedback.className = "feedback warn"; feedback.textContent = `Noch ${expected - solved} Aufgabe(n) offen. Nutze bei den Schreibaufgaben jeweils „Aufgabe prüfen“.`; return; }
      state.completed.push(module.id); saveState(); event.currentTarget.textContent = "Markierung zurücknehmen";
      feedback.className = "feedback good"; feedback.textContent = "Station abgeschlossen – dein Stempel ist gesetzt.";
    });
    stationView.querySelector("[data-prev]").addEventListener("click", () => {
      const index = MODULES.indexOf(module); index > 0 ? showStation(MODULES[index - 1].id) : showOverview();
    });
    stationView.querySelector("[data-next]").addEventListener("click", () => {
      const index = MODULES.indexOf(module); index < MODULES.length - 1 ? showStation(MODULES[index + 1].id) : showOverview();
    });
  }

  function exportProgress() {
    const storage = {};
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index); if (key && key.startsWith("weggesperrt10_")) storage[key] = localStorage.getItem(key);
    }
    const payload = { format: "weggesperrt-lernraum", version: 1, exportedAt: new Date().toISOString(), storage };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = `weggesperrt-fortschritt-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(url);
    el("importStatus").textContent = "Fortschritt wurde exportiert.";
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      try {
        const payload = JSON.parse(String(reader.result || ""));
        if (payload.format !== "weggesperrt-lernraum" || !payload.storage) throw new Error("Diese Datei gehört nicht zum Weggesperrt-Lernraum.");
        Object.entries(payload.storage).forEach(([key, value]) => { if (key.startsWith("weggesperrt10_") && typeof value === "string") localStorage.setItem(key, value); });
        el("importStatus").textContent = "Import erfolgreich. Die Seite wird neu geladen."; setTimeout(() => location.reload(), 450);
      } catch (error) { el("importStatus").textContent = error.message || "Import fehlgeschlagen."; }
    });
    reader.readAsText(file);
  }

  el("overviewBtn").addEventListener("click", showOverview);
  el("printBtn").addEventListener("click", () => window.print());
  el("resetBtn").addEventListener("click", () => {
    if (!confirm(`Fortschritt für ${level.label} wirklich zurücksetzen?`)) return;
    localStorage.removeItem(storageKey); state = emptyState(); showOverview();
  });
  el("exportBtn").addEventListener("click", exportProgress);
  el("importBtn").addEventListener("click", () => el("importFile").click());
  el("importFile").addEventListener("change", event => { if (event.target.files[0]) importProgress(event.target.files[0]); });

  configureLevel();
  showOverview();
})();
