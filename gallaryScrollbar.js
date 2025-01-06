const gallery_sect1 = document.querySelector('[data-js-gallery-images-sect1]');
const scrollbar_sect1 = document.querySelector('[data-js-scrollbar-sect1]');
const thumb_sect1 = document.querySelector('[data-js-thumb-images-sect1]');

const gallery_sect2 = document.querySelector('[data-js-gallery-images-sect2]');
const scrollbar_sect2 = document.querySelector('[data-js-scrollbar-sect2]');
const thumb_sect2 = document.querySelector('[data-js-thumb-images-sect2]');

const gallery_galleryCoach = document.querySelector('[data-js-gallery-images-galleryCoach]');
const scrollbar_galleryCoach = document.querySelector('[data-js-scrollbar-galleryCoach]');
const thumb_galleryCoach = document.querySelector('[data-js-thumb-images-galleryCoach]');



// section 1
const scrollbarSect1 = () => {

    const thumbWidth = ((gallery_sect1.clientWidth / gallery_sect1.scrollWidth) * scrollbar_sect1.clientWidth)/2
    thumb_sect1.style.width = `${thumbWidth}px`    
    
    const thumbPosition = ((gallery_sect1.scrollLeft / gallery_sect1.scrollWidth) * scrollbar_sect1.clientWidth) + thumbWidth/2
    thumb_sect1.style.left = `${thumbPosition}px`
}

gallery_sect1.addEventListener('scroll', scrollbarSect1)
scrollbarSect1()


//  section 2
const scrollbarSect2 = () => {

    const thumbWidth = ((gallery_sect2.clientWidth / gallery_sect2.scrollWidth) * scrollbar_sect2.clientWidth)/2
    thumb_sect2.style.width = `${thumbWidth}px`    
    
    const thumbPosition = ((gallery_sect2.scrollLeft / gallery_sect2.scrollWidth) * scrollbar_sect2.clientWidth) + thumbWidth/2
    thumb_sect2.style.left = `${thumbPosition}px`
}

gallery_sect2.addEventListener('scroll', scrollbarSect2)
scrollbarSect2()


//  section gallery coach
const scrollbar_galleryCoachF = () => {

    const thumbWidth = ((gallery_galleryCoach.clientWidth / gallery_galleryCoach.scrollWidth) * scrollbar_galleryCoach.clientWidth)/2
    thumb_galleryCoach.style.width = `${thumbWidth}px`    
    
    const thumbPosition = ((gallery_galleryCoach.scrollLeft / gallery_galleryCoach.scrollWidth) * scrollbar_galleryCoach.clientWidth) + thumbWidth/2
    thumb_galleryCoach.style.left = `${thumbPosition}px`
}

gallery_galleryCoach.addEventListener('scroll', scrollbar_galleryCoachF)
scrollbar_galleryCoachF()

