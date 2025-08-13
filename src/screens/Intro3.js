import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import globalStyles from '../css/globalStyles';

export default function Intro3({navigation}) {
      return (
 <View style={styles.container}>
      <ImageBackground source={require("../../assets/backgroundImages/bg3.jpeg")} 
      style={globalStyles.bg}
      resizeMode='cover'/>
      <View style={globalStyles.introHeading}>
        <Text style={globalStyles.introText}>Plan with Ease,{'\n'}Travel with{'\n'}Confidence.</Text>    
      </View>
  
      <TouchableOpacity style={globalStyles.button}
      onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.buttonText}>Get Started</Text>
      </TouchableOpacity>
        {/* <Text style={{color: "#ffffff", bottom: 50}}>Already have an account? Login</Text> */}
    </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    // justifyContent: 'space-around'
    
  },
  logoImage:{
    shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 5,
  shadowOpacity: 0.5,
  elevation: 5,
  top: 100,
  position: 'absolute',
  },

  Logo: {
  width: 100,
  height: 100,
  borderRadius: 25,
}
});