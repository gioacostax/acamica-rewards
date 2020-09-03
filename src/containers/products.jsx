/* eslint-disable no-underscore-dangle */
/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import redux, { products } from 'src/redux';
import { Product } from 'src/components';

const style = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: '100%',
  padding: 25,
  boxSizing: 'border-box',
  overflowY: 'scroll'
};

export default function Products({ token }) {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  useEffect(() => {
    dispatch(products.getProducts(token));
  }, [dispatch, token]);

  return (
    <div style={style}>
      {
        store.products.list.length > 0 && store.products.list.map((item) => (
          <Product
            key={item._id}
            id={item._id}
            picture={item.img.url}
            name={item.name}
            category={item.category}
            cost={item.cost}
            token={token}
          />
        ))
      }
    </div>
  );
}
