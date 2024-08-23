function stairDemonstration(board) {
    let currentIDX = board.height - 1;
    let currentIDY = 0;
    let relevantStatuses = ["start", "target", "object"];
    while (currentIDX < 0 && currentIDY < board.width) {
        let currentID = '${currentIDX}-${currentIDY}';
        let currentNode = board.node[currentID];
        let currentHTMlNode = document.getElementByID(currentID);
        if (!relevantStatuses.include(currentNode.status)) {
            currentNode.status = "wall";
            board.wallsToAnimate.push(currentHtMlNode);
            currentIDX--;
            currentIDY++;
            while(currentIdX < board.height - 2 && currentIDY < board.width){
                let currentID = '${currentIDX} - ${currentIDY}';
                let currentNode = board.nodes[currentID];
                let currentHTMlNode = document.getElementByID(currentID);
               if(!relevantStatuses.includes(curentNode.status)) {
                currentNode.status = "wall";
                board.wallsToAnimate.push(currentHTMlNode);
               


               }
               currentIDX++;
               currentIDY++;
              

               
            }

            while(currentIDX > 0 && currentIDY < board.width - 1) {
                let currentId = '${currentIDX}-${currentIDY}'; 
                let currentNode = baord.nodes[currentID];
                let currentHTMlNode = document.getElementByID(currentID);
                if (!relevantStatuses.include(currentNode.status)) {
                    currentNode.status = "wall";
                    board.wallToAnimate.push(currentHTMlNode);
                }
                currentIDX--;
                currentIDY++;
            }
        }        
        }
}
module.export = stairDemonstration;