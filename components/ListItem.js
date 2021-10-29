import React from 'react'
import { View, TouchableOpacity, Platform, ImageBackground, TouchableNativeFeedback, Text, StyleSheet, TextComponent } from 'react-native'
import defaultStyles from '../constants/default-styles';

const ListItem = props => {
  let TouchableComp = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableComp onPress={props.onSelect}>
        <View style={styles.gridItem}>
          <View style={styles.header}>
            <ImageBackground source={{uri: props.listData.thumbnail}} style={styles.bgImg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.listData.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.details}>
            <Text style={defaultStyles.openSans}>{props.listData.type.toUpperCase()}</Text>
            <Text style={defaultStyles.openSans}>{props.listData.nbEps}</Text>
          </View>
        </View>
      </TouchableComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 200,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
  gridItem: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  bgImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  header: {
    height: '85%'
  },
  details: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default ListItem;