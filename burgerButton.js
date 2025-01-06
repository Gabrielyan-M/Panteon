const burgerButton = document.querySelectorAll('.burger-button')
const closeButton = document.querySelectorAll('.close-menu')
const headerMenuBurger = document.querySelector('.footer-menu')
const footerMenuBurger = document.querySelector('.container-phone')


burgerButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        if (btn.hasAttribute('data-js-header-burger')) {
            document.querySelector('[data-js-navigation-menu-active]').classList.toggle('menuActive')

            document.querySelector('[data-js-header-burger]').style.display = 'none'
        
            document.querySelector('[data-js-header-close-burger]').style.display = 'block'
        }
        
        if (btn.hasAttribute('data-js-footer-burger')) {
            document.querySelector('[data-js-footer-menu-active]').style.display = 'block'

            document.querySelector('[data-js-footer-burger]').style.display = 'none'
        
            document.querySelector('[data-js-footer-close-burger]').style.display = 'flex'

        }
    })
})
closeButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        if (btn.hasAttribute('data-js-header-close-burger')) {
            document.querySelector('[data-js-navigation-menu-active]').classList.toggle('menuActive')

            document.querySelector('[data-js-header-burger]').style.display = 'flex'
        
            document.querySelector('[data-js-header-close-burger]').style.display = 'none'
        }
        
        if (btn.hasAttribute('data-js-footer-close-burger')) {
            document.querySelector('[data-js-footer-menu-active]').style.display = 'none'

            document.querySelector('[data-js-footer-burger]').style.display = 'flex'
        
            document.querySelector('[data-js-footer-close-burger]').style.display = 'none'

        }
    })
})


burgerButton.addEventListener('click', () => {

    
    blockMenuBurger.classList.toggle('menuActive')

    burgerButton.style.display = 'none'

    closeButton.style.display = 'block'

})

closeButton.addEventListener('click', () => {

    blockMenuBurger.classList.toggle('menuActive')

    burgerButton.style.display = 'flex'

    closeButton.style.display = 'none'
})