import React from 'react';
import {Alert} from 'react-native';
import Loading from './Components/Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Components/Weather';

const API_KEY = "a5a90b7aa1149a70323ae122d0f011a7";
export default class extends React.Component {
  state = {
    isLoading: true,
  }

  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main:{temp},
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    console.log(temp, weather[0].main)

    this.setState({
      isLoading : false,
      condition: weather[0].main,
      temp: temp
    });

  }

  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync()
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
      
      //Send to API and get weather!
    } catch (error) {
      Alert.alert("can't find you.", "so sad")
    }
  }

  componentDidMount(){
    this.getLocation()
  }

  render(){
    const { isLoading, temp, condition } = this.state
  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
