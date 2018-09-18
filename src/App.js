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
                    />
                </div>
            </div>


        </div>

      </div>
    );
  }
}

export default App;
