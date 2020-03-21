function randomFill(wordsearch){
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let row = 0; row < wordsearch.length; row++){
      for (let col = 0; col < wordsearch[0].length; col++){
        if (wordsearch[row][col] === "-"){
          let randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
          wordsearch[row][col]=randomLetter
        }
      }
    }
  }
  
  function addWord(word,wordsearch){
    
    let directions = ["row", "column", "diagdown", "diagup",  "rowrev", "colrev", "diagrevup", "diagrevdown"];
    let x, y = 0
    let valid = false
    while (!valid) {
      let randIndex = Math.floor(Math.random() * 6);
      randIndex=Math.floor(Math.random() * 8);
      console.log(randIndex)
      valid = true 
    
  
      if (directions[randIndex] === "row") {
        let row=Math.floor(Math.random() * wordsearch.length)
        let col=Math.floor(Math.random() * (13 - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid===true && wordsearch[row][col+i] === "-" || wordsearch[row][col+i] === word[i]) {
            if (wordsearch[row][col+i] != word[i]){
              rewind.push([row, col+i])
            }
            wordsearch[row][col+i]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
      else if (directions[randIndex] === "column") {
        let row=Math.floor(Math.random() * (wordsearch.length - word.length))
        //Math.floor(Math.random()  * (13 - word.length))
        let col=Math.floor(Math.random() * wordsearch[0].length)
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid === true && wordsearch[row+i][col] === "-" || wordsearch[row+i][col] === word[i]) {
            if (wordsearch[row+i][col] != word[i]){
              rewind.push([row+i, col])
            }
            wordsearch[row+i][col]=word[i]
            
          } else {
            console.log(rewind)
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
      else if (directions[randIndex] === "diagdown") {
        console.log("attempting diag")
        let row=Math.floor(Math.random() * (wordsearch.length - word.length))
        //Math.floor(Math.random()  * (13 - word.length))
        let col=Math.floor(Math.random() * (wordsearch[0].length - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid === true && wordsearch[row+i][col+i] === "-" || wordsearch[row+i][col+i] === word[i]) {
            if (wordsearch[row+i][col+i] != word[i]){
              rewind.push([row+i, col+i])
            }
            wordsearch[row+i][col+i]=word[i]
            
          } else {
            console.log(word, "rewinding diagdown", rewind)
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
      else if (directions[randIndex] === "diagup") {
        console.log("attempting upward diag")
        console.log(word)
        let col=Math.floor(Math.random() * (wordsearch[0].length - word.length))
        //Math.floor(Math.random()  * (13 - word.length))
        let row=word.length + Math.floor(Math.random() * (wordsearch.length - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid===true && wordsearch[row-i][col+i] === "-" || wordsearch[row-i][col+i] === word[i]) {
            if (wordsearch[row-i][col+i] != word[i]){
              rewind.push([row-i, col+i])
              console.log(rewind)
            }
            wordsearch[row-i][col+i]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
      else if (directions[randIndex] === "rowrev") {
        console.log("reverse row")
        console.log(word)
        let row=Math.floor(Math.random() * (wordsearch.length - word.length))
        //Math.floor(Math.random()  * (13 - word.length))
        let col=word.length + Math.floor(Math.random() * (wordsearch[0].length - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid===true && wordsearch[row][col-i] === "-" || wordsearch[row][col-i] === word[i]) {
            if (wordsearch[row][col-i] != word[i]){
              rewind.push([row, col-i])
              console.log(rewind)
            }
            wordsearch[row][col-i]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
      else if (directions[randIndex] === "colrev") {
        console.log("colrev")
        console.log(word)
        let col=Math.floor(Math.random() * wordsearch[0].length)
        //Math.floor(Math.random()  * (13 - word.length))
        let row=word.length + Math.floor(Math.random() * (wordsearch.length - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid===true && wordsearch[row-i][col] === "-" || wordsearch[row-i][col] === word[i]) {
            if (wordsearch[row-i][col] != word[i]){
              rewind.push([row-i, col])
              console.log(rewind)
            }
            wordsearch[row-i][col]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
      else if (directions[randIndex] === "diagrevdown") {
        console.log("diagrevdown")
        console.log(word)
        let col=word.length + Math.floor(Math.random() * (wordsearch[0].length - word.length))
        //Math.floor(Math.random()  * (13 - word.length))
        let row=Math.floor(Math.random() * (wordsearch.length - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid===true && wordsearch[row+i][col-i] === "-" || wordsearch[row+i][col-i] === word[i]) {
            if (wordsearch[row+i][col-i] != word[i]){
              rewind.push([row+i , col-i])
              console.log(rewind)
            }
            wordsearch[row+i][col-i]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
      else if (directions[randIndex] === "diagrevup") {
        console.log("diagrevup")
        console.log(word)
        let col=word.length + Math.floor(Math.random() * (wordsearch[0].length - word.length))
        //Math.floor(Math.random()  * (13 - word.length))
        let row=word.length + Math.floor(Math.random() * (wordsearch.length - word.length))
        let rewind = [];
        
        for (let i = 0; i< word.length; i++){
          if (valid===true && wordsearch[row-i][col-i] === "-" || wordsearch[row-i][col-i] === word[i]) {
            if (wordsearch[row-i][col-i] != word[i]){
              rewind.push([row-i,col-i])
              console.log(rewind)
            }
            wordsearch[row-i][col-i]=word[i]
            
          } else {
            for (let j = 0; j < rewind.length; j++) {
              wordsearch[rewind[j][0]][rewind[j][1]] = "-";
            }
            rewind = []
            valid= false
          }
        }
      }
  
  
    }
  }
  
  // add column / diagonal directions
  // implement overlap (If letter = "-" or letter == the one its replacing its fine)
  
  
  function displayWordsearch(wordsearch) {
    console.log(" _________________________")
    console.log("|                         |")
    for (let row = 0; row < wordsearch.length; row ++){
      line="| "
      for (let col = 0 ; col < wordsearch[0].length ; col++ ){
        line = line + wordsearch[row][col] + " "
      line = line + "|"
      }
      console.log(line)
    }
    console.log("|_________________________|") 
  }
  
  
  const generateWordsearch = (width, height) => {
    let wordsearch = []
    for (let row = 0; row < height; row ++){
      wordsearch.push([])
      for (let col = 0 ; col < width ; col++ ){
        wordsearch[row].push("-")
      }
    }
    return wordsearch
  }
  let wordsearch = generateWordsearch(12,12)
  
  addWord("JAVASCRIPT",wordsearch)    
  addWord("ALGORITHM",wordsearch)    
  addWord("WORDSEARCH",wordsearch)    
  addWord("KRISTI",wordsearch)
  
  
  randomFill(wordsearch)
  
  console.log(wordsearch)
  displayWordsearch(wordsearch)