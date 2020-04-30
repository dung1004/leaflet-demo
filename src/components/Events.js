import React, { createRef, Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class EventsExample extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 16.061124,
      lng: 108.223999,
    },
  }
  mapRef = createRef()

  handleClick = (e) => {
    console.log(this.mapRef);
    
    console.log('e handleClick: ', e.latlng);
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    });
    
  }

  render() { 
      const { latlng, hasLocation } = this.state
      const marker = hasLocation ? (
      <Marker position={latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null

    return (
      <React.Fragment>
        <form className="formLatlng">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">lat</span>
            </div>
            <input type="text" className="form-control" value={latlng.lat} readOnly />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">lng</span>
            </div>
            <input type="text" className="form-control" value={latlng.lng} readOnly />
          </div>
        </form>
         <Map
          center={ latlng }
          length={4}
          onClick={this.handleClick}
          // onLocationfound={latlng}
          ref={this.mapRef}
          zoom={12}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker}
        </Map>
      </React.Fragment>
     
    )
  }
}