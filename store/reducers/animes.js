import { ANIMES } from '../../data/dummy-data'
import Anime from '../../models/anime';

const initialState = {
  animes: ANIMES, 
  filteredAnimes: ANIMES,
  favAimes: []
}

const animesReducer = (state = initialState, action) => {
  return state;
}

export default animesReducer;