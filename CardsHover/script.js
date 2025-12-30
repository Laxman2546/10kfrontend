const container = document.querySelector(".container");

const data = [
  {
    title: "Andhra king Taluka",
    image: "https://image.tmdb.org/t/p/w500/e1lNI9dZKar0JN9iNuDeUhCZcwL.jpg",
    color: "#E6CBA0",
  },
  {
    title: "12A Railway Colony",
    image: "https://image.tmdb.org/t/p/w500/wrFVQ5dNoyAIvgJHK8cflDnL6it.jpg",
    color: "#0781AE",
  },
  {
    title: "Athadu",
    image: "https://image.tmdb.org/t/p/w500/ojZAu2KOemaDEfLnJXZeuU9QQko.jpg",
    color: "#3E6F4E",
  },
  {
    title: "Jatadhara",
    image: "https://image.tmdb.org/t/p/w500/91aJa79gHiTUWh86XFRMaD2MGjj.jpg",
    color: "#24484A",
  },
  {
    title: "The GirlFriend",
    image: "https://image.tmdb.org/t/p/w500/8cYve5muYPeWKvSEfFdkmWDyyDa.jpg",
    color: "#98B5A9",
  },
  {
    title: "Bahubali Jai ho",
    image: "https://image.tmdb.org/t/p/w500/4sLSorDKKDN944kWngxgQlpdDeg.jpg",
    color: "#E1971C",
  },
  {
    title: "Chitti Gunde",
    image: "https://image.tmdb.org/t/p/w500/qDTHRLgYTUAZimgNsmG6t2Saabz.jpg",
    color: "#95A6CD",
  },
  {
    title: "Salaar",
    image: "https://image.tmdb.org/t/p/w500/nlu9WbcetNFRGXXPWITr30ob7W6.jpg",
    color: "#5C6064",
  },
  {
    title: "Jai Babu",
    image: "https://image.tmdb.org/t/p/w500/z3djL2eYzeS9l8KUXYxAXRDuSKF.jpg",
    color: "#AA361B",
  },
  {
    title: "Pokiri",
    image: "https://image.tmdb.org/t/p/w500/rQ8NH5f3CxRrmqZWMZNYPwLmjDS.jpg",
    color: "#38342E",
  },
];
const movieData = data.map((item, index) => {
  return `<div class="movie" style="--hover-color: ${item.color}">
      <img src="${item.image}" alt="${item.title}" />
      <p>${item.title}</p>
      <button class="play">Play</button>
      <button class="watch">Watch Later</button>
    </div>`;
});

container.innerHTML = movieData.join("");
