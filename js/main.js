/* =====Part1---------------------------------------------------------- */

/* MANIPULATING THE DOM */

/* Create a DIV */
/* var div = document.createElement('DIV'); */

/* Setting height of div */
/* div.style.height = '100vh'; */

/* Appending element to DOM */
/* document.body.appendChild(div); */
/* console.log(div); */

/* Adding event listener to do effects */

/* div.addEventListener('mousemove', function(event){
 console.log(event);
 var x = event.clientX; */
/* var y = event.clientY;
 div.textContent = x + ', ' + y;
 div.style.backgroundColor = 'rgb('+ x + ',' + y + ', 100)';

  }); */

/* ===========Part2--------------------------------------------------------- */

/* ==============USING FUNCTIONS====================== */

/* -----Create DIV element------ */

function fullScreen(element) {
    var newDiv = document.createElement(element);
    newDiv.style.height = "100vh";
    document.body.appendChild(newDiv);
    return newDiv;
}


/* Input */
function Input(inputType, DOMElement, callback) {
  DOMElement.addEventListener(inputType, function(event) {
      var x = event.clientX;
      var y = event.clientY;
      /* You will not get event synchronously so....You use a callback */
      callback(DOMElement,x,y);
    });
}


/* Output */

//This is an asynchronous event
function Output(element,x,y){
  div.textContent = x + ", " + y;
  div.style.backgroundColor = "rgb(" + x + "," + y + ", 100)";
}
