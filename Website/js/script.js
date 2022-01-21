const informationSlide = document.getElementById('informationSlide');

var index = 0;
var images = [];
var time = 5000;

images[0] = '../img/rijksmuseum1.jpg';
images[1] = '../img/slide1.jpg';
images[2] = '../img/slide2.jpg';
images[3] = '../img/slide3.jpg';
images[4] = '../img/slide4.jpg';

function changeImg() {
    informationSlide.style.transition = "ease-in-out"
    informationSlide.src = images[index];
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg();