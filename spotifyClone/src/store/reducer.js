export default function storeReducer(state = [], action) {

    console.log(action)

    switch (action.type) {
        case 'SET_SONG':
            return [action.payload]

        default:
            break;
    }

    return state;
}