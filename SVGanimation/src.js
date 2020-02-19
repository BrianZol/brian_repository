




								//WHAT TO APPLY ANIMATIONS TO





////////////////////////////////////////////////////////////////////////////////////////////
// HOW TO ANIMATE ELEMENTS INDEPENDEDNTLY... PREFERED METHOD				// BY ELEMENT ID
												
let anyName = document.getElementById("kk")
anime({
    targets: anyName,
    translateX: 290,
    easing: 'easeInOutQuad'
	})

let anyName = document.getElementById("firstimage")
anime({
	targets: anyName,
	translateX: 100,
	easing: 'easInOutQuad'	
	})
