// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// Using local storage to save information like apiurl
url = window.location.href

if(url.includes('127.0.0.1')) {
	window.localStorage.setItem('apiurl', 'http://localhost:6660')
} else {
	window.localStorage.setItem('apiurl', 'https://sacos-backend-go.herokuapp.com')
}
