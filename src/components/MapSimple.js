import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapSimple extends Component {
    constructor() {
        super();
        this.state = {
            latlng: {
                lat: 51.505,
                lng: -0.09
            },
            zoom: 12,
        }
    }
  
    render() {
        const { zoom, latlng} = this.state;
        
        return (
            <Map 
                center={latlng} 
                zoom={zoom}

            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                 <Marker position={ latlng } >
                    <Popup>Thu do Ha Noi.<br /> { latlng.lat + ' --- ' + latlng.lng }.</Popup>
                </Marker> 
            </Map>
        );
    }
}

export default MapSimple;
