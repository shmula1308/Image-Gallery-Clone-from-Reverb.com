const thumbnails = document.querySelectorAll('.thumbnails img')
const mainImage = document.querySelector('.main-image img');
const mainImgContainer = document.querySelector('.main-image')

let index = 0;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', changeImage)
})

function changeImage(ev) {
    index = Array.from(thumbnails).indexOf(ev.target);
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

mainImgContainer.addEventListener('click', clickedArrow)

function clickedArrow(ev) {
    const arrow = ev.target.closest("i").id;
    if(!arrow) return;
    if(arrow === 'right') {
        index++;
        if(index > thumbnails.length - 1) index = 0;
        let src = thumbnails[index].src;
        mainImage.src = src;
        const activeThumb = document.querySelector('.active');
        activeThumb.classList.remove('active');
        thumbnails[index].classList.add('active');
    } else {
        index--;
        if(index < 0) index = thumbnails.length - 1;
        let src = thumbnails[index].src;
        mainImage.src = src;
        const activeThumb = document.querySelector('.active');
        activeThumb.classList.remove('active');
        thumbnails[index].classList.add('active');
    }
}