const buttons = document.querySelectorAll('.buttons button');
const submit = document.getElementById('submit');
let selected = '';
submit.addEventListener('click', function () {
    console.log('test');
    alert('selected');

});
console.log(buttons);
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        selected = button.textContent;
    });
});