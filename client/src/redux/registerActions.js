export const registerSuccess = (userDetails) => ({
    type: 'REGISTER_SUCCESS',
    payload: userDetails,
});

export const registerFailure = () => ({
    type: 'REGISTER_FAILURE',
});