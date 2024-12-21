const topCardContainer = document.querySelector("#topCardContainer");
const API_URL = "https://animark-nato.vercel.app";

async function fetchTopManga(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((elem) => {
        const img = elem.image;
        const title = elem.title;
        const id = elem.id;
        const cardHTML = `
          <div class="cardBody" style="background-image: url(${img});">
            <div class="cardOverlay"></div>
            <div class="cardInfo">
              <p class="cardTitle" id="${id}">${title}</p>
            </div>
          </div>
          `;
        topCardContainer.innerHTML += cardHTML;
        return cardHTML;
      });
    });
}

fetchTopManga(`${API_URL}/top?page=1`);
