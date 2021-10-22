import { SHOW_ALERT, HIDE_ALERT } from '../types';

//SHOW AN ALERT
export const showAlert = alert => {
    return dispatch => {
        dispatch(showAlertError(alert));
    };
};

const showAlertError = alert => ({
    type: SHOW_ALERT,
    payload: alert,
});

//HIDE ALERT
export const hideAlert = alert => {
    return dispatch => {
        dispatch(hideAlertError());
    };
};

const hideAlertError = alert => ({
    type: HIDE_ALERT,
    payload: alert,
});
