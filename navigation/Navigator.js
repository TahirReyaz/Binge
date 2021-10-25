import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GenreScreen from '../screens/GenreScreen';
import DetailScreen from '../screens/DetailScreen';
import ListScreen from '../screens/ListScreen';
import FavsScreen from '../screens/FavsScreen';

const Navigator = createStackNavigator({
  Genres: GenreScreen,
  List: ListScreen,
  Favs: FavsScreen,
  Details: DetailScreen
});

export default createAppContainer(Navigator);