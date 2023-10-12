const bottomSection = document.querySelector(".bottom-section");
const clientInfoBlock = document.querySelector(".client-info-block");
const transformButton = document.querySelector(".grid-transform");
const gridTransformImg = document.querySelector(".grid-transform-img");
const smallAction = document.querySelector(".small-action-buttons-block");

let isTransformed = false;

transformButton.addEventListener("click", () => {
  isTransformed = !isTransformed;

  if (isTransformed) {
		smallAction.style.display = "block";
    clientInfoBlock.style.display = "none";
    bottomSection.style.gridTemplateColumns = "20% 79.3%";
		gridTransformImg.classList.add("rotate");	
  } else {
		smallAction.style.display = "none";
    clientInfoBlock.style.display = "block";
    bottomSection.style.gridTemplateColumns = "20% 58.7% 20%";
		gridTransformImg.classList.remove("rotate");	
  }
});

