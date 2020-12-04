var but = document.getElementById('but');
var but1 = document.getElementById('but1');
var duck = document.getElementById('duck');

var richtingen = ['n','ne','se', 'sw', 'nw', 'e','s','w'];

var posleft = 500;
var postop = 225;

var som = 0;
var som1 = 0;

function lose() {
  som1++;
  but1.innerHTML = som1;
  if (som1 == 5) {
    alert('You Lose');
  }
}
function win() {
  som++;
  but.innerHTML = som;
  if (som == 10) {
    alert('You Win');
  }
}

function moveDuck() {
  setInterval(function() {fly()},500);

    function fly(direction){
      var number = Math.floor(Math.random()* richtingen.length);
      direction = richtingen[number];

      if (direction == 'n') {
          if (postop > -100) {
            postop -= 75;
        }
          duck.style.top = postop + 'px';
}
      else if (direction == 'e'){
        if (posleft < 1000 ) {
          posleft += 75;
        }
        duck.style.left = posleft + 'px';
}
      else if (direction == 's') {
        if (postop < 525) {
          postop += 75;
        }
        duck.style.top = postop + 'px';
}
      else if (direction == 'w') {
        if (posleft > 0) {
          posleft -= 75;
        }
        duck.style.left = posleft + 'px';
}

      if (direction == 'ne') {
        if (postop > -100) {
          postop -= 75;
        }
        duck.style.top = postop + 'px';

        if (posleft < 1000 ) {
          posleft += 75;
        }
        duck.style.left = posleft + 'px';
}
      else if (direction == 'se'){
        if (postop < 525) {
          postop += 75;
        }
        duck.style.top = postop + 'px';

        if (posleft < 1000 ) {
          posleft += 75;
        }
        duck.style.left = posleft + 'px';

}
      else if (direction == 'sw') {
        if (postop < 525) {
          postop += 75;
        }
        duck.style.top = postop + 'px';

        if (posleft > 0) {
          posleft -= 75;
        }
        duck.style.left = posleft + 'px';
}
      else if (direction == 'nw') {
        if (postop > -100) {
          postop -= 75;
        }
        duck.style.top = postop + 'px';

        if (posleft > 0) {
          posleft -= 75;
        }
        duck.style.left = posleft + 'px';

}

}
}
moveDuck();
