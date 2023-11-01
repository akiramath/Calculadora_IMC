//inputs
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

//conteiners
let resultado = document.getElementById('resultado');
let box = document.getElementById('boxImc');

// textos a serem mudados
let h1 = document.getElementById('res_h1');
let h2 = document.getElementById('res_h2');

//button
let btn = document.getElementById('btn');
let body = document.getElementById('body');


function calc() {

    let imc = peso.value / (altura.value * altura.value);

    h1.innerText = `Seu IMC é ${imc.toFixed(2)}`;

    // movimento para celular
    if (window.innerWidth < 800) {
        box.style.transform = 'translateY(-60px)'
        resultado.style.transform = ' translateY(320px)'
    }

    // mudar cores, textos
    if (imc <= 18.5) {
        h2.innerText = 'Baixo peso';
        h1.style.color = '#7AA9D2';
        h2.style.color = '#7AA9D2';
        btn.style.backgroundColor = '#7AA9D2';
        body.style.backgroundColor = '#7AA9D2';
    } else if (imc > 18.6 && imc <= 24.9) {
        h2.innerText = 'Peso normal';
        h1.style.color = '#5BB988';
        h2.style.color = '#5BB988';
        btn.style.backgroundColor = '#5BB988';
        body.style.backgroundColor = '#5BB988';
    } else if (imc > 25.0 && imc <= 29.9) {
        h2.innerText = 'Excesso de peso';
        h1.style.color = '#ecd14b';
        h2.style.color = '#ecd14b';
        btn.style.backgroundColor = '#ecd14b';
        body.style.backgroundColor = '#ecd14b';
    } else if (imc > 30.0 && imc <= 34.9) {
        h2.innerText = 'Obesidade de Classe 1';
        h1.style.color = '#ED892C';
        h2.style.color = '#ED892C';
        btn.style.backgroundColor = '#ED892C';
        body.style.backgroundColor = '#ED892C';
    } else if (imc > 35.0 && imc <= 39.9) {
        h2.innerText = 'Obesidade de Classe 2';
        h1.style.color = '#DD252D';
        h2.style.color = '#DD252D';
        btn.style.backgroundColor = '#DD252D';
        body.style.backgroundColor = '#DD252D';
    } else if (imc > 40) {
        h2.innerText = 'Obesidade de Classe 3';
        h1.style.color = '#6c0409';
        h2.style.color = '#6c0409';
        btn.style.backgroundColor = '#6c0409';
        body.style.backgroundColor = '#6c0409';
    } else {
        h1.innerText = 'Preencha os dados'
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
})

btn.addEventListener('mouseover', () => {
    setTimeout(() => {
        if (window.innerWidth > 800) {
            box.style.transform = 'translateX(-100px)'
            resultado.style.transform = 'translateX(250px) translateY(80px)'
        }
    }, 400);
})

btn.addEventListener('mouseout', () => {
    if (window.innerWidth > 800) {
        box.style.transform = 'translateX(0)'
        resultado.style.transform = 'translateX(0) translateY(0)'
    }
})