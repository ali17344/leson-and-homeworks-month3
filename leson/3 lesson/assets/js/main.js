
const xhr = new XMLHttpRequest() 
 
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); 
 
xhr.send() 
 
console.log(xhr.responseText); 
xhr.onload = function(res){ 
    console.log('Запрос отправлен'); 
    console.log(xhr.responseText); 
}