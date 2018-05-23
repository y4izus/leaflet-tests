$(document).ready(() => {
  const map = L.map("map").setView([40.4165, -3.70256], 6)
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
    '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  const geojson_ejes = L.geoJson(ejes.features)
  geojson_ejes.addTo(map)

  const geojson_pk_autopistas = L.geoJson(pk_autopistas.features)
  geojson_pk_autopistas.addTo(map)

})
