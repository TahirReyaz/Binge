import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'

const GenreScreen = props => {

  return (
    <View style={defaultStyles.screen}>
      <Text>GenreScreen</Text>
      <Button title="List" onPress={() => {
        props.navigation.navigate({routeName: 'List'})
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default GenreScreen;