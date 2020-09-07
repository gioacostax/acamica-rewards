/* eslint-disable no-plusplus */
/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React, { useState } from 'react';
import redux, { products } from 'src/redux';

export default React.memo(function Filter() {
  const dispatch = redux.useDispatch();
  const [category, setCategory] = useState();

  const handleCategory = ({ target: { value } }) => {
    if (value !== '') dispatch(products.orderList('category', value));
    else dispatch(products.orderList());
    setCategory(value);
  };

  return (
    <div className="filter">
      Ordenar por:
      <select className="category" name="category" onChange={handleCategory} value={category}>
        <option value="">Todos</option>
        <option value="Phones">Phones</option>
        <option value="Gaming">Gaming</option>
        <option value="Audio">Audio</option>
        <option value="Tablets & E-readers">Tablets & E-readers</option>
        <option value="Phone Accessories">Phones Accessories</option>
        <option value="Cameras">Cameras</option>
        <option value="PC Accessories">PC Accessories</option>
        <option value="Monitors & TV">Monitors & TV</option>
        <option value="Smart Home">Smart Home</option>
        <option value="Drones">Drones</option>
      </select>
      <button type="button" onClick={() => dispatch(products.orderList('lPrice', category))} className="price">Menor precio</button>
      <button type="button" onClick={() => dispatch(products.orderList('hPrice', category))} className="price">Mayor precio</button>
    </div>
  );
});
