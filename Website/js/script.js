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

/* Tour */

const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties = [
    {
        "titel":"0. Kamer met Nachtwacht",
        "image":"img/0.jpg",
        "directions": {
            "noord":1,
            "oost":2,
            "zuid":3,
            "west":4,
        }
    },
    {
        "titel":"1. Kamer met andere grote schilderijen",
        "image":"img/1.jpg",
        "directions": {
            "zuid":0
        }
    },
    {
        "titel":"2. Kamer met Melkmeisje",
        "image":"img/2.jpg",
        "directions": {
            "west":0
        }
    },
    {
        "titel":"3. Ruimte met kleine schilderijen",
        "image":"img/3.jpg",
        "directions": {
            "noord":0
        }
    },
    {
        "titel":"4. Gang met heel veel kamers en schilderijen",
        "image":"img/4.jpg",
        "directions": {
            "oost":0,
        }
    }
];

function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    updateDirections();
}

function updateDirections() {
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);
    for(const key of button_keys) {
        directionButtons[key].style.visibility = "hidden";
    }
    for(const key of possible_keys) {
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput() {
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting) {
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}

show(0);