import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet"
import { ejes } from '../../data/ejes.geojson'

export class LeafletMap extends Component {
  constructor() {
    console.log(ejes.name)
    super()
    this.state = {
      lat: 40.4165,
      lng: -3.70256,
      zoom: 6
    }
  }

  getGeoJson(){
    return ejes;
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
        <GeoJSON data={this.getGeoJson()}></GeoJSON>
      </Map>
    )
  }
}
