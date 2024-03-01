import { CLEAR_CART, REMOVE } from "./Vars";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
