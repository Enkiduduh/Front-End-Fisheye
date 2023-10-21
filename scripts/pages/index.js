  async function getPhotographers() {
    let response = await fetch('data/photographers.json');

    if (!response.ok) {
      alert("HTTP-Error: " + response.status);
    } else {
      let data = await response.json();
      let photographers = data.photographers;
      console.log(photographers);
      return {
        photographers: [...photographers]
    };
  }}

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }

    init();

  async function verif() {
  // Récupère les datas des photographes
      const { photographers } = await getPhotographers();
      // console.log(photographers[2].id)
      // console.log(photographers[4].portrait)
      photographers.forEach((photographer) => {
          const photographerId = photographer.id;
          console.log(photographerId)
          })
        }
        verif();

  async function clickOnPortrait () {
    const { photographers } = await getPhotographers();
    const dataStringified = JSON.stringify(photographers);
    const imgArray = document.querySelectorAll("img")
    console.log(imgArray)
    imgArray.forEach(img => {
      img.addEventListener("click", () => {
        photographers.forEach((photographer) => {
          const pgrId = img.id;
          // const pgrCity = photographers[0].city;
          // const pgrCountry = photographer.country;
          // const pgrTagline = photographer.tagline;
          // const pgrPrice = photographer.price;
          // const pgrName = photographer.name;
          // const pgrPortrait = photographer.portrait;
          window.location.href = `photographer.html?id=${pgrId}`;
          // window.location.href = `photographer.html?id=${pgrId}&name=${pgrName}&city=${pgrCity}&country=${pgrCountry}&tagline=${pgrTagline}&price=${pgrPrice}&portrait=${pgrPortrait}`;
          console.log("changement de page test");
        })
      })
    });

  }
  clickOnPortrait();

// Fonction de sauvegarde des données photographers
  async function storageData () {
  const { photographers } = await getPhotographers(); // On récupère
  const photographersDataSaved = { photographers };   // le Json
  // On strigify la variable > Transforme le Json en String
  const dataStringified = JSON.stringify(photographers);
  // On sauvegarde la data devenue une string afin de pouvoir
  // la réutiliser sur une autre page
  localStorage.setItem("dataPhotographers", dataStringified);
}
storageData();
