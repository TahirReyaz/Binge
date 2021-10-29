import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useSelector } from 'react-redux'
import ListItem from '../components/ListItem'

const FavsScreen = props => {
  const availableAnimes = useSelector(state => state.animes.favAnimes)

  if(availableAnimes.length === 0 || !availableAnimes) {
    return(
      <View style={defaultStyles.screen}>
        <Text>No Favorite animes found. Start Adding some!!!</Text>
      </View>
    )
  }

  const renderAnime = itemData => {
    const isFavAnime = availableAnimes.some(anime => anime.id === itemData.item.id)
    return (
      <ListItem 
        listData={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'FavDetail', 
            params: {
              animeId: itemData.item.id,
              title: itemData.item.title,
              isFav: isFavAnime
            }
          })
        }} 
      />
    );
  }  

  return (
    <View>
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

export default FavsScreen;