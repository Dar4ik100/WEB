// Отримуємо всі кнопки клавіатури
const keys = document.querySelectorAll('.key');
const input = document.getElementById('text-input');

// Додаємо слухач подій для кожної кнопки
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.value;

        if (value === 'Backspace') {
            input.value = input.value.slice(0, -1); // Видаляємо останній символ
        } else if (value === 'Enter') {
            input.value += '\n'; // Додаємо новий рядок
        } else if (value !== 'Caps Lock' && value !== 'Shift' && value !== 'Ctrl' && value !== 'Win' && value !== 'Alt') {
            input.value += value; // Додаємо символ до поля
        }
    });
});
