// const btn = document.getElementById('btn')
// let card = document.getElementById('vard')
// btn.addEventListener('click', async () => {
//   fetch('https://rickandmortyapi.com/api/character').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
//     let Name = document.createElement('p')
//     for (let i = 0; i < 20; i++) {
//     Name.innerHTML +=`<p>${data.results[i].name}</p><p>${data.results[i].status}</p><p>${data.results[i].species}</p>` 
//     }
  
//     document.body.appendChild(Name)
// })  
// })
// // name
// status
// image
// species
// gender
// let page = 1
// async function getCharacters (){
//     const container = document.querySelector('.container_characters') 
//     const res= await fetch('https://rickandmortyapi.com/api/character?page+'+ page)
//     const data =await res.json()
//     console.log(data);
//     data.results.forEach((item)=>{
//         container.innerHTML+=`
//         <div class="character_block">
//             <img src="${item.image}">
//             <div>
//                 <h2>${item.name}</h2>
//                 <h2 class="status">Status:${item.status}</h2>
//                 <h2 class="status">Species:${item.species}</h2>
//                 <h2 class="status">Gender:${item.gender}</h2>
//             </div>
//         </div>
//         `
//     });
// }

// getCharacters()
// function nextPage(){
//     page +=1
//     document.querySelector('.container_characters').innerHTML = ''
//     document.getElementById('currentPage').innerText = page
//     getCharacters()
// }
// nextPage()


let page = 1 
async function getCharacters (){ 
    const container = document.querySelector('.container_characters')  
    const res= await fetch('https://rickandmortyapi.com/api/character?page=' +page) 
    const data =await res.json() 
    console.log(data); 
     
    data.results.forEach((item)=>{ 
        container.innerHTML+=` 
        <div class="character_block"> 
            <img src="${item.image}"> 
            <div> 
                <h2>${item.name}</h2> 
                <h2 class="status">Status:${item.status}</h2> 
                <h2 class="status">Species:${item.species}</h2> 
                <h2 class="status">Gender:${item.gender}</h2> 
            </div> 
        </div> 
        ` 
    }); 
} 
getCharacters() 
 
function nextPage(){ 
    page+=1 
    document.querySelector('.container_characters').innerHTML = '' 
    document.getElementById('currentPage').innerText = page 
    getCharacters() 
} 
nextPage() 
 
function backPage(){ 
    page -=1 
    document.querySelector('.container_characters').innerHTML = '' 
    document.getElementById('currentPage').innerText = page 
    getCharacters() 
} 
backPage()

