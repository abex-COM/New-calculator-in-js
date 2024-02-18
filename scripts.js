
const input = document.querySelector('input');
const btnc = document.querySelector('.but-c');
const result = document.querySelector('.result');
const equal = document.querySelector('.equal')

function buttonValues(value) {
    input.value += value;
}

btnc.addEventListener(('click'), () => {
    input.value = ''
    result.textContent = '';
});


equal.addEventListener(('click'), function () {
    ((result.textContent)) = eval(input.value);
});