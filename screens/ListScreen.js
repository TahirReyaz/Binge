import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import { GENRES } from '../data/dummy-data'
import { useSelector } from 'react-redux'
import ListItem from '../components/ListItem'
// import malScraper from 'mal-scraper'
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
  const availableAnimes = useSelector(state => state.animes.filteredAnimes)
  const AnimeList = availableAnimes.filter(anime => anime.genreId === genreId);

  const renderAnime = itemData => {
    return (
      <ListItem 
        listData={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Details', 
            params: {animeId: itemData.item.id, title: itemData.item.title}
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