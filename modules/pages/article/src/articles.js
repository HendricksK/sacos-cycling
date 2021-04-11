// https://hashnode.com/post/7-different-ways-to-make-ajax-calls-in-javascript-in-2019-cjr7pi2fl000gdjs2zgssqwhr
home(init)

const articleurl = window.localStorage.getItem('articleurl')

function home(callback) {

    const apiurl = window.localStorage.getItem('apiurl')
    const xhr = new XMLHttpRequest()
    const url = apiurl + '/articles'

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

function init() {
	// Remove page loader
	document.getElementById('pageloader').classList.remove('is-active')
}

function renderHtml(data) {

	const articles = data

    if (articles !== '') {
        let article = ''

        for (let i = 0; i < articles.length; i++) {
            article = article + renderArticlListItem(articles[i])
        }

        console.log(article);

        document.getElementById('articles-list').innerHTML = article;
    }

}

function renderArticlListItem(article) {

    return '<li>'
            + '<a href="' + articleurl + '?id=' + article.id + '">' + article.name + '&nbsp;' +  article.author + '</a>'
            + '</li>'
}