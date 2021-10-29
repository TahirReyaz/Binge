import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useSelector } from 'react-redux'
import ListItem from '../components/ListItem'

const FavsScreen = props => {
  const availableAnimes = useSelector(state => state.animes.favAnimes)

  const renderAnime = itemData => {
    return (
      <ListItem 
        listData={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'FavDetail', 
            params: {animeId: itemData.item.id, title: itemData.item.title}
          })
        }} 
      />
    );
  }  

  return (
    <View style={defaultStyles.screen}>
      <FlatList data={availableAnimes} renderItem={renderAnime} style={{width: '100%'}} />
    </View>
  );
}

FavsScreen.navigationOptions = navData => {
  return {
    headerStyle: {
      backgroundColor: Colors.secondary
    },
    headerTintColor: '#FFF',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }}/>
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default FavsScreen;