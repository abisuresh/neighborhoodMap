import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as LocationsAPI from './LocationsAPI'
import PropTypes from 'prop-types'

//Creating dynamic map using Google Maps React npm package
//https://www.npmjs.com/package/google-maps-react

export class MapComp extends Component {

    constructor (props) {
        super(props);
        // this.markerFilterFunction = this.markerFilterFunction.bind(this)
        // this.filterFunction = this.filterFunction.bind(this)
        this.filterShowingWindows= this.filterShowingWindows.bind(this)
    }

    state = {
        showingInfoWindow:false,
        activeMarker: {},
        selectedPlace: {},
    };

    filterShowingWindows(m){

        if(this.props.activeMarker != null){
            if( m.name == this.props.activeMarker.title){
                return true
            }else{
                return false
            }
        }


    }



    //Converting JSON from API to HTML
    //https://www.w3schools.com/js/js_json_html.asp


    //creating static map
    //utilized general setup of the following code to create static map URL
    // https://gist.github.com/ConnectExtend/c9c65e1f9b84886ff7f5a07c96320c5a
    //
    // getGoogleMap(apiKEY, props) {
    //     const {latitude, longitude, width, height} = this.props
    //     const markerLocation = (this.props.markerLocation || []).map(marker => [
    //             `&markers=color:${marker.color || 'red'}`,
    //             `label:${(marker.label || '').replace('|', '\\|')}`,
    //             `${marker.latitude},${marker.longitude}`
    //         ].join('%7C')
    //     );
    //
    //     return `https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=13&size=${props.width}x${props.height}&maptype=${props.type || "roadmap"}${markerLocation.join("")}&key=${apiKEY}`
    // }


    //Utilized Google Maps React documentation https://github.com/fullstackreact/google-maps-react

    render() {
        let {latitude, longitude, width, height, markerPin} = this.props
        let backupDivStyle = {
            color: 'white',
            backgroundColor: 'rgb(66, 206, 244)'
        }
        const apiKEY = "AIzaSyBv-_zVD4uQJOvUcpyQIGQz-WQNP5Xi-p0"
        const AReactComponent = ({text}) => <div>{text}</div>
        const defaultContainer = (props) => (
            <div style={backupDivStyle}>

                This Google Map Is Still Loading... </div>
        )
        return (
            <Map google={{...this.props.google, LoadingContainer: defaultContainer}}
                 initialCenter={{
                     lat: 44.4760983,
                     lng: -73.2141478
                 }}
                 className = {'map'}
                 style={{overflow:'hidden' }}
                 onClick={this.props.onMapClicked}>
                {/*<Marker onClick={this.onMarkerClick}*/}
                {/*name={'Current location'} />*/}
                {this.props.restaurantDetails.filter(this.props.filterFunction).map(newMarker => {
                    {/*let contactInfo = LocationsAPI.getData(newMarker.ID)*/}
                    {/*if(!contactInfo){*/}
                        {/*contactInfo = 'Data not loading'*/}
                    {/*}*/}
                    let markerRef = React.createRef()
                    {/*this.props.attachMarkerLocation(newMarker.name,markerRef)*/}
                    return (
                            <Marker key={newMarker.ID}
                                    ref= {newMarker.markerRef}
                                    position={{ lat: newMarker.latitude , lng: newMarker.longitude }}
                                    name ={newMarker.name}
                                    //https://medium.com/@letian1997/how-to-change-javascript-google-map-marker-color-8a72131d1207?source=userActivityShare-132a3f83f2e2-1537478743
                                    icon={{
                                        url:`https://maps.google.com/mapfiles/ms/icons/${newMarker.color}-dot.png`
                            }}
                                    title = {newMarker.name}
                                    onClick={this.props.onMarkerClick}>
                            </Marker>
                    )})
                }

                {this.props.markerLocation.filter((marker) => marker.markerRef.current != null).map(newMarker => {

                    {/*let contactInfo = LocationsAPI.getData(newMarker.ID)*/}
                    {/*/!*let url = contactInfo.response.venue.canonicalUrl*!/*/}
                    {/*let url = `https://www.tripadvisor.com/Restaurant_Review-g57201-d6901707-Reviews-Thai_Dishes-Burlington_Vermont.html`*/}
                    {/*if(!contactInfo){*/}
                        {/*contactInfo = 'Data not loading'*/}
                    {/*}*/}
                    return (
                        <InfoWindow
                            marker={newMarker.markerRef.current.marker}
                            position={{ lat: newMarker.latitude , lng: newMarker.longitude }}
                            // visible={this.props.showingInfoWindow}
                            visible={newMarker.showingInfoWindow}
                        >
                                <div>
                                    <h1>{newMarker.name}</h1>
                                    <span> {newMarker.apiInfo} </span>

                                    {/*<h2><a href = {this.props.url}>Test URL</a></h2>*/}
                                    {/*<h1> Additional info: </h1>*/}
                                    {/*<h2>{this.state.apiInfo} </h2>*/}
                                </div>

                                {/*<h3>Test</h3>*/}
                        </InfoWindow>
                    )
                }
                )}

            </Map>
        );

    }

}

// {/*<div>*/}
//     {/*<div aria-labelledby="map" role="application" tabIndex={0} className="map">*/}
//         {/*<img src={this.getGoogleMap(apiKEY, this.props)} />*/}
//         {/*{this.getGoogleMap(apiKEY, this.props)}*/}
//
//     {/*</div>*/}
// {/*</div>*/}


// export default MapComp

let backupDivStyle = {
    color: 'white',
    backgroundColor: 'rgb(66, 206, 244)',
    alignContent: 'center',
    textAlign: 'center'
}

const defaultContainer = (props) => (
    <div style={backupDivStyle}>

        This Google Map Is Still Loading... </div>
)

export default GoogleApiWrapper({
    LoadingContainer: defaultContainer,
    apiKey: ("AIzaSyDd5QYqnqqvbUCzTC5jH3tbf5YbltIbAmg")
})(MapComp)