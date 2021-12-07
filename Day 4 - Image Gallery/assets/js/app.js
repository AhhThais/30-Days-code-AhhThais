var images = document.querySelectorAll('.wrapper .image img')
var gallery = document.querySelector('.gallery')
var closeBtn = document.querySelector('.gallery .gallery__close')
var galleryImg = document.querySelector('.gallery .gallery__inner img')

var nextBtn = document.querySelector('.gallery .gallery__ctrl--next')
var prevBtn = document.querySelector('.gallery .gallery__ctrl--prev')

let currentIndex = 0;

// function galleryShow() {
//     // Display
    
// }


// images.forEach((img, index) => {
//     img.addEventListener('click', function(){
//         currentIndex = index;
//         galleryShow()
//     })
// })


// closeBtn.addEventListener('click', function() {
//     gallery.classList.remove('show')
// })

// prevBtn.addEventListener('click', function() {
//     if(currentIndex > 0){
//         currentIndex--
//         galleryShow()
//     }    
// })

// document.addEventListener('keydown', function(e) {
//     if(e.keyCode == 27){
//         gallery.classList.remove('show')
//     }
// })

images.forEach((img, index) => {
	img.addEventListener('click', () => {
		currentIndex = index
		showGallery()
	})
})

function showGallery() {
	currentIndex == images.length - 1
		? next.classList.add('hide')
		: next.classList.remove('hide')

	currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')

	gallery.classList.add('show')
	galleryImg.src = images[currentIndex].src
}

closeBtn.addEventListener('click', () => {
	gallery.classList.remove('show')
})

nextBtn.addEventListener('click', () => {
	currentIndex != images.length - 1 ? currentIndex++ : undefined
	showGallery()
})
prevBtn.addEventListener('click', () => {
	currentIndex != 0 ? currentIndex-- : undefined
	showGallery()
})

// esc click
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) gallery.classList.remove('show')
})
