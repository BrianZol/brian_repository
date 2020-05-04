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

anime({
	targets: 'div.box.yellow',
	translateY: [
		{value:200, duration:3000},
		{value:0, duration:3000},
	],	
	rotate: '1turn',
})

anime({
	targets: 'div.box.green',
	translateY: [
		{value:200, duration:3000},
		{value:0, duration:3000},
	],	
	rotate: '1turn',
})


anime({
	targets: 'firstimage',
	translateY: [
		{value:200, duration:3000},
		{value:0, duration:3000},
	],	
	rotate: '1turn',
})


var anyName = document.getElementById("circle")
anime({
    targets: anyName,
    translateX: 330,
    easing: 'easeInOutQuad'
});

var anyName2 = document.getElementById("firstimage")
anime({
    targets: anyName2,
    translateX: 290,
    translateY: 150,
    easing: 'easeInOutQuad'
});
