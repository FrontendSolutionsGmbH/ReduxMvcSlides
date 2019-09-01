const {createStore}=require('redux')


/**
 * introduce a reducer action map
 */
const actionsMap={
    'INCREMENT':(state,action)=>{
        return state+1;
    },
    'DECREMENT': (state,action)=>{
        return state-1;
    }
}

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
    // here an action is handled by action map method, or current state is returned
    return (actionsMap[action.type]&&actionsMap[action.type](state,action))||state
}

// extract reusable actions
const IncrementAction=()=>{
    return {type:'INCREMENT'}
}
const DecrementAction=()=>{
    return {type:'DECREMENT'}
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(IncrementAction())
// 1
store.dispatch(IncrementAction())
// 2
store.dispatch(DecrementAction())
// 1