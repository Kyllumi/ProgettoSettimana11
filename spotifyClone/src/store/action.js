export const toggleFavTrack = (favTrack) => (dispatch, getState) => {
    const { favTrack: currentFavTracks } = getState();
    if (currentFavTracks.find(track => track.id === favTrack.id)) {
        dispatch({ type: 'REMOVE_FAV', payload: favTrack.id });
    } else {
        dispatch({ type: 'ADD_FAV', payload: favTrack });
    }
};

export const setSong = (playingSong) => (
    { type: 'SET_SONG', payload: playingSong }
);

