export const renderNews = (item, veiculo) => {
    const rssGlobal = document.querySelector('.rssglobal');
    // titulo da noticia
    const h4 = document.createElement('h4');
    // Noticia
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // Incluindo titulo
    h4.textContent = item[0].textContent;
    // linkando no item da list
    li.appendChild(h4);
    rssGlobal.appendChild(li);
}
