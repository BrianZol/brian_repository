let myPaths= document.querySelectorAll('path')
console.log(myPaths)




function setup(){
    anime({
    targets: myPaths,
    translateX: 20,
    duration: 3000
    })


    anime({
    targets: myPaths[1],
    translateX: 40,
    duration: 3000
    })


    anime({
    targets: myPaths[2],
    translateX: -40,
    duration: 3000
    })   
}





