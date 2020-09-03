const helpButton = document.querySelector("#helpButton .fa-question-circle");
const modal = document.querySelector(".myModal");
const closeModal = document.querySelector(".modal-content #close");
helpButton.onclick = () =>{ 
    modal.style.display = "block";
}
closeModal.onclick = () => {
    modal.style.display = "none";
}