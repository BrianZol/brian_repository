// the collection of animated paths
var animatedPaths = [];

// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup() {

    // retrieve all the SVG paths in the html
    var pathEls = document.querySelectorAll('path');

  for (var i = 0; i < pathEls.length; i++) {   // <--------for selecting all paths// i can                                                  also be i+1
                   //^^change this to a number to give it an endpoint ..i<23..
        //for each path
        var pathEl = pathEls[i]; // <---------- i is for all paths, use a number to
                                                //select a specific path//
        // Set an offset along the path.
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let tmp = anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(0, 2000),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: false
        });

        tmp.play()
            // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

}

function mousePressed() {
    anime({
        targets: document.querySelectorAll('image'),
        translateY: -100,
        scale: 0.25
    })

}




var path = anime.path('.motion-path-demo path');

anime({
  targets: '.motion-path-demo .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});