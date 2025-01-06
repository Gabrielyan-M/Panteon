const buttonCons = document.querySelector('.button-welcome-section')
const form = document.querySelector('#contacts')

buttonCons.addEventListener('click', () => {
    console.log(form.getBoundingClientRect());
    const formY = form.getBoundingClientRect()
    window.scroll({
        top: formY.y - window.innerHeight/2 + formY.height/2,
        behavior: 'smooth'
    })
    
})