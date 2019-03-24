
//Action types
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const RESET_COUNTER = 'RESET_COUNTER';

//Actions

//({}) - for returning not executing arrow function
export const inc =() => ({ type: INCREMENT_COUNTER })
export const dec =()=> ({ type: DECREMENT_COUNTER })
export const reset =()=> ({type: RESET_COUNTER})


//Reducer

const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state - 1
        case RESET_COUNTER:
            return 0
        default:
            return state
    }
}

export default counterReducer;