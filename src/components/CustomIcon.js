import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'

import iconPointer from './../assets/pointerIcon.svg'

const pointerIcon = new Icon({
    iconUrl: iconPointer,
    iconSize: [25, 53],
    iconAnchor: [20, 50]
})

class CustomIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 12
        }
    }
    
   render(){
       const  position = [this.state.lat, this.state.lng];
       const position2 = [15.284185, 108.100402]
       return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={pointerIcon}>
                    <Popup>
                        this is london <br /> { position }.
                    </Popup>
                </Marker>
                <Marker position={position2} >
                    <Popup>
                        this is vietnamese. <br /> {position2}.
                    </Popup>
                </Marker>
        </Map>
       )
   }
}

export default CustomIcon;