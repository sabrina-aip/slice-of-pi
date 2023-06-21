// Events

const entry_sel = document.querySelector('#entry');
const attempt_sel = document.querySelector('#attempt');
const places_sel = document.querySelector('#places');
const hr = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')

// variables for quiz function
let places = 0;
let attempt = `3.`;
let entry;
let answered = false;
let timeout = null;
let startTime;
let elapsedTime = 0;
let error;

// variables for timer
let second = 0;
let minute = 0;
let hour = 0;
let elapsed;

// FUNCTIONS

function promptEntry(){
  console.log(attempt_sel.value);
  // posts the users attempt thus far
  attempt_sel.textContent = `${attempt.slice(-10)}`;  
  places_sel.textContent = `${places}`;
  // receive an attempt
  // this assume that answers are auto submitted
  // add bool to toggle the feature to wait for enter keydown i.e. e.keyCode == 13
  entry_sel.addEventListener('keyup',checkAnswer);

}

function checkAnswer(e){
  console.log(entry_sel.value);
  // check the answer
  if (Number(entry_sel.value) == Number(pi[places])){
    // if correct, we push the entry_sel value to the attempt and clear the number
    attempt += `${entry_sel.value}`;
    places ++;
    entry_sel.removeEventListener('keyup', checkAnswer);
    entry_sel.value = '';
    promptEntry();
  } else {
    error = entry_sel.value;
    // go to the finish page
    finish();
  }
}

function finish(){
  sessionStorage.setItem('attempt', attempt);
  sessionStorage.setItem('timer', `${convertToString(hour)}:${convertToString(minute)}:${convertToString(second)}`);
  sessionStorage.setItem('places', places);
  sessionStorage.setItem('error', error);
  window.location.replace("results.html");
}

function start(){
  // every second, elapsed 
  addTime()
  timer = setInterval(addTime, 1000)
}

function convertToString(e){
  if (e < 10){
    e = `0${e}`;
  }
  return e;
}

function addTime(){
  second++;
  if (second === 60){
    minute++;
    second = 0;
  }
  if (minute === 60){
    hour++;
    minute = 0;
  }
  hr.textContent = convertToString(hour);
  min.textContent = convertToString(minute);
  sec.textContent = convertToString(second);
  
}

// run when page opens
sessionStorage.clear()
promptEntry()
start()