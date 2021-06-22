import React, { useState } from 'react';
import { View, Text, Alert, Button} from 'react-native';
import GetLocationData from './utils/GeoLocationData';


const App = () => {


  return (
    <View style = {{justifyContent: 'center', alignContent: 'space-around', paddingTop: 50}}>
      <Button title = "Location" onPress = {console.log(GetLocationData())}/>
    </View>
  )
}

export default App;