function randomFill(wordsearch){
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let row = 0; row < 12; row++){
      for (let col = 0; col < 12; col++){
        if (wordsearch[row][col] === "-"){
          let randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
          wordsearch[row][col]=randomLetter
        }
      }
    }
  }
  
  function addWord(word,wordsearch){
    let directions = ["row", "column", "diagup", "diagdown", "rowrev", "colrev", "diagrevup", "diagrevdown"];
    let x, y, row, col;
    let valid = false
    while (!valid) {
      let randIndex = Math.floor(Math.random() * 6);
      randIndex=Math.floor(Math.random() * 2);
      console.log(randIndex)
      valid = true
  
      if (directions[randIndex] === "row") {
        x = 1;
        y = 0;
      } else if (directions[randIndex] === "column") {
        x = 0;
        y = 1;
      } else if (directions[randIndex] === "diagup") {
        x = 1;
        y = -1;
      } else if (directions[randIndex] === "diagdown") {
        x = 1;
        y = 1;
      } else if (directions[randIndex] === "rowrev") {
        x = -1;
        y = 0;
      } else if (directions[randIndex] === "colrev") {
        x = 0;
        y = -1;
      } else if (directions[randIndex] === "diagrevup") {
        x = -1;
        y = -1;
      } else if (directions[randIndex] === "diagrevdown") {
        x = -1;
        y = 1;
      }
    
      console.log(x)
  
  
        if (x != 0) {
          row=Math.floor(Math.random() * (x*12 - x * word.length))
        } else {
          row=Math.floor(Math.random()  *12)
        }
        if (y != 0) {
          col=Math.floor(Math.random() * (y*12 - y * word.length))
        } else {
          col=Math.floor(Math.random()  *12)
        }
  
        let rewind = [];
        for (let i = 0; i< word.length; i++){
          console.log(row)
          console.log(col)
          if (valid === true && wordsearch[row + (i * y)][col+(i * x)] === "-" || wordsearch[row + (i * y)][col+(i * x)] === word[i]) {
            if (wordsearch[row + (i * y)][col+(i * x)] != word[i]){
              
              rewind.push([row + (i * y), col+(i * x)])
            }
            wordsearch[row][col+i]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              console.log(rewind)
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      
  
      // else if (directions[randIndex] === "column") {
      //   let row=0
      //   //Math.floor(Math.random()  * (13 - word.length))
      //   let col=Math.floor(Math.random() * 12)
      //   let rewind = [];
        
      //   for (let i = 0; i< word.length; i++){
      //     if (valid===true &&wordsearch[row+i][col] === "-" || wordsearch[row+i][col] === word[i] ) {
      //       if (wordsearch[row+i][col] != word[i]){
      //         rewind.push([row+i, col])
      //       }
      //       wordsearch[row+i][col]=word[i]
            
      //     } else {
      //       console.log(rewind)
      //       for (let j = 0; j < rewind.length; j++) {
      //         wordsearch[rewind[j][0]][rewind[j][1]] = "-";
      //       }
      //       rewind = []
      //       valid= false
      //     }
      //   }
      // }
  
      // else {
  
      // }
  
  
    }
  }
  
  // add column / diagonal directions
  // implement overlap (If letter = "-" or letter == the one its replacing its fine)
  
  
  function displayWordsearch(wordsearch) {
    console.log(" _________________________")
    console.log("|                         |")
    for (let row = 0; row < 12; row ++){
      line="| "
      for (let col = 0 ; col < 12 ; col++ ){
        line = line + wordsearch[row][col] + " "
      line = line + "|"
      }
      console.log(line)
    }
    console.log("|_________________________|") 
  }
  
  let wordsearch = []
  for (let row = 0; row < 12; row ++){
    wordsearch.push([])
    for (let col = 0 ; col < 12 ; col++ ){
      wordsearch[row].push("-")
    }
  }
  
  
  addWord("JAVASCRIPT",wordsearch)    
  addWord("ALGORITHM",wordsearch)    
  addWord("WORDSEARCH",wordsearch)    
  addWord("MIKEY",wordsearch)
  
  
  randomFill(wordsearch)
  
  console.log(wordsearch)
  displayWordsearch(wordsearch)