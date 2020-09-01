/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import redux, { api } from 'src/redux';

export default function ReduxDemo() {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  return (
    <></>
  );
}
