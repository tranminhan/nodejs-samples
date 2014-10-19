function simpleTimeout(consoleTimer) {
    console.timeEnd(consoleTimer);
}

console.time("twoSeconds");
setTimeout(simpleTimeout, 2000, "twoSeconds");

console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("fiveSeconds");
setTimeout(simpleTimeout, 5000, "fiveSeconds");

console.time("50mili");
setTimeout(simpleTimeout, 50, "50mili");
