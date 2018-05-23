import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

export class LeafletMap extends Component {
  constructor() {
    super()
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
        {/* <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker> */}
      </Map>
    )
  }
}
