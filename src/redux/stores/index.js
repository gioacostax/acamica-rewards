/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { combineReducers } from 'redux';
import products from './products';
import user from './user';

export { actions as products } from './products';
export { actions as user } from './user';

export default combineReducers({
  products,
  user
});
