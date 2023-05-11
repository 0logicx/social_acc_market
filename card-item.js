const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (event) {
  // Проверяем что клик был совершенно по значению "Добавить в коризну

  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку где был совершен клик

    const card = event.target.closest(".magazine__item");
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".description__item").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      price: card.querySelector(".price__item").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    // Проверяем есть ли такой товар в корзине

    const itemInCard = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    // Если товар есть в коризне

    if (itemInCard) {
      const counterElement = itemInCard.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      // Если товара нет в корзине

      // В шаблонную строку добавляем элементы из нашего объекта

      const catditemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" height="40px" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items__in__card">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										
									</div>
								</div>
							</div>`;

      // Отобразить товар в корзине
      cartWrapper.insertAdjacentHTML("beforeend", catditemHTML);
    }

    // Сбрасываем счетчик количества товаров после добавления в корзину

    card.querySelector("[data-counter]").innerText = "1";
  }
});
