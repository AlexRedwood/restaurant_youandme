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