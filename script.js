// let API = "https://jsonplaceholder.typicode.com/users";

// let list = document.querySelector(".list");
// fetch(API)
//   .then((data) => data.json())
//   .then((unp) => {
//     unp.forEach((el) => {
//       list.innerHTML += `
//          <div class = 'block'>
//             <img class = 'image' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU'/>
//             <div class = 'text'>
//                <p class = 'name'>name: ${el.name}</p>
//                <p class = 'userName'>username: ${el.username}</p>
//                <p class = 'email'>email: ${el.email}</p>
//                <p class = 'address'>address: ${el.address.city}</p>
//                <p class = 'phone'>phone: ${el.phone}</p>
//             </div>
//          </div>
//       `;
//     });
//   });

//! online cinema

let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

let list = document.querySelector(".list");

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
   unp.Search.forEach((el)=>{
      list.innerHTML += `
         <div class = 'block'>
            <img class = 'img' src = '${el.Poster}'>
            <div class = 'text'>
               <a class = 'name' href = '#'>title: ${el.Title}</a>
               <p class = 'year'>year: ${el.Year}</p>
            </div>
         </div>
      `
   })
  });
