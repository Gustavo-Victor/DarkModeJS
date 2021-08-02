//pegar input
const input_checkbox = window.document.getElementById('btn');

//adicionar evento que chama função quando input for marcado ou desmarcado
input_checkbox.addEventListener('change', () =>{
    window.document.body.classList.toggle('dark');
});


