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
	
	console.log(data)

	let rider = data
	let heading = rider.Name
	let riderdata = JSON.parse(rider.Rider_data)

    if (heading !== '') {
        document.getElementById('rider-name').innerHTML = heading;
    }

    if (riderdata !== '') {
        document.getElementById('title').innerHTML = riderdata.information;
    }

}

function renderRiderGallery(rider) {
	// let riderinfo = JSON.parse(rider.Rider_data)
	// let riderurl = window.localStorage.getItem('riderurl')

	// return '<div class="tile is-2 rider-container">'
 //            + '<a href="' + riderurl + '?id=' + rider.Id + '">'
 //            + '<figure class="image">'
 //            + '<img src="' + riderinfo.image + '">'
 //            + '</figure>'
 //            + '<div class="rider-name">' + rider.Name + '</div>'
 //            + '</a>'
 //          	+ '</div>'

 // <div class="column">
 //                    <div class="card">
 //                        <div class="card-image">
 //                            <figure class="image is-2by1">
 //                                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
 //                            </figure>
 //                        </div>
 //                        <div class="card-content">
 //                            <div class="media">
 //                                <div class="media-content">
 //                                    <p class="title is-4">John Smith</p>
 //                                    <p class="subtitle is-6">@johnsmith</p>
 //                                </div>
 //                            </div>

 //                            <div class="content">
 //                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
 //                                <a>@bulmaio</a>.
 //                                <a href="#">#css</a>
 //                                <a href="#">#responsive</a>
 //                            </div>
 //                        </div>
 //                    </div>
 //                </div>
}