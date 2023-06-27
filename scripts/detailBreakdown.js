const places = Number(sessionStorage.getItem('places'))
const headStart = Number(sessionStorage.getItem('headStart'))
const error = sessionStorage.getItem('error')
const eb = document.querySelector('.error-breakdown')
let headStart_bool;
let output = []

console.log(headStart == 0)

if (headStart == 0) {
  headstart_bool = ``
} else {
  headstart_bool = `id="head-start-entry"`
}

output.push(`<p><span ${headstart_bool}>3.</span><span id="head-start-entry">${pi.slice(0,headStart)}</span><span id="correct-entry">${pi.slice(headStart,headStart+places)}</span><span id="wrong">${error}</span></p>`)
output.push(`<p>you entered ${error} instead of ${pi[places+headStart]}</p>`)

eb.innerHTML = output.join('');
