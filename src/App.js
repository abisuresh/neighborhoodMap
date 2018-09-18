import React, { Component } from 'react';
import { BrowserRouter } from 'react-router'
import { Route } from 'react-router'
import { Link } from 'react-router'
import {GoogleApiWrapper} from 'google-maps-react';
import {GoogleMap, Marker } from 'react-google-maps';
import Map from './Map'
import Markers from './Markers'
import Locations from './Locations'
import Navigation from './Navigation'
import Search from './Search'
import './App.css';

class App extends Component {

    state = {
        locations:[]

    }

     startMap(){
      let location = {}
      // let map = new google.maps.Map()
      // let locationMarker = new google.maps.Marker()
}

  render() {
    const mapStyle={
        width: '95%',
        height: '100%',
        border: '1px solid black',
        float: 'right'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Best Places to Eat </h1>
            <p>Burlington, VT (population 56,000) </p>
        </header>
        <p className="App-intro">
        </p>
        <div className="main flexbox-container">
            <div className="left-nav">
                <div className="nav-header">
                    Restaurant Locations
                </div>
                <div className="search-container">
                    <Search />
                </div>
                <div className="navigation-container" style={{border: '1px solid black'}}>
                    <Navigation />
                </div>
            </div>
            <div className="map-container" style = {mapStyle}>
                <p></p>
                <div className="map">
                    <Map
                        latitude = "44.4760983"
                        longitude = "-73.2141478"
                        width = "800"
                        height = "600"
                        markerLocation= {[
                              {latitude: 44.475910, longitude: -73.213434, label: "A", color: "red"},
                              {latitude: 44.476814, longitude: -73.213847, label: "B", color: "red"},
                              {latitude: 44.475773, longitude: -73.21533, label: "C", color: "red"},
                              {latitude: 44.476904, longitude: -73.213243, label: "D", color: "red"},
                              {latitude: 44.477003, longitude: -73.214876, label: "E", color: "red"}
                          ]}
                    />
                </div>
            </div>


        </div>

      </div>
    );
  }
}

export default App;
