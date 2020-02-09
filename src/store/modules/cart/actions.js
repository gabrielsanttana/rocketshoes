export function addToCartRequest(product_id) {
  return {
    type: "@cart/ADD_REQUEST",
    product_id
  };
}

export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESS",
    product
  };
}

export function removeFromCart(product_id) {
  return {
    type: "@cart/REMOVE",
    id: product_id
  };
} 

export function updateAmountRequest(product_id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    product_id,
    amount
  }
}

export function updateAmountSuccess(product_id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    product_id,
    amount
  }
}