import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import iconCamera from './../assets/camera3.png';

const cameraIcon = new Icon({
    iconUrl: iconCamera,
    iconSize: [30],
    iconAnchor: [10, 12]
})

class LeafletDemo extends Component {
    state = {
        latlng: {
            lat: 16.031295,
            lng: 108.199567
        },
        zoom: 13,
        dataCamera: [
            { key: 'camera 1', position: [16.061124, 108.223999], content: 'camera đường Nguyen Van Linh' },
            { key: 'camera 2', position: [16.032615,108.224229], content: 'camera đường 2 tháng 9' },
            { key: 'camera 3', position: [16.038060,108.243038], content: 'camera Ngã tư Lê Văn Hiến' },
            { key: 'camera 4', position: [16.049319, 108.220552], content: 'camera đường Duy Tan' },
            { key: 'camera 5', position: [16.071774, 108.223676], content: 'camera đường Le Duan' },
            { key: 'camera 6', position: [16.054289, 108.220197], content: 'camera đường Nui Thanh' },
            { key: 'camera 7', position: [16.058186, 108.217066], content: 'camera đường Hoang Dieu' },
            { key: 'camera 8', position: [16.062712, 108.215931], content: 'camera đường Oc Ich Khiem' },
            { key: 'camera 9', position: [16.061135, 108.234536], content: 'camera đường Ngo Quyen' },
            { key: 'camera 10', position: [16.055237, 108.235729], content: 'camera đường Nguyen Van Thoai' },
            { key: 'camera 11', position: [16.052618,108.237084], content: 'camera đường Ngu Hanh Son' }
        ],
        
    }

    showMarker = () => {
        let result = null;
        const { dataCamera } = this.state;
        if(dataCamera.length > 0) {
            result = dataCamera.map(item => {
                return (
                    <Marker position={item.position} key={item.key} icon={ cameraIcon } >
                        <Popup> { item.content } <br /> { item.position } </Popup>
                        
                    </Marker>
                )
            })
        }
        return result;
    }
    render() {
        const {latlng, zoom} = this.state
        return (
            <React.Fragment>
                 <div className="box-input">
                    <input id="autocomplete" className="form-control" placeholder="Search for state..." />
                </div>
                <Map center={latlng} zoom={zoom}>
                   
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                    this.showMarker()
                    }

                      
                
                </Map>
            </React.Fragment>
        );
    }
}

export default LeafletDemo;
