import React, { useEffect, useCallback } from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/animes'
import defaultStyles from '../constants/default-styles'

const DetailScreen = props => {
  const animeId = props.navigation.getParam('animeId');
  const availableAnimes = useSelector(state => state.animes.allAnimes)
  const currentAnimeIsFav = useSelector(state => 
    state.animes.favAnimes.some(anime => anime.id === animeId)
  );
  const anime = availableAnimes.find(anime => anime.id === animeId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(animeId));
  }, [dispatch, animeId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({isFav: currentAnimeIsFav})
  }, [currentAnimeIsFav])

  return (
    <ScrollView>
      <View style={styles.imgNdetails}>
        <Image source={{uri: anime.thumbnail}} style={styles.img} />
        <View>
          <Text style={styles.heading}>Type</Text>
          <Text style={styles.heading}>No. of Eps</Text>
          <Text style={styles.heading}>Score</Text>
          <Text style={styles.heading}>Start Date</Text>
          <Text style={styles.heading}>End Date</Text>
          <Text style={styles.heading}>Genre</Text>
          <Text style={styles.heading}>Rating</Text>
        </View>
        <View>
          <Text style={defaultStyles.openSans}>{anime.type.toUpperCase()}</Text>
          <Text style={defaultStyles.openSans}>{anime.nbEps}</Text>
          <Text style={defaultStyles.openSans}>{anime.score}</Text>
          <Text style={defaultStyles.openSans}>{anime.startDate}</Text>
          <Text style={defaultStyles.openSans}>{anime.endDate}</Text>
          <Text style={defaultStyles.openSans}>{anime.genre}</Text>
          <Text style={defaultStyles.openSans}>{anime.rating}</Text>
        </View>
      </View>
      <Text style={styles.title}>Description</Text>
      <Text style={{...defaultStyles.openSans, ...styles.desc}}>{anime.shortDesc}</Text>
    </ScrollView>
  );
}

DetailScreen.navigationOptions = navData => {
  const animeTitle = navData.navigation.getParam('title');
  const toggleFavorite = navData.navigation.getParam('toggleFav');
  const isFav = navData.navigation.getParam('isFav');

  return {
    headerTitle: animeTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite}/>
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'open-sans-bold'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  imgNdetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  img: {
    height: 210,
    width: 150
  },
  desc: {
    marginHorizontal: 10,
    fontFamily: 'open-sans',
    fontSize: 18
  }
})

export default DetailScreen;