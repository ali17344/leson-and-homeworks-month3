const token = '7022297122:AAF1pN354Mo-jSL6kk8eAB4DE2v3gFoQvAg';
const chatId = -4279815147;
let p_true = document.getElementById('true')
let btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    let photoUrl = document.querySelector('#photo-url').value;
    let messageText = document.querySelector('#message-text').value;

    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photoUrl);
    formData.append('caption', messageText);

    fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
        method: 'POST',
        body: formData
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        p_true.textContent = 'Вы успешно отправили фото с описанием'
    }).catch((error) => {
        console.error('Error:', error);
    });
});