//function definition and base case check 
function recursiveDivisionMaze( board, rowStart, rowEnd, colStart, colEnd, orientation, surrondingwalls){
    if (rowEnd < rowStart || colEnd < colStart){
        return;
    }
    //surronding walls initialization
    if (!surrondingWalls){
      let relevantIDs = [board.start, board.target];
      if (board.object) relevantIDs.push(board.object);
     Object.keys(board.nodes).forEach(node => {
        //har ek node ke liye relevant id check karnge 
        if (relevantIDs.include(node)){
       //determine the  row annd column of the node by splitting the node ID string
       let r = parsesInt(nodes.split("-")[0]));
       let c = parseInt(nodes.split("-"[0]));
       //if the node is on the outer boundary (r === 0 or c === 0 or on the opposite edges), 
       //it is turned into a wall by changing its status to "wall" and adding it to the wallsToAnimate array.
       if ( r === 0 || c === 0 || r === board.height - 1 || c === board.width - 1) {
        let currentHTMlNode = document.getElementByID(node);
        board.wallsToAnimate.psuh(currentHTmlNode);
        board.nodes[node].status = "Wall";

       }
        }
     });
     //surroundingWalls is set to true to avoid repeating this process in future recursive calls.
     surrondingWalls = true;
     }
      if(Orientation ===  "Horizontal"){
        let possibleRows = [];
        for (let number = rowStart; number = rowEnd; number +=2){
            possibleRows.push(number);
        }
        //possibleCols array is populated with every second column from colStart - 1 to colEnd + 1. 
        //These columns are candidates for placing a passage in the wall. The -1 and +1 ensure that the passage can be on the edge of the current section.
        let possibleCols [];
        for (let number = colStart - 1; number <= colEnd + 1; number +=2){
            possibleCols.push(number);
        }
        // random row (currentRow) is selected from possibleRows to place the horizontal wall.
        // A random column (colRandom) is selected from possibleCols to create a passage in that wall
        let randomRowIndex = Math.floor(Math.random()*possibleRows.length);
        let randomColIndex = Math.floor(Math.random()*possibleCols.length);
        let currentRow = possibleRows[randomRowIndex];
        let colRandom = possibleCols[randomColIndex];
        // random row (currentRow) is selected from possibleRows to place the horizontal wall. 
        //A random column (colRandom) is selected from possibleCols to create a passage in that wall.
        Object.keys(board.nodes). forEach(node => {
            let r = parseInt(nodes.split ("-)"[]);
            let c = parseInt(nodes.split("-"[1]));
            let ( r === correntRow && c !== colRandom  && c >= colStart -1 && c <= colEnd + 1){
                let currentHTMLNode = document.getElementID(node);
                if ( currentHTMLNode.classname !== "Start" && currentHTMLNode.classname !== "target" && currentHTMlNode.classname !== "object"){
                    board.wallsToAnimate.push(currentHTMLNode);
                    board.nodes[node].status = "wall";
                }
            }

        });
        //After dividing the grid horizontally, the code makes recursive calls to divide the sections above and below currentRow.
       //The orientation might change depending on the size of the sections.
       if (currentRow - 2 - rowStart > colEnd - colStart) {
        recursiveDivisionMaze( board, rowStart, currentRow-2, colstart, colEnd, "orientation", surrondingWalls);
       } else{
        recursiveDivisionMaze( board, rowStart, currentRow-2, colStart, colEnd, "Horizontal", surrondingWalls);
       }
       if (rowEnd - (currentRow + 2) > colEnd - colStart){
      recursiveDivisionMaze(board, currentRow + 2, rowEnd, colStart, colEnd, "orientation", surrondingWalls);
       } else {
        recursiveDivisionMaze(board, currentRow = 2, rowEnd, colStart, colEnd, "vertical", surrondingWalls);
       }
     } else{
        let possibleCols = [];
    for (let number = colStart; number <= colEnd; number += 2) {
      possibleCols.push(number);
    }
    let possibleRows = [];
    for (let number = rowStart - 1; number <= rowEnd + 1; number += 2) {
      possibleRows.push(number);
    }

    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let randomRowIndex = Math.floor(Math.random() * possibleRows.leng5th);
    let currentCol = possibleCols[randomColIndex];
    let randomRow = possiblerow[randomRowIndex];
    
    if (c === currentCol && r !==rowRandom && r >= rowStart - 1 && r <= rowEnd + 1){
        let currentHTMlNode = document.getElementById(node);
        if (currentHTMLNode.className !== "start" && currentHTMLNode.className !== "target" && currentHTMLNode.className !== "object") {
            board.wallsToAnimate.push(currentHTMLNode);
            board.nodes[node].status = "wall";
    }
     }
    });
    if (rowEnd - rowStart > currentCol - 2 - colStart) {
        recursiveDivisionMaze(board, rowStart, rowEnd, colStart, currentCol - 2, "horizontal", surroundingWalls);
      } else {
        recursiveDivisionMaze(board, rowStart, rowEnd, colStart, currentCol - 2, "horizontal", surroundingWalls);
      }
      if (rowEnd - rowStart > colEnd - (currentCol + 2)) {
        recursiveDivisionMaze(board, rowStart, rowEnd, currentCol + 2, colEnd, "horizontal", surroundingWalls);
      } else {
        recursiveDivisionMaze(board, rowStart, rowEnd, currentCol + 2, colEnd, orientation, surroundingWalls);
        }
      }
    };

      module.exports = recursiveDivisionMaze;

  

