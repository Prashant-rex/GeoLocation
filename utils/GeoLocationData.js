import React, { useState, useReducer } from 'react'
import { Alert, PermissionsAndroid} from 'react-native'
import Geolocation from '@react-native-community/geolocation'

  
const GetLocationData = () => {

    checkAndGrantPermssion(){
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((permssion) => {

        })
    }

    const [LATITUDE, setLatitude] = useState({})
    const [LONGITUDE, setLongitude] = useState({})
    const [permssion, setPermssion] = useState(false);
        
        const config = {
            enableHighAccuracy: false,
            timeout: 2000,
            maximumAge: 3600000,
        };
        
        Geolocation.getCurrentPosition(
            (position) => {
                //setLatitude(prevState => position.coords.latitude), // use callback
                //setLongitude(prevState => position.coords.longitude)
                const x = position.coords.latitude
                const y = position.coords.longitude
                setLatitude(x);
                setLongitude(y);
                
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            config,
        );
        
        let lat = LATITUDE;
        let long = LONGITUDE;
        {
            return { LAT:lat , LONG : long}
        }
    }
    



export default GetLocationData;