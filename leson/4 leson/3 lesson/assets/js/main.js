
// const xhr = new XMLHttpRequest() 
 
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); 
 
// xhr.send() 
 
// console.log(xhr.responseText); 
// xhr.onload = function(res){ 
//     console.log('Запрос отправлен'); 
//     console.log(xhr.responseText); 
// }
// const xhr_get_free_games = new XMLHttpRequest()
// xhr_get_free_games.open('GET','https://www.freetogame.com/api/games',true)//настраиваем запрос
// xhr_get_free_games.send()//отравляем запрос
// xhr_get_free_games.onload = () => {
//     console.log('Запрос отправлен !');
 
// }
fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    return response.json()
}).then((data) => {
    console.log(data);
    // let game_list = document.getElementsByClassName('game_lists');
    // let post = document.createElement('div')
    // for(post = data.title; post < 5; post++){
    // }
    // // post.innerText = data[0].title
    // // let post2 = document.createElement('div')
    // // post2.innerText = data[1].title
    // // let post3 = document.createElement('div')
    // // post3.innerText = data[2].title
    // // let post4 = document.createElement('div')
    // // post4.innerText = data[3].title
    // document.body.append(post)
    // document.body.append(post2)
    // document.body.append(post3)
    // document.body.append(post4)
})
