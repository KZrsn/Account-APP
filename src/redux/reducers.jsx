// import { ADD_AMOUNT, ADD_CLASSIFICATION, ADD_PAY, ADD_REMARK } from './actions';

// const initialState = {
//   amount: 0,
//   classification: '早餐',
//   pay: '現金',
//   remark: ''
// }

// export const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_AMOUNT:
//       return { ...state, amount: action.payload };
//     case ADD_CLASSIFICATION:
//       return { ...state, classification: action.payload };
//     case ADD_PAY:
//       return { ...state, pay: action.payload };
//     case ADD_REMARK:
//       return { ...state, remark: action.payload };
//     default:
//       return state;
//   }
// }


// const redux = require('redux');
// const createStore = redux.createStore;

// const store = createStore(reduce);
// console.log('Initial State', store.getState());




const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity:1
  }
}

const initialState = {
  numOfCakes:10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer);
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe()
