var images = [
    '../img/rijksmuseum1.jpg',
    '../img/slide1.jpg',
    '../img/slide2.jpg',
    '../img/slide3.jpg',
    '../img/slide4.jpg'],
    index = 0;
    time = 5000;

function slideShow() {
    document.getElementById('informationSlide').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('informationSlide').src = images[index];
        document.getElementById('informationSlide').className = "";
    },500);
    index++;
    if (index == images.length) { index = 0; }
    setTimeout(slideShow, time);
}
slideShow();