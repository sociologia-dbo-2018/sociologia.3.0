import {getNews} from './modules/rss.module.js';
import {formControl} from './modules/formControl.module.js';

document.addEventListener('DOMLoadedContent', init());

function init() {
    // Carregando o Feed Principal do mapa

    // Carregando RSS Global
    getNews();
    // Carregando RSS Local
    
    // Alguns Eventos
    document.querySelector('.btnForm').addEventListener('click', (e) => formControl());
}



