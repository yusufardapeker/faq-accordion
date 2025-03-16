const questionElements = document.querySelectorAll(".faq__items__item__question");

questionElements.forEach((faqElement) => {
	faqElement.addEventListener("click", ({ target }) => {
		const itemElement = target.closest(".faq__items__item");
		const arrowIcon = itemElement.childNodes[1].childNodes[3];

		itemElement.classList.toggle("show");

		itemElement.classList.value.includes("show")
			? (arrowIcon.src = "./assets/images/icon-minus.svg")
			: (arrowIcon.src = "./assets/images/icon-plus.svg");
	});
});
