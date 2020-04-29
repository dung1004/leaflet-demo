import React, { Component } from 'react';
import {
    Circle,
    CircleMarker,
    Map,
    Polyline,
    Popup,
    Rectangle,
    TileLayer,
    Marker,
  } from 'react-leaflet';
  import { Icon } from 'leaflet'

  import iconPointer from './../assets/pointerIcon.svg'

  const pointerIcon = new Icon({
      iconUrl: iconPointer,
      iconSize: [25, 53],
      iconAnchor: [5, 50]
  })

const center = [51.505, -0.09]

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
]

const multiPolyline = [
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
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
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
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]


class VectorLayer extends Component {
    render() {
        return (
            <Map center={center} zoom={13}>
                 <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                   
                    <Circle center={center} radius={200} />
                    <CircleMarker center={center} color="red" radius={30}>
                        <Popup>this is circleMarker</Popup>
                    </CircleMarker>
                    <Polyline color="lime" positions={polyline} />
                    <Polyline color="lime" positions={multiPolyline} />
                    <Polyline color="purple" positions={polygon} />
                    <Polyline color="purple" positions={multiPolygon} />
                    <Rectangle bounds={rectangle} color="black" />



                    <Marker position={center} icon={pointerIcon} >
                        <Popup>this is marker {center} </Popup>
                    </Marker>
            </Map>
        );
    }
}

export default VectorLayer;
