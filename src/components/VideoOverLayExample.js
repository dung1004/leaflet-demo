import React, { Component } from 'react';
import { Map, TileLayer, VideoOverlay } from 'react-leaflet';


class VideoOverLayExample extends Component {
    state = {
        play: true
    }
    onTogglePlay = () => {
        this.setState({
            play: !this.state.play
        })
    }
    render() {
        const { play } = this.state
        return (
            <Map 
                center={[25, -100]}
                zoom={4}
                onclick={this.onTogglePlay}

            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <VideoOverlay 
                    bounds={[
                        [ 32, -130], [ 13, -100]
                    ]}
                    play = {play}
                    url="https://labs.mapbox.com/bites/00188/patricia_nasa.webm"

                >

                </VideoOverlay>
            </Map>
        );
    }
}

export default VideoOverLayExample;
