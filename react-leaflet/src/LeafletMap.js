import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet"
import { ejes } from '../../data/ejes.geojson'
import { pk_autopistas } from '../../data/pk_autopistas_ej_clean.geojson'

export class LeafletMap extends Component {
  constructor() {
    super()
    // console.log(this.pk_autopistas)
    this.state = {
      lat: 40.4165,
      lng: -3.70256,
      zoom: 6
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={ ejes }></GeoJSON>
        <GeoJSON data={ pk_autopistas }></GeoJSON>
      </Map>
    )
  }
}
