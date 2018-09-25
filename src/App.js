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
    constructor (props) {
        super(props);
        this.filterFunction = this.filterFunction.bind(this)
        this.handleQueryChange = this.handleQueryChange.bind(this)
        this.listClicked = this.listClicked.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
        this.onMarkerClick = this.onMarkerClick.bind(this)
        // for(let i=0; i<props.markerLocation.length; i++){
        //
        // }
    }

    state = {
        locations:[
            {latitude: 44.4756122, longitude: -73.2149202, label: "A", color: "red", name: "Thai Dishes", ID: "53da7401498eec845e38b417", showingInfoWindow: false},
            {latitude: 44.4765, longitude: -73.2143, label: "B", color: "red", name: "American Flatbread", ID: "4af3a181f964a520fcee21e3", showingInfoWindow: false},
            {latitude: 44.4770, longitude: -73.2124, label: "C", color: "red", name: "Sweetwaters", ID: "4b19d11af964a520bbe423e3", showingInfoWindow: false},
            {latitude: 44.4769, longitude: -73.2127, label: "D", color: "red", name: "Ri Ra's", ID: "4b1306fff964a520ed9223e3", showingInfoWindow: false},
            {latitude: 44.4768, longitude: -73.2151, label: "E", color: "red", name: "Sherpa Kitchen", ID: "4faaf19ce4b0af50a80a7e69", showingInfoWindow: false}
            ],
        query: '',
        activeMarker: {},
        clickedLocations: []
    }

     startMap(){
      let location = {}
      // let map = new google.maps.Map()
      // let locationMarker = new google.maps.Marker()
    }

    //function that filters the list view of the restaurants displayed on the navigation
    filterFunction(value) {
        let matchesFilters = value.name.toUpperCase().match(this.state.query.toUpperCase());
        if(matchesFilters == null){
            return false
        }else{
            return true
        }
    }

    handleQueryChange(event){
        this.setState({query: event.target.value})
    }

    // listClicked(event){
    //     // this.setState({
    //     //     activeIndex: index
    //     // })
    //     this.state.locations.map(newColorMarker => newColorMarker.name == event.target.textContent.trim()){
    //         this.state.locations.color = 'green'
    //     }
    // }

    listClicked(event){
        const newLocationsList = this.state.locations.slice()
        for(let i=0; i< this.state.locations.length; i++){
            const loc = this.state.locations[i]
            if(loc.name === event.target.textContent.trim()){
                newLocationsList[i]= Object.assign(loc, {color: 'green'})
                newLocationsList[i]= Object.assign(loc, {showingInfoWindow: true})
            }else{
                newLocationsList[i]= Object.assign(loc, {color: 'red'})
                newLocationsList[i]= Object.assign(loc, {showingInfoWindow: false})
            }
        }
        this.setState({locations: newLocationsList})
    }

    onMarkerClick=(props, marker, e) => {
        // this.state.locations.filter(location => location.name == marker.name);
        const newLocationsList = this.state.locations.slice()
        for(let i=0; i< this.state.locations.length; i++){
            const loc = this.state.locations[i]
            if(loc.name === marker.name){
                newLocationsList[i]= Object.assign(loc, {color: 'green'})
                newLocationsList[i]= Object.assign(loc, {showingInfoWindow: true})
            }else{
                newLocationsList[i]= Object.assign(loc, {color: 'red'})
                newLocationsList[i]= Object.assign(loc, {showingInfoWindow: false})
            }
        }

        this.setState({
            locations: newLocationsList,
            selectedPlace: props,
            activeMarker: marker,
            // showingInfoWindow: true
        })

        // this.setState({
        //     selectedPlace:props,
        //     activeMarker: marker,
        //     showingInfoWindow: true
        // })
    };


    onMapClicked = (props) => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
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
                    <div className="search-bar">
                        <div className="input-filter">
                            <input type="text" placeholder="Filter..." name="filter"
                                   value = {this.state.query}
                                   onChange= {this.handleQueryChange}
                            />
                            {/*<button type="submit" onClick={this.removeFilter}>Show All</button>*/}
                        </div>
                    </div>
                </div>
                <div tabIndex={0} aria-labelledby="navigation" className="navigation-container" style={{border: '1px solid black'}}>
                    <Navigation
                        restaurantDetails = {this.state.locations}
                        filterFunction = {this.filterFunction}
                        markerLocation= {this.state.locations}
                        listClicked = {this.listClicked}
                    />
                </div>
            </div>
            <div tabIndex={0} className="map-container">
                <div tabIndex={0} className="map" >
                    <MapComp
                        // latitude = {44.4760983}
                        // longitude = {-73.2141478}
                        // text="Burlington"
                        //  width = "800"
                        //  height = "600"
                         markerLocation= {this.state.locations}
                         restaurantDetails = {this.state.locations}
                         filterFunction = {this.filterFunction}
                         onMarkerClick = {this.onMarkerClick}
                         onMapClicked = {this.onMapClicked}
                         activeMarker = {this.state.activeMarker}
                         showingInfoWindow = {this.state.showingInfoWindow}
                    />
                </div>
            </div>

            {/*<div className="footer">*/}
                {/*<footer>*/}
                {/*This website is a react Google Maps website created by Abbi Devins-Suresh*/}
                {/*</footer>*/}
            {/*</div>*/}

        </div>
      </div>
    );
  }
}

export default App;
