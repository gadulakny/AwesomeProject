import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import Alert from "react-native";
import axios from "axios";
import Weather from './Weather';


const API_KEY = '5eaa62239434e3f9327344c1bad1e272';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { data: { main: {temp}, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      currentTemp: temp, 
      condition: weather[0].main
    });
  };

  getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync(); //위치 가져와도 되는지 유저에게 물어보기
      const { coords: { latitude, longitude} } = await Location.getCurrentPositionAsync(); //현재 위치 가져오기
      this.getWeather(latitude, longitude);
    } catch (error) { //위치 거부하면 알람뜨기
      Alert.alert("Can't find you", "waba raba dub dub");
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, currentTemp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(currentTemp)} condition={condition} />;
  }
};