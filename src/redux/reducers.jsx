import { ADD_AMOUNT, ADD_CLASSIFICATION, ADD_PAY, ADD_REMARK } from './actions';

const initialState = {
  amount: 0,
  classification: '早餐',
  pay: '現金',
  remark: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return { ...state, amount: action.payload };
    case ADD_CLASSIFICATION:
      return { ...state, classification: action.payload };
    case ADD_PAY:
      return { ...state, pay: action.payload };
    case ADD_REMARK:
      return { ...state, remark: action.payload };
    default:
      return state;
  }
}
