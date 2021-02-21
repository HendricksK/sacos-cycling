// https://hashnode.com/post/7-different-ways-to-make-ajax-calls-in-javascript-in-2019-cjr7pi2fl000gdjs2zgssqwhr
home(init)

function home(callback) {
    let apiurl = window.localStorage.getItem('apiurl')

    let xhr = new XMLHttpRequest()
    let url = apiurl + '/riders'

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

	let riders = data

    if (riders !== '') {
        let gallery = ''
        for (let i = 0; i < riders.length; i++) {
            gallery = gallery + renderRiderBlock(riders[i])
        }

        document.getElementById('rider-listing').innerHTML = gallery;
    }

}

function renderRiderBlock(rider) {
	let riderinfo = JSON.parse(rider.Rider_data)
	let riderurl = window.localStorage.getItem('riderurl')

	return '<div class="tile is-2 rider-container">'
            + '<a href="' + riderurl + '?id=' + rider.Id + '">'
            + '<figure class="image">'
            + '<img src="' + riderinfo.image + '">'
            + '</figure>'
            + '<div class="rider-name">' + rider.Name + '</div>'
            + '</a>'
          	+ '</div>'
}