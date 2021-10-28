import React from 'react'
import { FlatList } from 'react-native'
import { GENRES } from '../data/dummy-data'
import GridTile from '../components/GridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

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

GenreScreen.navigationOptions = navData => {

  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }}/>
      </HeaderButtons>
    )
  }
} 

export default GenreScreen;