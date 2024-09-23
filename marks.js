const marksForm = document.getElementById('marks-form');
const feedbackMessage = document.getElementById('feedback-message');

marksForm.addEventListener('submit', function(event) {
    let isValid = true;
    const inputs = marksForm.querySelectorAll('input[type="number"]');
    const selectedBoard = document.getElementById('board').value;

    feedbackMessage.style.display = 'none';
    feedbackMessage.textContent = '';

    let maxMarks = {
        cbse: { physics: 100, mathematics: 100, chemistry: 100 },
        icse: { physics: 100, mathematics: 100, chemistry: 100 },
        state: { physics: 120, mathematics: 100, chemistry: 120 }
    };

    inputs.forEach(input => {
        const value = parseInt(input.value, 10);
        const subject = input.name;

        if (value < 0 || value > maxMarks[selectedBoard][subject]) {
            isValid = false;
            input.classList.add('error');
            feedbackMessage.textContent += `Warning: ${subject.charAt(0).toUpperCase() + subject.slice(1)} marks must be between 0 and ${maxMarks[selectedBoard][subject]}.\n`;
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        event.preventDefault();
        feedbackMessage.style.display = 'block';
    }
});
