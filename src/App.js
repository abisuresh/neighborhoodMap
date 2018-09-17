import React, { Component } from 'react';
import logo from './logo.svg';
// import { BrowserRouter } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Map</h1>
        </header>
        <p className="App-intro">
          Places
        </p>
        <div class="main flexbox-container">
            <div class="left-nav">
                <div class="search-container">
                    <Search />
                </div>
                <div class="navigation-container" style={{border: '1px solid black'}}>
                    <Navigation />
                </div>
            </div>
            <div class="map-container" style = {mapStyle}>
                <p></p>
                <div class="map">
                    <Map />
                </div>
            </div>


        </div>

      </div>
    );
  }
}

export default App;
