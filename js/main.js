


// Sliderdaki buttonlara ileri geri hareketi tanımlıyoruz

const slides = document.querySelectorAll('.slide'); // Classı slide olan divleri array olarak seçtiğim yer
const next = document.getElementById('next');  // next degiskenine id'si next olan butonu tanımladım
const prev = document.getElementById('prev');  // prev degiskenine id'si prev olan butonu tanımladım

const nextSlide = () => {  // ileri hareketini tanımladıgım fonksiyon
    const activeSlide = document.querySelector('.active'); // classında active olanları bulup activeSlide degiskenine atıyoruz
    activeSlide.classList.remove('active');     // active classını siliyoruz

    if(activeSlide.nextElementSibling){  // activeSlide degiskeninin ilerideki elemanlarında akrabası varsa;
        activeSlide.nextElementSibling.classList.add('active')   // active classını ona ekliyoruz
    }
    else{
        slides[0].classList.add('active');  // eger akrabası yoksa active classını ilk elemana geri atıyoruz
    }
}

const prevSlide =() => {    // geri hareketini tanımladığım fonksiyon
    const activeSlide = document.querySelector('.active'); 
    activeSlide.classList.remove('active');

    if(activeSlide.previousElementSibling){   // eger
        activeSlide.previousElementSibling.classList.add('active');
    }
    else{
        slides[slides.length - 1].classList.add('active');
    }
}

next.addEventListener('click',() => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});

prev.addEventListener('click',() => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});

const auto = true;        
const intervalTime = 5000;  // intervalTime degiskenine 5saniye atadım
let slideInterval;

if(auto){
    slideInterval = setInterval(nextSlide,intervalTime);
}