import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#0f0c29", "#302b63", "#24243e"]
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#2b5876", "#4e4376"]
    },
    Snow: {
        iconName: "snowflake",
        gradient: ["#83a4d4", "#b6fbff"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#5f2c82", "#49a09d"]
    },
    Mist: {
        iconName: "blur",
        gradient: ["#1e130c", "#9a8478"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"]
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"]
    },
    Dust: {
        iconName: "smog",
        gradient: ["#1e130c", "#9a8478"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#757F9A", "#D7DDE8"]
    },
    Sand: {
        iconName: "blur",
        gradient: ["#1e130c", "#9a8478"]
    },
    Ash: {
        iconName: "blur",
        gradient: ["#4B79A1", "#283E51"]
    },
    Squall: {
        iconName: "weather-windy-variant",
        gradient: ["#000428", "#004e92"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#000428", "#004e92"]
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#00c3ff", "#ffff1c"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#000046", "#1CB5E0"]
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container} >
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer} >
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={120} style={styles.icon}/>
                <View style={styles.tempContainer}>
                    <Text style={styles.temp}>{temp}</Text>
                    <Text style={styles.celsius}>℃</Text>
                </View>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.bottomText}>{condition}</Text>
            </View>
        </LinearGradient>
    );
};

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Rain",
        "Drizzle",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tempContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'        
    },
    icon: {
        paddingBottom: 20,
        color: "white"
    },
    temp: {
        fontSize: 40,
        color: "white"
    },
    celsius: {
        fontSize: 25,
        paddingBottom: 10,
        color: "white"
    },
    bottomText: {
        color: "white",
        fontSize: 35,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 20,
        padding: 10
    }
});

