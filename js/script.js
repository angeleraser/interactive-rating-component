const root = document.getElementById("app");

class CardComponent {
  constructor(el) {
    this.element = el;
  }

  hide() {
    root.removeChild(this.element);
  }

  show() {
    root.appendChild(this.element);
  }
}

const ratingCard = new CardComponent(document.getElementById("rating-card"));
const thankYouCard = new CardComponent(
  document.getElementById("thank-you-card")
);

thankYouCard.hide();

const ratingOptions = ratingCard.element.querySelector(".rating-options");
const submitRateBtn = ratingCard.element.querySelector(".submit-rating-btn");
let selectedRateValue = 0;

ratingOptions.addEventListener("click", ({ target }) => {
  if (target.tagName === "BUTTON") {
    const { value } = target.dataset;
    const prevBtn = ratingOptions.querySelector("button.is-active");

    if (prevBtn) prevBtn.classList.remove("is-active");
    target.classList.add("is-active");
    selectedRateValue = Number(value);
  }
});

submitRateBtn.addEventListener("click", (e) => {
  if (!selectedRateValue) return;

  ratingCard.hide();
  thankYouCard.show();

  const rateText = thankYouCard.element.querySelector(".selected-rate");
  rateText.textContent = selectedRateValue;
});
