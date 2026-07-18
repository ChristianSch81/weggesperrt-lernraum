(() => {
  "use strict";

  const LEVELS = {
    mindest: {
      code: "M10",
      label: "Mindeststandard",
      short: "Reproduktion · reaktiv",
      process: "Reproduktion (Vorlage wiederholen)",
      profile: "Grundzüge wiedergeben und sich gegenstandsbezogen äußern. Du arbeitest mit klaren Hilfen und sicherst das Fundament.",
      strategyLabel: "Operatoren",
      operators: ["Wiedergeben", "Beschreiben"],
      placeholder: "Satzstarter: Im Roman … / Das erkennt man daran, dass …",
      tip: "Markiere zuerst den Arbeitsauftrag und die verlangte Anzahl. Sammle danach passende Romanstellen in Stichpunkten und formuliere erst dann vollständige Sätze.",
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
        "Ich kann einen produktiven Text mithilfe eines Schreibplans verfassen und anhand einer Checkliste prüfen.",
        "Ich kann zentrale Figuren des Romans und ihre Beziehungen mit passenden Beispielen beschreiben.",
        "Ich kann Durchgangsheim und Jugendwerkhof anhand wichtiger Merkmale unterscheiden.",
        "Ich kann Regeln und Sanktionen nennen und ihre Folgen für Anja beschreiben.",
        "Ich kann Merkmale der Sprache der Erziehenden nennen und ihre Wirkung auf Anja beschreiben.",
        "Ich kann den historischen Hintergrund der DDR-Heimerziehung in Grundzügen wiedergeben."
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
      strategyLabel: "Arbeitsweisen",
      operators: ["Rekonstruieren", "Analysieren"],
      placeholder: "Strukturhilfe: Aussage – Romanbeleg – Erklärung der Wirkung",
      tip: "Lege vor dem Schreiben drei Schritte fest: Kernaussage, geeigneter Romanbeleg und Erklärung des Zusammenhangs oder der Wirkung.",
      hero: "Zusammenhänge analysieren und begründen",
      intro: "Du rekonstruierst Ursachen und Folgen, untersuchst Sprache und Macht und formulierst begründete Urteile. Dabei verknüpfst du Romanbelege mit historischen Informationen.",
      goals: [
        "Ich kann einen produktiven Text mithilfe eines Schreibplans verfassen und anhand einer Checkliste prüfen.",
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
      strategyLabel: "Denkhandlungen",
      operators: ["Transfer leisten", "Reflektieren"],
      placeholder: "Strukturhilfe: Deutungsthese – Merkmal – Beleg – Analyse – Entwicklung – Gesamtdeutung",
      tip: "Formuliere zuerst eine Deutungsthese zur Figur. Verknüpfe dann jedes Merkmal mit einem genauen Romanbeleg und erkläre, wie Sprache, Verhalten, Beziehungen oder Erzählweise deine Deutung stützen.",
      hero: "Figuren differenziert charakterisieren",
      intro: "Du entwickelst eine anspruchsvolle Charakterisierung Anjas. Dabei untersuchst du direkte und indirekte Figurenmerkmale, Beziehungen, innere Konflikte, Entwicklung und erzählerische Gestaltung und reflektierst die Grenzen deiner Deutung.",
      goals: [
        "Ich kann eine differenzierte Deutungsthese formulieren, die zentrale Eigenschaften, Konflikte und Entwicklungen einer Figur bündelt.",
        "Ich kann direkte und indirekte Charakterisierung unterscheiden und ihre jeweilige Aussagekraft beurteilen.",
        "Ich kann Verhalten, Sprache, Gedanken, Gefühle und Beziehungen als Belege für Figurenmerkmale analysieren.",
        "Ich kann genaue Romanbelege in eine Argumentation einbinden und den Zusammenhang zwischen Beleg und Deutung erklären.",
        "Ich kann Anjas Selbstbild mit den Fremdbildern anderer Figuren vergleichen und Widersprüche reflektieren.",
        "Ich kann untersuchen, wie Erzählperspektive und Informationsvergabe die Wahrnehmung einer Figur lenken.",
        "Ich kann Anjas Entwicklung an Wendepunkten nachvollziehen und Kontinuität sowie Veränderung gewichten.",
        "Ich kann Beziehungen und Machtverhältnisse als Einflussfaktoren auf Anjas Handeln und Selbstverständnis deuten.",
        "Ich kann alternative Lesarten einer Figur abwägen und die Grenzen meiner Charakterisierung transparent machen.",
        "Ich kann eine schlüssig gegliederte Charakterisierung verfassen, kriteriengeleitet überarbeiten und ihre Gestaltungsentscheidungen begründen."
      ],
      guidance: "Unterscheide Beobachtung, Beleg und Deutung und mache alternative Lesarten sichtbar.",
      evidence: "Nutze mehrere genaue Romanbelege aus unterschiedlichen Situationen und erkläre jeweils ihre Aussagekraft."
    }
  };

  const MODULES = [
    {
      id: "operatoren", part: "Grundlage · Aufgaben richtig verstehen", title: "Operatoren erkennen und passend antworten", time: "45–60 Min.", form: "Antworttraining", icon: "?",
      focus: "Arbeitsaufträge entschlüsseln und Antworten genau an nennen, beschreiben, zusammenfassen, erklären, begründen, ordnen und vergleichen ausrichten.",
      question: "Woran erkenne ich, was eine operationalisierte Fragestellung von meiner Antwort verlangt?",
      quick: { prompt: "Welcher Operator verlangt ausdrücklich einen nachvollziehbaren Grund oder Romanbeleg?", options: ["nennen", "begründen", "ordnen"], answer: 1, explanation: "Begründen verlangt eine Aussage und mindestens einen nachvollziehbaren Grund oder Beleg." },
      levelMeta: {
        regel: {
          part: "Schreibwerkstatt · Planung",
          title: "Schreibaufträge planen und umsetzen",
          focus: "Einen produktiven Schreibauftrag erschließen, einen Schreibplan entwickeln und den Text kriteriengeleitet vorbereiten.",
          question: "Wie hilft ein Schreibplan dabei, einen produktiven Text vollständig und adressatengerecht zu verfassen?",
          form: "Schreibplanung",
          icon: "✎",
          quick: { prompt: "Welcher Schreibplan bereitet einen produktiven Text am besten vor?", options: ["Nur die gewünschte Wortzahl notieren.", "Situation, Perspektive, Absicht, Romanwissen und Aufbau in Stichpunkten planen.", "Den fertigen Text zuerst abschreiben und danach gliedern."], answer: 1, explanation: "Ein hilfreicher Schreibplan klärt vor dem Formulieren Situation, Perspektive, Schreibabsicht, Romanwissen und Aufbau." }
        },
        experte: {
          part: "Charakterisierung · Planung",
          title: "Eine differenzierte Charakterisierung planen",
          focus: "Eine Deutungsthese entwickeln, Beobachtungen bündeln und passende Belege für eine schlüssige Charakterisierung ordnen.",
          question: "Wie wird aus einzelnen Beobachtungen ein begründetes Gesamtbild einer literarischen Figur?",
          form: "Charakterisierungsplan",
          icon: "◇",
          quick: { prompt: "Welche Planung führt zu einer analytischen Charakterisierung?", options: ["Eigenschaften ohne Belege sammeln.", "Deutungsthese, Merkmale, Situationen, Belege, Analyse und Entwicklung aufeinander beziehen.", "Die Handlung des Romans vollständig nacherzählen."], answer: 1, explanation: "Eine analytische Charakterisierung verbindet eine Deutungsthese mit ausgewählten Merkmalen, Belegen und deren genauer Auswertung." }
        }
      },
      tasks: {
        mindest: [
          { title: "Operator und Antwortform sichern", help: "Nennen = knapp aufzählen; beschreiben = Merkmale in Sätzen darstellen; zusammenfassen = nur das Wesentliche in eigenen Worten wiedergeben.", prompt: "Nenne die drei Operatoren nennen, beschreiben und zusammenfassen. Schreibe zu jedem Operator einen passenden Satzanfang für eine Antwort zu Weggesperrt.", min: 75, criteria: ["Ich nenne alle drei Operatoren.", "Jeder Satzanfang passt zur verlangten Antwortform.", "Meine Beispiele beziehen sich auf den Roman."] },
          { title: "Operationalisierte Frage beantworten", help: "Beschreiben bedeutet: Stelle erkennbare Merkmale oder Handlungen in vollständigen Sätzen dar. Deute noch nicht ausführlich.", prompt: "Operator: Beschreibe in drei vollständigen Sätzen, wie Anjas Handlungsspielraum auf dem Weg ins Durchgangsheim eingeschränkt wird. Nenne ein konkretes Romanbeispiel.", min: 85, criteria: ["Ich antworte in drei vollständigen Sätzen.", "Ich beschreibe sichtbare Handlungen oder Entscheidungen anderer.", "Ich nenne ein passendes Romanbeispiel."] }
        ],
        regel: [
          { tag: "Schreibplan", title: "Produktiven Schreibauftrag erschließen", tip: "Notiere noch keinen fertigen Text. Kläre zuerst Situation, Zeitpunkt, Figurenwissen, Perspektive, Schreibabsicht und Merkmale des inneren Monologs.", prompt: "Erstelle einen Schreibplan zu diesem Auftrag: Verfasse aus Anjas Perspektive einen inneren Monolog unmittelbar nach ihrer Ankunft im Heim. Plane Situation, Wissen, Gefühle, inneren Konflikt, Romanbelege und Aufbau.", min: 130, criteria: ["Mein Schreibplan bezieht sich auf den genannten Zeitpunkt und Anjas damaligen Wissensstand.", "Ich plane Gefühle, inneren Konflikt und mindestens zwei passende Romanbelege.", "Ich notiere einen nachvollziehbaren Aufbau und Merkmale des inneren Monologs."] },
          { tag: "Textentwurf", title: "Schreibplan in einen Text überführen", tip: "Wähle aus deinem Schreibplan die stärksten Punkte aus. Beginne mitten in Anjas Gedanken und verbinde Gefühl, Erinnerung und Konflikt, ohne die Handlung nur nachzuerzählen.", prompt: "Nutze deinen Schreibplan aus der vorherigen Aufgabe. Verfasse den Einstieg und einen ausgearbeiteten Hauptabschnitt des inneren Monologs. Prüfe anschließend mit der Checkliste, ob Text und Plan zusammenpassen.", min: 160, criteria: ["Mein Text setzt die Situation und Perspektive aus meinem Schreibplan erkennbar um.", "Ich gestalte Anjas Gedanken, Gefühle und inneren Konflikt figuren- und kapitelnah.", "Ich prüfe den Text anhand der Kriterien und überarbeite mindestens eine Stelle."] }
        ],
        experte: [
          { tag: "Konzept", title: "Charakterisierungsraster entwickeln", tip: "Ordne nicht nur Eigenschaftswörter. Plane zu jedem Merkmal eine Situation, einen Beleg, ein Analyseverb und eine mögliche Gegenbeobachtung.", prompt: "Entwickle ein Bearbeitungskonzept für eine differenzierte Charakterisierung Anjas. Plane eine Deutungsthese, mindestens vier Merkmalsbereiche, passende Romansituationen und Belege sowie eine Gegenbeobachtung, die dein Gesamtbild differenziert.", min: 190, criteria: ["Mein Konzept enthält eine prüfbare Deutungsthese und mindestens vier Merkmalsbereiche.", "Ich ordne jedem Bereich eine konkrete Romansituation und eine vorgesehene Analyse zu.", "Ich plane mindestens eine Gegenbeobachtung, die ein einseitiges Figurenbild verhindert."] },
          { tag: "Reflexion", title: "Deutungsthese prüfen und schärfen", tip: "Prüfe, ob deine These alle gewählten Belege erklärt. Formuliere eine alternative Lesart und zeige, warum deine Fassung dennoch trägt oder angepasst werden muss.", prompt: "Prüfe deine Deutungsthese aus der vorherigen Aufgabe an zwei unterschiedlichen Romansituationen. Entwickle eine plausible alternative Lesart und formuliere anschließend eine geschärfte Gesamtthese zur Figur.", min: 210, criteria: ["Ich prüfe meine vorherige These an zwei unterschiedlichen Situationen.", "Ich formuliere und gewichte eine plausible alternative Lesart.", "Meine geschärfte Gesamtthese macht Eigenschaften, Konflikt oder Entwicklung sichtbar."] }
        ]
      }
    },
    {
      id: "einstieg", part: "Einstieg · vor der Lektüre", title: "Freiheit hat Grenzen – aber wer setzt sie?", time: "45 Min.", form: "Think · Pair · Share", icon: "↔", spectrum: true,
      focus: "Zwischen Schutz und Kontrolle unterscheiden und Leseerwartungen entwickeln.",
      question: "Wann wird staatliche Erziehung zu unrechtmäßiger Kontrolle?",
      quick: { prompt: "Welche Aussage ist als Lesevermutung am besten formuliert?", options: ["Anja hat bestimmt keine Freiheit.", "Ich vermute, dass Anjas Spielraum kleiner wird, weil andere über ihren Aufenthaltsort entscheiden; beim Lesen prüfe ich diese Annahme.", "In der DDR war alles Kontrolle."], answer: 1, explanation: "Die zweite Aussage kennzeichnet die Vermutung, begründet sie und bleibt überprüfbar." },
      levelMeta: { experte: { part: "Charakterisierung · erste Figurenbilder", title: "Erster Eindruck und Deutungshypothese", focus: "Erste Figurenmerkmale aus Erzählerangaben, Verhalten und Beziehungen ableiten und als vorläufige Hypothese kennzeichnen.", question: "Wie entsteht ein erster Eindruck von Anja, und wodurch kann er sich im Verlauf der Lektüre verändern?", form: "Hypothesenwerkstatt", quick: { prompt: "Welche Aussage ist eine geeignete Deutungshypothese zu einer Figur?", options: ["Anja ist einfach schwierig.", "Anja wirkt anfangs abwehrend; ihr Verhalten könnte jedoch auch als Reaktion auf Unsicherheit und Fremdbestimmung lesbar sein.", "Anja bleibt im gesamten Roman unverändert."], answer: 1, explanation: "Die zweite Aussage formuliert einen textnahen Eindruck, markiert ihn als vorläufig und lässt eine alternative Erklärung zu." } } },
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
          { title: "Ersten Eindruck differenzieren", prompt: "Formuliere auf Grundlage des Romananfangs eine vorläufige Charakterisierung Anjas. Unterscheide mindestens eine Erzählerangabe, eine Verhaltensbeobachtung und eine Deutung; formuliere außerdem eine alternative Erklärung.", min: 150, criteria: ["Ich unterscheide Erzählerangabe, beobachtbares Verhalten und eigene Deutung.", "Ich entwickle aus den Beobachtungen eine vorläufige Deutungshypothese.", "Ich nenne eine plausible alternative Erklärung und kennzeichne den vorläufigen Charakter meines Urteils."] },
          { title: "Beobachtungsfragen für die Lektüre", prompt: "Entwickle vier Leitfragen, mit denen du Anjas Sprache, Verhalten, Gedanken, Beziehungen und Veränderungen im Roman systematisch verfolgen kannst. Begründe, wie jede Frage zur späteren Charakterisierung beiträgt.", min: 150, criteria: ["Meine vier Leitfragen decken unterschiedliche Zugänge zur Figur ab.", "Ich benenne zu jeder Frage passende Textsignale oder Belegarten.", "Ich erkläre den Beitrag jeder Frage zu einer differenzierten Charakterisierung."] }
        ]
      }
    },
    {
      id: "weg", part: "Teil I · „Sonst wohin“ · S. 8–169", title: "Anjas Weg ins Heim rekonstruieren", time: "2 × 45 Min.", form: "Leselogbuch", icon: "→",
      focus: "Wendepunkte, Ursachen und Folgen von Anjas zunehmendem Kontrollverlust erfassen.",
      question: "Wie erzeugt der Roman das Gefühl, dass Anja die Kontrolle über ihr Leben verliert?",
      quick: { prompt: "Was macht eine Ereigniskette analytisch?", options: ["Sie zählt möglichst viele Ereignisse auf.", "Sie verbindet ausgewählte Ereignisse durch Ursache und Folge.", "Sie nennt nur die Seitenzahlen."], answer: 1, explanation: "Eine analytische Ereigniskette macht den Zusammenhang zwischen ausgewählten Handlungsschritten sichtbar." },
      levelMeta: { experte: { part: "Charakterisierung · Entwicklung", title: "Anjas Entwicklung an Wendepunkten", focus: "Veränderungen und bleibende Eigenschaften an ausgewählten Wendepunkten untersuchen und gewichten.", question: "Was verändert Anja – und welche Grundzüge bleiben trotz neuer Erfahrungen bestehen?", form: "Entwicklungslinie", quick: { prompt: "Wann belegt eine Szene eine Figurenentwicklung?", options: ["Sobald die Figur an einem neuen Ort ist.", "Wenn früheres und späteres Verhalten unter vergleichbaren Bedingungen analysiert und die Veränderung erklärt wird.", "Wenn die Handlung kurz zusammengefasst wird."], answer: 1, explanation: "Entwicklung wird durch einen begründeten Vergleich von Verhalten, Motiven oder Selbstbild zu unterschiedlichen Zeitpunkten sichtbar." } } },
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
          { title: "Entwicklungslinie mit Wendepunkten", prompt: "Wähle drei Wendepunkte aus Anjas Weg. Analysiere für jeden Punkt Ausgangslage, Verhalten, inneren Konflikt und mögliche Veränderung. Formuliere danach eine These zu ihrer Entwicklung.", min: 200, criteria: ["Ich untersuche drei konkrete Wendepunkte mit genauen Romanbezügen.", "Ich erkläre jeweils den Zusammenhang von Situation, Verhalten und innerem Konflikt.", "Meine Entwicklungsthese unterscheidet Veränderung und bleibende Eigenschaften."] },
          { title: "Kontinuität oder Wandel abwägen", prompt: "Prüfe die These: „Anja wird durch ihre Erfahrungen zu einem grundlegend anderen Menschen.“ Entwickle eine Gegenposition und wäge anhand von mindestens drei Belegen ab.", min: 190, criteria: ["Ich prüfe die These und eine ernst zu nehmende Gegenposition.", "Ich nutze mindestens drei Belege aus verschiedenen Romanabschnitten.", "Mein Fazit gewichtet Kontinuität und Wandel differenziert."] }
        ]
      }
    },
    {
      id: "raeume", part: "Teil I · Räume und Regeln", title: "Durchgangsheim und Jugendwerkhof vergleichen", time: "90 Min.", form: "Belegmatrix", icon: "▦",
      focus: "Räume, Regeln, Sanktionen und soziales Miteinander vergleichend untersuchen.",
      question: "Wie werden Räume zu Instrumenten der Macht?",
      quick: { prompt: "Welche Formulierung trennt Beobachtung und Deutung?", options: ["Die verschlossene Tür ist schlimm.", "Die Tür ist verschlossen (Beobachtung); sie kann Anjas Abhängigkeit symbolisieren (Deutung).", "Die Tür bedeutet Gefängnis, das ist sicher."], answer: 1, explanation: "Die zweite Formulierung kennzeichnet Textbeobachtung und mögliche Deutung transparent." },
      levelMeta: { experte: { part: "Charakterisierung · Raum und Situation", title: "Wie Situationen Anjas Verhalten prägen", focus: "Anjas Verhalten in unterschiedlichen Räumen vergleichen und zwischen situationsbedingter Reaktion und stabiler Eigenschaft unterscheiden.", question: "Was verrät Anjas Verhalten über ihren Charakter – und was vor allem über die jeweilige Situation?", form: "Kontextvergleich", quick: { prompt: "Welche Schlussfolgerung ist bei einer Charakterisierung methodisch vorsichtig?", options: ["Wer einmal schweigt, ist grundsätzlich schüchtern.", "Anjas Schweigen kann in dieser Situation Angst, Widerstand oder strategische Selbstkontrolle ausdrücken; der Kontext entscheidet.", "Verhalten zeigt immer eindeutig eine feste Eigenschaft."], answer: 1, explanation: "Verhalten muss im situativen Kontext analysiert werden; erst mehrere Belege erlauben Aussagen über stabilere Figurenmerkmale." } } },
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
          { title: "Verhalten im Kontext vergleichen", prompt: "Vergleiche Anjas Verhalten in zwei deutlich verschiedenen Räumen oder institutionellen Situationen. Prüfe, welche Reaktionen situationsbedingt sind und welche auf stabilere Eigenschaften hindeuten.", min: 190, criteria: ["Ich analysiere zwei unterschiedliche Situationen mit genauen Belegen.", "Ich unterscheide situationsbedingte Reaktionen und stabilere Figurenmerkmale.", "Ich begründe meine Einordnung und benenne eine Unsicherheit."] },
          { title: "Räume als Charakterisierungsfolie", prompt: "Untersuche, wie die Darstellung eines Raumes Anjas inneren Zustand, ihr Selbstbild oder ihre Handlungsmöglichkeiten spiegelt oder kontrastiert. Entwickle auch eine alternative Deutung.", min: 180, criteria: ["Ich deute mindestens zwei konkrete Raumdetails.", "Ich verbinde die Raumgestaltung nachvollziehbar mit Anjas Figur.", "Ich prüfe eine alternative Lesart statt die Symbolik als eindeutig auszugeben."] }
        ]
      }
    },
    {
      id: "sprache", part: "Teil II · Torgau · S. 171–270", title: "Sprache als Instrument der Macht", time: "90 Min.", form: "Sprachanalyse", icon: "!",
      focus: "Befehle, Wortwahl, Satzbau und Sprechsituationen in ihrer Wirkung analysieren.",
      question: "Wie kann Sprache Gehorsam erzwingen und Menschen entwürdigen?",
      quick: { prompt: "Welche Beobachtung gehört zur Sprachanalyse?", options: ["Der Direktor ist böse.", "Kurze Imperativsätze lassen keinen sprachlichen Raum für Widerspruch.", "Anja sollte weglaufen."], answer: 1, explanation: "Die zweite Aussage benennt ein sprachliches Mittel und seine mögliche Wirkung." },
      levelMeta: { experte: { part: "Charakterisierung · Sprache", title: "Anjas Sprache und ihr innerer Konflikt", focus: "Wortwahl, Satzbau, Schweigen und Gegenrede als indirekte Mittel der Charakterisierung analysieren.", question: "Wie zeigt Anjas Sprache, was sie denkt, fühlt, verbirgt oder gegenüber anderen behaupten will?", form: "Figurensprachanalyse", quick: { prompt: "Was macht Sprache zu einem indirekten Charakterisierungsmittel?", options: ["Jede Äußerung nennt eine Eigenschaft ausdrücklich.", "Wortwahl, Satzbau und Sprechverhalten lassen Rückschlüsse auf Haltung, Gefühle und Beziehungen zu.", "Nur der Inhalt einer Aussage ist wichtig."], answer: 1, explanation: "Figurensprache charakterisiert indirekt, weil Form, Situation und Adressat ebenso aussagekräftig sein können wie der Inhalt." } } },
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
          { title: "Figurensprache im Vergleich", prompt: "Analysiere Anjas Sprache in zwei unterschiedlichen Gesprächssituationen. Untersuche Wortwahl, Satzbau, Sprechanteile, Schweigen und Adressatenbezug und leite daraus ein differenziertes Figurenmerkmal ab.", min: 200, criteria: ["Ich untersuche zwei unterschiedliche Gesprächssituationen mit genauen Belegen.", "Ich analysiere mindestens drei sprachliche oder kommunikative Merkmale.", "Ich erkläre, wie Situation und Adressat Anjas sprachliches Verhalten beeinflussen."] },
          { title: "Subtext und Selbstschutz", prompt: "Wähle eine Szene, in der Anjas gesprochene Worte und ihre möglichen Gedanken oder Gefühle auseinanderfallen. Deute den Subtext und prüfe mindestens zwei Erklärungen für ihr Sprechverhalten.", min: 180, criteria: ["Ich belege die Spannung zwischen Gesagtem und möglichem innerem Erleben.", "Ich entwickle mindestens zwei plausible Erklärungen.", "Ich gewichte die Erklärungen textnah und vermeide eine eindeutige Gedankenbehauptung ohne Beleg."] }
        ]
      }
    },
    {
      id: "quellen", part: "Teil II · Roman und Geschichte", title: "Fiktion, Quelle oder Urteil?", time: "2 × 45 Min.", form: "Quellenwerkstatt", icon: "?",
      focus: "Romanbeleg, historische Quelle und persönliche Wertung unterscheiden und verbinden.",
      question: "Was kann ein Roman über Geschichte zeigen – und was nicht?",
      quick: { prompt: "Welche Aussage ist methodisch sauber?", options: ["Der Roman beweist genau, wie es in jedem Jugendwerkhof war.", "Der Roman gestaltet eine mögliche Erfahrung; historische Aussagen prüfe ich zusätzlich an Quellen.", "Historische Quellen sind immer neutral."], answer: 1, explanation: "Literarische Gestaltung und historische Sachinformation müssen unterschieden und transparent verknüpft werden." },
      levelMeta: { experte: { part: "Charakterisierung · Selbst- und Fremdbild", title: "Wer ist Anja – in wessen Augen?", focus: "Anjas Selbstbild mit Fremdzuschreibungen vergleichen und Interessen, Machtpositionen sowie Leerstellen der Wahrnehmung reflektieren.", question: "Wie verändert sich unser Bild von Anja, wenn unterschiedliche Figuren sie beschreiben oder beurteilen?", form: "Perspektivenmatrix", quick: { prompt: "Wie sollte eine Fremdzuschreibung in einer Charakterisierung verwendet werden?", options: ["Als objektive Wahrheit über die Figur.", "Als perspektivische Aussage, deren Sprecher, Situation, Interesse und Textbelege geprüft werden.", "Sie sollte grundsätzlich ignoriert werden."], answer: 1, explanation: "Fremdbilder liefern wichtige Hinweise, sind aber perspektivisch und müssen mit Verhalten, Selbstbild und Erzählkontext verglichen werden." } } },
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
          { title: "Selbstbild und Fremdbilder vergleichen", prompt: "Vergleiche Anjas Selbstbild mit zwei unterschiedlichen Fremdbildern anderer Figuren oder Institutionen. Untersuche Zuschreibungen, Interessen, Machtpositionen und Widersprüche.", min: 210, criteria: ["Ich untersuche Anjas Selbstbild und zwei unterschiedliche Fremdbilder.", "Ich belege die Zuschreibungen und ordne Sprecher, Situation und mögliche Interessen ein.", "Ich erkläre, welche Widersprüche für meine Charakterisierung besonders aussagekräftig sind."] },
          { title: "Perspektivische Wahrheit reflektieren", prompt: "Prüfe, ob eine ausgewählte Fremdzuschreibung Anja angemessen beschreibt oder sie auf eine Rolle reduziert. Formuliere ein differenziertes Gegenbild und benenne auch dessen Grenzen.", min: 190, criteria: ["Ich prüfe eine konkrete Fremdzuschreibung anhand mehrerer Romanbelege.", "Mein Gegenbild berücksichtigt widersprüchliche Eigenschaften oder Verhaltensweisen.", "Ich benenne die Perspektivität und Grenzen auch meiner eigenen Deutung."] }
        ]
      }
    },
    {
      id: "wuerde", part: "Teil II/III · Menschenwürde", title: "Schuld, Verantwortung und Menschenrechte", time: "90 Min.", form: "Streitgespräch", icon: "§",
      focus: "Vorwürfe rekonstruieren und Behandlung anhand ethischer und rechtsstaatlicher Maßstäbe beurteilen.",
      question: "Wer trägt Verantwortung, wenn ein System Unrecht als Erziehung bezeichnet?",
      quick: { prompt: "Was gehört zu einem begründeten Urteil?", options: ["Nur eine starke Meinung.", "Maßstab, Belege, Abwägung und Schlussfolgerung.", "Möglichst viele Fachwörter."], answer: 1, explanation: "Ein Urteil wird nachvollziehbar, wenn Maßstab, Belege, Abwägung und Schlussfolgerung zusammenwirken." },
      levelMeta: { experte: { part: "Charakterisierung · innere Konflikte", title: "Werte, Motive und innere Widersprüche", focus: "Anjas Entscheidungen aus konkurrierenden Motiven, Wertvorstellungen und Gefühlen erklären, ohne sie auf ein Merkmal zu reduzieren.", question: "Welche inneren Spannungen treiben Anja an, und wie prägen sie ihr Handeln?", form: "Motiv- und Konfliktanalyse", quick: { prompt: "Was kennzeichnet einen inneren Konflikt einer Figur?", options: ["Die Figur besitzt nur eine klare Absicht.", "Mehrere Bedürfnisse, Werte oder Ziele ziehen die Figur in unterschiedliche Richtungen.", "Zwei Figuren streiten miteinander."], answer: 1, explanation: "Ein innerer Konflikt entsteht, wenn in einer Figur konkurrierende Motive, Werte oder Ziele wirksam sind." } } },
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
          { title: "Motivbündel statt Einzelerklärung", prompt: "Analysiere eine folgenreiche Entscheidung Anjas. Rekonstruiere mindestens drei mögliche Motive oder Werte, zeige ihre Spannungen und gewichte ihre Bedeutung für die Entscheidung.", min: 210, criteria: ["Ich untersuche eine konkrete Entscheidung und mindestens drei plausible Motive oder Werte.", "Ich erkläre Spannungen und Wechselwirkungen zwischen den Motiven.", "Ich gewichte meine Deutung anhand genauer Belege und kennzeichne Unsicherheiten."] },
          { title: "Widersprüchlichkeit als Figurenmerkmal", prompt: "Prüfe, ob zwei scheinbar widersprüchliche Verhaltensweisen Anjas tatsächlich unvereinbar sind. Entwickle eine übergeordnete Deutung, die beide Seiten erklärt, und formuliere eine Grenze dieser Deutung.", min: 190, criteria: ["Ich belege zwei scheinbar widersprüchliche Verhaltensweisen.", "Meine übergeordnete Deutung erklärt beide Beobachtungen nachvollziehbar.", "Ich benenne eine Grenze oder alternative Erklärung."] }
        ]
      }
    },
    {
      id: "dilemma", part: "Teil III · „Draußen“ · S. 271–320", title: "Engagement oder Sicherheit?", time: "2 × 45 Min.", form: "Dilemma-Diskussion", icon: "⚖",
      focus: "Anjas und Toms Positionen vergleichen und demokratisches Handeln abwägen.",
      question: "Wann ist persönliches Risiko für politische Veränderung vertretbar?",
      quick: { prompt: "Was macht ein Dilemma aus?", options: ["Eine Seite ist eindeutig richtig.", "Zwei wichtige Werte geraten in Konflikt und jede Entscheidung hat Kosten.", "Niemand weiß, worum es geht."], answer: 1, explanation: "Im Dilemma kollidieren begründbare Werte; eine Entscheidung löst den Konflikt nicht folgenlos auf." },
      levelMeta: { experte: { part: "Charakterisierung · Beziehungen", title: "Anja in Beziehungen charakterisieren", focus: "Beziehungen als wechselseitige Prozesse untersuchen und ihre Bedeutung für Anjas Selbstbild, Entscheidungen und Entwicklung deuten.", question: "Was zeigen Anjas Beziehungen über sie – und wie verändern andere Figuren ihre Handlungsmöglichkeiten?", form: "Beziehungsanalyse", quick: { prompt: "Welche Aussage analysiert eine Figurenbeziehung?", options: ["Anja und Tom kennen sich.", "Zwischen Anja und Tom treffen Nähebedürfnis und unterschiedliche Vorstellungen von Sicherheit aufeinander; dies beeinflusst beide Figuren.", "Tom ist nur eine Nebenfigur."], answer: 1, explanation: "Eine Beziehungsanalyse untersucht Erwartungen, Konflikte, Macht, Nähe und wechselseitige Einflüsse." } } },
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
          { title: "Beziehungsdynamik analysieren", prompt: "Untersuche Anjas Beziehung zu Tom oder einer anderen zentralen Figur an drei Schlüsselszenen. Analysiere Erwartungen, Nähe, Konflikt, Macht und wechselseitige Veränderung.", min: 220, criteria: ["Ich analysiere drei Schlüsselszenen in einer nachvollziehbaren Entwicklungslinie.", "Ich untersuche mindestens drei Beziehungsdimensionen wie Nähe, Erwartung, Konflikt oder Macht.", "Ich erkläre, wie beide Figuren die Beziehung und einander beeinflussen."] },
          { title: "Beziehung als Spiegel und Gegenkraft", prompt: "Prüfe, inwiefern die gewählte Beziehung Anjas Eigenschaften sichtbar macht, verstärkt oder verändert. Formuliere eine Gegenlesart und ein abgewogenes Fazit für deine Charakterisierung.", min: 190, criteria: ["Ich unterscheide Spiegelung, Verstärkung und mögliche Veränderung der Figur.", "Ich entwickle eine plausible Gegenlesart mit Textbezug.", "Mein Fazit bindet die Beziehungsanalyse an eine differenzierte Gesamtdeutung Anjas zurück."] }
        ]
      }
    },
    {
      id: "werkstatt", part: "Abschluss · produktives Schreiben", title: "Brief, E-Mail, Tagebuch und innerer Monolog", time: "4 × 45 Min.", form: "Interaktive Schreibwerkstatt", icon: "✎", workshop: true,
      focus: "Vier produktive Schreibformen planen, figuren- und kapiteltreu verfassen und kriteriengeleitet überarbeiten.",
      question: "Wie wird aus Romanwissen ein glaubwürdiger Text aus Anjas Perspektive?",
      levelMeta: { experte: { part: "Charakterisierung · Perspektivprobe", title: "Figurennähe durch produktives Schreiben prüfen", focus: "Produktive Texte als Hypothesen über Anjas Innenleben gestalten und anschließend ihre Textnähe sowie Grenzen reflektieren.", question: "Welche produktiven Entscheidungen machen Anjas Charakter sichtbar, ohne ihr unbelegte Gedanken zuzuschreiben?", form: "Figurennahe Schreibwerkstatt" } }
    },
    {
      id: "abschluss", part: "Abschluss · Transfer und Reflexion", title: "Erinnern, urteilen, weiterfragen", time: "2–3 × 45 Min.", form: "Portfolio-Werkstatt", icon: "★",
      focus: "Roman, Sachquelle und eigenes Urteil in einem adressatengerechten Produkt verbinden.",
      question: "Wie kann die Geschichte Anjas heute verantwortungsvoll weitererzählt werden?",
      quick: { prompt: "Was erhöht die Glaubwürdigkeit eines Abschlussprodukts?", options: ["Roman, Quelle und eigenes Urteil werden kenntlich gemacht.", "Alle Aussagen klingen möglichst dramatisch.", "Quellen werden nicht genannt, damit der Text flüssig bleibt."], answer: 0, explanation: "Transparenz über Romanbeleg, Sachquelle und eigene Wertung macht das Produkt nachvollziehbar und überprüfbar." },
      levelMeta: { experte: { part: "Charakterisierung · Synthese", title: "Eine vollständige Charakterisierung verfassen", focus: "Deutungsthese, Figurenmerkmale, Entwicklung, Beziehungen, Erzählgestaltung und Gegenlesart zu einem schlüssigen Gesamttext verbinden.", question: "Wie entsteht eine Charakterisierung, die Anjas Widersprüchlichkeit und Entwicklung textnah erklärt?", form: "Schreibkonferenz", quick: { prompt: "Was gehört in den Hauptteil einer analytischen Charakterisierung?", options: ["Eine chronologische Nacherzählung des gesamten Romans.", "Geordnete Merkmalsbereiche mit Belegen, Analyse, Entwicklung und Rückbindung an die Deutungsthese.", "Eine Liste möglichst vieler Eigenschaftswörter."], answer: 1, explanation: "Der Hauptteil ordnet Merkmale argumentativ und erklärt anhand von Belegen, wie das Figurenbild und seine Entwicklung entstehen." } } },
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
          { title: "Charakterisierung ausformulieren", prompt: "Verfasse eine zusammenhängende Charakterisierung Anjas. Entwickle eine Deutungsthese und untersuche mindestens vier Merkmalsbereiche, ihre Entwicklung, eine zentrale Beziehung sowie die Wirkung der Erzählperspektive. Nutze genaue Romanbelege.", min: 450, criteria: ["Meine Einleitung ordnet Figur und Roman knapp ein und formuliert eine differenzierte Deutungsthese.", "Mein Hauptteil analysiert mindestens vier sinnvoll geordnete Merkmalsbereiche, Entwicklung, Beziehung und Erzählperspektive mit genauen Belegen.", "Mein Schluss bündelt die Gesamtdeutung, berücksichtigt eine Gegenlesart und benennt eine Grenze der Charakterisierung."] },
          { title: "Kriteriengeleitet überarbeiten und reflektieren", prompt: "Überarbeite deine Charakterisierung aus der vorherigen Aufgabe. Dokumentiere mindestens drei konkrete Änderungen und begründe, wie sie Deutung, Belegführung, Aufbau oder sprachliche Präzision verbessern.", min: 220, criteria: ["Ich dokumentiere mindestens drei konkrete Vorher-nachher-Änderungen aus meinem Text.", "Ich begründe die Wirkung jeder Änderung auf Deutung, Belege, Aufbau oder Sprache.", "Ich reflektiere eine verbleibende Unsicherheit oder alternative Lesart meiner Charakterisierung."] }
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
      planningTips: ["Notiere den Auslöser in ein bis zwei Stichpunkten. Bleibe bei dem, was unmittelbar vor der Nachricht geschehen ist.", "Formuliere Anjas Schreibabsicht als Verb, zum Beispiel erklären, überzeugen oder um Verständnis bitten.", "Wähle zwei Gefühle oder Werte, die in der Situation miteinander in Spannung stehen könnten.", "Suche eine passende Szene oder Aussage aus dem Roman und notiere nur Seitenzahl und Stichwort."],
      textTip: "Nutze deinen Schreibplan als Reihenfolge: Anlass – Anliegen – Begründung – Bitte oder Ausblick. Prüfe, ob Tom als Adressat in der Wortwahl erkennbar bleibt.",
      features: ["An, Von und Betreff", "passende Anrede", "klare Absätze und verständliches Anliegen", "direkter Bezug zu Tom als Adressat", "Schlussformel und Name", "Ich-Perspektive, Buchwissen und Kapiteltreue"]
    },
    brief: {
      label: "Persönlicher Brief",
      situation: "Nach ihrer Rückkehr schreibt Anja ihrer Mutter. Sie schildert, was die Zeit in den Einrichtungen mit ihr gemacht hat und was sie sich für ihre Beziehung wünscht.",
      planning: ["Auf welchen Zeitpunkt blickt Anja zurück?", "Was soll die Mutter verstehen?", "Welche Gefühle, Vorwürfe oder Wünsche spricht Anja aus?", "Welche zwei Romanereignisse sollen im Brief vorkommen?"],
      planningTips: ["Lege einen genauen Schreibzeitpunkt fest. So weißt du, welche Ereignisse Anja bereits kennen kann.", "Notiere einen Kernsatz mit dem Muster: Meine Mutter soll verstehen, dass …", "Ordne deine Stichpunkte in drei Gruppen: Gefühl, Vorwurf und Wunsch. Du musst noch keine Sätze formulieren.", "Wähle zwei Ereignisse, die Anjas Anliegen besonders gut erklären, und notiere Seitenzahlen oder Kapitel."],
      textTip: "Ordne den Brief vom Anlass über zwei ausgewählte Erfahrungen hin zu Anjas Wunsch. Lass die Mutter durch direkte Anrede als Empfängerin erkennbar werden.",
      features: ["Ort und Datum", "passende Anrede", "Einleitung, Hauptteil und Schluss", "klarer Adressatenbezug und erkennbare Absicht", "Grußformel und Name", "Figurenwissen, Buchwissen und Kapiteltreue"]
    },
    tagebuch: {
      label: "Tagebucheintrag",
      situation: "Am Abend nach ihrem ersten Tag in Torgau hält Anja fest, was sie erlebt hat, wovor sie Angst hat und welche Gedanken sie niemandem sagen kann.",
      planning: ["Welche Ereignisse des Tages beschäftigen Anja?", "Welche Gefühle löst die Situation aus?", "Welche Fragen, Zweifel oder Hoffnungen hat sie?", "Was darf Anja zu diesem Zeitpunkt bereits wissen?"],
      planningTips: ["Wähle höchstens drei Tagesereignisse, die Anja innerlich besonders beschäftigen.", "Verbinde jedes ausgewählte Ereignis mit einem möglichen Gefühl, ohne das Gefühl schon auszuformulieren.", "Notiere offene Fragen, auf die Anja an diesem Abend noch keine sichere Antwort haben kann.", "Ziehe eine Wissensgrenze: Streiche alles, was Anja erst später im Roman erfährt."],
      textTip: "Wechsle zwischen kurzer Erinnerung und persönlicher Reaktion. Ein Tagebucheintrag darf subjektiv und sprunghaft sein, muss aber zum Wissensstand dieses Abends passen.",
      features: ["Datum, ggf. Uhrzeit", "konsequente Ich-Perspektive", "Gedanken, Gefühle und spontane Reaktionen", "subjektive Wertung und innerer Konflikt", "kein äußerer Adressat und keine Pflicht-Grußformel", "Buchwissen und Kapiteltreue"]
    },
    monolog: {
      label: "Innerer Monolog",
      situation: "Kurz vor einer Entscheidung über die Montagsdemonstration denkt Anja über Toms Warnungen, ihre Erfahrungen und ihr Bedürfnis nach Freiheit nach.",
      planning: ["Zwischen welchen Möglichkeiten schwankt Anja?", "Welche Gedanken sprechen für Sicherheit, welche für Engagement?", "Welche Erinnerungen beeinflussen sie?", "Welcher Gedanke oder welche offene Entscheidung steht am Ende?"],
      planningTips: ["Formuliere die beiden Möglichkeiten zunächst neutral, ohne dich schon für eine Seite zu entscheiden.", "Lege eine Zweispaltenliste an: Gründe für Sicherheit und Gründe für Engagement.", "Wähle eine Erinnerung, die den inneren Konflikt verschärft, statt ihn sofort zu lösen.", "Plane einen letzten Gedanken, der Spannung offenhält oder eine Entscheidung nur andeutet."],
      textTip: "Beginne mitten im Gedankenfluss. Nutze Fragen, kurze Ausrufe oder Satzabbrüche sparsam, damit Anjas innerer Konflikt hörbar wird, ohne ihn vorschnell zu lösen.",
      features: ["unmittelbare Ich-Perspektive im Präsens", "Gedankenfluss mit Fragen, Ausrufen oder Satzabbrüchen", "kein äußerer Erzähler und kein äußerer Adressat", "sichtbarer innerer Konflikt", "figurennahe Sprache und offene Entscheidung", "Buchwissen und Kapiteltreue"]
    }
  };

  const WORKSHOP_LEVELS = {
    mindest: { minWords: 120, maxWords: 180, planMin: 12, support: "Nutze die Leitfragen und Satzstarter. Sichere zuerst Situation, Ich-Perspektive und Grundmerkmale der Form." },
    regel: { minWords: 200, maxWords: 280, planMin: 20, support: "Verknüpfe Situation, Figurenwissen und Schreibabsicht. Gestalte die gewählte Form vollständig und adressatengerecht." },
    experte: { minWords: 280, maxWords: 380, planMin: 28, support: "Arbeite mit Subtext, ambivalenten Gefühlen und bewusster Leserwirkung. Begründe deine gestalterischen Entscheidungen." }
  };

  const PROGRESS_GROUPS = [
    { title: "Operatoren & Einstieg", titles: { regel: "Schreibplanung & Einstieg", experte: "Deutungsthese & Figurenbild" }, range: "Stationen 1–2", ids: ["operatoren", "einstieg"] },
    { title: "Handlung & Räume", titles: { experte: "Entwicklung & Einflussräume" }, range: "Stationen 3–4", ids: ["weg", "raeume"] },
    { title: "Sprache & Geschichte", titles: { experte: "Sprache & Fremdbilder" }, range: "Stationen 5–6", ids: ["sprache", "quellen"] },
    { title: "Würde & Dilemma", titles: { experte: "Konflikte & Beziehungen" }, range: "Stationen 7–8", ids: ["wuerde", "dilemma"] },
    { title: "Schreiben & Transfer", titles: { experte: "Charakterisierung & Reflexion" }, range: "Stationen 9–10", ids: ["werkstatt", "abschluss"] }
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
  function moduleValue(module, property) { return module.levelMeta && module.levelMeta[levelId] && module.levelMeta[levelId][property] !== undefined ? module.levelMeta[levelId][property] : module[property]; }
  function moduleQuick(module) { return moduleValue(module, "quick"); }
  function groupTitle(group) { return group.titles && group.titles[levelId] ? group.titles[levelId] : group.title; }
  function taskKey(moduleId, index) { return `${moduleId}_${index}`; }
  function completedSet() { return new Set(state.completed); }

  function configureLevel() {
    document.title = `${level.label} ${level.code} – Weggesperrt`;
    el("courseTitle").textContent = `Deutsch: Literatur Phase 10 ${level.label} – Weggesperrt`;
    el("levelBadge").textContent = `${level.label} ${level.code}`;
    el("heroTitle").textContent = level.hero;
    el("heroText").textContent = level.intro;
    el("levelProfile").innerHTML = `<div><span class="profile-code">${esc(level.code)}</span><strong>${esc(level.process)}</strong><p>${esc(level.profile)}</p></div><div class="profile-operators"><span>${esc(level.strategyLabel)}</span>${level.operators.map(operator => `<b>${esc(operator)}</b>`).join("")}</div>`;
    el("targetHeading").textContent = `Deine ${level.goals.length} Teillernziele`;
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
        <span class="nav-number">${index + 1}</span><span>${esc(moduleValue(module, "title"))}</span><span class="done-mark">${done.has(module.id) ? "✓" : ""}</span>
      </button>`).join("");
    stationNav.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => showStation(button.dataset.open)));
  }

  function renderStampGrid() {
    const done = completedSet();
    el("stampGrid").innerHTML = MODULES.map((module, index) => `
      <button class="stamp-card ${done.has(module.id) ? "done" : ""}" type="button" data-stamp="${module.id}">
        <span class="stamp-no">${index + 1}</span><span><span class="stamp-title">${esc(moduleValue(module, "title"))}</span><span class="stamp-focus">${esc(moduleValue(module, "focus"))}</span></span><strong>${done.has(module.id) ? "✓" : "→"}</strong>
      </button>`).join("");
    el("stampGrid").querySelectorAll("[data-stamp]").forEach(button => button.addEventListener("click", () => showStation(button.dataset.stamp)));
  }

  function expectedTaskKeys(module) {
    if (module.workshop) return WRITING_FORM_ORDER.map(formId => taskKey(module.id, `workshop_${formId}`));
    const keys = module.tasks[levelId].map((_, index) => taskKey(module.id, index));
    keys.push(taskKey(module.id, "quiz"));
    if (module.spectrum && levelId !== "experte") keys.push(taskKey(module.id, "spectrum"));
    return keys;
  }

  function feedbackMessage(overallPercent, nextModule) {
    const nextStep = nextModule ? `„${moduleValue(nextModule, "title")}“` : "den noch offenen Aufgaben";
    if (overallPercent === 0) return `Du stehst am Anfang dieses Lernpakets. Beginne mit ${nextStep} und bearbeite zuerst die offenen Aufgaben.`;
    if (overallPercent < 25) return `Der Einstieg ist geschafft. Bleibe bei einer Station, bis Aufgaben und Kurzcheck erledigt sind. Als Nächstes bietet sich ${nextStep} an.`;
    if (overallPercent < 50) return `Du hast eine erste Grundlage aufgebaut. Prüfe offene Selbstchecks und arbeite anschließend bei ${nextStep} weiter.`;
    if (overallPercent < 75) return `Du hast bereits einen großen Teil geschafft. Sichere jetzt besonders Belege, Erklärungen und noch nicht abgeschlossene Stationen. Weiter geht es mit ${nextStep}.`;
    if (overallPercent < 100) return `Du bist auf der Zielgeraden. Schließe die letzten Aufgaben und Stationen ab und nutze die Checklisten zur Überarbeitung. Nächster Schritt: ${nextStep}.`;
    return "Du hast alle Aufgaben bearbeitet und alle Stationen abgeschlossen. Nutze die Ergebnisse jetzt für Wiederholung, Transfer oder eine abschließende Präsentation.";
  }

  function renderLevelFeedback() {
    const taskKeys = MODULES.flatMap(expectedTaskKeys);
    const completed = completedSet();
    const taskDone = taskKeys.filter(key => state.taskDone[key]).length;
    const stationDone = MODULES.filter(module => completed.has(module.id)).length;
    const taskPercent = Math.round(taskDone / taskKeys.length * 100);
    const stationPercent = Math.round(stationDone / MODULES.length * 100);
    const overallPercent = Math.round((taskPercent + stationPercent) / 2);
    const nextModule = MODULES.find(module => !completed.has(module.id));
    el("levelTaskRing").style.setProperty("--progress", taskPercent);
    el("levelStationRing").style.setProperty("--progress", stationPercent);
    el("levelTaskValue").textContent = `${taskPercent}%`;
    el("levelStationValue").textContent = `${stationPercent}%`;
    el("levelOverallValue").textContent = `${overallPercent}%`;
    el("levelFeedbackText").textContent = `${taskDone} von ${taskKeys.length} Aufgaben bearbeitet, ${stationDone} von ${MODULES.length} Stationen abgeschlossen. ${feedbackMessage(overallPercent, nextModule)}`;
    el("levelFeedbackChart").setAttribute("aria-label", `${taskPercent} Prozent der Aufgaben bearbeitet und ${stationPercent} Prozent der Stationen abgeschlossen; Gesamtfortschritt ${overallPercent} Prozent`);
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
      const title = groupTitle(group);
      return `<button class="ring-card" type="button" data-progress-group="${groupIndex}" aria-label="${esc(title)}: ${taskPercent} Prozent der Aufgaben erledigt, ${stationPercent} Prozent der Stationen abgeschlossen">
        <span class="progress-ring" style="--station-progress:${stationPercent};--task-progress:${taskPercent}" aria-hidden="true"><strong class="ring-value">${taskPercent}%</strong></span>
        <span class="ring-copy"><strong>${esc(title)}</strong><span>${esc(group.range)}</span><small>${taskDone} / ${taskKeys.length} Aufgaben · ${stationDone} / ${modules.length} Stationen</small></span>
      </button>`;
    }).join("");
    ringGrid.querySelectorAll("[data-progress-group]").forEach(button => button.addEventListener("click", () => {
      const group = PROGRESS_GROUPS[Number(button.dataset.progressGroup)];
      const targetId = group.ids.find(id => !completed.has(id)) || group.ids[0];
      showStation(targetId);
    }));
  }

  function updateOverviewStats() {
    const done = MODULES.filter(module => completedSet().has(module.id)).length;
    el("progressText").textContent = `${done} / ${MODULES.length}`;
    el("progressFill").style.width = `${Math.round(done / MODULES.length * 100)}%`;
    renderLevelFeedback();
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
      <div><span class="eyebrow">${esc(level.code)} · ${esc(moduleValue(module, "part"))}</span><h1>${esc(moduleValue(module, "title"))}</h1><p class="section-intro">${esc(moduleValue(module, "focus"))}</p>
        <div class="station-meta"><span class="pill">${esc(module.time)}</span><span class="pill">${esc(moduleValue(module, "form"))}</span><span class="pill">${esc(level.short)}</span></div>
        <div class="guidance"><div class="guidance-box"><strong>Leitfrage</strong><p>${esc(moduleValue(module, "question"))}</p></div><div class="guidance-box"><strong>Arbeitshinweis</strong><p>${esc(level.guidance)} ${esc(level.evidence)}</p></div></div>
      </div><div class="station-icon" aria-hidden="true">${esc(moduleValue(module, "icon"))}</div>
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

  function taskHint(task) {
    if (task.tip) return task.tip;
    if (task.help) return task.help;
    const checkpoints = task.criteria.slice(0, 3).map(criterion => criterion.replace(/^Ich\s+/, "").replace(/\.$/, ""));
    return `${level.tip} Nutze als Orientierung: ${checkpoints.join("; ")}.`;
  }

  function tipControl(id, hint) {
    return `<button class="tip-button" type="button" data-tip-toggle="${esc(id)}" aria-expanded="false" aria-controls="${esc(id)}"><span class="tip-face" aria-hidden="true">🙂!</span><span>Tipp</span></button>
      <div class="tip-panel" id="${esc(id)}" hidden><strong>Hinweis zum Weiterdenken</strong><p>${esc(hint)}</p></div>`;
  }

  function bindTips() {
    stationView.querySelectorAll("[data-tip-toggle]").forEach(button => button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.tipToggle);
      if (!panel) return;
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.classList.toggle("open", !open);
      panel.hidden = open;
    }));
  }

  function writingCard(module, task, index) {
    const key = taskKey(module.id, index);
    const value = state.answers[key] || "";
    const checked = state.criteria[key] || [];
    const done = !!state.taskDone[key];
    const tipId = `tip_${module.id}_${levelId}_${index}`;
    return `<article class="task-card ${done ? "complete" : ""}" data-writing-card="${index}">
      <div class="task-head"><div><span class="task-index">${esc(task.tag || level.operators[index])} · Aufgabe ${index + 1}</span><h2>${esc(task.title)}</h2><p class="task-prompt">${esc(task.prompt)}</p></div><span class="task-status">${done ? "erledigt" : "offen"}</span></div>
      <div class="field"><div class="field-label-row"><label for="answer_${module.id}_${index}">Deine Antwort</label>${tipControl(tipId, taskHint(task))}</div><textarea id="answer_${module.id}_${index}" data-answer-index="${index}" placeholder="${esc(level.placeholder)}">${esc(value)}</textarea><div class="counter"><span data-word-count>${wordCount(value)} Wörter</span><span>Orientierung: mindestens ${task.min} Wörter</span></div></div>
      <div class="criteria" role="group" aria-label="Selbstcheck zur Aufgabe ${esc(task.title)}">
        <strong>Selbstcheck zu deiner Antwort</strong><p class="selfcheck-copy">Prüfe jetzt genau deine Antwort zur Aufgabe „${esc(task.title)}“ oben. Hake ein Kriterium nur ab, wenn du die passende Stelle in deinem Text zeigen kannst. Fehlt etwas, überarbeite zuerst deine Antwort.</p>${task.criteria.map((criterion, criterionIndex) => `<label class="criterion"><input type="checkbox" data-criterion="${criterionIndex}" ${checked[criterionIndex] ? "checked" : ""}> <span>${esc(criterion)}</span></label>`).join("")}
      </div>
      <button class="button" type="button" data-check-writing="${index}">Aufgabe prüfen</button><div class="feedback" data-writing-feedback aria-live="polite"></div>
    </article>`;
  }

  function quizCard(module) {
    const quick = moduleQuick(module);
    const selected = state.quiz[module.id];
    const key = taskKey(module.id, "quiz");
    const done = !!state.taskDone[key];
    return `<article class="task-card ${done ? "complete" : ""}" data-quiz-card>
      <div class="task-head"><div><span class="task-index">Kurzcheck</span><h2>Verständnis prüfen</h2><p class="task-prompt">${esc(quick.prompt)}</p></div><span class="task-status">${done ? "richtig" : "offen"}</span></div>
      <div class="choice-list">${quick.options.map((option, index) => `<label class="choice"><input type="radio" name="quiz_${module.id}" value="${index}" ${Number(selected) === index ? "checked" : ""}> <span>${esc(option)}</span></label>`).join("")}</div>
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
      <div class="workshop-plan">${form.planning.map((question, index) => { const tipId = `tip_workshop_${activeFormId}_plan_${index}`; return `<div class="field"><div class="field-label-row"><label for="workshopPlan${index}">${esc(question)}</label>${tipControl(tipId, form.planningTips[index])}</div><textarea id="workshopPlan${index}" class="plan-area" data-workshop-plan="${index}" placeholder="Notiere Stichpunkte oder kurze Sätze.">${esc(draft.plans[index] || "")}</textarea></div>`; }).join("")}</div>
      <h3>2. Text verfassen</h3>
      <div class="field"><div class="field-label-row"><label for="workshopText">Dein Text: ${esc(form.label)}</label>${tipControl(`tip_workshop_${activeFormId}_text`, form.textTip)}</div><textarea id="workshopText" class="writing-area" data-workshop-text placeholder="${esc(level.placeholder)}">${esc(draft.text || "")}</textarea><div class="counter"><span data-workshop-count>${wordCount(draft.text)} Wörter</span><span>Zielbereich: ${settings.minWords}–${settings.maxWords} Wörter</span></div></div>
      <h3>3. Selbstcheck zu deinem Text</h3>
      <div class="criteria workshop-criteria" role="group" aria-label="Selbstcheck für ${esc(form.label)}"><p class="selfcheck-copy">Prüfe jetzt den ${esc(form.label)}-Text, den du direkt über dieser Checkliste verfasst hast. Hake nur ab, was im Text oder im Schreibplan tatsächlich erkennbar ist. Ergänze fehlende Merkmale vor der abschließenden Prüfung.</p>${form.features.map((feature, index) => `<label class="criterion"><input type="checkbox" data-workshop-check="${index}" ${draft.checks[index] ? "checked" : ""}> <span>${esc(feature)}</span></label>`).join("")}</div>
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
    el("currentPath").textContent = `${moduleValue(module, "part")} · ${moduleValue(module, "title")}`;
    const tasks = module.workshop ? [] : module.tasks[levelId];
    const currentIndex = MODULES.indexOf(module);
    const stationContent = module.workshop ? workshopHtml(module) : `<div class="task-list">${module.spectrum && levelId !== "experte" ? spectrumCard(module) : ""}${tasks.map((task, index) => writingCard(module, task, index)).join("")}${quizCard(module)}</div>`;
    stationView.innerHTML = stationHeader(module) + stationContent + `
      <div class="station-actions"><button class="button" type="button" data-prev>${currentIndex === 0 ? "Zum Überblick" : "← Vorherige Station"}</button><button class="button primary" type="button" data-complete-station>${completedSet().has(module.id) ? "Markierung zurücknehmen" : "Station abschließen"}</button><button class="button" type="button" data-next>${currentIndex === MODULES.length - 1 ? "Zum Überblick" : "Nächste Station →"}</button></div>
      <div class="feedback" data-station-feedback aria-live="polite"></div>`;
    bindTips();
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
    const quick = moduleQuick(module);
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
      const ok = Number(selected.value) === quick.answer;
      state.taskDone[taskKey(module.id, "quiz")] = ok;
      feedback.className = `feedback ${ok ? "good" : "warn"}`;
      feedback.textContent = `${ok ? "Richtig. " : "Noch nicht richtig. "}${quick.explanation}`;
      const card = quizButton.closest(".task-card");
      card.classList.toggle("complete", ok);
      card.querySelector(".task-status").textContent = ok ? "richtig" : "offen";
      saveState();
    });
    stationView.querySelectorAll(`[name="quiz_${module.id}"]`).forEach(radio => radio.addEventListener("change", () => { state.quiz[module.id] = Number(radio.value); saveState(); }));

    if (module.spectrum && levelId !== "experte") {
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
