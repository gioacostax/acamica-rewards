/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import redux, { store } from 'src/redux';

import AppContainer from './app.jsx';
import MenuContainer from './menu.jsx';
import ProductsContainer from './products.jsx';

const ReduxProvider = () => <redux.Provider store={store}><AppContainer /></redux.Provider>;
export const App = /* devblock:start */require('react-hot-loader/root').hot(ReduxProvider)
|| /* devblock:end */ReduxProvider;

export const Menu = /* devblock:start */require('react-hot-loader/root').hot(MenuContainer)
|| /* devblock:end */MenuContainer;

export const Products = /* devblock:start */require('react-hot-loader/root').hot(ProductsContainer)
|| /* devblock:end */ProductsContainer;
