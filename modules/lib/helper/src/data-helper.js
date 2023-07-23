// add functions that are used to manipulate data across different pages. eg slider might be called from home, riders

export function returnMappedData(unmappedObject, objectsToMapTo) {


return unmappedObject.map( function(data) {

    var dataObject = {}

    // for each loop objectToMapTo {
    // if data.objectToMapTo exists 
    // Add to dataObject         
    // }

    // if (data.content) {
    //     contentHtml = data.content
    // }
    // if (data.email) {
    //     contentEmail = data.email
    // }

    return dataObject
});

}

export function returnSliderHTML(slidedata) {

    // Slide data JSON example
    // {
    //     "data": {
    //         "banner": {
    //             "slides": [{
    //                 "data": "basil williams",
    //                 "img_url": "https://raw.githubusercontent.com/HendricksK/sacos_images/b3eb4b6c904a56b0428fc2feaeda437a60080bba/rider/1_basil_williams/basil_williams_top_senior_1948.jpg",
    //                 "collapsable": true
    //             }, {
    //                 "data": "basil williams",
    //                 "img_url": "https://raw.githubusercontent.com/HendricksK/sacos_images/b3eb4b6c904a56b0428fc2feaeda437a60080bba/rider/1_basil_williams/basil_williams_top_senior_1948.jpg",
    //                 "collapsable": false
    //             }, {
    //                 "data": "basil williams",
    //                 "img_url": "https://raw.githubusercontent.com/HendricksK/sacos_images/b3eb4b6c904a56b0428fc2feaeda437a60080bba/rider/1_basil_williams/basil_williams_top_senior_1948.jpg",
    //                 "collapsable": true
    //             }]
    //         }
    //     }
    // }

    // console.log(slidedata)
    // return
    let slideHTML = '';

    if (slidedata.collapsable === true) {
        slideHTML =  '<div class="slide">'
            + '<img src="' + slidedata.img_url + '">'
            + '<div class="slide-data">'
                + '<div class="content show-more">' 
                + slidedata.data
                + '<span class="show-more-button"></span>'
                + '</div>'
            + '</div>'
        + '</div>'
    } else {
        slideHTML =  '<div class="slide">'
            + '<img src="' + slidedata.img_url + '">'
            + '<div class="slide-data">'
                + '<div class="content show-more">' + slidedata.data + '</div>'
            + '</div>'
        + '</div>'
    }

    return slideHTML
    
}