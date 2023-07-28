let openModalButton = document.getElementById("openModalBtn")

let modal = document.getElementById ("myModal") 

//let closeBtn = document.querySelector("#myModal > div > span")
//let closeBtn - document.getElementsByTagName("span")[0]
let closeBtn = document.getElementsByClassName("close")[0]

function openModal () {
  modal.style.display = "block"
}

function closeModal () {
  modal.style.display = "none"
}

openModalButton.addEventListener("click", function () {
  //display the modal
  openModal();
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  // if only i pressed the background of the modal > close the modal
  if(event.target == modal) {
    closeModal();
  }
});