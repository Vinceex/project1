// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal

// var btn = document.getElementById("myBtn");

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

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// var search
// var heading = document.getElementById("head");


// search.onclick = function(){
//     heading.style.opacity = 1;
// }


// Christian's JavaScript
var searchIcon = document.getElementById('search');

searchIcon.addEventListener('click', toggle);

var modalBox = document.getElementById('modalbox');

function toggle() {
  if ( modalBox.style.display == 'none') {
    modalBox.style.display = 'block';
  }
  else if ( modalBox.style.display == 'block'){
    modalBox.style.display = 'none';
  }
  else {
    modalBox.style.display = 'none';
  }
}