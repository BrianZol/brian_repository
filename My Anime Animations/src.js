anime({
	targets: 'div.box.red',
	translateY: [
		{value:200, duration:3000},
		{value:0, duration:3000},
	],	
	rotate: '1turn',
})

anime({
	targets: 'div.box.blue',
	translateY: [
		{value:200, duration:3000},
		{value:0, duration:3000},
	],	
	rotate: '1turn',
})


let anyName = document.getElementById("circle")
anime({
    targets: anyName,
    translateX: 290,
    easing: 'easeInOutQuad'
});

let anyName2 = document.getElementById("firstimage")
anime({
    targets: anyName2,
    translateX: 290,
    translateY: 300,
    easing: 'easeInOutQuad'
});

