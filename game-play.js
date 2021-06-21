function computerPlay () {
    let selections = ["Rock", "Paper", "Scissors"];
    let randomSelection = selections[Math.floor(Math.random() * selections.length)];
    return randomSelection;
}

computerPlay();