(() => {
  "use strict";

  const LEVELS = {
    mindest: {
      code: "M10",
      label: "Mindeststandard",
      short: "Reproduktion · reaktiv",
      process: "Reproduktion (Vorlage wiederholen)",
      profile: "Grundzüge wiedergeben und sich gegenstandsbezogen äußern. Du arbeitest mit klaren Hilfen und sicherst das Fundament.",
      operators: ["Wiedergeben", "Beschreiben"],
      placeholder: "Satzstarter: Im Roman … / Das erkennt man daran, dass …",
      hero: "Den Roman sicher erschließen",
      intro: "Du sicherst zentrale Handlungsschritte, Figuren, Räume und historische Grundinformationen. Satzstarter, Begriffshilfen und überschaubare Schreibaufträge unterstützen dich.",
      goals: [
        "Ich kann die Operatoren nennen, beschreiben, zusammenfassen, erklären, begründen, ordnen und vergleichen unterscheiden.",
        "Ich erkenne am Operator, welche Antwortform eine Aufgabenstellung verlangt.",
        "Ich kann operationalisierte Fragen in vollständigen und gegenstandsbezogenen Sätzen beantworten.",
        "Ich kann zentrale Ereignisse aus Anjas Weg in der richtigen Reihenfolge wiedergeben.",
        "Ich kann eine Antwort mit einer passenden Seitenangabe oder einem konkreten Romanbeispiel absichern.",
        "Ich kenne die Grundmerkmale einer E-Mail und kann sie in einer Vorlage richtig anordnen.",
        "Ich kenne die Grundmerkmale eines persönlichen Briefs und kann sie in einer Vorlage richtig anordnen.",
        "Ich kenne die Grundmerkmale eines Tagebucheintrags und kann sie von Brief und E-Mail unterscheiden.",
        "Ich kenne die Grundmerkmale eines inneren Monologs und kann Gedanken einer Figur in der Ich-Form wiedergeben.",
        "Ich kann einen produktiven Text mithilfe eines Schreibplans verfassen und anhand einer Checkliste prüfen."
      ],
      guidance: "Nutze die Satzstarter und konzentriere dich zuerst auf das Wesentliche.",
      evidence: "Ein genauer Romanbeleg oder eine passende Seitenangabe genügt."
    },
    regel: {
      code: "R10",
      label: "Regelstandard",
      short: "Rekonstruktion · aktiv",
      process: "Rekonstruktion (Zusammenhänge durchdringen)",
      profile: "Hintergründe benennen, Zusammenhänge rekonstruieren und adressatenbezogen begründen. Du handelst zunehmend selbstständig.",
      operators: ["Rekonstruieren", "Analysieren"],
      placeholder: "Strukturhilfe: Aussage – Romanbeleg – Erklärung der Wirkung",
      hero: "Zusammenhänge analysieren und begründen",
      intro: "Du rekonstruierst Ursachen und Folgen, untersuchst Sprache und Macht und formulierst begründete Urteile. Dabei verknüpfst du Romanbelege mit historischen Informationen.",
      goals: [
        "Ich kann Operatoren sicher anwenden und den Umfang meiner Antwort an die Aufgabenstellung anpassen.",
        "Ich kann Handlungsschritte als Ursache-Folge-Zusammenhang rekonstruieren und mit Romanbelegen erklären.",
        "Ich kann sprachliche und räumliche Gestaltungsmittel in ihrer Wirkung analysieren.",
        "Ich kann eine Figurenperspektive aus Situation, Wissen, Gefühlen und Absicht erschließen.",
        "Ich kann eine adressatenbezogene E-Mail mit Kopfdaten, Anliegen, Anrede und Schluss verfassen.",
        "Ich kann einen persönlichen Brief mit Ort, Datum, sinnvollem Aufbau und erkennbarem Adressatenbezug verfassen.",
        "Ich kann einen Tagebucheintrag in Ich-Form mit Gedanken, Gefühlen und subjektiver Wertung verfassen.",
        "Ich kann einen inneren Monolog mit unmittelbaren Gedanken, Fragen, Brüchen und innerem Konflikt gestalten.",
        "Ich kann Buchwissen und Kapiteltreue in allen produktiven Schreibformen gezielt sichern.",
        "Ich kann meinen Text mit Kriterien überprüfen und Inhalt, Aufbau und Sprache überarbeiten."
      ],
      guidance: "Erkläre nicht nur was geschieht, sondern wie und warum es wirkt.",
      evidence: "Nutze mindestens zwei konkrete Belege und verknüpfe sie mit deiner Deutung."
    },
    experte: {
      code: "E10",
      label: "Expertenstandard",
      short: "Transformation · konstruktiv",
      process: "Transformation (Übertragung und Transfer)",
      profile: "Transfer leisten, diskursiv reflektieren und konstruktive Lösungen entwickeln. Du prüfst Perspektiven und Grenzen deines Urteils.",
      operators: ["Transfer leisten", "Reflektieren"],
      placeholder: "Strukturhilfe: These – Gegenposition – Abwägung – begründeter Transfer",
      hero: "Transfer leisten und Positionen reflektieren",
      intro: "Du prüfst Deutungen, reflektierst konkurrierende Perspektiven und überträgst Erkenntnisse auf Fragen von Menschenwürde, Erinnerungskultur und demokratischem Handeln.",
      goals: [
        "Ich kann komplexe Operatoren analysieren und daraus ein eigenständiges Bearbeitungskonzept ableiten.",
        "Ich kann Deutungen prüfen und alternative Lesarten argumentativ gegeneinander abwägen.",
        "Ich kann Romanbelege, historische Quellen und ethische Maßstäbe methodisch transparent vernetzen.",
        "Ich kann Perspektive und Wissensstand einer Figur einschließlich ihrer Leerstellen reflektieren.",
        "Ich kann eine E-Mail adressatengerecht gestalten und ihre kommunikative Strategie begründen.",
        "Ich kann einen Brief als figurennahe Handlung mit Subtext, Entwicklung und bewusster Leserwirkung gestalten.",
        "Ich kann einen Tagebucheintrag mit ambivalenten Gefühlen und rückblickender Selbstdeutung gestalten.",
        "Ich kann einen inneren Monolog sprachlich verdichten und einen offenen Entscheidungskonflikt sichtbar machen.",
        "Ich kann historische und gegenwärtige Fragestellungen übertragen, ohne unterschiedliche Kontexte gleichzusetzen.",
        "Ich kann meinen produktiven Text kriteriengeleitet reflektieren, überarbeiten und Gestaltungsentscheidungen begründen."
      ],
      guidance: "Mache Voraussetzungen, Gegenpositionen und Grenzen deiner Aussage sichtbar.",
      evidence: "Verknüpfe Roman, Sachquelle und begründeten Transfer; kennzeichne die Ebenen."
    }
  };

  const MODULES = [
    {
      id: "operatoren", part: "Grundlage · Aufgaben richtig verstehen", title: "Operatoren erkennen und passend antworten", time: "45–60 Min.", form: "Antworttraining", icon: "?",
      focus: "Arbeitsaufträge entschlüsseln und Antworten genau an nennen, beschreiben, zusammenfassen, erklären, begründen, ordnen und vergleichen ausrichten.",
      question: "Woran erkenne ich, was eine operationalisierte Fragestellung von meiner Antwort verlangt?",
      quick: { prompt: "Welcher Operator verlangt ausdrücklich einen nachvollziehbaren Grund oder Romanbeleg?", options: ["nennen", "begründen", "ordnen"], answer: 1, explanation: "Begründen verlangt eine Aussage und mindestens einen nachvollziehbaren Grund oder Beleg." },
      tasks: {
        mindest: [
          { title: "Operator und Antwortform sichern", help: "Nennen = knapp aufzählen; beschreiben = Merkmale in Sätzen darstellen; zusammenfassen = nur das Wesentliche in eigenen Worten wiedergeben.", prompt: "Nenne die drei Operatoren nennen, beschreiben und zusammenfassen. Schreibe zu jedem Operator einen passenden Satzanfang für eine Antwort zu Weggesperrt.", min: 75, criteria: ["Ich nenne alle drei Operatoren.", "Jeder Satzanfang passt zur verlangten Antwortform.", "Meine Beispiele beziehen sich auf den Roman."] },
          { title: "Operationalisierte Frage beantworten", help: "Beschreiben bedeutet: Stelle erkennbare Merkmale oder Handlungen in vollständigen Sätzen dar. Deute noch nicht ausführlich.", prompt: "Operator: Beschreibe in drei vollständigen Sätzen, wie Anjas Handlungsspielraum auf dem Weg ins Durchgangsheim eingeschränkt wird. Nenne ein konkretes Romanbeispiel.", min: 85, criteria: ["Ich antworte in drei vollständigen Sätzen.", "Ich beschreibe sichtbare Handlungen oder Entscheidungen anderer.", "Ich nenne ein passendes Romanbeispiel."] }
        ],
        regel: [
          { title: "Operatoren voneinander abgrenzen", help: "Erklären macht einen Zusammenhang deutlich; begründen sichert eine Aussage mit Gründen oder Belegen; vergleichen arbeitet Gemeinsamkeiten und Unterschiede nach Kriterien heraus.", prompt: "Grenze erklären, begründen und vergleichen voneinander ab. Formuliere zu jedem Operator eine passende Beispielfrage zum Roman.", min: 130, criteria: ["Ich beschreibe die Leistung jedes Operators.", "Meine drei Beispielfragen sind eindeutig operationalisiert.", "Ich zeige Unterschiede im erwarteten Antwortaufbau."] },
          { title: "Antwort planen und ausführen", help: "Struktur: Aussage – Ursache oder Zusammenhang – konkreter Romanbeleg – Wirkung.", prompt: "Operator: Erkläre, wie institutionelle Regeln Anjas Verhalten beeinflussen. Plane die Antwort kurz und formuliere anschließend einen zusammenhängenden Absatz mit mindestens zwei Romanbelegen.", min: 160, criteria: ["Mein Absatz erklärt einen Zusammenhang.", "Ich nutze mindestens zwei konkrete Romanbelege.", "Ich verknüpfe Beleg und Wirkung nachvollziehbar."] }
        ],
        experte: [
          { title: "Operatoren als Denkhandlungen prüfen", help: "Komplexe Antworten verbinden Analyse, Urteil und Reflexion, ohne die einzelnen Denkhandlungen zu vermischen.", prompt: "Untersuche, wie sich die Operatoren analysieren, beurteilen und erörtern im Erkenntnisziel unterscheiden. Entwickle zu jedem Operator eine anspruchsvolle Fragestellung zu Macht und Menschenwürde im Roman.", min: 190, criteria: ["Ich unterscheide drei Erkenntnisziele.", "Meine Fragestellungen sind fachlich und sprachlich eindeutig.", "Ich begründe die Zuordnung der Operatoren."] },
          { title: "Fragestellung transformieren", help: "Eine Transformation überträgt Erkenntnisse, macht Voraussetzungen sichtbar und reflektiert Grenzen.", prompt: "Überführe die einfache Frage „Wie wird Anja kontrolliert?“ in eine mehrteilige Transferaufgabe. Formuliere danach einen Erwartungshorizont mit Analyse, Gegenposition und reflektiertem Urteil.", min: 210, criteria: ["Die neue Aufgabe enthält einen klaren Transferoperator.", "Der Erwartungshorizont unterscheidet Analyse und Urteil.", "Ich berücksichtige Gegenposition und Grenzen."] }
        ]
      }
    },
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
          { title: "Position wiedergeben", prompt: "Gib in drei bis vier Sätzen wieder, welche Position dich in dieser Situation mehr überzeugt. Nenne dazu ein Argument der Figur und ein passendes Textbeispiel.", min: 55, criteria: ["Ich gebe eine Position verständlich wieder.", "Ich nenne ein Argument der Figur.", "Ich beziehe mich auf ein Textbeispiel."] }
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
      id: "werkstatt", part: "Abschluss · produktives Schreiben", title: "Brief, E-Mail, Tagebuch und innerer Monolog", time: "4 × 45 Min.", form: "Interaktive Schreibwerkstatt", icon: "✎", workshop: true,
      focus: "Vier produktive Schreibformen planen, figuren- und kapiteltreu verfassen und kriteriengeleitet überarbeiten.",
      question: "Wie wird aus Romanwissen ein glaubwürdiger Text aus Anjas Perspektive?"
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

  const WRITING_FORM_ORDER = ["email", "brief", "tagebuch", "monolog"];
  const WRITING_FORMS = {
    email: {
      label: "E-Mail",
      situation: "Nach dem Streit über politisches Engagement schreibt Anja Tom. Sie erklärt ihre Entscheidung und bittet ihn, ihre Beweggründe ernst zu nehmen.",
      planning: ["Was ist unmittelbar passiert?", "Was möchte Anja Tom mitteilen oder von ihm erreichen?", "Welche Gefühle und Werte bestimmen ihre Nachricht?", "Welches konkrete Romanwissen sichert die Kapiteltreue?"],
      features: ["An, Von und Betreff", "passende Anrede", "klare Absätze und verständliches Anliegen", "direkter Bezug zu Tom als Adressat", "Schlussformel und Name", "Ich-Perspektive, Buchwissen und Kapiteltreue"]
    },
    brief: {
      label: "Persönlicher Brief",
      situation: "Nach ihrer Rückkehr schreibt Anja ihrer Mutter. Sie schildert, was die Zeit in den Einrichtungen mit ihr gemacht hat und was sie sich für ihre Beziehung wünscht.",
      planning: ["Auf welchen Zeitpunkt blickt Anja zurück?", "Was soll die Mutter verstehen?", "Welche Gefühle, Vorwürfe oder Wünsche spricht Anja aus?", "Welche zwei Romanereignisse sollen im Brief vorkommen?"],
      features: ["Ort und Datum", "passende Anrede", "Einleitung, Hauptteil und Schluss", "klarer Adressatenbezug und erkennbare Absicht", "Grußformel und Name", "Figurenwissen, Buchwissen und Kapiteltreue"]
    },
    tagebuch: {
      label: "Tagebucheintrag",
      situation: "Am Abend nach ihrem ersten Tag in Torgau hält Anja fest, was sie erlebt hat, wovor sie Angst hat und welche Gedanken sie niemandem sagen kann.",
      planning: ["Welche Ereignisse des Tages beschäftigen Anja?", "Welche Gefühle löst die Situation aus?", "Welche Fragen, Zweifel oder Hoffnungen hat sie?", "Was darf Anja zu diesem Zeitpunkt bereits wissen?"],
      features: ["Datum, ggf. Uhrzeit", "konsequente Ich-Perspektive", "Gedanken, Gefühle und spontane Reaktionen", "subjektive Wertung und innerer Konflikt", "kein äußerer Adressat und keine Pflicht-Grußformel", "Buchwissen und Kapiteltreue"]
    },
    monolog: {
      label: "Innerer Monolog",
      situation: "Kurz vor einer Entscheidung über die Montagsdemonstration denkt Anja über Toms Warnungen, ihre Erfahrungen und ihr Bedürfnis nach Freiheit nach.",
      planning: ["Zwischen welchen Möglichkeiten schwankt Anja?", "Welche Gedanken sprechen für Sicherheit, welche für Engagement?", "Welche Erinnerungen beeinflussen sie?", "Welcher Gedanke oder welche offene Entscheidung steht am Ende?"],
      features: ["unmittelbare Ich-Perspektive im Präsens", "Gedankenfluss mit Fragen, Ausrufen oder Satzabbrüchen", "kein äußerer Erzähler und kein äußerer Adressat", "sichtbarer innerer Konflikt", "figurennahe Sprache und offene Entscheidung", "Buchwissen und Kapiteltreue"]
    }
  };

  const WORKSHOP_LEVELS = {
    mindest: { minWords: 120, maxWords: 180, planMin: 12, support: "Nutze die Leitfragen und Satzstarter. Sichere zuerst Situation, Ich-Perspektive und Grundmerkmale der Form." },
    regel: { minWords: 200, maxWords: 280, planMin: 20, support: "Verknüpfe Situation, Figurenwissen und Schreibabsicht. Gestalte die gewählte Form vollständig und adressatengerecht." },
    experte: { minWords: 280, maxWords: 380, planMin: 28, support: "Arbeite mit Subtext, ambivalenten Gefühlen und bewusster Leserwirkung. Begründe deine gestalterischen Entscheidungen." }
  };

  const PROGRESS_GROUPS = [
    { title: "Operatoren & Einstieg", range: "Stationen 1–2", ids: ["operatoren", "einstieg"] },
    { title: "Handlung & Räume", range: "Stationen 3–4", ids: ["weg", "raeume"] },
    { title: "Sprache & Geschichte", range: "Stationen 5–6", ids: ["sprache", "quellen"] },
    { title: "Würde & Dilemma", range: "Stationen 7–8", ids: ["wuerde", "dilemma"] },
    { title: "Schreiben & Transfer", range: "Stationen 9–10", ids: ["werkstatt", "abschluss"] }
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

  function emptyState() { return { completed: [], taskDone: {}, answers: {}, criteria: {}, quiz: {}, spectrum: {}, spectrumTouched: {}, workshop: { active: "email", forms: {} } }; }
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
    el("levelProfile").innerHTML = `<div><span class="profile-code">${esc(level.code)}</span><strong>${esc(level.process)}</strong><p>${esc(level.profile)}</p></div><div class="profile-operators"><span>Operatoren</span>${level.operators.map(operator => `<b>${esc(operator)}</b>`).join("")}</div>`;
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

  function expectedTaskKeys(module) {
    if (module.workshop) return WRITING_FORM_ORDER.map(formId => taskKey(module.id, `workshop_${formId}`));
    const keys = module.tasks[levelId].map((_, index) => taskKey(module.id, index));
    keys.push(taskKey(module.id, "quiz"));
    if (module.spectrum) keys.push(taskKey(module.id, "spectrum"));
    return keys;
  }

  function renderRingStats() {
    const completed = completedSet();
    const ringGrid = el("ringGrid");
    ringGrid.innerHTML = PROGRESS_GROUPS.map((group, groupIndex) => {
      const modules = group.ids.map(moduleById);
      const stationDone = modules.filter(module => completed.has(module.id)).length;
      const taskKeys = modules.flatMap(expectedTaskKeys);
      const taskDone = taskKeys.filter(key => state.taskDone[key]).length;
      const stationPercent = Math.round(stationDone / modules.length * 100);
      const taskPercent = Math.round(taskDone / taskKeys.length * 100);
      return `<button class="ring-card" type="button" data-progress-group="${groupIndex}" aria-label="${esc(group.title)}: ${taskPercent} Prozent der Aufgaben erledigt, ${stationPercent} Prozent der Stationen abgeschlossen">
        <span class="progress-ring" style="--station-progress:${stationPercent};--task-progress:${taskPercent}" aria-hidden="true"><strong class="ring-value">${taskPercent}%</strong></span>
        <span class="ring-copy"><strong>${esc(group.title)}</strong><span>${esc(group.range)}</span><small>${taskDone} / ${taskKeys.length} Aufgaben · ${stationDone} / ${modules.length} Stationen</small></span>
      </button>`;
    }).join("");
    ringGrid.querySelectorAll("[data-progress-group]").forEach(button => button.addEventListener("click", () => {
      const group = PROGRESS_GROUPS[Number(button.dataset.progressGroup)];
      const targetId = group.ids.find(id => !completed.has(id)) || group.ids[0];
      showStation(targetId);
    }));
  }

  function updateOverviewStats() {
    const done = state.completed.length;
    el("progressText").textContent = `${done} / ${MODULES.length}`;
    el("progressFill").style.width = `${Math.round(done / MODULES.length * 100)}%`;
    renderRingStats();
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
      <div class="task-head"><div><span class="task-index">${esc(level.operators[index])} · Aufgabe ${index + 1}</span><h2>${esc(task.title)}</h2>${task.help ? `<p class="operator-help"><strong>Operator-Hilfe:</strong> ${esc(task.help)}</p>` : ""}<p class="task-prompt">${esc(task.prompt)}</p></div><span class="task-status">${done ? "erledigt" : "offen"}</span></div>
      <div class="field"><label for="answer_${module.id}_${index}">Deine Antwort</label><textarea id="answer_${module.id}_${index}" data-answer-index="${index}" placeholder="${esc(level.placeholder)}">${esc(value)}</textarea><div class="counter"><span data-word-count>${wordCount(value)} Wörter</span><span>Orientierung: mindestens ${task.min} Wörter</span></div></div>
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

  function workshopFormState(formId) {
    state.workshop = state.workshop || { active: "email", forms: {} };
    state.workshop.forms = state.workshop.forms || {};
    if (!state.workshop.forms[formId]) state.workshop.forms[formId] = { plans: ["", "", "", ""], text: "", checks: [] };
    const draft = state.workshop.forms[formId];
    if (!Array.isArray(draft.plans)) draft.plans = ["", "", "", ""];
    while (draft.plans.length < 4) draft.plans.push("");
    if (!Array.isArray(draft.checks)) draft.checks = [];
    if (typeof draft.text !== "string") draft.text = "";
    return draft;
  }

  function workshopHtml(module) {
    const activeFormId = WRITING_FORMS[state.workshop && state.workshop.active] ? state.workshop.active : "email";
    state.workshop.active = activeFormId;
    const form = WRITING_FORMS[activeFormId];
    const draft = workshopFormState(activeFormId);
    const settings = WORKSHOP_LEVELS[levelId];
    const finished = WRITING_FORM_ORDER.filter(formId => state.taskDone[taskKey(module.id, `workshop_${formId}`)]).length;
    const formDone = !!state.taskDone[taskKey(module.id, `workshop_${activeFormId}`)];
    return `<section class="section writing-workshop ${formDone ? "complete" : ""}">
      <div class="workshop-heading"><div><span class="task-index">Produktive Schreibwerkstatt · ${esc(level.code)}</span><h2>Vier Schreibformen gestalten</h2><p>${esc(settings.support)}</p></div><span class="workshop-progress">${finished} / ${WRITING_FORM_ORDER.length} Formen geprüft</span></div>
      <div class="writing-form-tabs" role="group" aria-label="Schreibform auswählen">${WRITING_FORM_ORDER.map(formId => `<button class="button ${formId === activeFormId ? "primary" : ""}" type="button" data-writing-form="${formId}" aria-pressed="${formId === activeFormId}">${esc(WRITING_FORMS[formId].label)}${state.taskDone[taskKey(module.id, `workshop_${formId}`)] ? " ✓" : ""}</button>`).join("")}</div>
      <div class="writing-situation"><strong>Schreibauftrag: ${esc(form.label)}</strong><p>${esc(form.situation)}</p></div>
      <h3>1. Schreibplan</h3>
      <div class="workshop-plan">${form.planning.map((question, index) => `<div class="field"><label for="workshopPlan${index}">${esc(question)}</label><textarea id="workshopPlan${index}" class="plan-area" data-workshop-plan="${index}" placeholder="Notiere Stichpunkte oder kurze Sätze.">${esc(draft.plans[index] || "")}</textarea></div>`).join("")}</div>
      <h3>2. Text verfassen</h3>
      <div class="field"><label for="workshopText">Dein Text: ${esc(form.label)}</label><textarea id="workshopText" class="writing-area" data-workshop-text placeholder="${esc(level.placeholder)}">${esc(draft.text || "")}</textarea><div class="counter"><span data-workshop-count>${wordCount(draft.text)} Wörter</span><span>Zielbereich: ${settings.minWords}–${settings.maxWords} Wörter</span></div></div>
      <h3>3. Textsortenmerkmale und Buchbezug prüfen</h3>
      <div class="criteria workshop-criteria" role="group" aria-label="Merkmale für ${esc(form.label)}">${form.features.map((feature, index) => `<label class="criterion"><input type="checkbox" data-workshop-check="${index}" ${draft.checks[index] ? "checked" : ""}> <span>${esc(feature)}</span></label>`).join("")}</div>
      <button class="button primary" type="button" data-evaluate-workshop>Schreibform prüfen</button>
      <div class="feedback ${formDone ? "good" : ""}" data-workshop-feedback aria-live="polite">${formDone ? `${esc(form.label)} ist vollständig geprüft und gespeichert.` : "Fülle den Schreibplan aus, schreibe deinen Text und bestätige die Merkmale."}</div>
    </section>`;
  }

  function showStation(id) {
    const module = moduleById(id);
    if (!module) return;
    activeId = id;
    overviewView.classList.add("hidden");
    stationView.classList.remove("hidden");
    el("currentPath").textContent = `${module.part} · ${module.title}`;
    const tasks = module.workshop ? [] : module.tasks[levelId];
    const currentIndex = MODULES.indexOf(module);
    const stationContent = module.workshop ? workshopHtml(module) : `<div class="task-list">${module.spectrum ? spectrumCard(module) : ""}${tasks.map((task, index) => writingCard(module, task, index)).join("")}${quizCard(module)}</div>`;
    stationView.innerHTML = stationHeader(module) + stationContent + `
      <div class="station-actions"><button class="button" type="button" data-prev>${currentIndex === 0 ? "Zum Überblick" : "← Vorherige Station"}</button><button class="button primary" type="button" data-complete-station>${completedSet().has(module.id) ? "Markierung zurücknehmen" : "Station abschließen"}</button><button class="button" type="button" data-next>${currentIndex === MODULES.length - 1 ? "Zum Überblick" : "Nächste Station →"}</button></div>
      <div class="feedback" data-station-feedback aria-live="polite"></div>`;
    if (module.workshop) bindWorkshop(module); else bindStation(module, tasks);
    bindStationActions(module);
    renderNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindWorkshop(module) {
    const activeFormId = state.workshop.active || "email";
    const draft = workshopFormState(activeFormId);
    const form = WRITING_FORMS[activeFormId];
    const settings = WORKSHOP_LEVELS[levelId];
    stationView.querySelectorAll("[data-writing-form]").forEach(button => button.addEventListener("click", () => {
      state.workshop.active = button.dataset.writingForm;
      saveState();
      showStation(module.id);
    }));
    stationView.querySelectorAll("[data-workshop-plan]").forEach(textarea => textarea.addEventListener("input", () => {
      draft.plans[Number(textarea.dataset.workshopPlan)] = textarea.value;
      saveState();
    }));
    const text = stationView.querySelector("[data-workshop-text]");
    const counter = stationView.querySelector("[data-workshop-count]");
    text.addEventListener("input", () => {
      draft.text = text.value;
      counter.textContent = `${wordCount(text.value)} Wörter`;
      saveState();
    });
    stationView.querySelectorAll("[data-workshop-check]").forEach(box => box.addEventListener("change", () => {
      draft.checks = Array.from(stationView.querySelectorAll("[data-workshop-check]")).map(item => item.checked);
      saveState();
    }));
    stationView.querySelector("[data-evaluate-workshop]").addEventListener("click", () => {
      const plansDone = draft.plans.filter(value => value.trim().length >= settings.planMin).length;
      const words = wordCount(draft.text);
      const checksDone = draft.checks.filter(Boolean).length;
      const wordTarget = words >= settings.minWords && words <= settings.maxWords;
      const ok = plansDone === form.planning.length && checksDone === form.features.length && wordTarget;
      const key = taskKey(module.id, `workshop_${activeFormId}`);
      state.taskDone[key] = ok;
      const feedback = stationView.querySelector("[data-workshop-feedback]");
      feedback.className = `feedback ${ok ? "good" : "warn"}`;
      feedback.textContent = ok ? `${form.label} ist vollständig geplant, geschrieben und geprüft.` : `Noch offen: ${form.planning.length - plansDone} Bereich(e) im Schreibplan, ${Math.max(0, form.features.length - checksDone)} Merkmal(e) und ${wordTarget ? "kein" : "ein"} Problem beim Wortziel.`;
      stationView.querySelector(".writing-workshop").classList.toggle("complete", ok);
      saveState();
    });
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

  }

  function bindStationActions(module) {
    stationView.querySelector("[data-complete-station]").addEventListener("click", event => {
      const done = completedSet();
      if (done.has(module.id)) { state.completed = state.completed.filter(item => item !== module.id); saveState(); showStation(module.id); return; }
      const expectedKeys = expectedTaskKeys(module);
      const solved = expectedKeys.filter(key => state.taskDone[key]).length;
      const feedback = stationView.querySelector("[data-station-feedback]");
      if (solved < expectedKeys.length) { feedback.className = "feedback warn"; feedback.textContent = module.workshop ? `Noch ${expectedKeys.length - solved} Schreibform(en) offen. Plane, schreibe und prüfe alle vier Formen.` : `Noch ${expectedKeys.length - solved} Aufgabe(n) offen. Nutze bei den Schreibaufgaben jeweils „Aufgabe prüfen“.`; return; }
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
