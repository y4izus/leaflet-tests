import React, { Component } from "react"
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers"
import { ejes } from '../../data/ejes.geojson'
import { pk_autopistas } from '../../data/pk_autopistas_ej_clean.geojson'

export class OpenLayersMap extends Component {
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
      <Map view={{center: position, zoom: this.state.zoom}}>
        <Layers>
          <layer.Tile/>
          <layer.Vector source={ejes} zIndex="1" />
          <layer.Vector source={pk_autopistas} zIndex="2" />
        </Layers>
        {/* <TileLayer
          attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
      </Map>
    )
  }
}
