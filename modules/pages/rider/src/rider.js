// https://hashnode.com/post/7-different-ways-to-make-ajax-calls-in-javascript-in-2019-cjr7pi2fl000gdjs2zgssqwhr

const riderid = getParameterByName('id'); // Should never change.

// TODO: Will need to error out gracefully somehow
if (riderid === '') {
    document.getElementById('pageloader').classList.remove('is-active')
}
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

home(init)

function home(callback) {
    let apiurl = window.localStorage.getItem('apiurl')

    let xhr = new XMLHttpRequest()
    let url = apiurl + '/rider/' + riderid

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

    let rider = data
    let heading = rider.name
    let riderdata = JSON.parse(rider.rider_data)

    if (heading !== '') {
        document.getElementById('rider-name').innerHTML = heading
    }

    if (riderdata !== '') {
        if(typeof(riderdata.information) !== 'undefined') {
            document.getElementById('rider-information').innerHTML = riderdata.information
        }
        if(typeof(riderdata.image) !== 'undefined') {
            document.getElementById('rider-hero-image').innerHTML = '<img src="' + riderdata.image + '">'
        }
    }

    if (typeof(rider.images) !== 'undefined') {
        let images = ''

        if (rider.images !== null) {
            for (let x = 0; x < rider.images.length; x++) {
                images = images + renderRiderGallery(rider.images[x], rider.name)
            }   
        }
        

        document.getElementById('rider-images').innerHTML = images  
    }

}

function renderRiderGallery(image, rider) {

return '<div class="column">'
        + '<div class="card">'
            + '<div class="card-image">'
                + '<figure class="image is-2by1">'
                    + '<img src="' + image.url + '" alt="Placeholder image">'
                + '</figure>'
            + '</div>'
            + '<div class="card-content">'
                + '<div class="media">'
                    + '<div class="media-content">'
                    + '</div>'
                + '</div>'
                + '<div class="content">'
                + '</div>'
            + '</div>'
        + '</div>'
    + '</div>'

}