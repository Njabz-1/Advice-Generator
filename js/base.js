const adviceDiv = document.querySelector('#advice');
const idDiv = document.querySelector('#id');
const adviceBtn = document.querySelector('#generate');


adviceBtn.addEventListener('click', getAdvice);

window.onload = getAdvice;


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const object = data.slip;
        idDiv.innerHTML = `<p class="text-center">Advice # ${object.id}</p>`;
        adviceDiv.innerHTML = `<p class="text-center">"${object.advice}"</p>`;
    })
    .catch(error => {
        console.log(error);
    })
}