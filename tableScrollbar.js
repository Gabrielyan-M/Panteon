const table1_container = document.querySelector('[data-js-season-ticket-table-container]');
const scrollbar_table1_container = document.querySelector('[data-js-scrollbar-season-ticket]');
const thumb_table1_container = document.querySelector('[data-js-thumb-images-season-ticket]');

const table2_container = document.querySelector('[data-js-scrollbar-season-ticket-container2]');
const scrollbar_table2_container = document.querySelector('[data-js-scrollbar-season-ticket-time]');
const thumb_table2_container = document.querySelector('[data-js-thumb-images-season-ticket-time]');


if (window.innerWidth < 830) {


        // table 1
    const scrollbarTable1 = () => {

        const thumbWidth = ((table1_container.clientWidth / table1_container.scrollWidth) * scrollbar_table1_container.clientWidth)/2
        thumb_table1_container.style.width = `${thumbWidth}px`    
        
        const thumbPosition = ((table1_container.scrollLeft / table1_container.scrollWidth) * scrollbar_table1_container.clientWidth) + thumbWidth/2
        thumb_table1_container.style.left = `${thumbPosition}px`
    }

    table1_container.addEventListener('scroll', scrollbarTable1)
    scrollbarTable1()



    // table 2
    const scrollbarTable2 = () => {

        const thumbWidth = ((table2_container.clientWidth / table2_container.scrollWidth) * scrollbar_table2_container.clientWidth)/2
        thumb_table2_container.style.width = `${thumbWidth}px`    
        
        const thumbPosition = ((table2_container.scrollLeft / table2_container.scrollWidth) * scrollbar_table2_container.clientWidth) + thumbWidth/2
        thumb_table2_container.style.left = `${thumbPosition}px`
    }

    table2_container.addEventListener('scroll', scrollbarTable2)
    scrollbarTable2()
}

