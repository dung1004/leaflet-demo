import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class LeafletDemo extends Component {
    state = {
        latlng: {
            lat: 16.031295,
            lng: 108.199567
        },
        zoom: 13,
        dataCamera: [
            { key: 'camera 1', position: [16.061124, 108.223999], content: 'camera duong Nguyen Van Linh' },
            { key: 'camera 1', position: [16.061140, 108.223156], content: 'camera duong Tran Phu' },
            { key: 'camera 1', position: [16.060934, 108.223816], content: 'camera duong 2 Thang 9' },
            { key: 'camera 1', position: [16.049319, 108.220552], content: 'camera duong Duy Tan' },
            { key: 'camera 1', position: [16.071774, 108.223676], content: 'camera duong Le Duan' },
            { key: 'camera 1', position: [16.054289, 108.220197], content: 'camera duong Nui Thanh' },
            { key: 'camera 1', position: [16.058186, 108.217066], content: 'camera duong Hoang Dieu' },
            { key: 'camera 1', position: [16.062712, 108.215931], content: 'camera duong Oc Ich Khiem' },
            { key: 'camera 1', position: [16.061135, 108.234536], content: 'camera duong Ngo Quyen' },
            { key: 'camera 1', position: [16.055237, 108.235729], content: 'camera duong Nguyen Van Thoai' },
            { key: 'camera 1', position: [16.052618,108.237084], content: 'camera duong Ngu Hanh Son' }
        ],
        
    }
    render() {
        const {latlng, zoom, dataCamera} = this.state
        return (
            <Map center={latlng} zoom={zoom}>
                 <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        );
    }
}

export default LeafletDemo;
