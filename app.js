const submitButton = document.querySelector('.rating_card_button');
const ratingCard = document.querySelector('.rating_card');
const stateCard = document.querySelector('.state_card');

submitButton.onclick = function () {
	ratingCard.style.display = 'none';
	stateCard.style.display = 'flex';
};
