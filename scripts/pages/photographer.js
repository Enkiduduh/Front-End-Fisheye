//Mettre le code JavaScript lié à la page photographer.html

// const url = 'data/photographers.json';
//         fetch(url)
//          .then((resp) => resp.json())
//          console.log(resp)
//          .then(function(data){
//             let photographers = data.results;
//          });
// function getPhotographers() {

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");
const img = document.getElementById("img-output");

fetch('data/photographers.json')
  .then(res => res.json())
  .then(data => {
    output1.textContent =`Infos du photogrape: ${data.photographers[0].name}`
    output2.textContent =`Id: ${data.photographers[0].id}`;
    output3.textContent =`Ville: ${data.photographers[0].city} `;
    output4.textContent =`Tagline ${data.photographers[0].tagline}`;
    console.log( data.photographers[0].portrait)
    img.src = data.photographers[0].portrait;
    img.width = 100;
  });




// }
// getPhotographers();
