// Events

const entry_sel = document.querySelector('#entry');
const places_sel = document.querySelector('#places');
const hr = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')

// variables for quiz function

// default entry_sel value so users don't need to type 3.
entry_sel.value = `3.`;

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

// FUNCTIONS

function promptEntry(){
  // show current number of places listen
  places_sel.textContent = `${places}`;
  
  // receive an attempt
  // this assume that answers are auto submitted
  // add bool to toggle the feature to wait for enter keydown i.e. e.keyCode == 13
  entry_sel.addEventListener("keypress", function(e) {
      var key = e.keyCode;
      // Only allow numbers to be entered
      if (key < 48 || key > 57) {
        e.preventDefault();
      } else {
      // if the value is a number, then validate the input  
        checkAnswer(e)
      }
    },{
      // remove event listener after single use
      once:true
    }
  );
}


function checkAnswer(e){
  // check the answer
  if (e.key == Number(pi[places])){
    // if correct, we increase the number of places recalled
    places ++;

    // we limit the values displayed to the 10 most recent entries
    entry_sel.value = entry_sel.value.slice(-10);

    // return to waiting for prompt
    promptEntry();
  } else {

    // track the error to display it at the end
    error = entry_sel.value;
    
    // go to the finish page
    finish();
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
start()