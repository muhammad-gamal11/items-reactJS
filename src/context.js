import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_ITEMS,
  GET_TOTALS,
  INCREASE,
  LOADING,
  REMOVE,
  TOGGLE_AMOUNT,
} from "./Vars";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItems = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await fetch(url);
      const cart = await response.json();
      dispatch({ type: DISPLAY_ITEMS, payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
