//Mettre le code JavaScript lié à la page photographer.html

let params = new URL(document.location).searchParams;
let id = parseInt(params.get("id"))
console.log(id);
