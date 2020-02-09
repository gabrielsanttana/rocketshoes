import {call, select, put, all, takeLatest} from "redux-saga/effects"; 
import {formatPrice} from "../../../utils/format"; 
import {toast} from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import {addToCartSuccess, updateAmountSuccess} from "./actions";

function* addToCart({product_id}) {
  const productExists = yield select(
    state => state.cart.find(product => product.id === product_id)
  );

  const stock = yield call(api.get, `/stock/${product_id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if(amount > stockAmount) {
    toast.error("Quantidade solicitada fora de estoque");
    return;
  }

  if(productExists) {
    yield put(updateAmountSuccess(product_id, amount));
  } else {
    const response = yield call(api.get, `/products/${product_id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price)
    };

    yield put(addToCartSuccess(data));

    history.push("/cart");
  }
}

function* updateAmount({product_id, amount}) {
  if(amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${product_id}`);

  const stockAmount = stock.data.amount;

  if(amount > stockAmount) {
    toast.error("Quantidade solicitada fora de estoque");
    return;
  }

  yield put(updateAmountSuccess(product_id, amount));
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount)
]);  