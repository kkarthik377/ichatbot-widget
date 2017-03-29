// Export Constants
export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

// Export Actions
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    };
}

export function getUser() {
    return {
        type: GET_USER,
    };
}
