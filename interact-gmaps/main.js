var map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: new google.maps.LatLng(40.4165, -3.70256),
    mapTypeId: "terrain"
  })

  map.addListener('zoom_changed', function() {
    console.log('Cambia el zoom')
  })

  map.data.addGeoJson(ejes)
}
