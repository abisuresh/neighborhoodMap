import React, { Component } from 'react';


class Locations extends Component {

    state = {


    }



    render(){
        return (
            <div>
                <div className="locations-details">
                    {this.latitude}
                    {this.longitude}
                </div>
            </div>
            )
        }

}

export default Locations

