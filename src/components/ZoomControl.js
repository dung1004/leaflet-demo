import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

class ZoomControlExample extends Component {
    render() {
        return (
            <Map center={[51.505, -0.09]} zoom={12}>
                 <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                <ZoomControl position="bottomright" />
            </Map>
        );
    }
}

export default ZoomControlExample;
