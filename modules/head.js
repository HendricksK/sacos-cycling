let head = document.head.innerHTML
head = head 
	+ '<meta charset="UTF-8">'
	+ '<meta name=viewport content="width=device-width, initial-scale=1">'
	+ '<link rel="shortcut icon" type="image/jpg" href="/assets/favicon-32x32.png"/>'
	+ '<title>Sacos Cycling</title>'
	+ '<link rel="stylesheet" href="/assets/css/bulma.min.css">'
	+ '<link rel="stylesheet" type="text/css" href="/assets/css/bulma-pageloader.min.css"/>'
	+ '<link rel="stylesheet" href="/assets/css/base.css">'
	+ '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@creativebulma/bulma-collapsible@1.0.3/dist/css/bulma-collapsible.min.css">'
	+ '<link href="https://unpkg.com/vueperslides/dist/vueperslides.css" rel="stylesheet">'
	+ '<link rel="stylesheet" type="text/css" href="/assets/css/slick.css"/>'
	+ '<link rel="stylesheet" type="text/css" href="/assets/css/slick-theme.css"/>'
	//Always include overrides last
	+ '<link rel="stylesheet" href="/assets/css/overrides.css">'
	+ '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">'
document.head.innerHTML = head