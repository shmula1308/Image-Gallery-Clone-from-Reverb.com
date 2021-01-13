const thumbnails = document.querySelectorAll('.thumbnails img')
const mainImage = document.querySelector('.main-image img');
const mainImgContainer = document.querySelector('.main-image')

let index = 0;
let modalIndex = 0;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', changeImage)
})

function changeImage(ev) {
  if(ev.target.className === 'active') return;
  index = Array.from(thumbnails).indexOf(ev.target);
  modalIndex = index;
  // Remove active class from previous thumbnail
  const activeThumb = document.querySelector('.active');
  activeThumb.classList.remove('active');
  //Add active class to currently clicked thumbnail
  ev.target.classList.add('active');
  //Get source of clicked thumbnail
  const src = ev.target.src;
  //Assign source to main image
  mainImage.src = src;
  //Add fade-in animation class to main image
  mainImage.classList.add('fade-in');
  //Remove fade-in animation class from current image
  setTimeout(() => {
    mainImage.classList.remove('fade-in');
  },500)
}

mainImgContainer.addEventListener('click', changeWithArrow)

function changeWithArrow(ev) {
    if(!ev.target.id) return;
    const arrow = ev.target.closest("i").id;
    if(arrow === 'right') {
        index++;
        if(index > thumbnails.length - 1) index = 0;
        modalIndex = index;
        let src = thumbnails[index].src;
        mainImage.src = src;
        const activeThumb = document.querySelector('.active');
        activeThumb.classList.remove('active');
        thumbnails[index].classList.add('active');
    } else {
        index--;
        if(index < 0) index = thumbnails.length - 1;
        modalIndex = index;
        let src = thumbnails[index].src;
        mainImage.src = src;
        const activeThumb = document.querySelector('.active');
        activeThumb.classList.remove('active');
        thumbnails[index].classList.add('active');
    }
}


/* MODAL OVERLAY */

const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modal-inner-container');
const modalThumbnails = document.querySelectorAll('.modal-thumbnails img');
const modalMainImg = document.querySelector('.modal-main-image img');




mainImage.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    const src = modalThumbnails[modalIndex].src;
    modalMainImg.src = src;
    
})

closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    const src = thumbnails[index].src;
    mainImage.src = src;
    
})

modalContainer.addEventListener('click', changeModalImage);

function changeModalImage(ev) {
    if(!ev.target.id) return;
    if(ev.target.closest('i').id === 'right') {
        modalIndex++;
        if(modalIndex > modalThumbnails.length - 1) modalIndex = 0;
        index = modalIndex;
        const src = modalThumbnails[modalIndex].src;
        modalMainImg.src = src;
        const activeThumb = document.querySelector('.modal-thumbnails .active');
        activeThumb.classList.remove('active');
        modalThumbnails[modalIndex].classList.add('active')

    } else {
        modalIndex--;
        if(modalIndex < 0) modalIndex = modalThumbnails.length - 1;
        index = modalIndex;
        const src = modalThumbnails[modalIndex].src;
        modalMainImg.src = src;
        const activeThumb = document.querySelector('.modal-thumbnails .active');
        activeThumb.classList.remove('active');
        modalThumbnails[modalIndex].classList.add('active')
    }
}

modalThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', modalThumbs);
})

function modalThumbs(ev) {
    modalIndex = Array.from(modalThumbnails).indexOf(ev.target);
    index = modalIndex;

    const src = ev.target.src;
    modalMainImg.src = src;

    const currentThumb = document.querySelector('.modal-thumbnails .active');
    currentThumb.classList.remove('active');
    ev.target.classList.add('active');

}