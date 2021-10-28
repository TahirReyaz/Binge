import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import defaultStyles from '../constants/default-styles'
import { ANIMES } from '../data/dummy-data'

const DetailScreen = props => {
  const animeId = props.navigation.getParam('animeId');
  const anime = ANIMES.find(anime => anime.id === animeId);

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
  const animeId = navData.navigation.getParam('animeId');
  const anime = ANIMES.find(anime => anime.id === animeId);

  return {
    headerTitle: anime.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName='ios-star' onPress={() => {
          console.log('Faved')
        }}/>
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