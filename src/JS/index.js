import "../CSS/style.scss";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
import L from "leaflet";


// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Create a map in div with id "map"
 let mymap = L.map('map', {
    center: [50.103139, 14.510206],
    zoom: 16
});

// Use tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

// add a marker to restaurant position
let marker = L.marker([50.103139, 14.510206]).addTo(mymap);

//Get the button:
let goupButton = document.getElementById("goup");
goupButton.onclick = topFunction;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goupButton.style.display = "block";
  } else {
    goupButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}