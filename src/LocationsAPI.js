import React, {Component } from 'react'

//Using Foursquare API to pull information about places and restaurants

let clientID = "OQHJHKPVYFBK5FPZKXEGP1KBRLXVHG5ZRGIFUWQVPKK0UEKC"
let clientSecret = "ZW4CL3GY4WW1QJLJWHGMU1XRCRAERSUY3JGSXMQYKQYN2VQB"

const foursquareAPI ="https://api.foursquare.com/v2/venues/VENUE_ID/similar"

//Utilized basic structure of this code: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

export const getData = (ID) =>
    fetch(`https://api.foursquare.com/v2/venues/${ID}?client_id=${clientID}&client_secret=${clientSecret}&v=20180918`)
    .then(function(response){
        // infoCallback(response);
        console.log(response.ok);
        // return response.json();
        return response
    })
        // .then(function(restDetailsData){
        //     // let url = restDetailsData.response.venue.canonicalUrl
        //
        //     // return (<li>{restDetailsData.response.venue.contact }</li>);
        //     // console.log(restDetailsData);
        //     // return {}
        //     return restDetailsData
        //     // return url
        //     }
        // ).catch(error =>
        //     console.log('error in retrieving data', error)
        //     )
        //


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
