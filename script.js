function irPara(link)
{
    window.location.href = link;
}

function addClickListeners(classe, destino)
{
    document.querySelectorAll(classe)
        .forEach(link =>
        {
            link.addEventListener('click', () => irPara(destino));
        });
}

addClickListeners('.index', 'index.html');
addClickListeners('.curso-de-java', 'curso-de-java.html');
addClickListeners('.aula-de-java', 'aula-de-java.html');
