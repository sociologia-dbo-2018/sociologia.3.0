import {veiculos} from '../objects/veiculos.object.js';
import {wordFinder} from './wordFinder.module.js';
import {renderNews} from './renderNews.module.js';

export const getNews = () => {
    const CORS_PROXY = 'http://cors.io/?';
    
    let xml = null;
    
    for (const veiculo of veiculos) {
        fetch(CORS_PROXY + veiculo.endpoint)
            .then((r) => r.text())
            .then((str) => {
                const parser = new window.DOMParser();
                const xml = parser.parseFromString(str, "text/xml");
                for (const itemTag of xml.querySelectorAll('item')) {
                    veiculo.itens.push(itemTag.children);
                }
            });
        find_word_keys(veiculo);
    }
}

const find_word_keys = (veiculo) => {
    // Desestruturação de objeto para navegação melhorada
    const {nome, itens} = veiculo;
    // Navegando nos itens trazidos
    for (const item of itens) {
        if (nome === 'O Globo') {
            // Cria um vetor com todas as palavras em minusculos do titulo
            const title = item[0].textContent.toLowerCase().split(' ');
            if(wordFinder(title)) {
                renderNews(item, 'O Globo');
            }
        }
        else if (nome === 'Folha de São Paulo') {

        }
        else if (nome === 'Revista Época') {

        }
    }
}