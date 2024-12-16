const keys = document.querySelectorAll('.key');
const input = document.getElementById('text-input');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.value;

        if (value === 'Backspace') {
            input.value = input.value.slice(0, -1); 
        } else if (value === 'Enter') {
            input.value += '\n'; 
        } else if (value !== 'Caps Lock' && value !== 'Shift' && value !== 'Ctrl' && value !== 'Win' && value !== 'Alt') {
            input.value += value; 
        }
    });
});
