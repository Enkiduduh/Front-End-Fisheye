//Mettre le code JavaScript lié à la page photographer.html

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"))

const photographersRecall = localStorage.getItem("dataPhotographers");
const photographersData = JSON.parse(photographersRecall);

function checkPhotographerId () {
  if (id == 243) {
      const photographerName = photographersData[0].name
      const photographerCity = photographersData[0].city
      const photographerCountry = photographersData[0].country;
      const photographerTagline =photographersData[0].tagline;
      const photographerPrice = photographersData[0].price;
      const photographerPortrait = photographersData[0].portrait;
      console.log(`id:${id}`)
  } else if (id == 930) {
      const photographerName = photographersData[1].name
      const photographerCity = photographersData[1].city
      const photographerCountry = photographersData[1].country;
      const photographerTagline =photographersData[1].tagline;
      const photographerPrice = photographersData[1].price;
      const photographerPortrait = photographersData[1].portrait;
      console.log(`id:${id}`)
  } else if (id == 82) {
      const photographerName = photographersData[2].name
      const photographerCity = photographersData[2].city
      const photographerCountry = photographersData[2].country;
      const photographerTagline =photographersData[2].tagline;
      const photographerPrice = photographersData[2].price;
      const photographerPortrait = photographersData[2].portrait;
      console.log(`id:${id}`)
  } else if (id == 527) {
      const photographerName = photographersData[3].name
      const photographerCity = photographersData[3].city
      const photographerCountry = photographersData[3].country;
      const photographerTagline =photographersData[3].tagline;
      const photographerPrice = photographersData[3].price;
      const photographerPortrait = photographersData[3].portrait;
      console.log(`id:${id}`)
  } else if (id == 925) {
      const photographerName = photographersData[4].name
      const photographerCity = photographersData[4].city
      const photographerCountry = photographersData[4].country;
      const photographerTagline =photographersData[4].tagline;
      const photographerPrice = photographersData[4].price;
      const photographerPortrait = photographersData[4].portrait;
      console.log(`id:${id}`)
  } else if (id == 195) {
      const photographerName = photographersData[5].name
      const photographerCity = photographersData[5].city
      const photographerCountry = photographersData[5].country;
      const photographerTagline = photographersData[5].tagline;
      const photographerPrice = photographersData[5].price;
      const photographerPortrait = `assets/photographers/${photographersData[5].portrait}`;
      console.log(`id:${id}`)
      console.log(photographersData[5].portrait)
  }
}
checkPhotographerId();

// function displayData(photographersData) {
//   console.log("A")
//   const photographerHeaderSection = document.querySelector(".photograph-header");
//   const div = document.createElement("div");
//   div.setAttribute("class", "info-photographer");
//   const img = document.createElement( 'img' );
//   console.log("B")
//   img.setAttribute("src", photographerPortrait);
//   img.setAttribute("alt", `portrait of the artist ${photographerName}`);
//   console.log("C")
//   const buttonContact = `<button class="contact_button" onclick="displayModal()">Contactez-moi</button>`
//   console.log("D")
//   const h1 = document.createElement( 'h1' );
//   h1.textContent = photographerName;
//   const p1 = document.createElement( 'p' );
//   p1.textContent = `${photographerCity}, ${photographerCountry}`;
//   const p2 = document.createElement( 'p' );
//   p2.textContent = photographerTagline;
//   console.log("CE")
//   photographerHeaderSection.appendChild(div)
//   div.appendChild(h1)
//   div.appendChild(p1)
//   div.appendChild(h2)
//   photographerHeaderSection.appendChild(buttonContact)
//   photographerHeaderSection.appendChild(img)
//   console.log("F")

// }



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
