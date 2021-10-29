import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/animes'
import Colors from '../constants/Colors'

const FilterSwitch = props => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch value={props.state} onValueChange={props.onChange} />
    </View>
  )
}

const FiltersScreen = props => {
  const { navigation } = props;

  const [isTv, setIsTv] = useState(false);
  const [isMovie, setIsMovie] = useState(false);
  const [isOva, setIsOva] = useState(false);
  const [isOna, setIsOna] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isUnknown, setIsUnknown] = useState(false);

  const dispatch = useDispatch();


  const saveFilters = useCallback(() => {
    const filters = {
      tv: isTv,
      movie: isMovie,
      ova: isOva,
      ona: isOna,
      special: isSpecial,
      music: isMusic,
      unknown: isUnknown
    }

    dispatch(setFilters(filters))
  }, [isTv, isMovie, isOva, isOna, isSpecial, isMusic, isUnknown, dispatch]);

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters])
  
  return (
    <View>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch label="TV" state={isTv} onChange={newValue => setIsTv(newValue)} />
      <FilterSwitch label="MOVIE" state={isMovie} onChange={newValue => setIsMovie(newValue)} />
      <FilterSwitch label="OVA" state={isOva} onChange={newValue => setIsOva(newValue)} />
      <FilterSwitch label="ONA" state={isOna} onChange={newValue => setIsOna(newValue)} />
      <FilterSwitch label="Special" state={isSpecial} onChange={newValue => setIsSpecial(newValue)} />
      <FilterSwitch label="Music" state={isMusic} onChange={newValue => setIsMusic(newValue)} />
      <FilterSwitch label="Unknown" state={isUnknown} onChange={newValue => setIsUnknown(newValue)} />
    </View>
  );
}

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Animes',
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName='ios-save' onPress={ navData.navigation.getParam('save')}/>
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50
  }
});

export default FiltersScreen;