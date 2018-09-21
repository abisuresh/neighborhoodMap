import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from './Search'
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

    //function that filters the list view of the restaurants displayed on the navigation
    // markerFilterFunction(value) {
    //     // if(this.filterFunction == false){
    //     //     return true
    //     //
    //     // }else if(this.filterFunction ==true){
    //     //     return true
    //     //
    //     // }
    //
    //     return true
    //     // let matchesMarkers = value.name.toUpperCase().match(this.state.query.toUpperCase());
    //     // if(matchesMarkers == null){
    //     //     return false
    //     // }else{
    //     //     return true
    //     // }
    // }
    //Call to Foursquare API


    // componentDidMount(){
    //     this.mount = true;
    //     // LocationsAPI.getData(this.props.markerLocation[0].ID).then((locations) => {
    //     //     this.setState({ similarLocations: locations })
    //     // })
    //
    //     // for loop to go through each restaurant in the array and return it's data
    //
    //     // for(let i=0; i < this.props.markerLocation.length; i++){
    //     //     LocationsAPI.getData(this.props.markerLocation[i].ID).then((locations) => {
    //     //         this.setState({similarLocations: locations})
    //     //     })
    //     // }
    // }

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


    render() {
        let {latitude, longitude, width, height, markerPin} = this.props
        const apiKEY = "AIzaSyBv-_zVD4uQJOvUcpyQIGQz-WQNP5Xi-p0"
        const AReactComponent = ({text}) => <div>{text}</div>
        return (
            <Map google={this.props.google}
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
                    return (
                            <Marker key={newMarker.ID}
                                    position={{ lat: newMarker.latitude , lng: newMarker.longitude }}
                                    name ={newMarker.name}
                                    //https://medium.com/@letian1997/how-to-change-javascript-google-map-marker-color-8a72131d1207?source=userActivityShare-132a3f83f2e2-1537478743
                                    icon={{
                                        url:`https://maps.google.com/mapfiles/ms/icons/${newMarker.color}-dot.png`
                            }}
                                    title = {newMarker.name}
                                    onClick={this.props.onMarkerClick}
                            />
                    )})
                }

                {this.props.markerLocation.filter(this.filterShowingWindows).map(newMarker => {
                    {/*let contactInfo = LocationsAPI.getData(newMarker.ID)*/}
                    {/*if(contactInfo == null){*/}
                        {/*contactInfo = 'Data not loading'*/}
                    {/*}*/}
                    return (
                        <InfoWindow
                            marker={this.props.activeMarker}
                            visible={this.props.showingInfoWindow}
                        >
                            <div>
                                <h1>{newMarker.name}</h1>
                                {/*<span> {JSON.stringify(contactInfo)} </span>*/}
                            </div>
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

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDd5QYqnqqvbUCzTC5jH3tbf5YbltIbAmg")
})(MapComp)