
//Using Foursquare API to pull information about places and restaurants

let clientID = "MNAUQL31VLCN2CE1QQTBKZPNNBAM4EAK32GUELMDXYB4PYFP"
let clientSecret = "PF4PJP3A3CKSKWX3MVYJHZS3IVI3RQJGPR2PSFQ5UZVSJF1A"
const foursquareAPI ="https://api.foursquare.com/v2/venues/VENUE_ID/similar"

fetch('https://api.foursquare.com/v2/venues/VENUE_ID/similar')
    .then(function(response){
        return response.json()
    })

