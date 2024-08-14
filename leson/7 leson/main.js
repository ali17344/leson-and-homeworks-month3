const token = '7022297122:AAF1pN354Mo-jSL6kk8eAB4DE2v3gFoQvAg'
const btnEl = document.getElementById('btn')
const nameEl = document.getElementById('name')
const descEl = document.getElementById('desc')
btnEl.addEventListener('click', async() => {
    const params = {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            text:`<u><b>Имя</b>:${nameEl.value}</u>\n<u><b>Сообщение</b>:${descEl.value}</u>`,
            chat_id:-4279815147,
            parse_mode:'html'
       })
    }
    const res = await  fetch(`https://api.telegram.org/bot${token}/sendMessage`,params )
    console.log(res);
})
document.querySelector('form').onsubmit = (event) =>{
      event.preventDefault()  
}