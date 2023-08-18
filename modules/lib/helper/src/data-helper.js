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

export function returnSliderHTML(sliderdata) {

    let slideHTML = '';

    if (sliderdata.collapsable === true) {
        slideHTML =  '<div class="slide">'
            + '<img src="' + sliderdata.img_url + '">'
            + '<div class="slide-data">'
                + '<div class="content show-more">' 
                + sliderdata.data
                + '<span class="show-more-button"></span>'
                + '</div>'
            + '</div>'
        + '</div>'
    } else {
        slideHTML =  '<div class="slide">'
            + '<img src="' + sliderdata.img_url + '">'
            + '<div class="slide-data">'
                + '<div class="content show-more">' + sliderdata.data + '</div>'
            + '</div>'
        + '</div>'
    }

    return slideHTML
    
}

export function renderImageBlock(imagedata, entity) {

    let entityUrl = window.localStorage.getItem(entity + 'url')

    return '<div class="tile is-2 '+ entity +'-container">'
            + '<a href="' + entityUrl + '?id=' + imagedata.id + '">'
            + '<figure class="image">'
            + '<img src="' + imagedata.img + '">'
            + '</figure>'
            + '<div class="rider-name">' + imagedata.tag + '</div>'
            + '</a>'
            + '</div>'
}