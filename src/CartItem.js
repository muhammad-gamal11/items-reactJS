import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          <IoIosArrowUp className="arrow" />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          <IoIosArrowDown className="arrow" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
