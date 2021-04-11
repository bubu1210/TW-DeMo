const catalog = document.querySelector('.carusel_catalog');
const slides = Array.from(catalog.children);
const nextButon=document.querySelector('.buton_carusel--drept');
const prevButon=document.querySelector('.buton_carusel--stang');
const dotsNav = document.querySelector('.navigare_carusel');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{ slide.style.left = slideWidth * index +'px';};
slides.forEach(setSlidePosition);

const changeSlide = (catalog,currentSlide,targetSlide) => {
	catalog.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('slide-curent');
	targetSlide.classList.add('slide-curent');
}

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('slide-curent');
	targetDot.classList.add('slide-curent');
}

const hideArrows = (slides, prevButon, nextButon, targetIndex) => {
	if(targetIndex === 0) {
		prevButon.classList.add('is-hidden');
		nextButon.classList.remove('is-hidden');
	} else if (targetIndex === slides.length -1){
		prevButon.classList.remove('is-hidden');
		nextButon.classList.add('is-hidden');
	} else {
		prevButon.classList.remove('is-hidden');
		nextButon.classList.remove('is-hidden');
	}
}

prevButon.addEventListener('click', e => {
	const currentSlide = catalog.querySelector('.slide-curent');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotsNav.querySelector('.slide-curent');
	const prevDot = currentDot.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);
	
	changeSlide(catalog,currentSlide,prevSlide);
	updateDots(currentDot, prevDot)
	hideArrows(slides, prevButon, nextButon, prevIndex);

});

nextButon.addEventListener('click', e => {
	const currentSlide = catalog.querySelector('.slide-curent');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotsNav.querySelector('.slide-curent');
	const nextDot = currentDot.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);
	
	changeSlide(catalog,currentSlide,nextSlide);
	updateDots(currentDot, nextDot);
	hideArrows(slides, prevButon, nextButon, nextIndex);

});

dotsNav.addEventListener('click', e => {
	const targetDot = e.target.closest('button');
	
	if(!targetDot) return;
	
	const currentSlide = catalog.querySelector('.slide-curent');
	const currentDot = dotsNav.querySelector('.slide-curent');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];
	
	changeSlide(catalog,currentSlide,targetSlide);
	updateDots(currentDot, targetDot);
	hideArrows(slides, prevButon, nextButon, targetIndex);
});

















		