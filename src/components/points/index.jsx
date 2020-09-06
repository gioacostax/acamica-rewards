/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React, { useState } from 'react';
import redux, { user } from 'src/redux';
import add from 'src/assets/img/add.svg';
import loader from 'src/assets/img/loader.gif';
import coin from 'src/assets/img/coin.svg';

export default React.memo(function Points({ token }) {
  const [loading, setLoading] = useState(false);
  const dispatch = redux.useDispatch();

  const handleAdd = async (value) => {
    setLoading(true);

    // Configuramos cabeceras
    const query = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ amount: value })
    };

    try {
      // Traemos la información
      let data = await fetch('https://coding-challenge-api.aerolab.co/user/points', query);
      if (!data.ok) throw Error(data.statusText);

      // Transformamos la información
      data = await data.json();

      // TODO: Lanzar modal exitoso
      // Actualizamos datos de usuario
      dispatch(user.getUser(token));
      setLoading(false);
    } catch (error) {
      // TODO: Lanzar modal error
      setLoading(false);
    }
  };

  return (
    <div className="add-points">
      <div className="title"><img className="coin" src={coin} alt="coin" />AÑADIR</div>
      <div className="buttons">
        {
          loading
            ? <img className="loader" src={loader} alt="loader" />
            : (
              <>
                <button type="button" onClick={() => handleAdd(1000)} className="points"><img className="add" src={add} alt="add" />1.000</button>
                <button type="button" onClick={() => handleAdd(5000)} className="points"><img className="add" src={add} alt="add" />5.000</button>
                <button type="button" onClick={() => handleAdd(7500)} className="points"><img className="add" src={add} alt="add" />7.500</button>
              </>
            )
        }
      </div>
    </div>
  );
});
