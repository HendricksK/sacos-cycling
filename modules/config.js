// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// Using local storage to save information like apiurl
let url = window.location.href

if(url.includes('localhost') || url.includes('127.0.0.1')) {
	// window.localStorage.setItem('apiurl', 'http://sacos-api.localhost')
	// window.localStorage.setItem('baseurl', 'http://sacos.localhost')
	window.localStorage.setItem('apiurl', 'http://127.0.0.1:9002')
	window.localStorage.setItem('baseurl', 'http://127.0.0.1:8080')
} else {
	window.localStorage.setItem('apiurl', 'https://api.sacoshistory.org')
	window.localStorage.setItem('baseurl', 'https://cycling.sacoshistory.org')
}

window.localStorage.setItem('riderurl', '/pages/riders/rider/index.html')
window.localStorage.setItem('articleurl', '/pages/articles/article/index.html')
