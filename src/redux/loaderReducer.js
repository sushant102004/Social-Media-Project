// Creating Initial State
const initialState = {
    isLoading: false
}

// Function to handle state change.
const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'showLoading' : return {
            // State is same but changing isLoading to true
            ...state,
            isLoading: true
        };

        case 'hideLoading' : return {
            // State is same but changing isLoading to false
            ...state,
            isLoading: false
        }
    }
}