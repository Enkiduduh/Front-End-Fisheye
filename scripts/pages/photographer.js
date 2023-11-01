//Mettre le code JavaScript lié à la page photographer.html
// console.log(photographerList[1].name)




const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"))   //phId

const photographersRecall = localStorage.getItem("dataPhotographers");
const photographersData = JSON.parse(photographersRecall);

// let currentPhotographer = photographersData.filter(p => p.id == id)
// console.log(currentPhotographer)

let mediaList = [];

const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("contact_modal");


function sumTab (array) {
  const sum = (accumulator, value) => accumulator + value;
  const initialValue = 0;
  sumResult = array.reduce(sum, initialValue);
  return (sumResult);
}

const photographersIdArray = [243,930,82,527,925,195];
console.log(id)
let sumResult = 0;
async function getMedia() {
  let response = await fetch('data/photographers.json');
  if (!response.ok) {
    alert("HTTP-Error: " + response.statut);
  } else {
      let data = await response.json();
      let media = data.media;
      mediaList = [...media];
      return {
          media: [...media]
        };
      }
    }

    function immediateMedia () {
    getMedia()
    .then(() => {
      console.log(mediaList);
      console.log(mediaList[2].title);

    })
  }
  immediateMedia()

function checkPhotographerId () {
    for (let i = 0; i< photographersIdArray.length; i++) {
        if (photographersIdArray[i] == id) {
          const photographerName = photographersData[i].name;
          const photographerCity = photographersData[i].city;
          const photographerCountry = photographersData[i].country;
          const photographerTagline = photographersData[i].tagline;
          const photographerPrice = photographersData[i].price;
          const photographerPortrait = `assets/photographers/${photographersData[i].portrait}`;
          console.log(`id:${id}`)
          console.log(photographersData[i].name)
          const mainHeadId = document.getElementById ("main-head");
          mainHeadId.innerHTML =
          `<div class="photograph-header">
          <div class="info-photographer">
          <h1>${photographersData[i].name}</h1>
          <p class="p1">${photographersData[i].city}, ${photographersData[i].country}</p>
          <p class="p2">${photographersData[i].tagline}</p>
          </div>
          <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          <img src="assets/photographers/${photographersData[i].portrait}" alt="portrait of the artist Tracy Galindo">
          </div>`;
          getMedia();
        }
      }
    }

    checkPhotographerId()


    async function displayMediaWithPhotographerId () {
      const { media } = await getMedia();
      for (let x = 0; x< photographersIdArray.length; x++) {
        if (photographersIdArray[x] == id) {
          let mediaFiltered = media.filter(m => m.photographerId == id)
          const photographer_gallery = document.getElementById ("photographer_gallery");
          console.log(mediaFiltered)
          const sommeNbLikes = [];
          for (let i = 0; i < mediaFiltered.length; i++) {
            const galleryCard = document.createElement("div");
            galleryCard.classList.add("gallery_card");
            galleryCard.innerHTML =
            `<img src="assets/images/${photographersData[x].name}/${mediaFiltered[i].image}"  class="gallery_image" alt="assets/images/${photographersData[x].name}/${mediaFiltered[i].title}">
            <div class="card_info">
            <h3>${mediaFiltered[i].title}</h3>
            <div>
            <span>${mediaFiltered[i].likes}</span>
            <i class="fa-solid fa-heart"></i>
            </div>
            </div>`;
            photographer_gallery.appendChild(galleryCard);
            sommeNbLikes.push(mediaFiltered[i].likes);
            displayImgInModal ()
          }
          sumTab(sommeNbLikes);
          const nbLikes = document.getElementById("nb_likes");
          nbLikes.innerHTML =`${sumResult} <i class="fa-solid fa-heart"></i>`;
          const price = document.getElementById("price");
          price.innerHTML =`${photographersData[x].price}€ / jour`;
        }
      }
    }
    displayMediaWithPhotographerId()

function displayImgInModal () {
    const main = document.getElementById("main-container");
    const images = document.querySelectorAll(".gallery_image");
    const modal = document.getElementById("display_modal");
    const modalImage = document.getElementById("modal_image");
    const caption = document.getElementById("caption");
    const closeModalBtn = document.getElementById("close_modal_display");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    let currentIndex = 0; // Index de l'image actuellement affichée


    images.forEach((image, index) => {
      image.addEventListener("click", function(){
        modal.style.display = "flex"; // Afficher la modal
        currentIndex = index; // Mettre à jour l'index de l'image actuelle
        currentImageDisplay();

        // Gérer la fermeture de la modal lorsque l'utilisateur clique sur le bouton de fermeture
        closeModalBtn.addEventListener("click", function() {
          modal.style.display = "none"; // Cacher la modal
        });
        leftArrow.addEventListener("click", previousImageDisplay); // Afficher l'image précédente dans la modal
        rightArrow.addEventListener("click", nextImageDisplay); // Afficher l'image suivante dans la modal
    });
  });
    function currentImageDisplay() {
      const chemin = images[currentIndex].alt;
      const regExp = /\/([^/]+)$/;
      const match = chemin.match(regExp);
      if (match) {
        const dernierePartie = match[1];
        caption.innerHTML = dernierePartie;
        modalImage.src = images[currentIndex].src;// Afficher l'image cliquée dans la modal
      }
      // caption.innerHTML = images[currentIndex].alt; // Utiliser le titre comme légende
      // console.log(images[currentIndex])
    }

    function nextImageDisplay () {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        currentImageDisplay();
      }
    }
    function previousImageDisplay () {
      if (currentIndex > 0) {
        currentIndex--;
        currentImageDisplay();
      }
    }
  }
