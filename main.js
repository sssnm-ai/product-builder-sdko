const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleText();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', currentTheme);
    updateToggleText();
});

function updateToggleText() {
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
}

generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    });
}
