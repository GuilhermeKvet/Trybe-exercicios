window.onload = function () {
    let select = document.querySelector('#select');
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('backgroundColor', selected.value);
    })

    let corTexto = document.getElementById('textoPrincipal');
    corTexto.addEventListener('click', function () {
        corTexto.style.color = 'white';
    
        localStorage.setItem('color', 'white');
    })

    let input = document.getElementById('input');
    input.addEventListener('change', function () {
        let p = document.getElementById('textoPrincipal');
        p.style.fontSize = `${input.value}px`;

        localStorage.setItem('font-size', `${input.value}px`);
    })

    let espacoLinhas = document.getElementById('spaceLine');
    espacoLinhas.addEventListener('change', function () {
        let p = document.getElementById('textoPrincipal');
        p.style.lineHeight = `${espacoLinhas.value}px`;

        localStorage.setItem('lineHeight', `${espacoLinhas.value}px`);
    })    

    let font = document.getElementById('textoPrincipal');
    font.addEventListener('dblclick', function () {
        font.style.fontFamily = 'arial';
    
        localStorage.setItem('fontFamily', 'arial');
    })   


    let savedBackground = localStorage.getItem('backgroundColor');
    document.body.style.backgroundColor = savedBackground;

    let savedFontSize = localStorage.getItem('font-size');
    let p = document.getElementById('textoPrincipal');
    p.style.fontSize = savedFontSize;

    let savedColor = localStorage.getItem('color');
    p.style.color = savedColor;

    let savedLineHeight = localStorage.getItem('lineHeight');
    p.style.lineHeight = savedLineHeight;

    let savedFontFamily = localStorage.getItem('fontFamily');
    p.style.fontFamily = savedFontFamily;
}


