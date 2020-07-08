import "../CSS/style.scss";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
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

new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([14.510302, 50.102837]),
    zoom: 17,
  }),
});

var attribution = new ol.control.Attribution({
  collapsible: false,
});
