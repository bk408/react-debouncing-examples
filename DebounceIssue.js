

const handler = async(e) => {
const response = await fetch(
  `https://dummyjson.com/products/search?q=${e.target.value}`
);
const data = await response.json();
console.log(data.products);
}



const input = document.getElementById("input")

input.addEventListener("input", handler)


/* Here, if I try to search anything it will call the api at every word which can create a load on server
   so resolving this problem we want when user stops typing then after some specific time it will make an single api call

   That process is called => Debouncing
*/