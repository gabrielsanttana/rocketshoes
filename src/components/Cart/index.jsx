import React from 'react';
import {MdShoppingBasket} from "react-icons/md";

import "./styles.css";

export default function Cart({cartSize}) {
  return (
    <div className="cart-container">
      <div className="cart">
        <strong>Meu carrinho</strong>
        <span>{cartSize} itens</span>
      </div>
      
      <MdShoppingBasket size={36} color="#fff" />
    </div>
  );
}
