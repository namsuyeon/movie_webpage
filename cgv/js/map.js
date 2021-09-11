// script.js
var map;

function initMap() {
  var cbnu = { lat: 36.6290439 ,lng: 127.4541514 };
  map = new google.maps.Map( document.getElementById('map'), {
      zoom: 16,
      center: cbnu
    });

  new google.maps.Marker({
    position: cbnu,
    map: map,
    label: "충북대학교"
  });
}