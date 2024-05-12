const faqItemElements = document.querySelectorAll(".faq__items__item");

faqItemElements.forEach((faqElement) => {
	faqElement.addEventListener("click", () => {
		const arrowIcon = faqElement.childNodes[1].childNodes[3];

		faqElement.classList.toggle("show");

		faqElement.classList.value.includes("show")
			? (arrowIcon.src = "./assets/images/icon-minus.svg")
			: (arrowIcon.src = "./assets/images/icon-plus.svg");
	});
});
