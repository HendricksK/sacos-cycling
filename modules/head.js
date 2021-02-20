let head = document.head.innerHTML
head = head 
	+ '<meta charset="UTF-8">'
	+ '<title>Sacos Cycling</title>'
	+ '<link rel="stylesheet" href="/sacos-cycling/assets/css/bulma.min.css">'
	+ '<link rel="stylesheet" type="text/css" href="/sacos-cycling/assets/css/bulma-pageloader.min.css"/>'
	+ '<link rel="stylesheet" href="/sacos-cycling/assets/css/base.css">'
	+ '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@creativebulma/bulma-collapsible@1.0.3/dist/css/bulma-collapsible.min.css">'
	+ '<link href="https://unpkg.com/vueperslides/dist/vueperslides.css" rel="stylesheet">'
	+ '<link rel="stylesheet" type="text/css" href="/sacos-cycling/assets/css/slick.css"/>'
	+ '<link rel="stylesheet" type="text/css" href="/sacos-cycling/assets/css/slick-theme.css"/>'
	//Always include overrides last
	+ '<link rel="stylesheet" href="/sacos-cycling/assets/css/overrides.css">'
	+ '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">'
document.head.innerHTML = head