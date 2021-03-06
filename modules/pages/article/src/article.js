// https://hashnode.com/post/7-different-ways-to-make-ajax-calls-in-javascript-in-2019-cjr7pi2fl000gdjs2zgssqwhr
import { getParameterByName } from "../../../lib/helper/src/url-helper.js";
import { removeLoader } from "../../../lib/helper/src/loader-helper.js";

const articleid = getParameterByName('id'); // Should never change.

home(removeLoader)

function home(callback) {
    let apiurl = window.localStorage.getItem('apiurl')

    let xhr = new XMLHttpRequest()
    let url = apiurl + '/article/' + articleid

    xhr.open("GET", url)
    xhr.setRequestHeader('Accept', 'application/json; charset=UTF-8')
    xhr.send()

    xhr.onreadystatechange = (e) => {
        if (xhr.readyState === 4) {
            renderHtml(JSON.parse(xhr.responseText))
            //Wait until data is done being retrieved then run callback
            callback()
        }
    }    
}

function renderHtml(data) {
	const rider = data
	const heading = rider.name
	const article_data = rider.article_data
	const author = rider.author
	const date_time = rider.datetime

	if (heading !== '') {
        document.getElementById('article-header').innerHTML = heading
    }

    if (article_data !== '') {
        document.getElementById('article-text').innerHTML = article_data
    }

    if (author !== '') {
        document.getElementById('article-author').innerHTML = author
    }

    if (date_time !== '') {
        document.getElementById('article-datetime').innerHTML = date_time
    }
}