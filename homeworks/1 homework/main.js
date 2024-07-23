    let btn = document.getElementById('btn')
    let p = document.getElementById('p')
    let email = document.getElementById('email')
    let result = /^\w+|b@\w.com$/gi
    let finishResult = email.value.match(result);
    let result2 = /^\w+@+$/gi
    let finishResult2 = email.value.match(result2);    
    let result3 = /^@+\w+.com$/gi
    let finishResult3 = email.value.match(result3);  
    let result4 = /^\w+@+.com$/gi
    let finishResult4 = email.value.match(result4); 
    btn.addEventListener('click', () => {
    if(email.value.match(result)){
         p.textContent = 'Вы зарегестрированы'
    }
    if(email.value.match(result2)){
        p.textContent = 'Введите правильно user.email'
    }else if(email.value.match(result3)){
        p.textContent = 'Введите правильно user.email'
    }else if(email.value.match(result4)){
        p.textContent = 'Введите правильно user.email'
    }
    })
