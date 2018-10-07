import React, { Component } from 'react';
import * as LocationsAPI from './LocationsAPI'

class FourSquareInfo extends Component {

    constructor(props){
        super(props)
        this.testInput = this.testInput.bind(this)
        LocationsAPI.getData(this.props.ID).then((response) => {
            this.testInput(response)
        })
    }

    state = {

        locations: [],
        apiInfo: "Loading data",

    }

    // inputCallback(response){
    //     LocationsAPI.getData(this.props.ID).then((response) => {
    //         this.testInput(response)
    //     })
    // }

    testInput(response){
        if(response.ok) {
            this.setState({apiInfo: response.response.venue.contact})
            // return true
        }else{
            this.setState({apiInfo: "Unable to load data"})
            // return false
        }
    }

    // componentDidMount(){
    //     // this.mount = true;
    //
    //     LocationsAPI.getData(this.props.ID).then((response) => {
    //         this.testInput(response)
    //     })
    // }

    render(){
        // let restInfo = {LocationsAPI.getData(this.props.ID)}
        return (
            <div>
                <h1>{this.props.name}</h1>
                <span> {this.state.apiInfo} </span>
                {/*<h2><a href = {this.props.url}>Test URL</a></h2>*/}
                {/*<h1> Additional info: </h1>*/}
                {/*<h2>{this.state.apiInfo} </h2>*/}
            </div>
        )
    }

}

export default FourSquareInfo
