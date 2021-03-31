let baseurl = window.localStorage.getItem('baseurl')
let nav =
    '<title></title>' +
    '<nav class="navbar" role="navigation" aria-label="main navigation">' + 
      '<div class="navbar-brand">' + 
        '<a class="navbar-item p-0" href="' + baseurl + '">' +
          '<span class="material-icons" style="color:#e3b602">directions_bike</span>' +
        '</a>' +
        '<a class="navbar-item" style="color:#e3b602" href="' + baseurl + '/pages/articles">' +
            'Articles' + 
        '</a>' +
        '<a class="navbar-item" style="color:#e3b602" href="' + baseurl + '/pages/riders">' +
            'Riders' + 
        '</a>' + 
        '<a class="navbar-item" style="color:#e3b602" href="' + baseurl + '/pages/about">' +
            'About' + 
        '</a>' + 
      '</div>' + 
    '</nav>';

document.getElementById('nav').innerHTML = nav;