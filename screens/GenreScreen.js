import React from 'react'
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import { GENRES } from '../data/dummy-data'
import GridTile from '../components/GridTile'

const GenreScreen = props => {
  const renderGenre = itemData => {
    return (
      <GridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'List', 
            params: {genreId: itemData.item.id}
          })
        }} 
      />
    );
  };
  
  return (
    <FlatList data={GENRES} renderItem={renderGenre} numColumns={2} />
  );
}

export default GenreScreen;