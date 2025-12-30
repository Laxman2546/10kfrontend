const container = document.querySelector(".container");

const data = [
  {
    title: "Andhra king Taluka",
    image: "https://image.tmdb.org/t/p/w500/e1lNI9dZKar0JN9iNuDeUhCZcwL.jpg",
  },
  {
    title: "12A Railway Colony",
    image: "https://image.tmdb.org/t/p/w500/wrFVQ5dNoyAIvgJHK8cflDnL6it.jpg",
  },
  {
    title: "Athadu",
    image: "https://image.tmdb.org/t/p/w500/ojZAu2KOemaDEfLnJXZeuU9QQko.jpg",
  },
  {
    title: "Jatadhara",
    image: "https://image.tmdb.org/t/p/w500/91aJa79gHiTUWh86XFRMaD2MGjj.jpg",
  },
  {
    title: "The GirlFriend",
    image: "https://image.tmdb.org/t/p/w500/8cYve5muYPeWKvSEfFdkmWDyyDa.jpg",
  },
  {
    title: "Bahubali Jai ho",
    image: "https://image.tmdb.org/t/p/w500/4sLSorDKKDN944kWngxgQlpdDeg.jpg",
  },
  {
    title: "Chitti Gunde",
    image: "https://image.tmdb.org/t/p/w500/qDTHRLgYTUAZimgNsmG6t2Saabz.jpg",
  },
  {
    title: "Salaar",
    image: "https://image.tmdb.org/t/p/w500/nlu9WbcetNFRGXXPWITr30ob7W6.jpg",
  },
  {
    title: "Jai Babu",
    image: "https://image.tmdb.org/t/p/w500/z3djL2eYzeS9l8KUXYxAXRDuSKF.jpg",
  },
  {
    title: "Pokiri",
    image: "https://image.tmdb.org/t/p/w500/rQ8NH5f3CxRrmqZWMZNYPwLmjDS.jpg",
  },
];
console.log(data);
const movieData = data.map((item, index) => {
  return `<div class="movie">
        <img
          class="image"
          src=${item.image}
          alt="movieimage"
        />

        <p>${item.title}</p>
        <button class="play">Play now</button
        ><button class="watch">Watch Later</button>
      </div>`;
});

container.innerHTML = movieData;
