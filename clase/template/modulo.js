export const comentarios = async () => {

  const solicitud = await fetch(" https://jsonplaceholder.typicode.com/comments")
  const comentario = await solicitud.json()
  return comentario
}