/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { combineReducers } from 'redux';
import api from './api';

export { actions as api } from './api';

export default combineReducers({
  api
});
