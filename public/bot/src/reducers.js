/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import main from './modules/Main/MainReducer';

// Combine all reducers into one root reducer
export default combineReducers({
    main,
});
