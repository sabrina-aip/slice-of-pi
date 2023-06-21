const elapsed = sessionStorage.getItem('timer');
const places = sessionStorage.getItem('places')

const places_sel = document.querySelector('.places');
const timer_sel = document.querySelector('.timer');

places_sel.textContent = places;
timer_sel.textContent = elapsed;
