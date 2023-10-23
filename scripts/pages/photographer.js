//Mettre le code JavaScript lié à la page photographer.html
// console.log(photographerList)
// console.log(photographerList[1].name)


const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"))   //phId

// let currentPhotographer = photographerList.filter(p => p.id = phId)
// console.log(currentPhotographer)

const photographersRecall = localStorage.getItem("dataPhotographers");
const photographersData = JSON.parse(photographersRecall);

const photographersId = [243,930,82,527,925,195];
console.log(id)

function checkPhotographerId () {
    for (let i = 0; i< photographersId.length; i++) {
        if (photographersId[i] == id) {
          const photographerName = photographersData[i].name;
          const photographerCity = photographersData[i].city;
          const photographerCountry = photographersData[i].country;
          const photographerTagline = photographersData[i].tagline;
          const photographerPrice = photographersData[i].price;
          const photographerPortrait = `assets/photographers/${photographersData[i].portrait}`;
          console.log(`id:${id}`)
          console.log(photographersData[i].name)
          console.log("A")
          const mainId = document.getElementById ("main");
          mainId.innerHTML =
          `<div class="photograph-header">
          <div class="info-photographer">
          <h1>${photographersData[i].name}</h1>
          <p class="p1">${photographersData[i].city}, ${photographersData[i].country}</p>
          <p class="p2">${photographersData[i].tagline}</p>
          </div>
          <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
              <img src="assets/photographers/${photographersData[i].portrait}" alt="portrait of the artist Tracy Galindo">
          </div>
          <div>
            <span>Nombre de like: icn coeur ${photographersData[i].price}€ / jour</span>
          </div>`;
          // const photographerHeaderSection = document.querySelector(".photograph-header");
          // const div = document.createElement("div");
          // div.setAttribute("class", "info-photographer");
          // const img = document.createElement( 'img' );
          // console.log("B")
          // img.setAttribute("src", photographerPortrait);
          // img.setAttribute("alt", `portrait of the artist ${photographerName}`);
          // console.log("C")
          // console.log("D")
          // const buttonContact = `<button class="contact_button" onclick="displayModal()">Contactez-moi</button>`
          // const h1 = document.createElement( 'h1' );
          // h1.textContent = photographerName;
          // const p1 = document.createElement( 'p' );
          // p1.textContent = `${photographerCity}, ${photographerCountry}`;
          // p1.classList.add("p1");
          // const p2 = document.createElement( 'p' );
          // p2.textContent = photographerTagline;
          // p2.classList.add("p2");
          // console.log("E")
          // photographerHeaderSection.appendChild(div)
          // div.appendChild(h1)
          // div.appendChild(p1)
          // div.appendChild(p2)
          // photographerHeaderSection.appendChild(img)
          // photographerHeaderSection.appendChild(buttonContact)
          // console.log("F")
        }
    }
}
checkPhotographerId();





// function init() {
//   displayData(photographersData);
// }
// init();







// const photographers = Object.values(photographersData);
// console.log(photographers)

// const photographersTableau = Object.keys(photographers).map(function(cle) {
//     return [Number(cle), photographers[cle]];
// });
// console.log(photographersTableau);

// if (!photographers) {
//   alert("HTTP-Error!");
// }
// else {
//   console.log("Photographer Data is ok :)")
//   photographers: [...photographers];
//  };

// function verif() {
//   photographers.forEach((photographer) => {
//       const photographerId = photographer.id;
//       console.log(photographerId)
//     })
//   }
// verif();


// function checkPhotographerId () {
//   if (id == 243) {
//       const photographerId = 0;
//       const photographerName = photographersData[0].name
//       const photographerCity = photographersData[0].city
//       const photographerCountry = photographersData[0].country;
//       const photographerTagline =photographersData[0].tagline;
//       const photographerPrice = photographersData[0].price;
//       const photographerPortrait = photographersData[0].portrait;
//       console.log(`id:${id}`)
//   } else if (id == 930) {
//       const photographerId = 1;
//       const photographerName = photographersData[1].name
//       const photographerCity = photographersData[1].city
//       const photographerCountry = photographersData[1].country;
//       const photographerTagline =photographersData[1].tagline;
//       const photographerPrice = photographersData[1].price;
//       const photographerPortrait = photographersData[1].portrait;
//       console.log(`id:${id}`)
//   } else if (id == 82) {
//       const photographerId = 2;
//       const photographerName = photographersData[2].name
//       const photographerCity = photographersData[2].city
//       const photographerCountry = photographersData[2].country;
//       const photographerTagline =photographersData[2].tagline;
//       const photographerPrice = photographersData[2].price;
//       const photographerPortrait = photographersData[2].portrait;
//       console.log(`id:${id}`)
//   } else if (id == 527) {
//       const photographerId = 3;
//       const photographerName = photographersData[3].name
//       const photographerCity = photographersData[3].city
//       const photographerCountry = photographersData[3].country;
//       const photographerTagline =photographersData[3].tagline;
//       const photographerPrice = photographersData[3].price;
//       const photographerPortrait = photographersData[3].portrait;
//       console.log(`id:${id}`)
//   } else if (id == 925) {
//       const photographerId = 4;
//       const photographerName = photographersData[4].name
//       const photographerCity = photographersData[4].city
//       const photographerCountry = photographersData[4].country;
//       const photographerTagline =photographersData[4].tagline;
//       const photographerPrice = photographersData[4].price;
//       const photographerPortrait = photographersData[4].portrait;
//       console.log(`id:${id}`)
//   } else if (id == 195) {
//       let i = 5;
//       const photographerName = photographersData[i].name;
//       const photographerCity = photographersData[i].city;
//       const photographerCountry = photographersData[i].country;
//       const photographerTagline = photographersData[i].tagline;
//       const photographerPrice = photographersData[i].price;
//       const photographerPortrait = `assets/photographers/${photographersData[i].portrait}`;
//       // console.log(`id:${id}`)
//       // console.log(photographerPortrait)
//       // console.log(photographerName)
//       // console.log(photographerCity)
//       // console.log(photographerCountry)
//   }
// }
// checkPhotographerId();



// function testTest (){
//   for (let i = 0; i< photographersId.length; i++) {
//     if (photographersId[i].value == id) {
//         console.log(`id:${id}`)
//         console.log(photographersData[i].name)
//         console.log(photographersData[i].city)
//         console.log(photographersData[i].tagline)
//     }
//   }
// }
// testTest()
