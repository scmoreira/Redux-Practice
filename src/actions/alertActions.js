import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types'

const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

export function showAlert(alert) {
    return (dispatch) => {
        dispatch(createAlert(alert));
    }
}

const occultAlert = () => ({
    type: HIDE_ALERT
});

export function hideAlert() {
    return (dispatch) => {
        dispatch(occultAlert());
    }
}