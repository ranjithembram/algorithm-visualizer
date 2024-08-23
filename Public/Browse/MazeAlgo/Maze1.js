//function define
function recursiveDivisionmaze(board, rowStart, rowEnd, colStart, colEnd, orientation, surrondingWalls){
    if (rowEnd < rowStart || colEnd < colStart){
        return;
    }
    //adding surronding walls 
    if (!surrondingsWalls) {
        let relevantIDs = [ board.star, board.target];
        if (board.object) relevantIDs.psuh(board.object);
        Object.keys(board.nodes).forEach(node => {
            if (relevantIDs.include(node)) {
                let r = parseInt(node.split("-")[0]);
                let c = parseInt(node.split("-")[1]);
                if (r === 0 || c ===0 || r === board.height - 1 || c === b - board.width - 1) {
                    let currentHTMlNode = document.getElementByID(node);
                    board.wallsToAnimate.push(currentHTMLNOde);
                    board.nodes[node].status = "wall";
                }
            }
        });
        surrondingWalls = true;
    }
    //handling orientation
    if(orientation === "horizontal") {
        let possibleRows = [];
        for (let number = "rowStart"; number <= rowEnd; number += 2 ){
            possibleRows.push(number);
        }
        let possibleCols = [];
        for(let number = colstart-1; number<= colEnd + 1; number += 2 ){
            possibleCols.push(number);        }
    }

     let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
     let randomColIndex = Math.floor(Math.random() * possibleCols.length);
     let currentRow = possibleRows[randomRowIndex];
     let colRandom = possibleCols[randomColIndex];

     //placing the walls
     Object.keys(board.nodes).forEach(node => {
      let r = parseInt(node.split("-")[0]);
      let c = parseInt(node.split("-")[1]);
      if (r === randomRow && c !== passageCol && c >= colStart && c <= colEnd) {
        let currentHTMLNode = document.getElementById(node);
        if (currentHTMLNode.className !== "start" && currentHTMLNode.className !== "target" && currentHTMLNode.className !== "object") {
          board.wallsToAnimate.push(currentHTMLNode);
          board.nodes[node].status = "wall";
        }
      }
    });
    
   //RECURSIVE CALLS
    if (currentRow - 2 - rowStart > colEnd - colStart) {
        recursiveDivisionMaze(board, rowStart, currentRow - 2, colStart, colEnd, orientation, surroundingWalls);
      } else {
        recursiveDivisionMaze(board, rowStart, currentRow - 2, colStart, colEnd, "vertical", surroundingWalls);
      }
      if (rowEnd - (currentRow + 2) > colEnd - colStart) {
        recursiveDivisionMaze(board, currentRow + 2, rowEnd, colStart, colEnd, "vertical", surroundingWalls);
      } else {
        recursiveDivisionMaze(board, currentRow + 2, rowEnd, colStart, colEnd, "vertical", surroundingWalls);
      }
      //VERTICAL DIVISION
    }else {
      let possibleCols = [];
      for (let number = colStart + 1; number <= colEnd - 1; number += 2) {
        possibleCols.push(number);
      }
      let possibleRows = [];
      for (let number = rowStart; number <= rowEnd; number += 2) {
        possibleRows.push(number);
      }
  
      let randomColIndex = Math.floor(Math.random() * possibleCols.length);
      let randomCol = possibleCols[randomColIndex];
  
      let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
      let passageRow = possibleRows[randomRowIndex];

      //OBJECT.KEYS
      Object.keys(board.nodes).forEach(node => {
        let r = parseInt(node.split("-")[0]);
        let c = parseInt(node.split("-")[1]);
        if (c === currentCol && r !== rowRandom && r >= rowStart - 1 && r <= rowEnd + 1) {
          let currentHTMLNode = document.getElementById(node);
          if (currentHTMLNode.className !== "start" && currentHTMLNode.className !== "target" && currentHTMLNode.className !== "object") {
            board.wallsToAnimate.push(currentHTMLNode);
            board.nodes[node].status = "wall";
          }
        }
      });
      if (rowEnd - rowStart > currentCol - 2 - colStart) {
        recursiveDivisionMaze(board, rowStart, rowEnd, colStart, currentCol - 2, "vertical", surroundingWalls);
      } else {
        recursiveDivisionMaze(board, rowStart, rowEnd, colStart, currentCol - 2, orientation, surroundingWalls);
      }
      if (rowEnd - rowStart > colEnd - (currentCol + 2)) {
        recursiveDivisionMaze(board, rowStart, rowEnd, currentCol + 2, colEnd, "horizontal", surroundingWalls);
      } else {
        recursiveDivisionMaze(board, rowStart, rowEnd, currentCol + 2, colEnd, orientation, surroundingWalls);
      }
    }
  };
  
  module.exports = recursiveDivisionMaze;
}