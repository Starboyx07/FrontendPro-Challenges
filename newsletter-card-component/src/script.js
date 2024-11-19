// write your JavaScript here
const form = document.getElementById('myform');
const emailInput = document.getElementById('email');
const errorText = document.getElementById('error');

form.addEventListener('submit', function (event) {
const emailValue = emailInput.value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(emailValue)) {
    event.preventDefault(); 
    errorText.style.display = 'block';
} else {
    errorText.style.display = 'none'; 
}
});