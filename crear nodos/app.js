//identificamos el elemento por la clase
const $padre = document.querySelector('.container')
//Creamos un elemento
const nodo = document.createElement('p')
const texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente fugit nisi quam, debitis voluptatibus aliquid alias. Officiis mollitia a dicta. Fugiat, dolorum non perspiciatis dicta beatae eius voluptate fuga nam?"
nodo.innerText = texto;
$padre.appendChild(nodo)
