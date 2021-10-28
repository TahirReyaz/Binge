import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import GenreScreen from '../screens/GenreScreen';
import DetailScreen from '../screens/DetailScreen';
import ListScreen from '../screens/ListScreen';
import FavsScreen from '../screens/FavsScreen';
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors';
import { Platform, Text } from 'react-native';

const defStackNavOpts = {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: '#FFF'
};

const StackNavigator = createStackNavigator({
  Genres: {
    screen: GenreScreen,
    navigationOptions: {
      headerTitle: 'Anime/ Movie Genres'
    }
  },
  List: ListScreen,
  Details: DetailScreen
}, 
{
  defaultNavigationOptions: defStackNavOpts
});

const FavStackNavigator = createStackNavigator({
  FavsList: FavsScreen,
  FavDetail: DetailScreen
},
{
  defaultNavigationOptions: defStackNavOpts
});

const tabScreenConfig = {
  Anime: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='play-circle' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primary,
      tabBarLabel: 
        Platform.OS === 'android' 
        ? <Text style={{fontFamily: 'open-sans-bold'}}>Anime</Text> 
        : 'Anime'
    }
  },
  Favourites: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.secondary,
      tabBarLabel: 
        Platform.OS === 'android' 
        ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> 
        : 'Favorites'
    }
  }
}

const TabNavigator = 
  Platform.OS === 'android' 
  ? createMaterialBottomTabNavigator ( tabScreenConfig, {
      activeColor: 'white',
      shifting: true
    })
  : createBottomTabNavigator( tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.secondary,
        labelStyle: {
          fontFamily: 'open-sans'
        }
      }
    })

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
},
{
  defaultNavigationOptions : defStackNavOpts
});

const MainNavigator = createDrawerNavigator({
  Favs: {
    screen: TabNavigator,
    navigationOptions: {
      drawerLabel: 'Animes'
    }
  },
  Filters: FiltersNavigator
},
{
  contentOptions: {
    activeTintColor: Colors.secondary,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);