import { data } from "./datos.js";

const $fragmento = document.createDocumentFragment();
const $contenedor = document.querySelector(".container");
$contenedor.classList.add("cards")

data.map((obj) => {
  
  const $card = document.createElement("div");
  $card.classList.add("card");

  const $img = document.createElement("img");
  $img.classList.add("card__img");
  $img.src = obj.src; 

  const $cardBody = document.createElement("div");
  $cardBody.classList.add("card__body");

  const $title = document.createElement("h2");
  $title.classList.add("card__title");
  $title.textContent = obj.title; 

  const $paragraph = document.createElement("p");
  $paragraph.classList.add("card__description");
  $paragraph.textContent = obj.paragraph; 

  const $button = document.createElement("a");
  $button.classList.add("btn", "btn-primary");
  $button.href = obj.url; 
  $button.textContent = "Ver más";

  
  $cardBody.appendChild($img);
  $cardBody.appendChild($title);
  $cardBody.appendChild($paragraph);
  $cardBody.appendChild($button);

  $card.appendChild($cardBody);

  $fragmento.appendChild($card);
});


$contenedor.appendChild($fragmento);



