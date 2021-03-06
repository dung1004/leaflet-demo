import React, { Component } from 'react';
import {
    Circle,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Map,
    Marker,
    Popup,
    Rectangle,
    TileLayer,
  } from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl;

const center = [51.505, -0.09];
const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
class LayersControlExample extends Component {
    render() {
        return (
            <Map center={center} zoom={12}>
                <LayersControl position="topright">
                    <BaseLayer checked name="OpenStreetMap.Mapnik">
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    <BaseLayer name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    <Overlay name="Marker with popup">
                        <Marker position={center}>
                            <Popup>
                                this is popup. <br /> in marker.
                            </Popup>
                        </Marker>
                    </Overlay>
                    <Overlay name="Layer group with circles">
                        <LayerGroup>
                            <Circle center={center} fillColor="blue" radius={200} />
                            <Circle
                                center={center}
                                fillColor="red"
                                radius={100}
                                stroke={false}
                            />
                           <Circle
                                center={[51.51, -0.08]}
                                color="green"
                                fillColor="green"
                                radius={100}
                            />
                        </LayerGroup>
                    </Overlay>
                    <Overlay name="Feature group">
                        <FeatureGroup color="purple">
                            <Popup>Popup in FeatureGroup</Popup>
                            <Circle center={[51.51, -0.06]} radius={200} />
                            <Rectangle bounds={rectangle} />
                        </FeatureGroup>
                    </Overlay>
                </LayersControl>
              
            </Map>
        );
    }
}

export default LayersControlExample;
