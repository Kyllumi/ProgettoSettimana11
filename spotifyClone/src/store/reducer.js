import { SET_DATA } from '../store/action';

const initialState = {
    rock: [],
    pop: [],
    hipHop: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, [action.payload.genre]: action.payload.data };
        default:
            return state;
    }
};

export default reducer;