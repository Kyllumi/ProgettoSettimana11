import { createStore } from 'redux';
import reducer from './reducer';


const initialState = {
    favSong: [],
}

const store = createStore(reducer, initialState);

export default store;
