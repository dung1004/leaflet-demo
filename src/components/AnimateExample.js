import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';

class AnimateExample extends Component {
    state = {
        animate: false,
        latlng: {
            lat: 51.505,
            lng: -0.09
        }
    }

    toggleAnimate =() => {
        this.setState({
            animate: !this.state.animate
        })
    }

    handleClick = (e) => {
        console.log(e.latlng);
        
        this.setState({
            latlng: e.latlng
        })
    }
    render() {
        const  { latlng, animate } = this.state;
        return (
            <div style={{ textAlign: 'center' }}>

                <label>
                    <input 
                        checked={ animate }
                        type="checkbox"
                        onChange={this.toggleAnimate}
                    />
                </label>
                

                <Map 
                    center={ latlng } 
                    zoom={12}
                    animate={ animate }
                    length={10}
                    onclick={this.handleClick}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </Map>
            </div>
        );
    }
}

export default AnimateExample;
