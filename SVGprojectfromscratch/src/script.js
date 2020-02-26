                                        //mypath comes from html//
                                         //firstpath to edit is just//
                                        //a random name I pick, it//
                                        //must match the var name//


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


function mousePressed(){
    
    anime({
        targets: document.querySelectorAll("image"),
        translateY: 100,
        scale: .30
        
        
    })
}
          
          