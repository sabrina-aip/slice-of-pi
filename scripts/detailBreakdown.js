const places = Number(sessionStorage.getItem('places'))
const error = sessionStorage.getItem('error')
const eb = document.querySelector('.error-breakdown')
output = []

output.push(`<p><span>3.${pi.slice(0,places)}</span><span id="wrong">${error}</span></p>`)
output.push(`<p>you entered ${error} instead of ${pi[places]}</p>`)

eb.innerHTML = output.join('');
