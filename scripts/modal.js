let modal = document.getElementById('modal');

let logInBttn = document.getElementById('modal-button1');

logInBttn.onclick = function() {
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
  

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log(event.target);
    }
}


