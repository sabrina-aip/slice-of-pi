// Events

const entry_sel = document.querySelector('#entry');
const places_sel = document.querySelector('#places');
const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');
const prompt_sel = document.querySelector('#prompt');

// variables for quiz function

// default entry_sel value so users don't need to type 3.
entry_sel.value = `3.`;
let prompt = true;

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
  addEventListener("touchstart", (event) => {
    entry_sel.click();
    entry_sel.focus();
  },{once:true});
  // show current number of places listen
  if (!prompt){
    prompt_sel.classList.add("hidden");
  }
  places_sel.textContent = `${places}`;
  // receive an attempt
  // this assume that answers are auto submitted
  // add bool to toggle the feature to wait for enter keydown i.e. e.keyCode == 13
  entry_sel.addEventListener("keypress", checkAnswer)
}

function checkAnswer(e){
  if (e.keyCode <48 || e.keyCode > 57) {
    console.log(`default prevented`)
    e.preventDefault();
  } else {
    // check the answer
    entry_sel.removeEventListener("keypress",checkAnswer);
    if (e.key == Number(pi[places])){
      console.log(e.key == Number(pi[places]))
      // if correct, we increase the number of places recalled
      places ++;

      // we limit the values displayed to the 10 most recent entries
      entry_sel.value = entry_sel.value.slice(-10);

      // return to waiting for prompt
      promptEntry();
    } else {
      // track the error to display it at the end
      error = e.key;
      
      // go to the finish page
      finish();
    }
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
entry_sel.click()
entry_sel.focus()
start()