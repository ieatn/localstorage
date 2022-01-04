const input = document.querySelector('.input')
const output = document.querySelector('.output')
const btn = document.querySelector('.btn')
// getting prev input from local storage
const storedInput = localStorage.getItem('textInput')

input.addEventListener('input', letter => {
    // letter target value updates output div
    output.textContent = letter.target.value
})

const saveToLocalStorage = () => {
    // this saves to local storage
    localStorage.setItem('textInput', output.textContent)
}

btn.addEventListener('click', saveToLocalStorage)

if (input) {
    output.textContent = storedInput
}