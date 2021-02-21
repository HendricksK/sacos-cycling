// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// Using local storage to save information like apiurl
let url = window.location.href

if(url.includes('127.0.0.1')) {
	window.localStorage.setItem('apiurl', 'http://localhost:6660')
	window.localStorage.setItem('baseurl', 'http://127.0.0.1:8080/sacos-cycling')
} else {
	window.localStorage.setItem('apiurl', 'https://sacos-backend-go.herokuapp.com')
	window.localStorage.setItem('baseurl', 'https://hendricksk.github.io/sacos-cycling')
}

window.localStorage.setItem('riderurl', '/sacos-cycling/pages/riders/rider')
