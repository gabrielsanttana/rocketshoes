export function addToCart(product) {
  return {
    type: "@cart/ADD",
    product
  };
}

export function removeFromCart(product_id) {
  return {
    type: "@cart/REMOVE",
    id: product_id
  };
} 

export function updateAmount(product_id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT",
    product_id,
    amount
  }
}