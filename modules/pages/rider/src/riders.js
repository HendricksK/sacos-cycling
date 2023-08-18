import { renderImageBlock } from "../../../lib/helper/src/data-helper.js";

// https://hashnode.com/post/7-different-ways-to-make-ajax-calls-in-javascript-in-2019-cjr7pi2fl000gdjs2zgssqwhr
riders(init)

function riders(callback) {
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

            let imagedata = {
                "id": riders[i].id,
                "tag": riders[i].first_name + ' ' + riders[i].last_name,
                "img": riders[i].images[0].url
            }

            gallery = gallery + renderImageBlock(imagedata, 'rider')
        }

        console.log(gallery)

        document.getElementById('rider-listing').innerHTML = gallery;
    }

}

function renderRiderBlock(rider) {

	// let image = rider.images[0].url
	// let url = window.localStorage.getItem('riderurl')

    // console.log(rider.images[0])

	// return '<div class="tile is-2 rider-container">'
    //         + '<a href="' + url + '?id=' + rider.id + '">'
    //         + '<figure class="image">'
    //         + '<img src="' + image + '">'
    //         + '</figure>'
    //         + '<div class="rider-name">' + rider.first_name + '</div>'
    //         + '</a>'
    //       	+ '</div>'
}