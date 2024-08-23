function weightsDemonstration(board) {
    let currentIDX = board.height - 1;
    let currentIDY = 35;
    while ( currentIDX > 5) {
        let currentID = '${currentIDX}-${currentIDY}';
        let currentElement = document.getElementByID(currentId);
        board.wallsToAnimate.push(currentElement);
        let currentNode = board.nodes[currentID];
        currentNode.status = "wall";
        currentNode.weight = 0;
        currentIDX--;

    }
    for (let currentIDX = board.height - 2; currentIDX > board.height - 11; currentIDX--) {
        for (let currentIDY = 1; currentIDY < 35; currentIDY++) {
            let currentID = '${currentIDX} - ${currentIDY}';
            let currentElement = document.getElementByID(currentID);
            board.wallsToAnimate.push(currentElement);
            let currentNode = board.nodes[currentId];
            if (currentIDX === board.height - 2 && currentIDY < 35 && currentIDY > 26) {
                currentNode.status = "wall";
                currentNode.weight = 0;
            } else {
                currentNode.status = "unvisited";
                currentNode.weight = 15;
              }


        }
    }
}
module.exports = weightsDemontration;