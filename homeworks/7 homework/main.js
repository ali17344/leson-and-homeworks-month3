const token = '7022297122:AAF1pN354Mo-jSL6kk8eAB4DE2v3gFoQvAg';
const chatId = -4279815147;
let p_true = document.getElementById('true')
let btn = document.querySelector('button');
btn.addEventListener('click', async (e) => {
    let photoUrl = document.querySelector('#photo-url').value;
    let messageText = document.querySelector('#message-text').value;

    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photoUrl);
    formData.append('caption', messageText);

    try {
      let fetch = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
        method: 'POST',
        body: formData
    })
    let data = await  response.json();
    if(data.ok){
        statusMessage.textContent = 'Вы успешно отправили фото с описанием';
        statusMessage.style.color = 'green';
    }else{
        let err = new Error()
    }
    }catch(err){
        console.error('Error:', error);
        statusMessage.textContent = 'Ошибка при отправке фото. Пожалуйста, попробуйте снова.';
        statusMessage.style.color = 'red';
    };
});