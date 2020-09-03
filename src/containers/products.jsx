/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import redux, { products, user } from 'src/redux';

const style = {
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%',
  padding: 25,
  boxSizing: 'border-box'
};

export default function Products({ token }) {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  useEffect(() => {
    dispatch(products.getProducts(token));
  }, [dispatch, token]);

  return (
    <div style={style}>
      Productos
    </div>
  );
}
