/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* Actions Types */
const CLEAR_PRODUCTS = 'PRODUCTS.CLEAR_PRODUCTS';
const SET_LOADING = 'PRODUCTS.SET_LOADING';
const SET_ERROR = 'PRODUCTS.SET_ERROR';
const SET_PRODUCTS = 'PRODUCTS.SET_PRODUCTS';

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

/* Public Actions */
export const actions = { getProducts };

/* Initial State */
const initialState = {
  list: [],
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
        list: value
      };
    }

    default: {
      return state;
    }
  }
};
