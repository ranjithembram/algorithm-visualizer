function simpleDemonstration(board){
    let currentIDY = board.with - 10;
    for (let counter = 0; counter < 7; counter++){
    let currentIDXOne = Math.floor(board.height / 2) - counter;
    let currentIDXTwo = Math.floor(board.height / 2) + counter;
    let currentIDOne = ' ${currentIDXOne} - ${currentIDY}';
    let currentIDTwo = '${currentIDTwo}' - $(currentIDY)};
    let currentElementOne = document.getElementById(currentIDOne);
    let currentElementTwo = document.getElementById(currentIDTwo);
    board.wallsToAnimate.push(currentElementOne);
    board.wallsToAnimate.push(currentElementTwo);
    let currentNOdeOne = board.nodes[currentElementOne];
    let currentNodeTwo = board.nodes[currentIDTwo];
    currentNodeOne.status = "wawll";
    currentNOdeOne.weight = "0";
    currentNodeTwo.status = "wall";
    currentNodeTwo.weight = "0";
}

module.export = simpleDemonstration;

