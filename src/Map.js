import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import {GoogleMap, Marker } from 'react-google-maps';
import Search from './Search'

class Map extends Component {

    state = {}

    //utilized general setup of the following code to create static map URL
    // https://gist.github.com/ConnectExtend/c9c65e1f9b84886ff7f5a07c96320c5a


    getGoogleMap(apiKEY, props) {
        const markerLoc =  (props.markerLoc || []).map(marker => [
            "&markers=color:${marker.color || 'red'}",
            "label:${(marker.label || ''). replace('|', '\\|')}",
            "${marker.latitude},${marker.longitude}"
        ].join('|')

        );


        return 'https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=13&size=${props.width}x${props.height}&maptype=${props.type || "roadmap"}${markers.join("")}&key=${apiKEY}'

    }


    render() {
        let {latitude, longitude, width, height, markerLoc} = this.props
        const apiKEY = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBv-_zVD4uQJOvUcpyQIGQz-WQNP5Xi-p0&callback=initMap"
        return (
            <div>
                <div style = {{height: '100vh', width: '80vh'}} class="map">
                    {this.getGoogleMap(apiKEY, this.props)}
                </div>
            </div>

        )

    }

}


export default Map