import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from './Search'
import * as LocationsAPI from './LocationsAPI'
import PropTypes from 'prop-types'

//Creating dynamic map using Google React Map
//https://www.npmjs.com/package/google-maps-react

export class MapComp extends Component {

    state = {
            showingInfoWindow:false,
            activeMarker: {},
            selectedPlace: {},
    };

    onMarkerClick=(props, marker, e) =>
        this.setState({
            selectedPlace:props,
            activeMarker: marker,
            showingInfoWindow: true
        });


    onMapClicked = (props) => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    //Call to Foursquare API


    componentDidMount(){
        this.mount = true;
        LocationsAPI.getData(this.props.markerLocation[0].ID).then((locations) => {
            this.setState({ similarLocations: locations })
        })
    }

    //Converting JSON from API to HTML
    //https://www.w3schools.com/js/js_json_html.asp
    //
    // parseJSON(){
    //     obj = {table: "Restaurant details", limit: 10};
    //     dbParam = JSON.stringify(obj);
    //     xmlhttp = new XMLHttpRequest();
    //     xmlhttp.onreadystatechange = function(){
    //         if (this.readyState == 4 && this.status == 200){
    //             fsAPI = JSON.parse(this.responseText);
    //             txt += "<select>"
    //             for (x in fsAPI) {
    //                 txt += "<option>" + fsAPI[x].name;
    //             }
    //             txt += "</select>"
    //             document.getElementById("demo").innerHTML = txt;
    //         }
    //     }
    //
    //     xmlhttp.open("POST", true); //need file
    //     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     xmlhttp.send("x=" + dbParam);
    // }



    //creating static map
    //utilized general setup of the following code to create static map URL
    // https://gist.github.com/ConnectExtend/c9c65e1f9b84886ff7f5a07c96320c5a

    getGoogleMap(apiKEY, props) {
        const {latitude, longitude, width, height} = this.props
        const markerLocation = (this.props.markerLocation || []).map(marker => [
                `&markers=color:${marker.color || 'red'}`,
                `label:${(marker.label || '').replace('|', '\\|')}`,
                `${marker.latitude},${marker.longitude}`
            ].join('%7C')
        );

        return `https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=13&size=${props.width}x${props.height}&maptype=${props.type || "roadmap"}${markerLocation.join("")}&key=${apiKEY}`
    }


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
                 onClick={this.onMapClicked}>
                {/*<Marker onClick={this.onMarkerClick}*/}
                        {/*name={'Current location'} />*/}
                {this.props.markerLocation.map(newMarker => (<Marker key={newMarker.ID}
                    position={{ lat: newMarker.latitude , lng: newMarker.longitude }}
                    name ={newMarker.name}
                    title = {newMarker.name}
                />))}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
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