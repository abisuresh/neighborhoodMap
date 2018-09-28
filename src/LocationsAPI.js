import React, {Component } from 'react'

//Using Foursquare API to pull information about places and restaurants

let clientID = "MNAUQL31VLCN2CE1QQTBKZPNNBAM4EAK32GUELMDXYB4PYFP"
let clientSecret = "PF4PJP3A3CKSKWX3MVYJHZS3IVI3RQJGPR2PSFQ5UZVSJF1A"
const foursquareAPI ="https://api.foursquare.com/v2/venues/VENUE_ID/similar"

export const getData = (ID) =>
    fetch(`https://api.foursquare.com/v2/venues/${ID}?client_id=${clientID}&client_secret=${clientSecret}&v=20180918`)
    .then(function(response){
        return response.json();
    })
        .then(function(restDetailsData){
            let url = restDetailsData.response.venue.canonicalUrl

            // return (<li>{restDetailsData.response.venue.contact }</li>);
            // console.log(restDetailsData);
            // return {}
            return restDetailsData
            // return url
            }
        ).catch(error =>
            console.log('error in retrieving data', error)
            )



// https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD
// https://api.foursquare.com/v2/venues/VENUE_ID/similar

//
// https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=MNAUQL31VLCN2CE1QQTBKZPNNBAM4EAK32GUELMDXYB4PYFP&client_secret=PF4PJP3A3CKSKWX3MVYJHZS3IVI3RQJGPR2PSFQ5UZVSJF1A&v=YYYYMMDD

// https://api.foursquare.com/v2/venues/VENUE_ID



//Thai Dishes

//American Flatbread

//Sweetwaters

//RiRa's

//Sherpa Kitchen
