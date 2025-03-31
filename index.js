document.addEventListener("DOMContentLoaded", () => {
  const boxCards = document.querySelectorAll(".box-card");
  const totalDisplay = document.getElementById("total-des");
  const addToCart = document.getElementById("addToCart");

  function updateSelection(selectedBox) {
    document
      .querySelectorAll(".radio-box")
      .forEach((radio) => (radio.checked = false));

    document
      .querySelectorAll(".secondary-div")
      .forEach((div) => div.classList.add("hide"));

    boxCards.forEach((box) => box.classList.remove("expand-card"));

    const selectedEle = selectedBox.closest(".box-card");

    if (selectedEle) {
      selectedBox.classList.add("expand-card");
    }

    const secondaryDiv = selectedBox.querySelector(".secondary-div");

    if (secondaryDiv) {
      secondaryDiv?.classList.remove("hide");
    }

    const radio = selectedBox?.querySelector(".radio-box");
    if (radio) {
      radio.checked = true;
      const priceText = selectedBox.querySelector(
        ".price-container span"
      )?.textContent;
      totalDisplay.textContent = priceText;
    }
  }

  addToCart.addEventListener("click", function () {
    const selectedPrice = totalDisplay.textContent;

    console.log("clicked", selectedPrice);
  });

  boxCards.forEach((box) => {
    box.addEventListener("click", () => {
      updateSelection(box);
    });

    const radio = box.querySelector(".radio-box");
    radio.addEventListener("click", function (event) {
      event.stopPropagation();
      updateSelection(box);
    });
  });
});
