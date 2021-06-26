import {UserActionTypes} from './user.types';

export const setCurrentUser = user=>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

//An action is just a function that returns an object with two properties

