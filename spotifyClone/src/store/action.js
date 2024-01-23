export const SET_DATA = 'SET_DATA';

export const setData = (genre, data) => ({
    type: SET_DATA,
    payload: { genre, data }
});