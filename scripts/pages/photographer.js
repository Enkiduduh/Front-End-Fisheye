//Mettre le code JavaScript lié à la page photographer.html

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"))
console.log(id);

const photographersRecall = localStorage.getItem("dataPhotographers");
const photographers = JSON.parse(photographersRecall);
console.log(photographers);
