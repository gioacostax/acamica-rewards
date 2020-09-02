/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import redux, { products, user } from 'src/redux';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 250,
  height: '100%',
  padding: 25,
  backgroundColor: '#000',
  boxSizing: 'border-box',
  color: '#fff'
};

export default function User() {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  return (
    <div style={style}>
      Usuario
    </div>
  );
}
