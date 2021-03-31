// https://hashnode.com/post/7-different-ways-to-make-ajax-calls-in-javascript-in-2019-cjr7pi2fl000gdjs2zgssqwhr
home(init)

function home(callback) {
    let apiurl = window.localStorage.getItem('apiurl')

    let xhr = new XMLHttpRequest()
    let url = apiurl + '/page/1'

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
    
    let heading = ''
    let banner = ''
    let content = ''        
    let postdata = data.post_data

    for (let x = 0; x < postdata.length; x++) {

        if (postdata[x].section === 'banner') {
            banner = JSON.parse(postdata[x].page_data_string)
        }
        if (postdata[x].section === 'heading') {
            heading = JSON.parse(postdata[x].page_data_string)
        }
        if (postdata[x].section === 'content') {
            content = JSON.parse(postdata[x].page_data_string)
        }
    }

    if (heading !== '') {
        document.getElementById('title').innerHTML = heading.heading;
    }

    if (banner !== '') {
        let slider = ''
        for (let i = 0; i < banner.banner.length; i++) {
            slider = slider + renderBannerSlider(banner.banner[i])
        }

        document.getElementById('rider-banner').innerHTML = slider;
    }

    if (content !== '') {
        document.getElementById('description-content').innerHTML = content.content;
        document.getElementById('description-links').innerHTML = '<a href="mailto:' + content.contact + '" target="_blank" rel="noopener noreferrer" class="button--sacos_yellow">' + content.contact + '</a>'    
    }
}

function init() {

    document.getElementById('pageloader').classList.remove('is-active')

    var show_more_btns =  document.getElementsByClassName('show-more-button')

    if (typeof(show_more_btns) != 'undefined' && show_more_btns != null) {
      for (var i = 0; i < show_more_btns.length; i++) {
          show_more_btns[i].parentElement.setAttribute('id', 'show-more-'+i); 
          var show_more_id = 'show-more-'+i
          document.getElementById(show_more_id).addEventListener('click', showMoreOpenClose);
      }
    }

    function showMoreOpenClose(e) {

        if (!e.target.parentElement.id) {
            return
        }

        if (document.getElementById(e.target.parentElement.id).classList.length > 1) {
            
            var class_list = document.getElementById(e.target.parentElement.id).classList

            if (class_list[2] === 'open') {
                  document.getElementById(e.target.parentElement.id).classList.remove('open')
                  document.getElementById(e.target.parentElement.id).classList.add('closed')
            } else if (class_list[2] === 'closed') {
                  document.getElementById(e.target.parentElement.id).classList.remove('closed')
                  document.getElementById(e.target.parentElement.id).classList.add('open')
            } else {
                document.getElementById(e.target.parentElement.id).classList.add('open')
            }
        }
    }

    $('.rider-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

function renderBannerSlider(slidedata) {
    if (slidedata.image[0].collapsable === true) {
        return '<div class="slide">'
            + '<img src="' + slidedata.image[0].img_url + '">'
            + '<div class="slide-data">'
                + '<div class="content show-more">' 
                + slidedata.image[0].data 
                + '<span class="show-more-button"></span>'
                + '</div>'
            + '</div>'
        + '</div>'
    } else {
        return '<div class="slide">'
            + '<img src="' + slidedata.image[0].img_url + '">'
            + '<div class="slide-data">'
                + '<div class="content show-more">' + slidedata.image[0].data + '</div>'
            + '</div>'
        + '</div>'
    }
    
}
