const switchbutton = document.querySelector('.switchbutton')
const switchball = document.querySelector('.switchball')
const switchballtwo = document.querySelector('.switchballtwo')
const body = document.querySelector("body");

const bluebg = () => {
    switchball.classList.toggle('switchballnone')
    switchballtwo.classList.toggle('switchballtwoblock')
    switchbutton.classList.toggle('switchbuttonblack')
    body.classList.toggle ('bodyBlue')
}

switchbutton.addEventListener('click', bluebg)






