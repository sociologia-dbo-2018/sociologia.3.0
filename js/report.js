import {nextForm, secondPartForm} from '../modules/formReportControl.js';

const button = document.querySelector('button#enviarFormulario');
const divSelecao = document.querySelector('.selecao');

button.addEventListener('click', nextForm);

divSelecao.addEventListener('click', secondPartForm);
