let count = 0
const btn = document.getElementById('button__click')
const counter = document.getElementById('counter')

btn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});