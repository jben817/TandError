const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"forward-reverse-geocoding.p.rapidapi.com",
    "x-rapidapi-key":"e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
    "useQueryString":true
    },"params":{
    "polygon_geojson":"0",
    "state":"NY",
    "limit":"5",
    "street":"12 West 4th Street",
    "polygon_svg":"0",
    "country":"USA",
    "polygon_kml":"0",
    "namedetails":"0",
    "accept-language":"en",
    "city":"New York",
    "addressdetails":"1",
    "polygon_threshold":"0.0",
    "polygon_text":"0",
    "bounded":"0",
    "format":"json"
    }
    })
    .then((response)=>{
      console.log(response.lon);
      console.log(response.lat)

    })
    .catch((error)=>{
      console.log(error)
    })