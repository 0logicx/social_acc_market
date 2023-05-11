window.addEventListener("click", function (event) {
  let NewWrapper;
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const wrapper = event.target.closest(".counter__item");
    NewWrapper = wrapper.querySelector("[data-counter]");
    console.log("Клик по минус или плюс");
  }
  if (event.target.dataset.action === "plus") {
    NewWrapper.innerText = ++NewWrapper.innerText;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(NewWrapper.innerText) > 1) {
      NewWrapper.innerText = --NewWrapper.innerText;
    }
  }
});
