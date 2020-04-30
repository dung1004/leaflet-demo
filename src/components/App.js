import React, { Component } from 'react';

import './../styles/index.css';
import MapCpn from './MapSimple';
import ViewportExample from './ViewPort';
import CustomIcon from './CustomIcon';
import VectorLayer from './VectorLayer';
import OtherLayersExample from './OtherLayers';
import TooltipExample from './Tooltip';
import ZoomControlExample from './ZoomControl';
import LayersControlExample from './LayersControl';
import CustomPane from './CustomPane';
import DraggableExample from './DraggableMarker';
import BoundsExample from './BoundsExample';
import CustomComponent from './CustomComponent';
import AnimateExample from './AnimateExample';
import WmsTileLayerExample from './WmsTileLayerExample';
import VideoOverLayExample from './VideoOverLayExample';
import EventsExample from './Events';
import LeafletDemo from './LeafletDemo';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <MapCpn /> */}
                {/* <ViewportExample /> */}
                {/* <CustomIcon /> */}
                {/* <VectorLayer /> */}
                {/* <OtherLayersExample /> */}
                {/* <TooltipExample /> */}
                {/* <ZoomControlExample /> */}
                {/* <LayersControlExample /> */}
                {/* <CustomPane /> */}
                {/* <DraggableExample /> */}
                {/* <BoundsExample /> */}
                {/* <CustomComponent /> */}
                {/* <AnimateExample /> */}
                {/* <WmsTileLayerExample /> */}
                {/* <VideoOverLayExample /> */}
                <EventsExample />
                {/* <LeafletDemo /> */}
            </React.Fragment>
        );
    }
}

export default App;
