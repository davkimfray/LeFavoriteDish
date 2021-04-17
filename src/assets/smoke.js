

$(document).ready(function(){
  function randomNumber(min, max){
    const r = Math.random()*(max-min) + min;
    return Math.floor(r)
  }

  window.setInterval(function() {
    let div = document.getElementById('smo');
    let xCoord = randomNumber(div.offsetLeft, div.offsetLeft + div.offsetWidth-100);
    let yCoord = randomNumber(0,div.offsetTop);
    $('.hi').append("<div class='ripple'></div>");
    $('.ripple:last').offset({top:yCoord, left:xCoord });
    let maxWidthSmoke = Math.random()*70+30;
    let smokeRising = Math.random()*500+400;
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    let smokeDirection = Math.random()*90 * plusOrMinus;
    $('.ripple:last').animate({
      opacity: 0,
      width: maxWidthSmoke,
      height: Math.random()*70+30,
      top: `-=${smokeRising}`,
      left: `-=${smokeDirection}`
      // backgroundColor: 'black'
    }, 10000, function(){
      $(this).remove();
    });
  }, 100);

  /*
  $(window).resize(function(){
    for(i=0;i<200;i++){
      document.body.removeChild(dot[i]);
    }
  });
  */
});

