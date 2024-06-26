import { post } from "./module.js"

const $root = document.querySelector("#root")
const $form = document.createElement("form")
const $btn = document.createElement("button")
const $input = document.createElement("input")
$btn.textContent = "Solicitar nuevo"
const $section = document.createElement("section")
const $fragme = document.createDocumentFragment()

$form.appendChild($input)
$form.appendChild($btn)
$root.appendChild($form)
$root.appendChild($section)

const agregarPost = (event) => {
  event.preventDefault()
  const id = $input.value.trim()

  if (id === "") {
    alert("Está vacío")
    $input.classList.add("error")
    $input.classList.remove("success")
  } else {
    if (!isNaN(id)) {
      $input.classList.remove("error")
      $input.classList.add("success")

      post(id)
        .then((response) => {
          const $card = document.createElement("div")
          const $title = document.createElement("h2")
          const $body = document.createElement("p")

          $title.textContent = `${response.id} - ${response.title}`
          $body.textContent = response.body

          $card.appendChild($title)
          $card.appendChild($body)

          $fragme.appendChild($card)
          $section.insertBefore($fragme, $section.firstChild)
        })
        .catch((error) => {
          console.error("Error fetching post:", error)
          alert("Hubo un problema al obtener el post.")
        })
    } else {
      alert("Ingrese solo números")
      $input.classList.add("error")
      $input.classList.remove("success")
    }
  }
}

$form.addEventListener('submit', agregarPost)
// $btn.addEventListener('click', agregarPost)


// $input.addEventListener('keypress', function () {
//   alert("SERA????")
// })


