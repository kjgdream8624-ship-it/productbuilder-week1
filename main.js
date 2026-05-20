const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.getElementById('numbers-display');

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numbersDisplay.innerHTML = '';

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.className = 'number';
        numberElement.textContent = number;
        numbersDisplay.appendChild(numberElement);
    });
});