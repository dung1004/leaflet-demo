import React, { createRef, Component } from 'react';
import { Map, Marker, Popup, TileLayer, Circle, CircleMarker, Polyline, Tooltip, ZoomControl } from 'react-leaflet';
import { Icon } from 'leaflet';

import iconPointer from './../assets/pointerIcon.svg';
import iconShadow from './../assets/marker-shadow.png';


// custom icon
const pointerIcon = new Icon({
    iconUrl: iconPointer,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 53],
    shadowUrl: iconShadow,
    shadowSize: [68, 95],
    shadowAnchor: [20, 92]
});

class MapSimple extends Component {
    constructor() {
        super();
        this.state = {
            hasLocation: false,
            latlng: {
                lat: 51.505,
                lng: -0.09
            },
            
            zoom: 12,
            polyline: [
                [51.515, -0.02],
                [51.52, -0.1],
                [51.52, -0.12]
            ],
            multiPolyline: [
                [
                    [51.5, -0.1],
                    [51.5, -0.12],
                    [51.52, -0.12],
                  ],
                  [
                    [51.5, -0.05],
                    [51.5, -0.06],
                    [51.52, -0.06],
                  ],
            ],
            multiPolygon: [
                [
                    [51.51, -0.12],
                    [51.51, -0.13],
                    [51.53, -0.13],
                  ],
                  [
                    [51.51, -0.05],
                    [51.51, -0.07],
                    [51.53, -0.07],
                  ],
                  [
                    [51.51, -0.08],
                    [51.51, -0.09],
                    [51.53, -0.10],
                  ]
            ]
        }
    }
  
    render() {
        const { zoom, polyline, latlng,multiPolyline, multiPolygon } = this.state;
        
        return (
            <Map 
                center={ latlng} 
                zoom={zoom}

            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={ latlng } fillColor="blue" radius={200} />
                <CircleMarker center = { latlng } color="red" radius={50} />
                {/* <Polyline positions={polyline} color="black"/>
                <Polyline positions={multiPolyline} color="black" /> */}

                 <Marker position={ latlng } icon={pointerIcon}>
                    <Tooltip>Tooltip for CircleMarker</Tooltip>
                    <Popup>Thu do Ha Noi.<br /> { latlng.lat + ' --- ' + latlng.lng }.</Popup>
                </Marker> 


                <ZoomControl position="bottomleft" />
               
            </Map>
        );
    }
}

export default MapSimple;
