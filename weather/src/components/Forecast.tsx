import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ForecastType } from '../types/forecast'

type OwnProps = {
  forecast: ForecastType
}

export const Forecast: React.FC<OwnProps> = ({ forecast: { main, description, temp }}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>
        {main}
      </Text>
      <Text style={styles.mainText}>
        Current conditions: {description}
      </Text>
      <Text style={styles.bigText}>
        {temp}°F
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
  }
})
