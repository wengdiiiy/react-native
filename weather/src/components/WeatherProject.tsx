import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { Forecast } from './Forecast'
import { ForecastType } from '../types/forecast'
import OpenWeatherMap from '../service/open_weather_map'

type OwnState = {
  zip: string
  forecast: ForecastType
}

class WeatherProject extends React.Component<{}, OwnState> {
  constructor(props) {
    super(props)
    this.state = { zip: '', forecast: null }
  }

  handleTextChange = async e => {
    const zip = e.nativeEvent.text
    const response = await OpenWeatherMap.fetchForecast(zip)
    response && this.setState({ zip, forecast: response })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/flowers.png')} resizeMode="cover" style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this.handleTextChange}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            {this.state.forecast && (
              <Forecast forecast={this.state.forecast}/>
            )}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const baseFontSize = 16

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000',
    opacity: .5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30,
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  zipCode: {
    flex: 1,
    flexBasis: 1,
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    fontSize: baseFontSize,
    color: '#FFF',
  }
})

export default WeatherProject