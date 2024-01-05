const initialState = {
    registrationStatus: null,
    userDetails: null,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return { ...state, registrationStatus: 'success', userDetails: action.payload };
        case 'REGISTER_FAILURE':
            return { ...state, registrationStatus: 'failure', userDetails: null };
        default:
            return state;
    }
};

export default registerReducer;
