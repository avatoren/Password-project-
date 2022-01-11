let words = new Map();
let passwordExceptPreviousWord = ""
//let phrase = [];
//const previousWord = ""
let previousWord = "";
function preload() {
  loadStrings('beale.wordlist.asc.txt', createMap);
}
let lookupKey = "12342"
// let color1 = 'blue';
// letcolor2 = 'red'

function createMap(strings) {
  for (let line of strings) {
    let [key, word] = line.split('\t');
    if (key.length === 5) {
      words.set(key, word);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}

function draw() {
  background(0, 2555, 255);
  // let x = 10;
  // for(let word of phrase ) {
  //   fill(word.color);
  //   text(word.word, x, height/2);
  //   x+=textWidth(word.word);
  // }
  // text(passwordExceptPreviousWord,width/3, height/2, )
  const displayString = `${passwordExceptPreviousWord}${previousWord}`

  text(displayString, width / 2 - textWidth(displayString)/2, height / 2, 255);

  noLoop();

}
function keyPressed() {

  if (key === " ") {

    // passwordExceptPreviousWord += previousWord;
    passwordExceptPreviousWord = previousWord + passwordExceptPreviousWord;
    previousWord;
    previousWord = words.get
      (generateLookupKey());
    // 
  }
    if (keyCode === LEFT_ARROW) {
      passwordExceptPreviousWord = previousWord + passwordExceptPreviousWord;
      previousWord = words.get
        (generateLookupKey());
    }
    if (keyCode === RIGHT_ARROW) {
      passwordExceptPreviousWord = passwordExceptPreviousWord + previousWord;
      previousWord = words.get
        (generateLookupKey());
    }

    if (key === 'c') {
      previousWord = previousWord.toUpperCase();

      //need to change to capatilze
      redraw()
    }
  

  if (key === 'k') {
    passwordExceptPreviousWord -= previousWord;
    //previousWord = previousWord.fontSize(10);
    redraw()
  }
  //   phrase.push({
  //     word: word.get(lookupKey),
  //     color: color(random(256),random(256), random(256))
  // });

  redraw()
}
//lookupKey = generateLookupKey();



function generateLookupKey() {
  key = "";
  const dieFaces = [1, 2, 3, 4, 5, 6]
  for (let i = 0; i < 5; i++) {
    key = `${key}${random(dieFaces)}`;
  }
  // if(key === 'c') {
  //   previousWord = previousWord.toUpperCase();
  //   //need to change to capatilze
  //   redraw()
  // }
  return key;
}

// draw i will need to display password + previous word 
// key pressed capatalize previous word 