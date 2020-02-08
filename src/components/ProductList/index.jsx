import React, {Component} from 'react';
import {connect} from "react-redux";
import {addToCart} from "../../store/modules/cart/actions";

import api from "../../services/api";
import {formatPrice} from "../../utils/format";

import {MdAddShoppingCart} from "react-icons/md";
import "./styles.css";

class ProductList extends Component {
  state = {
    products: [],
    stock: []
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price)
    }));

    const stock = await api.get("stock");
      
    this.setState({products: data});
    this.setState({stock: stock});
  }

  handleAddProduct = (product) => {
    const {dispatch} = this.props;

    dispatch(addToCart(product));
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;
    
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="tenis"/>
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>
            <button type="button" onClick={() => {this.handleAddProduct(product)}}>
              <div>
                <MdAddShoppingCart size={20} color="#fff" /> {amount[product.id] || 0}

              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button> 
          </li>
        ))}
      </ul>
    )
  };
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})
});

export default connect(mapStateToProps)(ProductList);
