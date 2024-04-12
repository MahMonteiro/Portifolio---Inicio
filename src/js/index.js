/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão no html

        Passo 1 - pegar o botão mostar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adcionar a classe ativo nos projetos escondidos

    Objetivo 2 - econder o botão mostrar mais

        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão no html

// Passo 1 - pegar o botão mostar mais no JS pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    // bjetivo 2 - econder o botão mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    botaoMostrarProjetos.classList.add('remover');
});