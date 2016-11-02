/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

  var stopButton = document.getElementById('stopButton');
  var slowButton = document.getElementById('slowButton');
  var goButton = document.getElementById('goButton');
  var bulb = document.getElementsByClassName('bulb');
  stopButton.addEventListener('click',function() {
    bulb[0].style.backgroundColor = 'red';
  });
  slowButton.addEventListener('click',function() {
    bulb[1].style.backgroundColor = 'orange';
  });
  goButton.addEventListener('click',function() {
    bulb[2].style.backgroundColor = 'green';
  });
