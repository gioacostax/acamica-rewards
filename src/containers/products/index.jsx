/* eslint-disable no-underscore-dangle */
/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React, { useEffect } from 'react';
import redux, { products } from 'src/redux';
import { Product } from 'src/components';

export default function Products({ token }) {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  useEffect(() => {
    dispatch(products.getProducts(token));
  }, [dispatch, token]);

  return (
    <div className="products">
      {
        !!store.products.list.length && store.products.list.map((item) => (
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
