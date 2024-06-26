import { comentarios } from "./modulo.js";

const $root = document.querySelector("#root")
const $fragment = document.createDocumentFragment()
const $plantilla = document.querySelector("#plantilla").content

const $section = document.createElement("section")
$section.classList.add("cards")

console.log($plantilla)

comentarios().then((lista) => {

  lista.forEach(comentario => {

    $plantilla.querySelector("div > h2").textContent = comentario.name;
    $plantilla.querySelector("div > p").textContent = comentario.email;
    $plantilla.querySelector("div > p ~ p").textContent = comentario.body;

    $plantilla.querySelector ("div").classList.add("card")
      
    const $clon = document.importNode($plantilla, true)
    $fragment.appendChild($clon)

  });

  $root.appendChild($fragment)

})