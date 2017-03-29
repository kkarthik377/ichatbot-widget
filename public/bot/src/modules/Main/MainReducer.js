// Import Actions
import { SET_USER } from './MainActions';

// Initial State
const initialState = {
    user: { },
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER:
        return {
            user: action.payload,
        };

    default:
        return state;
    }
};

/* Selectors */

// Get user
export const getUser = state => state.main.user;

// Export Reducer
export default MainReducer;
