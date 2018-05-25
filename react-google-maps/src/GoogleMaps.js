import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { ejes } from '../../data/ejes.geojson'
// import { pk_autopistas } from '../../data/pk_autopistas_ej_clean.geojson'

class GoogleMapsRaw extends Component {
  constructor(props) {
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
      <GoogleMap
        defaultZoom={this.state.zoom}
        defaultCenter={this.state.position}
      >
        {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    )
  }
}

export const GoogleMaps = withGoogleMap(GoogleMapsRaw)
