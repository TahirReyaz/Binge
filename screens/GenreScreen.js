import React from 'react'
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import { GENRES } from '../data/dummy-data'

const GenreScreen = props => {
  const renderGenre = itemData => {
    return (
      <TouchableOpacity style={{...styles.gridItem, backgroundColor: itemData.item.color}} onPress={() => {
        props.navigation.navigate({routeName: 'List', params: {
          genreId: itemData.item.id
        }})
      }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <FlatList data={GENRES} renderItem={renderGenre} numColumns={2} />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    height: 150
  }
});

export default GenreScreen;