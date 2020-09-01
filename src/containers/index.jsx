/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import redux, { store } from 'src/redux';

import ReduxContainer from './reduxDemo.jsx';

const ReduxProvider = () => <redux.Provider store={store}><ReduxContainer /></redux.Provider>;
export const Redux = /* devblock:start */require('react-hot-loader/root').hot(ReduxProvider)
|| /* devblock:end */ReduxProvider;
