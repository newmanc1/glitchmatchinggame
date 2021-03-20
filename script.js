//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const interval = 1000;

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 700;
var mistakes = 0;
var secondsRemaining = 5;
var timer;

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  generatePattern();
  //swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");
  playClueSequence();
  
}

function stopGame() {
  gamePlaying = false;
  //clearInterval(timer);
  secondsRemaining = 5;
  //swap back start and stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
  pattern = [];
  mistakes = 0;
  progress = 0;
  clueHoldTime = 700;
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime = 700 - (progress * 50);
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0; i <= progress; i++) { //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); //set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;

  }
  /*
  clearInterval(timer);
  secondsRemaining = 5;
  setTimeout(setInterval(
    function() {
      if(secondsRemaining == 0) {
        loseGame();
        clearInterval(timer);
      } else {
        secondsRemaining--;
        document.getElementById("timer").innerText = "Timer: " + secondsRemaining + " seconds";
      }
      
    }
    , 1000), delay);
    */
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over. You won! Nice job :)");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  secondsRemaining = 5;
  if(!gamePlaying) {
    return;
  }
  
  if(btn != pattern[guessCounter]) {
    if(mistakes == 2) {
      loseGame();
    } else {
      mistakes++;
      
    }
    
  } else if(guessCounter < progress) {
    guessCounter++;
    
  } else if(progress < pattern.length - 1) {
    progress++;
    
    playClueSequence();
    
  } else if(progress == pattern.length - 1) {
    winGame();
    
  }
}

function generatePattern() {
  for(let i = 0; i < 5; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);
  }
}


// Sound Synthesis Functions
const freqMap = {
  1: 242.4,
  2: 353,
  3: 399,
  4: 490.2,
  5: 551.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
