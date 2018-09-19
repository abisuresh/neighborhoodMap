import React, { Component } from 'react';
import { BrowserRouter } from 'react-router'
import { Route } from 'react-router'
import { Link } from 'react-router'
import MapComp from './Map'
import Markers from './Markers'
import * as LocationsAPI from './LocationsAPI'
import Navigation from './Navigation'
import Search from './Search'
import './App.css';

class App extends Component {

    state = {
        locations:[
            {latitude: 44.475910, longitude: -73.213434, label: "A", color: "red", name: "Thai Dishes", ID: "53da7401498eec845e38b417"},
            {latitude: 44.476814, longitude: -73.213847, label: "B", color: "red", name: "American Flatbread", ID: "4af3a181f964a520fcee21e3"},
            {latitude: 44.475773, longitude: -73.21533, label: "C", color: "red", name: "Sweetwaters", ID: "4b19d11af964a520bbe423e3"},
            {latitude: 44.476904, longitude: -73.213243, label: "D", color: "red", name: "Ri Ra's", ID: "4b1306fff964a520ed9223e3"},
            {latitude: 44.477003, longitude: -73.214876, label: "E", color: "red", name: "Sherpa Kitchen", ID: "4faaf19ce4b0af50a80a7e69"}
            ]
    }

     startMap(){
      let location = {}
      // let map = new google.maps.Map()
      // let locationMarker = new google.maps.Marker()
    }

    // componentDidMount(){
    //     this.mount = true;
    //     LocationsAPI.fetch("https://api.foursquare.com/v2/venues/VENUE_ID/similar").then(response  => response.json())
    //         .then((resp) => {
    //         this.setState({
    //             isLoaded: true,
    //             items: resp.items
    //         })
    //     })
    // }

    // componentDidMount(){
    //     this.mount = true;
    //     LocationsAPI.getData().then((locations) => {
    //         this.setState({ similarLocations: locations })
    //     })
    // }

    //Function that filters the markers displayed on the map
    markerFilter() {
        //if query in filter is == "", show all markers
        //if query in filter matches a letter contained in a restaurant, show only those markers
        //return state to showing all if query is removed
    }

  render() {
    const mapStyle={
        width: '95%',
        height: '100%',
        float: 'right',
        overflowX: 'hidden'
    }

    return (
      <div className="App">
        <header aria-labelledby="header" className="App-header">
          <h1 tabIndex={0} className="App-title">Top places to eat </h1>
            <p tabIndex={0}>Burlington, VT (population 56,000) </p>
        </header>
        {/*<p className="App-intro">*/}
        {/*</p>*/}
        <div className="main flexbox-container">
            <div className="left-nav">
                <div className="nav-header">
                    Restaurant Locations
                </div>
                <div tabIndex={0} className="search-container">
                    {/*<Search />*/}
                </div>
                <div tabIndex={0} aria-labelledby="navigation" className="navigation-container" style={{border: '1px solid black'}}>
                    <Navigation
                        restaurantDetails = {this.state.locations}
                    />
                </div>
            </div>
            <div tabIndex={0} className="map-container" style = {mapStyle}>
                <div tabIndex={0} className="map" >
                    <MapComp
                        // latitude = {44.4760983}
                        // longitude = {-73.2141478}
                        // text="Burlington"
                        //  width = "800"
                        //  height = "600"
                         markerLocation= {this.state.locations}
                    />
                </div>
            </div>
            <div className="footer">
                This website is a react Google Maps website created by Abbi Devins-Suresh
            </div>

        </div>

      </div>
    );
  }
}

export default App;
