//Mettre le code JavaScript lié à la page photographer.html

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"))
console.log(id);

const nom = localStorage.getItem("dataPhotographer");
const photoTestRecall = localStorage.getItem("data");
console.log(photoTestRecall);
console.log(nom);
