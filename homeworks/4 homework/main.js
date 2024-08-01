let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    fetch('https://api.quotable.io/random').then((response) => {
       console.log(response)
    })
})