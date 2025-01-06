const applicationForm = document.querySelector('[data-js-application-form]')
const inputName = document.querySelector('[data-js-imput-name]') 
const inputTel =  document.querySelector('[data-js-imput-tel]')
const submitButton =  document.querySelector('[data-js-button-submit]')


const errorUsName =  document.querySelector('#userName')
const errorUsTel =  document.querySelector('#userTel')

const windowModal = document.querySelector('.modal-window')




function form_verification(name, tel) {    
    const nameTrim = name.trim()
    const telTrim = tel.trim()

    if (!nameTrim && !telTrim) {
        errorUsName.style.borderBottom = `1px solid red`
        errorUsTel.style.borderBottom = `1px solid red`

        errorUsTel.style.animation = `errorForm 1s ease`
        errorUsName.style.animation = `errorForm 1s ease`
        return false
    } else if (!nameTrim) {
        errorUsName.style.borderBottom = `1px solid red`
        errorUsName.style.animation = `errorForm 1s ease`
        return false
    } else if (!telTrim) {
        errorUsTel.style.borderBottom = `1px solid red`
        errorUsTel.style.animation = `errorForm 1s ease`
        return false
    }

    if (!(/^[A-Za-zА-яа-я]*$/.test(nameTrim)) && !(/^[0-9]*$/.test(telTrim))) {
        errorUsName.style.borderBottom = `1px solid red`
        errorUsTel.style.borderBottom = `1px solid red`
        return false 
    } else if (!(/^[A-Za-zА-яа-я]*$/.test(nameTrim))) {
        errorUsName.style.borderBottom = `1px solid red`
        return false
    } else if (!(/^[0-9]+$/.test(telTrim))) {
        errorUsTel.style.borderBottom = `1px solid red`
        return false
    }

    if (telTrim.length != 11) {
        errorUsTel.style.borderBottom = `1px solid red`
        return false
    }

    
    

    console.log(`Имя: ${userName.value} \nТелефон: ${userTel.value}`)

    errorUsName.style.borderBottom = `1px solid white`
    errorUsTel.style.borderBottom = `1px solid white`

    errorUsTel.style.animation = `none`
    errorUsName.style.animation = `none`
    


    
    windowModal.style.display = 'flex'
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('body').style.overflowY = 'hidden'
     

    
}




submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const userName = inputName.value
    const userTel = inputTel.value
    

    form_verification(userName, userTel)
    
    inputName.value = ""
    inputTel.value = ""
})




export { windowModal }

