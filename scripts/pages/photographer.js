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

function sumArray (array) {
  const sum = (accumulator, value) => accumulator + value;
  const initialValue = 0;
  sumResult = array.reduce(sum, initialValue);
  return (sumResult);
}


const photographersIdArray = [243,930,82,527,925,195];

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
          const waiting = document.getElementById("waiting");
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
          waiting.textContent=photographerName;
          getMedia();
        }
      }
    }

    checkPhotographerId()



    function updateLikes(heartIcon, likes) {
      heartIcon.previousElementSibling.textContent = likes; // Met à jour le texte du nombre de likes
    }

    async function displayMediaWithPhotographerId () {
      const { media } = await getMedia();
      const sommeNbLikes = [];
      const filterMedia = document.getElementById ("filter");

      for (let x = 0; x< photographersIdArray.length; x++) {
        if (photographersIdArray[x] == id) {
          let mediaFiltered = media.filter(m => m.photographerId == id)
          const photographer_gallery = document.getElementById ("photographer_gallery");
          for (let i = 0; i < mediaFiltered.length; i++) {
            const galleryCard = document.createElement("div");
            galleryCard.classList.add("gallery_card");
            if (mediaFiltered[i].image) {
              galleryCard.innerHTML =
              `<img src="assets/images/${photographersData[x].name}/${mediaFiltered[i].image}"  class="gallery_media" alt="assets/images/${photographersData[x].name}/${mediaFiltered[i].title}">
              <div class="card_info">
              <h3>${mediaFiltered[i].title}</h3>
              <div>
              <span data-like="${mediaFiltered[i].likes}">${mediaFiltered[i].likes}</span>
              <i class="fa-solid fa-heart hearticon"></i>
              </div>
              </div>`;
            } else if (mediaFiltered[i].video) {
              galleryCard.innerHTML =
              `<video class="gallery_media" src="assets/images/${photographersData[x].name}/${mediaFiltered[i].video}" alt="assets/images/${photographersData[x].name}/${mediaFiltered[i].title}">
              </video>
              <div class="card_info">
              <h3>${mediaFiltered[i].title}</h3>
              <div>
              <span data-like="${mediaFiltered[i].likes}">${mediaFiltered[i].likes}</span>
              <i class="fa-solid fa-heart hearticon"></i>
              </div>
              </div>`;
            }
            photographer_gallery.appendChild(galleryCard);
            const heartIcon = galleryCard.querySelector(".hearticon");
            const likesSpan = galleryCard.querySelector("span");
            const mediaItem = mediaFiltered[i];
            mediaItem.hasLiked = false;
            sommeNbLikes.push(mediaFiltered[i].likes);
            addOrRemoveALike (heartIcon, mediaItem);
            displayImgInModal ()

          }
          sumArray(sommeNbLikes);
          const nbLikes = document.getElementById("nb_likes");
          nbLikes.innerHTML =`${sumResult} <i class="fa-solid fa-heart"></i>`;
          const price = document.getElementById("price");
          price.innerHTML =`${photographersData[x].price}€ / jour`;

          function addOrRemoveALike (heartIcon, media) {
            heartIcon.addEventListener("click", function(){
               if (!media.hasLiked) {
                  console.log("Entree addALike")
                  media.likes++; // Augmente de 1 les likes
                  media.hasLiked = true; // On set à True pour bloquer à 1 seul like ajouté
                  heartIcon.classList.add("hearticon_liked");
                  updateLikes(heartIcon, media.likes); // Met à jour l'affichage du nombre de likes
                  sumResult += 1;
                  console.log(sumResult)
                  nbLikes.innerHTML =`${sumResult} <i class="fa-solid fa-heart"></i>`;
                } else if (media.hasLiked) {
                    console.log("Entree removeALike")
                    media.likes--; // Suppression du like présent si déjà ajouté
                    media.hasLiked = false; //
                    heartIcon.classList.remove("hearticon_liked");
                    heartIcon.classList.add("hearticon");
                    updateLikes(heartIcon, media.likes); //
                    sumResult -= 1;
                    console.log(sumResult)
                    nbLikes.innerHTML =`${sumResult} <i class="fa-solid fa-heart"></i>`;
                }
            });
          }

          const filterMedia = document.getElementById("filter");
          filterMedia.addEventListener("change", function() {
            const selectedFilter = filterMedia.value;
            if (selectedFilter === "popularite") {
              // Triez par popularité
              mediaFiltered.sort((a, b) => b.likes - a.likes);
            } else if (selectedFilter === "date") {
              // Triez par date (remplacez par la logique appropriée)
              mediaFiltered.sort((a, b) => {
                const dateA = new Date((a.date))
                const dateB = new Date((b.date))
                return dateA - dateB;
              });

            } else if (selectedFilter === "titre") {
              // Triez par titre (remplacez par la logique appropriée)
              mediaFiltered.sort((a, b) => a.title.localeCompare(b.title));
            }
            // Effacez l'affichage existant
            const photographer_gallery = document.getElementById("photographer_gallery");
            photographer_gallery.innerHTML = "";

            // Réaffichez les éléments triés
            for (let i = 0; i < mediaFiltered.length; i++) {
              // Créez et ajoutez les éléments triés au photographe_gallery
              const galleryCard = document.createElement("div");
              galleryCard.classList.add("gallery_card");
              galleryCard.innerHTML =
              `<img src="assets/images/${photographersData[x].name}/${mediaFiltered[i].image}"  class="gallery_media" alt="assets/images/${photographersData[x].name}/${mediaFiltered[i].title}">
              <div class="card_info">
              <h3>${mediaFiltered[i].title}</h3>
              <div>
              <span data-like="${mediaFiltered[i].likes}">${mediaFiltered[i].likes}</span>
              <i class="fa-solid fa-heart hearticon"></i>
              </div>
              </div>`;
              photographer_gallery.appendChild(galleryCard);
              const heartIcon = galleryCard.querySelector(".hearticon");
              const likesSpan = galleryCard.querySelector("span");
              const mediaItem = mediaFiltered[i];
              mediaItem.hasLiked = false;
              sommeNbLikes.push(mediaFiltered[i].likes);
              addOrRemoveALike (heartIcon, mediaItem);
              displayImgInModal ()
            }
        })
      }}
    }
    displayMediaWithPhotographerId()




    function displayImgInModal () {
      const main = document.getElementById("main-container");
      const medias = document.querySelectorAll(".gallery_media");
      const modal = document.getElementById("display_modal");
      const modalImage = document.getElementById("modal_image");
      const modalVideo = document.getElementById("modal_video");
      const ModalCurrentMedias = document.getElementById("medias");
      const modalBg = document.getElementById("display_modal_background");
      const caption = document.getElementById("caption");
      const closeModalBtn = document.getElementById("close_modal_display");
      const leftArrow = document.getElementById("left-arrow");
      const rightArrow = document.getElementById("right-arrow");

      let currentIndex = 0; // Index de l'image actuellement affichée


    medias.forEach((media, index) => {
      media.addEventListener("click", function(){
        modal.style.display = "block"; // Afficher la modal
        modalBg.style.display = "block";
        document.body.classList.add("no-scroll");
        currentIndex = index; // Mettre à jour l'index de l'image actuelle
        currentMediaDisplay();

        // Gérer la fermeture de la modal lorsque l'utilisateur clique sur le bouton de fermeture
        closeModalBtn.addEventListener("click", closeModalDisplay );
        leftArrow.addEventListener("click", previousMediaDisplay); // Afficher l'image précédente dans la modal
        rightArrow.addEventListener("click", nextMediaDisplay); // Afficher l'image suivante dans la modal
    });
  });
    function currentMediaDisplay() {

      const chemin = medias[currentIndex].src; //Recupérer dans le src la derniere partie
      const title = medias[currentIndex].alt;
      const regExpJpg = /\.jpg$/;
      const regExpVideo = /\.mp4$/;
      const matchVideo = chemin.match(regExpVideo);
      const matchImage = chemin.match(regExpJpg);

      const regExp = /\/([^/]+)$/;   //Afin d'afficher le "title" du média via une regExp


      if (matchImage) {
        const match = medias[currentIndex].alt.match(regExp);
      if (match) {
        const dernierePartie = match[1];
        caption.innerHTML = dernierePartie;
      }
        modalImage.style.display = "block";
        modalVideo.style.display = "none";
        modalImage.src = chemin;// Afficher l'image cliquée dans la modal
        console.log(medias[currentIndex])
      } else if (matchVideo) {
          modalImage.style.display = "none";
          modalVideo.style.display = "block";
          modalVideo.src = medias[currentIndex].src;
          modalVideo.autoplay = true;
          modalVideo.loop = true;
          console.log(medias[currentIndex])
        }
      //  else if (medias[currentIndex].type === "mp4") {
      //     modalVideo.innerHTML =`<video src="${medias[currentIndex].src}" alt="${medias[currentIndex].alt}" autoplay="" loop=""></video>`
      //     console.log("2")
      // }

    }

    function nextMediaDisplay () {
      if (currentIndex < medias.length - 1) {
        currentIndex++;
        currentMediaDisplay();
      }
    }
    function previousMediaDisplay () {
      if (currentIndex > 0) {
        currentIndex--;
        currentMediaDisplay();
      }
    }
    function closeModalDisplay () {
      modal.style.display = "none"; // Cacher la modal
      modalBg.style.display = "none";
      document.body.classList.remove("no-scroll"); // Remettre en place la barre de scroll
    }
      // Gestion des touches du clavier
      document.addEventListener("keydown", function (event) {
        if (modal.style.display === "block") {
          switch (event.key) {
            case "ArrowLeft":
              previousMediaDisplay();
              break;
            case "ArrowRight":
              nextMediaDisplay();
              break;
            case "Escape":
              closeModalDisplay();
              break;
          }
        }
      });
  }

    const form = document.getElementById("myForm");
    console.log(form);

    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    console.log(form.firstname)

    form.firstname.addEventListener("input", function(){
        console.log("bonjour")
    })
    form.lastname.addEventListener("input", function(){
      console.log("bonjour")
    })
    form.email.addEventListener("input", function(){
      console.log("bonjour")
    })
    form.message.addEventListener("input", function(){

    })

    function validate(){
      console.log(new Message(`${form.firstname.value}`,`${form.lastname.value}`,`${form.email.value}`,`${form.message.value}`))
      return false
    }

    class Message {
        constructor(firstname, lastname, email, message) {
          this.fistname = firstname;
          this.lastname = lastname;
          this.email = email;
          this.message = message;
        }

        display(){
          console.log(`Nom : ${this.lastname}, Prénom : ${this.firstname}`);
          console.log(`Email : ${this.email}`);
          console.log(`Message : ${this.message}`);
        }
    }



//   class Media {
//     constructor(data, photographerName) {
//       this.id = data.id;
//       this.photographerId = data.photographerId;
//       this.title = data.title;
//       this.likes = data.likes;
//       this.date = data.date;
//       this.price = data.price;
//       this.photographerName = photographerName;
//     }

//     display() {
//       // Logique commune pour l'affichage des médias
//       console.log(`Media ID: ${this.id}`);
//       console.log(`Photographer: ${this.photographerName}`);
//       console.log(`Title: ${this.title}`);
//       console.log(`Likes: ${this.likes}`);
//       console.log(`Date: ${this.date}`);
//       console.log(`Price: ${this.price}`);
//     }
//   }

//  // Classe spécifique pour les photos
// class Photo extends Media {
//   constructor(data, photographerName) {
//     super(data, photographerName);
//     this.image = data.image;
//   }

//   display() {
//     super.display(); // Appeler la méthode display de la classe parent
//     // Logique spécifique pour l'affichage des photos
//     console.log(`Image: ${this.image}`);
//   }
// }

//   // Classe spécifique pour les vidéos
// class Video extends Media {
//   constructor(data, photographerName) {
//     super(data, photographerName);
//     this.video = data.video;
//   }

//   display() {
//     super.display(); // Appeler la méthode display de la classe parent
//     // Logique spécifique pour l'affichage des vidéos
//     console.log(`Video: ${this.video}`);
//   }
// }

// // Factory pour créer les objets média en fonction de leur type
// class MediaFactory {
//   static createMedia(data, photographerName) {
//     if (data.image) {
//       return new Photo(data, photographerName);
//     } else if (data.video) {
//       return new Video(data, photographerName);
//     }
//     throw new Error("Invalid media type");
//   }
// }
// const mediaData = {
//   id: 1,
//   photographerId: 123,
//   title: "Beautiful Sunset",
//   likes: 42,
//   date: "2022-01-01",
//   price: 50,
//   image: "sunset.jpg"
// };

// const photographerName = "John Doe";

// const media = MediaFactory.createMedia(mediaData, photographerName);
// media.display();
