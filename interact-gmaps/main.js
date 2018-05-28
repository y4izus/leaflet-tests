var map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: new google.maps.LatLng(40.4165, -3.70256),
    mapTypeId: "terrain"
  })

  map.addListener('zoom_changed', function() {
    const bounds = map.getBounds()
    const NE = bounds.getNorthEast()
    const SW = bounds.getSouthWest()

    // North West
    const NW = new google.maps.LatLng(NE.lat(),SW.lng())
    // South East
    const SE = new google.maps.LatLng(SW.lat(),NE.lng())
    console.log('Bounds')
    console.log('NW', `[${NW.lat()}, ${NW.lng()}]`)
    console.log('NE', `[${NE.lat()}, ${NE.lng()}]`)
    console.log('SE', `[${SE.lat()}, ${SE.lng()}]`)
    console.log('SW', `[${SW.lat()}, ${SW.lng()}]`)
    
  })

  map.data.addGeoJson(ejes)
}
