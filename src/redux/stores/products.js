/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* Actions Types */
const CLEAR_PRODUCTS = 'PRODUCTS.CLEAR_PRODUCTS';
const SET_LOADING = 'PRODUCTS.SET_LOADING';
const SET_ERROR = 'PRODUCTS.SET_ERROR';
const SET_PRODUCTS = 'PRODUCTS.SET_PRODUCTS';
const ORDER_PRODUCTS = 'PRODUCTS.ORDER_PRODUCTS';

/* Private Actions */
const getProducts = (token) => async (dispatch) => {
  // Limpiamos la lista de productos
  dispatch({ type: CLEAR_PRODUCTS });

  // Reseteamos errores
  dispatch({ type: SET_ERROR, value: null });

  // Activamos loading
  dispatch({ type: SET_LOADING, value: true });

  // Configuramos cabeceras
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  try {
    // Traemos la información
    let data = await fetch('https://coding-challenge-api.aerolab.co/products', { headers });
    if (!data.ok) throw Error(data.statusText);

    // Transformamos la información
    data = await data.json();

    // Despachamos nuevos estados
    dispatch({ type: SET_PRODUCTS, value: data });
    dispatch({ type: SET_LOADING, value: false });
  } catch (error) {
    // En caso de error, despachamos la acción correspondiente
    dispatch({ type: SET_LOADING, value: false });
    dispatch({ type: SET_ERROR, value: error.message });
  }
};

const orderList = (order, value) => (dispatch, getState) => {
  let list = [];

  // Ordenamos la lista según el el filtro
  switch (order) {
    case 'category':
      list = getState().products.listOriginal.filter((item) => item.category === value);
      break;

    case 'lPrice':
      list = getState().products.listOriginal.sort((a, b) => ((a.cost > b.cost) ? 1 : -1));
      if (value) list = list.filter((item) => item.category === value);
      break;

    case 'hPrice':
      list = getState().products.listOriginal.sort((a, b) => ((a.cost < b.cost) ? 1 : -1));
      if (value) list = list.filter((item) => item.category === value);
      break;

    default:
      list = getState().products.listOriginal;
      break;
  }

  dispatch({ type: ORDER_PRODUCTS, value: list });
};

/* Public Actions */
export const actions = { getProducts, orderList };

/* Initial State */
const initialState = {
  list: [],
  listOriginal: [],
  loading: false,
  error: null,
};

/* Reducer */
export default (state = initialState, { type, value }) => {
  switch (type) {
    case CLEAR_PRODUCTS: {
      return {
        ...state,
        list: []
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: value
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: value
      };
    }

    case SET_PRODUCTS: {
      return {
        ...state,
        list: value,
        listOriginal: value
      };
    }

    case ORDER_PRODUCTS: {
      return {
        ...state,
        list: value
      };
    }

    default: {
      return state;
    }
  }
};
