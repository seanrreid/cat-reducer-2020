// import my action types
import { ACTION_SET_ACTIVITY } from '../actionTypes';

const initialState = "eating"

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_ACTIVITY: {
            const { activity } = action.payload;
            return activity;
        }
        default:
            return state;
    }
}

export default activityReducer;