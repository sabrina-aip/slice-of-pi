const startingPoint_sel = document.querySelector('#startingPoint');
const startBtn_sel = document.querySelector('#start-btn');
const mercy_sel = document.querySelector('#mercy');
startBtn_sel.addEventListener("click", setStart,{once:true});


let startingPoint;
let mercy;

function setStart(e){
  startingPoint = startingPoint_sel.value;
  mercy = mercy_sel.checked;
  sessionStorage.setItem('startingPoint', startingPoint);
  sessionStorage.setItem('mercy', mercy);
  window.location.replace("quiz.html");
}


