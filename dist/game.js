//selectors
let rockSelected = document.querySelector(".rock-selected");
let paperSelected = document.querySelector(".paper-selected");
let scissorsSelected = document.querySelector(".scissors-selected");

function selection(selectedItem) {
//   selectedItem.style = "opacity:1";
}

rockSelected.addEventListener("Click", selection(rockSelected));
paperSelected.addEventListener("click", selection(paperSelected));
scissorsSelected.addEventListener("click", selection(scissorsSelected));
