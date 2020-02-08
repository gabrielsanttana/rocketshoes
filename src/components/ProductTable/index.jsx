import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart, updateAmount} from "../../store/modules/cart/actions";

import {formatPrice} from "../../utils/format";

import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from "react-icons/md";

import "./styles.css";

function ProductTable({cartItems, dispatch}) {
  function increment(product) {
    dispatch(updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(updateAmount(product.id, product.amount - 1));
  }

  return (
    <>
    <table>
      <thead>
        <tr>
          <th />
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>SUBTOTAL</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {cartItems.map(product => (
          <tr key={product.id}>
            <td>
              <img src={product.image} alt="tenis" />
            </td>
            <td>
              <strong className="product-name">{product.title}</strong>
              <span className="product-price">{formatPrice(product.price)}</span>
            </td>
            <td>
              <div>
                <button className="remove" type="button" onClick={() => {decrement(product)}}>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input 
                  className="product-qtd" 
                  type="number" 
                  readOnly 
                  value={product.amount}  
                />
                <button className="add" type="button" onClick={() => {increment(product)}}>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong className="subtotal">{product.subtotal}</strong>
            </td>
            <td>
              <button 
                className="delete" 
                type="button" 
                onClick={() => {dispatch(removeFromCart(product.id))}}
              >
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
    </>
  ); 
}

export default connect()(ProductTable);
