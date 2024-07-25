let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
let h3 = document.getElementById('h3')
let h4 = document.getElementById('h4')
let h5 = document.getElementById('h5')
let h6 = document.getElementById('h6')
let h7 = document.getElementById('h7')
btn.addEventListener('click', () => {
    h1.textContent = 'Начало'
    setTimeout(function timeote(){
     h1.textContent = 'Прошло 2 секунды'
    },2000
    )
    setTimeout(function timeote(){
        h1.textContent = 'Прошло 3 секунды'
    },3000
    )
})
btn2.addEventListener('click', () => {
  h2.textContent = 'Начало работы'
  setTimeout(() => {
    h3.textContent = 'Прошла 1 секунда'
  }, 1000);
  setTimeout(() => {
    h4.textContent = 'Прошли ещё 2 секуды'
  }, 3000);
  setTimeout(() => {
    h4.textContent = 'Прошли ещё 2 секуды'
  }, 5000);
  setTimeout(() => {
    h5.textContent = 'Прошли ещё 2 секуды'
  }, 7000);
  setTimeout(() => {
    h6.textContent = 'Прошли ещё 2 секуды'
  }, 9000);
  setTimeout(() => {
    h7.textContent = 'Прошли ещё 2 секуды'
  }, 10000);
})