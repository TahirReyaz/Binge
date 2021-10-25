import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'

const ListScreen = props => {

  return (
    <View style={defaultStyles.screen}>
      <Text>List Screen</Text>
      <Button title="Details" onPress={() => {
        props.navigation.navigate({routeName: 'Details'})
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default ListScreen;