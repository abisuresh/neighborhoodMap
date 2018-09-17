import React, { Component } from 'react';

class Map extends Component {

    state = {

    }

    //utilized general setup of the following code to create static map URL
    // https://gist.github.com/ConnectExtend/c9c65e1f9b84886ff7f5a07c96320c5a
    getGoogleMap(apiKEY, props){
        const marker = {}

        return 'https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.lng}&zoom=13&size=${props.width}x${props.height}&maptype=${props.type || "roadmap"}${markers.join("")}&key=${apiKEY}'

    }



    render (){
        const mapInfo = {
            latitude: '0',
            longitude: '0',
            width: '50%',
            height: '90%',
            markers: [{
                latitude: 0,
                longitude: 0,
                    label: 'X',
                    color: 'green'
            }]
        }
        <div>
            <div class="map">

            </div>
        </div>

    }


}



export default Map