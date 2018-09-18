import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react'
import {GoogleMap, Marker } from 'react-google-maps';
import Search from './Search'
import PropTypes from 'prop-types'

class Map extends Component {

    state = {}

    //creating static map
    //utilized general setup of the following code to create static map URL
    // https://gist.github.com/ConnectExtend/c9c65e1f9b84886ff7f5a07c96320c5a


    getGoogleMap(apiKEY, props) {
        const {latitude, longitude, width, height}= this.props
        const markerLocation =  (this.props.markerLocation || []).map(marker => [
            `&markers=color:${marker.color || 'red'}`,
            `label:${(marker.label || ''). replace('|', '\\|')}`,
            `${marker.latitude},${marker.longitude}`
        ].join('%7C')

        );

        return `https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=13&size=${props.width}x${props.height}&maptype=${props.type || "roadmap"}${markerLocation.join("")}&key=${apiKEY}`
    }

    //Creating dynamic map using Google React Map
    //Utilized https://www.npmjs.com/package/google-map-react

    static defaultProps = {
       center: {
           lat: 44.4760983,
           lng: -73.2141478
       },
        zoom: 13
    };

    render() {
        let {latitude, longitude, width, height, markerPin} = this.props
        const apiKEY = "AIzaSyBv-_zVD4uQJOvUcpyQIGQz-WQNP5Xi-p0"
        const AReactComponent = ({text}) => <div>{text}</div>
        return (
            <div>
                <div aria-labelledby="map" role="application" tabIndex={0} className="map">
                    <img src={this.getGoogleMap(apiKEY, this.props)} />
                    {this.getGoogleMap(apiKEY, this.props)}
                    {/*<GoogleMapReact*/}
                        {/*bootstrapURLKeys = {{key: "AIzaSyBv-_zVD4uQJOvUcpyQIGQz-WQNP5Xi-p0"}}*/}
                        {/*defaultCenter = {this.props.center}*/}
                        {/*defaultZoom = {this.props.zoom}>*/}

                        {/*<AReactComponent*/}
                            {/*lat = {44.4760983}*/}
                            {/*lng = {-73.2141478}*/}
                            {/*text="Burlington"*/}
                        {/*/>*/}
                    {/*</GoogleMapReact>*/}
                </div>
            </div>

        )

    }

}


export default Map