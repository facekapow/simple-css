'use strict';

(function() {
  var showPopup1 = document.getElementById('showPopup1');
  var showPopup2 = document.getElementById('showPopup2');
  var overlay1 = document.getElementById('overlay1');
  var popup1 = document.getElementById('popup1');
  overlay1.addEventListener('click', function() {
    overlay1.classList.remove('simple--overlay-shown');
    popup1.classList.remove('simple--popup-shown');
  });
  showPopup1.addEventListener('click', function() {
    overlay1.classList.add('simple--overlay-shown');
    popup1.classList.add('simple--popup-shown');
  });
  showPopup2.addEventListener('click', function() {
    popup1.classList.toggle('simple--popup-shown');
  });

  var light_or_dark = document.getElementsByName('light_or_dark');
  var image1 = document.getElementById('image1');
  light_or_dark[0].onclick = function() {
    if (document.body.classList.contains('simple--dark')) {
      document.body.classList.remove('simple--dark');
      image1.src = 'http://dummyimage.com/400x400/ffffff/000000.png&text=test%20image';
    }
  }
  light_or_dark[1].onclick = function() {
    if (!document.body.classList.contains('simple--dark')) {
      document.body.classList.add('simple--dark');
      image1.src = 'http://dummyimage.com/400x400/454545/ffffff.png&text=test%20image';
    }
  }
  if (document.body.classList.contains('simple--dark')) {
    light_or_dark[1].checked = true;
    image1.src = 'http://dummyimage.com/400x400/454545/ffffff.png&text=test%20image';
  } else {
    light_or_dark[0].checked = true;
    image1.src = 'http://dummyimage.com/400x400/ffffff/000000.png&text=test%20image';
  }
})();
