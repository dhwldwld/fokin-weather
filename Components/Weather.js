import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#FBD786","#f7797d"],
        title: "Haze",
        subtitle: "지면이 뜨겁게 달구어졌어요. 더위에 조심하세요!"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44","#4286f4"],
        title: "Thunderstorm",
        subtitle: "천둥과 번개를 조심하세요!"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#bdc3c7","#29323c"],
        title: "Drizzle",
        subtitle: "가랑비가 내려요. 적지만 우산 챙기세요!"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#bdc3c7","#525252"],
        title: "Rain",
        subtitle: "비가 와요. 우산 챙기세요!"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B9B6E5"],
        title: "Snow",
        subtitle: "눈이 와요!"
    },
    Atomsphere: {
        iconName: "weather-hail",
        gradient: ["#ADA996","#DBDBDB","#F2F2F2","#EAEAEA"],
        title: "Atomsphere",
        subtitle: "대기상태"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#8e9eab","#485563"],
        title: "Mist",
        subtitle: "안개가 꼈어요!"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#8e9eab","#485563"],
        title: "Smoke",
        subtitle: "연기가 많아요!"
    },
    Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#4DA0B0","#D39D38"],
        title: "Dust",
        subtitle: "먼지가 많아요. 꼭 마스크 착용하세요!"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#8e9eab","#485563"],
        title: "Fog",
        subtitle: "짙은 안개가 많아요!"
    },
    Sand: {
        iconName: "weather-cloudy-alert",
        gradient: ["#DECBA4","#D39D38"],
        title: "Sand",
        subtitle: "황사에요. 마스크 착용하고 외출하세요!"
    },
    Ash: {
        iconName: "weather-cloudy-alert",
        gradient: ["#8e9eab","#29323c"],
        title: "Ash",
        subtitle: "화산 먼지!"
    },
    Squall: {
        iconName: "weather-windy-variant",
        gradient: ["#2BC0E4","#314755"],
        title: "Squall",
        subtitle: "한 동안 바람이 불고 멈출거에요!"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#304352","#8e9eab"],
        title: "Tornado",
        subtitle: "토네이도!!!!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#70e1f5","#ffd194"],
        title: "Clear",
        subtitle: "하늘이 맑아요!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        title: "Clouds",
        subtitle: "구름이 많아 어두워요!"
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white" 
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textConrainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
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
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textConrainer: {
        padding: 20,
        alignItems: "flex-start"
    }
})