import { ACTION_SET_ACTIVITY, ACTION_SET_NAME, ACTION_ADD_CAT } from './actionTypes';

export const setActivity = ({id, activity}) => ({
    type: ACTION_SET_ACTIVITY,
    payload: {
        id,
        activity
    }
});

export const setName = name => ({
    type: ACTION_SET_NAME,
    payload: {
        name
    }
})

export const addCat = ({ name, activity }) => ({
    type: ACTION_ADD_CAT,
    payload: {
        name,
        activity
    }
})