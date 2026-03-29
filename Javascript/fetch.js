// const fetchData = async (url) => {
//   try {
//     const data = await fetch(url);
//     const response = await data.json();
//     response.quotes.map((data) => {
//       console.log(data.quote);
//     });
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };

// fetchData("https://dummyjson.com/quotes");

const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  });
