const wizz = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
	'Yes',
	'Yes, of course!',
	'Maybe',
	'No',
	'Obviously not!!!',
	'How could you think that',
	'You dont want to know the answer to that question!!!',
	'What kind of question is that?',
	'I will not answer this question!',
];

const shakeWizz = () => {
	wizz.classList.add('shake');
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
		error.textContent = '';
		wizz.classList.remove('shake');
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'The question must end with a question mark';
		answer.textContent = '';
        wizz.classList.remove('shake')
	} else {
		error.textContent = 'You have to ask a question';
		answer.textContent = '';
        wizz.classList.remove('shake')
	}
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 9);

	answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`;
};

wizz.addEventListener('click', shakeWizz);
