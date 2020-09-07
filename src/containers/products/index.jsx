/* eslint-disable no-underscore-dangle */
/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React, { useState, useEffect } from 'react';
import redux, { products } from 'src/redux';
import { Product, Pagination, Filter } from 'src/components';
import loader from 'src/assets/img/loader.gif';

const P_SIZE = 16;

export default function Products({ token }) {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(products.getProducts(token));
  }, [dispatch, token]);

  return (
    <div className="products">
      <Filter />
      <div className="list">
        {
          store.products.loading
            ? <img className="loader" src={loader} alt="loader" />
            : !!store.products.list.length
              && store.products.list.slice((P_SIZE * page) - P_SIZE, P_SIZE * page).map((item) => (
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
      <Pagination
        size={store.products.list.length}
        sizePage={P_SIZE}
        setPage={setPage}
        actualPage={page}
      />
    </div>
  );
}
