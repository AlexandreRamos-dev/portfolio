    const botaotema = document.querySelector('#botao-tema');
    const main = document.querySelector('#conteudo-principal');
    let temaclaro = false;


    botaotema.addEventListener('click', mudartema);

    function mudartema() {
        if(temaclaro) {
            main.style.backgroundColor = '#1B1B1C';
            botaotema.style.backgroundColor = '#1B1B1C'
        } else {
            main.style.backgroundColor = '#C3ADE4';
            botaotema.style.backgroundColor = '#C3ADE4'
        }
        temaclaro = !temaclaro;
    }