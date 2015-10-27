function getRandomDimension(min, max) {
  var rand = Math.random() * (max - min) + min;

  return rand;
}

(function () {
  'use strict';
  var MIN_WIDTH = 300,
      MAX_WIDTH = window.screen.width/2,
      MIN_HEIGHT = 300,
      MAX_HEIGHT = window.screen.height,
      APP_ROOT = document.getElementById('app');



  function loop() {
      applet.style.height = getRandomDimension(MIN_HEIGHT, MAX_HEIGHT);
      applet.style.width = getRandomDimension(MIN_WIDTH, MAX_WIDTH);
  }

  for (var i = 0; i < 2; i++) {
    var height,
        width,
        applet = document.createElement('applet');

    applet.code = "applet.class";
    applet.title = 'jvm is great';

    height = getRandomDimension(MIN_HEIGHT, MAX_HEIGHT);
    width = getRandomDimension(MIN_WIDTH, MAX_WIDTH);

    applet.style.width = width;
    applet.style.height = height;
    applet.style.float = Math.random()*100  <= 50 ? 'left' : 'right';
    APP_ROOT.appendChild(applet);

    setTimeout(loop, 2000);
  }

}());
