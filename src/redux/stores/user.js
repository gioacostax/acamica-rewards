/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* Actions Types */
const SET_USER_LOADING = 'USER.SET_USER_LOADING';
const SET_USER_ERROR = 'USER.SET_USER_ERROR';
const SET_USER = 'USER.SET_USER';

const SET_HISTORY_LOADING = 'USER.SET_HISTORY_LOADING';
const SET_HISTORY_ERROR = 'USER.SET_HISTORY_ERROR';
const SET_HISTORY = 'USER.SET_HISTORY';

const SET_POINTS = 'USER.SET_POINTS';

/* Private Actions */
const getUser = (token) => async (dispatch) => {
  // Reseteamos errores
  dispatch({ type: SET_USER_ERROR, value: null });

  // Activamos loading
  dispatch({ type: SET_USER_LOADING, value: true });

  // Configuramos cabeceras
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  try {
    // Traemos la información
    let data = await fetch('https://coding-challenge-api.aerolab.co/user/me', { headers });
    if (!data.ok) throw Error(data.statusText);

    // Transformamos la información
    data = await data.json();

    // Despachamos nuevos estados
    dispatch({ type: SET_USER, value: data });
    dispatch({ type: SET_USER_LOADING, value: false });
  } catch (error) {
    // En caso de error, despachamos la acción correspondiente
    dispatch({ type: SET_USER_LOADING, value: false });
    dispatch({ type: SET_USER_ERROR, value: error.message });
  }
};

const getHistory = (token) => async (dispatch) => {
  // Reseteamos errores
  dispatch({ type: SET_HISTORY_ERROR, value: null });

  // Activamos loading
  dispatch({ type: SET_HISTORY_LOADING, value: true });

  // Configuramos cabeceras
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  try {
    // Traemos la información
    let data = await fetch('https://coding-challenge-api.aerolab.co/user/history', { headers });
    if (!data.ok) throw Error(data.statusText);

    // Transformamos la información
    data = await data.json();

    // Despachamos nuevos estados
    dispatch({ type: SET_HISTORY, value: data });
    dispatch({ type: SET_HISTORY_LOADING, value: false });
  } catch (error) {
    // En caso de error, despachamos la acción correspondiente
    dispatch({ type: SET_HISTORY_LOADING, value: false });
    dispatch({ type: SET_HISTORY_ERROR, value: error.message });
  }
};

const setPoints = (value) => ({ type: SET_POINTS, value });

/* Public Actions */
export const actions = { getUser, getHistory, setPoints };

/* Initial State */
const initialState = {
  info: {
    _id: null,
    name: null,
    points: null,
    loading: false,
    error: null
  },
  redeemHistory: {
    list: [],
    loading: false,
    error: null
  }
};

/* Reducer */
export default (state = initialState, { type, value }) => {
  switch (type) {
    case SET_USER_ERROR: {
      return {
        ...state,
        info: { ...state.info, error: value }
      };
    }

    case SET_USER_LOADING: {
      return {
        ...state,
        info: { ...state.info, loading: value }
      };
    }

    case SET_USER: {
      return {
        ...state,
        info: {
          ...state.info,
          // eslint-disable-next-line no-underscore-dangle
          id: value._id,
          name: value.name,
          points: value.points
        },
        redeemHistory: {
          list: value.redeemHistory.reverse(),
          loading: false,
          error: null
        }
      };
    }

    case SET_HISTORY_ERROR: {
      return {
        ...state,
        redeemHistory: { ...state.redeemHistory, error: value }
      };
    }

    case SET_HISTORY_LOADING: {
      return {
        ...state,
        redeemHistory: { ...state.redeemHistory, loading: value }
      };
    }

    case SET_HISTORY: {
      return {
        ...state,
        redeemHistory: { ...state.redeemHistory, list: value }
      };
    }

    case SET_POINTS: {
      return {
        ...state,
        info: {
          ...state.info,
          points: value
        }
      };
    }

    default: {
      return state;
    }
  }
};
