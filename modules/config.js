// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// Using local storage to save information like apiurl
let url = window.location.href

let prod = false;

if(!prod) {
	window.localStorage.setItem('apiurl', 'http://api.sacoshistory.local:9000')
	window.localStorage.setItem('baseurl', 'http://cycling.sacoshistory.local')
} else {
	window.localStorage.setItem('apiurl', 'https://api.sacoshistory.org')
	window.localStorage.setItem('baseurl', 'https://cycling.sacoshistory.org')
}

window.localStorage.setItem('riderurl', '/pages/riders/rider/index.html')
window.localStorage.setItem('articleurl', '/pages/articles/article/index.html')
