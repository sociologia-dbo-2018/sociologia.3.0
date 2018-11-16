import {veiculos} from '../objects/veiculos.object.js'

export const getNews = () => {
    const CORS_PROXY = 'https://cors.io/?';
    
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
    }
    console.log(veiculo);
}
