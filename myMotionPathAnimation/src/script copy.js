                                        //mypath comes from html//
                                         //firstpath to edit is just//
                                        //a random name I pick, it//
                                        //must match the var name//

anime({
  targets: '.line-drawing-demo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});