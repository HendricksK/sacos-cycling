let nav =
    '<title></title>' +
    '<nav class="navbar" role="navigation" aria-label="main navigation">' + 
      '<div class="navbar-brand">' + 
        '<a class="navbar-item p-0" href="/">' +
          '<span class="material-icons" style="color:#e3b602">'+            
          '</span>' +
        '</a>' +
        '<a class="navbar-item" style="color:#e3b602" href="#">' +
            'Articles' + 
        '</a>' +
        '<a class="navbar-item" style="color:#e3b602" href="#">' +
            'Riders' + 
        '</a>' + 
        '<a class="navbar-item" style="color:#e3b602" href="#">' +
            'About' + 
        '</a>' + 
      '</div>' + 
    '</nav>';

document.getElementById('nav').innerHTML = nav;