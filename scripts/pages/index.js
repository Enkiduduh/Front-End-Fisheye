  async function getPhotographers() {
    let response = await fetch('data/photographers.json');

    if (!response.ok) {
      alert("HTTP-Error: " + response.status);
    } else {
      let data = await response.json();
      let photographers = data.photographers;
      // console.log(photographers);
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
      photographers.forEach((photographer) => {
          const photographerId = photographer.id;
          console.log(photographerId)
          })
        }
        verif();

  async function clickOnPortrait () {
    const { photographers } = await getPhotographers();
    const imgArray = document.querySelectorAll("img")
    console.log(imgArray)
    imgArray.forEach(img => {
      img.addEventListener("click", () => {
        photographers.forEach((photographer) => {
          const photographerId = img.id;
          window.location.href = `photographer.html?id=${photographerId}`;
          console.log("test");
        })
      })
    });

  }
  clickOnPortrait();

async function storageData () {
  const { photographers } = await getPhotographers();
  const photographersDataSaved = { photographers };

  const dataStringified = JSON.stringify(photographersDataSaved);

  localStorage.setItem("dataPhotographers", dataStringified);
}
storageData();
