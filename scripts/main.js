// Events

const entry_sel = document.querySelector('#entry');
const places_sel = document.querySelector('#places');
const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');
const prompt_sel = document.querySelector('#prompt');

// variables for quiz function

// prompt value to track visibility before clearing it once people get in the zone
let prompt = true;

// attempt value so we only update it with a valid keystroke
let attempt = '3.';

// number of places 
let places = 0;
let startTime;
let elapsedTime = 0;
let error;

// variables for timer
let second = 0;
let minute = 0;
let hour = 0;
let elapsed;

let digits = new Set(['0','1','2','3','4','5','6','7','8','9']) 

// FUNCTIONS

function promptEntry(){
  entry_sel.value = attempt;
  // show current number of places listen
  if (!prompt){
    prompt_sel.classList.add("hidden");
  }
  places_sel.textContent = `${places}`;
  // receive an attempt
  // this assume that answers are auto submitted
  // add bool to toggle the feature to wait for enter keydown i.e. e.keyCode == 13
  entry_sel.addEventListener("input", checkAnswer)
}

function checkAnswer(e){
  if (digits.has(e.data)) {
    prompt = false;
    // check the answer
    entry_sel.removeEventListener("input",checkAnswer);
    if (Number(e.data) == Number(pi[places])){

      // if correct, we increase the number of places recalled
      places ++;

      // ammend the correct value to attempt
      attempt += e.data;

      // shorten attempt value if necessary
      attempt.slice(-10);

      // update the entry_sel value displayed
      entry_sel.value = attempt

      // we limit the values displayed to the 10 most recent entries
      //attempt = entry_sel.value;
      //entry_sel.value = entry_sel.value.slice(-10);

      // return to waiting for prompt
      promptEntry();
    } else {
      // track the error to display it at the end
      error = e.data;
      // go to the finish page
      finish();
    }
  } else {
    console.log('text insert attempted')
    entry_sel.value = attempt
  }
}

function finish(){
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
entry_sel.addEventListener("input", start, {once:true})
//start()