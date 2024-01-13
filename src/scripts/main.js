document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-sorteador').addEventListener('submit', function(event){
        let numeroMaximo = document.querySelector('#numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.ceil(Math.random() * numeroMaximo);

        document.querySelector('#resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'

        event.preventDefault();
    })
})