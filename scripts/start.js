
// Get starting decimal place input
const startingPoint_sel = document.querySelector('#startingPoint');

// Get start button
const startBtn_sel = document.querySelector('#start-btn');

// Get typo mercy checkbox
const mercy_sel = document.querySelector('#mercy');

// Get the modal
const modal = document.getElementById("typo-modal");

// Get the button that opens the modal
const btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// initialize variables for setting data
let startingPoint;
let mercy;

// When user clicks start button, store the setting data and carry it to the quiz page
startBtn_sel.addEventListener("click", setStart,{once:true});

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
  modal.style.display = "block";
  document.body.style.backgroundColor= "rgba(0,0,0,.4)";
  startingPoint_sel.style.backgroundColor = "rgba(255,255,255,.4)";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function(){
  modal.style.display = "none";
  document.body.style.backgroundColor = "white";
  startingPoint_sel.style.backgroundColor = "rgba(255,255,255,1)";
})

// When the user clicks anywhere outside of the modal, close it
document.body.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.backgroundColor = "white";
    startingPoint_sel.style.backgroundColor = "rgba(255,255,255,1)";
  }
} 

function setStart(e){
  startingPoint = startingPoint_sel.value;
  mercy = mercy_sel.checked;
  sessionStorage.setItem('startingPoint', startingPoint);
  sessionStorage.setItem('mercy', mercy);
  window.location.replace("quiz.html");
}


