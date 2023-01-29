
function main() {

  //console.log('Test scripts executions on github pages page');
  //var btn = document.getElementsByClassName('button-strategy');
  //console.log('Our btn : ', JSON.stringify(btn, null, 2));

  // Modal window logic 

  // // Get the modal
  // var modal = document.getElementById("myModal");

  // // Get the button that opens the modal
  // var btn = document.getElementById("button-strategy");

  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

  // document.querySelector('#submitform').addEventListener('click', function(e) {
  //   e.preventDefault();
  //   console.log('Submitted.');
  //   prompt('kke');
  //   alert('er');
  // });
}

function form() {

  document.querySelector('#submitform').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Submitted.');
    window.location.href = 'index2.html';
  });

}

// const data = require('./data.json');

// console.log('data.title : ', data.predictions[0].awareness.content)