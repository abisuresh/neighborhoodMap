import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import {GoogleMap, Marker } from 'react-google-maps';
import Search from './Search'

class Map extends Component {

    state = {}

    //utilized general setup of the following code to create static map URL
    // https://gist.github.com/ConnectExtend/c9c65e1f9b84886ff7f5a07c96320c5a


    getGoogleMap(apiKEY, props) {
        const {latitude, longitude, width, height}= this.props
        const markerLocation =  (props.markerLocation || []).map(marker => [
            `&markers=color:${marker.color || 'red'}`,
            `label:${(marker.label || ''). replace('|', '\\|')}`,
            `${marker.latitude},${marker.longitude}`
        ].join('%7C')

        );

        return `https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=13&size=${props.width}x${props.height}&maptype=${props.type || "roadmap"}${markerLocation.join("")}&key=${apiKEY}`
    }

    render() {
        // const mapStyle={
        //     width: '80%',
        //     height: '100%',
        //     border: '1px solid black',
        //     float: 'right',
        //     padding: '1%'
        // }
        let {latitude, longitude, width, height, markerPin} = this.props
        const apiKEY = "AIzaSyBv-_zVD4uQJOvUcpyQIGQz-WQNP5Xi-p0"
        return (
            <div>
                <div className="map">
                    <img src={this.getGoogleMap(apiKEY, this.props)} />
                    {this.getGoogleMap(apiKEY, this.props)}
                </div>
            </div>

        )

    }

}


export default Map