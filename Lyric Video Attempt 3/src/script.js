let myPaths = document.querySelectorAll('path')

function setup() {

    anime({
        targets: myPaths[0],
        translateX: 300
    })


}


function mousePressed() {
    anime({
        targets: document.querySelectorAll('image'),
        translateY: -100,
        scale: 0.25
    })

    anime({
        targets: myPaths[1],
        translateX: -300
    })

}