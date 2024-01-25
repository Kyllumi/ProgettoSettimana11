const initialState = {
    favTrack: [],
    playingSong: [],
};

export default function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SONG':
            return { ...state, playingSong: [action.payload] }
        case 'ADD_FAV':
            return { ...state, favTrack: [...state.favTrack, action.payload] }
        case 'REMOVE_FAV':
            return { ...state, favTrack: state.favTrack.filter(track => track.id !== action.payload) }
        default:
            return state;
    }
}
