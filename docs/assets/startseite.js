(() => {
  "use strict";

  const LEVELS = [
    { id: "mindest", short: "M", label: "Mindeststandard" },
    { id: "regel", short: "R", label: "Regelstandard" },
    { id: "experte", short: "E", label: "Expertenstandard" }
  ];
  const MODULE_IDS = ["operatoren", "einstieg", "weg", "raeume", "sprache", "quellen", "wuerde", "dilemma", "werkstatt", "abschluss"];
  const STANDARD_TASK_KEYS = ["operatoren", "einstieg", "weg", "raeume", "sprache", "quellen", "wuerde", "dilemma", "abschluss"]
    .flatMap(moduleId => [`${moduleId}_0`, `${moduleId}_1`, `${moduleId}_quiz`])
    .concat("einstieg_spectrum", ["email", "brief", "tagebuch", "monolog"].map(formId => `werkstatt_workshop_${formId}`));

  const el = id => document.getElementById(id);

  function readState(levelId) {
    try {
      const value = JSON.parse(localStorage.getItem(`weggesperrt10_${levelId}`) || "{}");
      return value && typeof value === "object" ? value : {};
    } catch (_) {
      return {};
    }
  }

  function progressFor(levelId) {
    const state = readState(levelId);
    const taskDone = STANDARD_TASK_KEYS.filter(key => state.taskDone && state.taskDone[key]).length;
    const completed = new Set(Array.isArray(state.completed) ? state.completed : []);
    const stationDone = MODULE_IDS.filter(moduleId => completed.has(moduleId)).length;
    return {
      taskDone,
      stationDone,
      taskPercent: Math.round(taskDone / STANDARD_TASK_KEYS.length * 100),
      stationPercent: Math.round(stationDone / MODULE_IDS.length * 100)
    };
  }

  function renderProgress() {
    const results = LEVELS.map(level => ({ ...level, ...progressFor(level.id) }));
    results.forEach(result => {
      el(`landing${result.short}Ring`).style.setProperty("--progress", result.taskPercent);
      el(`landing${result.short}Value`).textContent = `${result.taskPercent}%`;
      el(`landing${result.short}Detail`).textContent = `${result.taskDone} / ${STANDARD_TASK_KEYS.length} Aufgaben · ${result.stationDone} / ${MODULE_IDS.length} Stationen`;
    });
    const average = Math.round(results.reduce((sum, result) => sum + result.taskPercent, 0) / results.length);
    el("landingAverageValue").textContent = `${average}%`;
    el("landingProgressChart").setAttribute("aria-label", results.map(result => `${result.label} ${result.taskPercent} Prozent`).join(", "));
  }

  window.addEventListener("pageshow", renderProgress);
  window.addEventListener("storage", renderProgress);
  renderProgress();
})();
