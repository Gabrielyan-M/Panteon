import { windowModal } from './apllicationForm.js'
const closeButton =document.querySelector('.closeModal')

const closeModal = () => {
    windowModal.style.display = 'none'
    document.querySelector('body').style.overflow = 'scroll'
    document.querySelector('body').style.overflowY = 'scroll'
}


closeButton.addEventListener('click', closeModal)
windowModal.addEventListener('click', (e) => {
    if ((e.target).classList.value === 'modal-window') {
        windowModal.style.display = 'none'
        document.querySelector('body').style.overflow = 'scroll'
        document.querySelector('body').style.overflowY = 'scroll'
    }
    // console.log((e.target).classList.value);
    
})
