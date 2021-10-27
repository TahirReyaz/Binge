import React from 'react'
import { View, FlatList, Text, Button, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import { GENRES, ANIMES } from '../data/dummy-data'
import ListItem from '../components/ListItem'
// const malScraper = require('mal-scraper')
// const search = malScraper.search

// let animes = [{}];
// search.search("anime", {genres: [27]})
//   .then(res => {res.forEach((anime, i) => {
//     animes[i] = {
//       title: anime.title,
//       id: 'a' + i
//     }
//   })})
//   .catch(err => console.log(err, "Error a gawa"))


const ListScreen = props => {
  const genreId = props.navigation.getParam('genreId');
  const AnimeList = ANIMES.filter(anime => anime.genreId === genreId);

  const renderAnime = itemData => {
    return (
      <ListItem 
        title={itemData.item.title} 
        type={itemData.item.type}
        nbEps={itemData.item.nbEps}
        thumbnail={itemData.item.thumbnail}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Details', 
            params: {animeId: itemData.item.id}
          })
        }} 
      />
    );
  }  

  return (
    <View style={defaultStyles.screen}>
      <FlatList data={AnimeList} renderItem={renderAnime} style={{width: '100%'}} />
    </View>
  );
}

ListScreen.navigationOptions = navData => {
  const genreId = navData.navigation.getParam('genreId');
  const selectedGenre = GENRES.find(genre => genre.id === genreId);

  return {
    headerTitle: selectedGenre.title
  }
}

const styles = StyleSheet.create({
  
});

export default ListScreen;