import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
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

  const saveFilters = useCallback(() => {
    const filters = {
      tv: isTv,
      movie: isMovie,
      ova: isOva
    }
  }, [isTv, isMovie, isOva]);

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters])
  
  return (
    <View>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch label="TV" state={isTv} onChange={newValue => setIsTv(newValue)} />
      <FilterSwitch label="MOVIE" state={isMovie} onChange={newValue => setIsMovie(newValue)} />
      <FilterSwitch label="OVA" state={isOva} onChange={newValue => setIsOva(newValue)} />
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