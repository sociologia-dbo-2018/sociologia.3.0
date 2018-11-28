const divMapa = document.querySelector('.mapa');
const divSelecao = document.querySelector('.selecao');
const inputs = document.querySelectorAll('.selecao input');

export const nextForm = function(e) {
    e.preventDefault();
    divMapa.style.display = 'none';
    divSelecao.style.display = 'inline';
};

export const secondPartForm = function(e) {
    e.preventDefault();
    for (const input of inputs) {
        if (input.checked) {
            const value = input.value;
            const div = document.querySelector(`div.${value}.opcoes`);
            div.style.display = 'inline';
            divSelecao.style.display = 'none';
        }
    }
};
