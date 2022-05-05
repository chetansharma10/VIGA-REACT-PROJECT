// REDUX Working
/*
    View->   Actions->   Store[Reducer->state]  -> View ....continue
*/

const {createStore}=require("redux");
// Define Default State
const initialState={
    balance:0,
}

// Define Reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "INC":
            return {
                ...state,
                balance:state.balance+action.value,
            }
        case "DEC":
            return {
                ...state,
                balance:state.balance-action.value
            }
        default:
            return state
    }
}


// Define Store
const store=createStore(reducer)

// Call Request or Action to update store
store.dispatch({type:"INC",value:1000});
store.dispatch({type:"INC",value:2000});



// It is a listner calls a callback when dispatch happen
store.subscribe(()=>{
    console.log(store.getState())
});

console.log("Learn",store.getState());

