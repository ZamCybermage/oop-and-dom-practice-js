/* Create a DIV */
var div = document.createElement('DIV');

/* Setting height of div */
div.style.height = '100vh';

/* Appending element to DOM */
document.appendChild(div);
/* console.log(div); */

/* Adding event listener to do effects */

div.addEventListener('mousemove', function(event){
 console.log(event);
 var x = event.clientX;
 var y = event.clientY;
 div.textContent = x + ', ' + y;
 div.style.backgroundColor = 'rgb('+ x + ',' + y + ', 100)';

  });
