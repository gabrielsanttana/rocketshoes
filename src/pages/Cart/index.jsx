import React from 'react';
import {connect} from "react-redux";
import {formatPrice} from "../../utils/format";

import ProductTable from "../../components/ProductTable";

import "./styles.css";

function Cart({cartItems, total}) {
  return (
    <div className="container">
      <ProductTable cartItems={cartItems} />

      <footer>
        <button type="button">Finalizar pedido</button>

        <div className="total">
          <span>TOTAL</span>
          <strong>{formatPrice(total)}</strong>
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)
});

export default connect(mapStateToProps)(Cart);
