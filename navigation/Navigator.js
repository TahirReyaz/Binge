import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GenreScreen from '../screens/GenreScreen';
import DetailScreen from '../screens/DetailScreen';
import ListScreen from '../screens/ListScreen';
import FavsScreen from '../screens/FavsScreen';
import Colors from '../constants/Colors'

const Navigator = createStackNavigator({
  Genres: {
    screen: GenreScreen,
    navigationOptions: {
      headerTitle: 'Anime/ Movie Genres'
    }
  },
  List: ListScreen,
  Favs: FavsScreen,
  Details: DetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: '#FFF'
  }
});

export default createAppContainer(Navigator);