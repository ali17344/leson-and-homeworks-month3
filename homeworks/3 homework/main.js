let btn = document.getElementById('btn')
let incoret = document.getElementById('incoret')
let password = document.getElementById('password')
let form = document.getElementById('form') 
let result = /^123456789$/
let finishResult = password.value.match(result)
btn.addEventListener('click', () => {
    if(password.value.match(result)){
    open(form.action) 
    // window.location.href = '/сайт ссылка'
    } else{
        incoret.textContent = 'Incoret password:123456789'
    }
  
})
