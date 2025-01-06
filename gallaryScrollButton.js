const leftArrowButton_sect1 = document.querySelector('#arrowLeft_sect1')
const rightArrowButton_sect1 = document.querySelector('#arrowRight_sect1')
const imagesBlock_sect1 = document.querySelector('[data-js-gallery-images-sect1]')

const leftArrowButton_sect2 = document.querySelector('#arrowLeft_sect2')
const rightArrowButton_sect2 = document.querySelector('#arrowRight_sect2')
const imagesBlock_sect2 = document.querySelector('[data-js-gallery-images-sect2]')

const leftArrowButton_galleryCoach = document.querySelector('#arrowLeft_galleryCoach')
const rightArrowButton_galleryCoach = document.querySelector('#arrowRight_galleryCoach')
const imagesBlock_galleryCoach = document.querySelector('[data-js-gallery-images-galleryCoach]')



// section 1
const scrollArrowBtn_sect1 = (e) => {
    if (e.currentTarget.id === 'arrowRight_sect1') {
        imagesBlock_sect1.scrollBy({
            left: imagesBlock_sect1.clientWidth,
            behavior: 'smooth'
        })
    } else {
        imagesBlock_sect1.scrollBy({
            left: -imagesBlock_sect1.clientWidth,
            behavior: 'smooth'
        })  
    }
}


// section 2
const scrollArrowBtn_sect2 = (e) => {
    if (e.currentTarget.id === 'arrowRight_sect2') {
        imagesBlock_sect2.scrollBy({
            left: imagesBlock_sect2.clientWidth,
            behavior: 'smooth'
        })
    } else {
        imagesBlock_sect2.scrollBy({
            left: -imagesBlock_sect2.clientWidth,
            behavior: 'smooth'
        })  
    }
}

// sect gallery coach
const scrollArrowBtn_galleryCoach = (e) => {    
    if (e.currentTarget.id === 'arrowRight_galleryCoach') {
        imagesBlock_galleryCoach.scrollBy({
            left: imagesBlock_galleryCoach.clientWidth,
            behavior: 'smooth'
        })
    } else {
        imagesBlock_galleryCoach.scrollBy({
            left: -imagesBlock_galleryCoach.clientWidth,
            behavior: 'smooth'
        })  
    }
}
 

//      sect1
// click
leftArrowButton_sect1.addEventListener('click', scrollArrowBtn_sect1)
rightArrowButton_sect1.addEventListener('click', scrollArrowBtn_sect1)

//      sect2
// click
leftArrowButton_sect2.addEventListener('click', scrollArrowBtn_sect2)
rightArrowButton_sect2.addEventListener('click', scrollArrowBtn_sect2)

//      sect gallery coach
// click
leftArrowButton_galleryCoach.addEventListener('click', scrollArrowBtn_galleryCoach)
rightArrowButton_galleryCoach.addEventListener('click', scrollArrowBtn_galleryCoach)
