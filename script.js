function toggleSidebar() {
    let btn = document.querySelector('#btn');
    let sessao = document.querySelector('#section');

    btn.classList.toggle('open');
    sessao.classList.toggle('open');
}

function CorPrincipal() {
    let root = document.documentElement;
    root.style.setProperty('--cor1', '#180F4A');
    root.style.setProperty('--cor2', '#FF2978');
    root.style.setProperty('--cor3', '#FF2978');
}

function CorSecundaria() {
    let root = document.documentElement;
    root.style.setProperty('--cor1', '#B0C4DE');
    root.style.setProperty('--cor2', '#2F4F4F');
    root.style.setProperty('--cor3', '#2F4F4F');
}

function CorTerceira() {
    let root = document.documentElement;
    root.style.setProperty('--cor1', '#BDC3C7');
    root.style.setProperty('--cor2', '#2C3E50');
    root.style.setProperty('--cor3', '#BDC3C7');
}
