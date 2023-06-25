const places = Number(sessionStorage.getItem('places'))
const headStart = Number(sessionStorage.getItem('headStart'))
const error = sessionStorage.getItem('error')
const eb = document.querySelector('.error-breakdown')
output = []

output.push(`<p><span id="head-start-entry">3.</span><span id="head-start-entry">${pi.slice(0,headStart)}</span><span id="correct-entry">${pi.slice(headStart,headStart+places)}</span><span id="wrong">${error}</span></p>`)
output.push(`<p>you entered ${error} instead of ${pi[places+headStart]}</p>`)

eb.innerHTML = output.join('');
