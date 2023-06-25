const elapsed = sessionStorage.getItem('timer');
const places = sessionStorage.getItem('places');
const headStart = sessionStorage.getItem('headStart');

const places_sel = document.querySelector('.places');
const timer_sel = document.querySelector('.timer');
const headStart_sel = document.querySelector('.headStart')

function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

places_sel.textContent = places;
headStart_sel.textContent = ordinal_suffix_of(headStart);
timer_sel.textContent = elapsed;
