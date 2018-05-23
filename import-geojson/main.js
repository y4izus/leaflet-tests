$(document).ready(() => {
  // const geojsonEjes = L.geoJson(ejes.features)
  // const ejesLayer = L.layerGroup(geojsonEjes)

  // const geojsonPKAutopistas = L.geoJson(pk_autopistas.features)
  // const pkAutopistasLayer = L.layerGroup(geojsonPKAutopistas)
  

  // const map = L.map("map", { scrollWheelZoom:false, layers: [ejesLayer, pkAutopistasLayer] }).setView([40.4165, -3.70256], 6)
  const map = L.map("map").setView([40.4165, -3.70256], 6)
  
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
    '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
  
    
  // const overlayMaps = {
  //     "Ejes": ejesLayer,
  //     "PK Autopistas": pkAutopistasLayer
  // }

  // L.control.layers(overlayMaps).addTo(map)

    const geojson_ejes = L.geoJson(ejes.features)
    geojson_ejes.addTo(map)

    const geojson_pk_autopistas = L.geoJson(pk_autopistas.features)
    geojson_pk_autopistas.addTo(map)

    // const pk_autopistas = L.geoJson(pk_autopistas.features, {
    //     onEachFeature: (feature, layer) => layer.bindPopup(feature.properties.name)
    // })
    // pk_autopistas.addTo(map)

    // map.fitBounds(geojson.getBounds())
  
    // forEach(e => {
    //     L.marker([e.geometry.coordinates[1], e.geometry.coordinates[0]]).addTo(map).bindPopup(`popup`)
    // })
    
  })
