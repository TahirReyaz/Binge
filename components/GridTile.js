import React from 'react'
import { View, TouchableOpacity, Platform, TouchableNativeFeedback, Text, StyleSheet, TextComponent } from 'react-native'

const GridTile = props => {
  let TouchableComp = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableComp style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.gridItem, backgroundColor: props.color}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 3
  },
  gridItem: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22
  }
});

export default GridTile;