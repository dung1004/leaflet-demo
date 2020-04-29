import React, { Component } from 'react';
import { Map, TileLayer, WMSTileLayer } from 'react-leaflet';

class WmsTileLayerExample extends Component {
    state = {
        latlng: {
            lat: 51.505,
            lng: -0.09
        },
        zoom: 5,
        bluemarble: false,
      }
    
      onClick = () => {
        this.setState({
          bluemarble: !this.state.bluemarble,
        })
      }
    
      render() {
          const { latlng, zoom, bluemarble } = this.state;

        return (
          <Map
            center={ latlng }
            zoom={zoom}
            onClick={this.onClick}
            >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <WMSTileLayer
              layers={bluemarble ? 'nasa:bluemarble' : 'ne:ne'}
              url="https://demo.boundlessgeo.com/geoserver/ows"
            />
          </Map>
        )
      }
}

export default WmsTileLayerExample;
