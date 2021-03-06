/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React, { useState } from 'react';
import { Modal } from 'src/components';
import redux, { user } from 'src/redux';
import defaultPicture from 'src/assets/img/acer.png';
import coin from 'src/assets/img/coin.svg';
import loader from 'src/assets/img/loader.gif';

export default React.memo(function Product({
  id = '0',
  picture = defaultPicture,
  name = 'Producto',
  category = 'Desconocida',
  cost = 0,
  token = null
}) {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  // Función para redimir productos
  const redeem = async () => {
    setLoading(true);

    // Configuramos cabeceras
    const query = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ productId: id })
    };

    try {
      // Traemos la información
      const data = await fetch('https://coding-challenge-api.aerolab.co/redeem', query);
      if (!data.ok) throw Error(data.statusText);

      // Actualizamos datos de usuario
      dispatch(user.getUser(token));
      setLoading(false);
      setModal({ type: 'success', message: `Redimiste un ${name}!` });
    } catch (error) {
      setLoading(false);
      setModal({ type: 'error', message: `Hubo un error al remidir un ${name}!` });
    }
  };

  return (
    <div className="product">
      {
        modal && (
          <Modal
            type={modal.type}
            onRequestClose={() => setModal(null)}
          >
            {modal.message}
          </Modal>
        )
      }
      <img className="picture" src={picture} alt={name} />
      <h3>{name}</h3>
      <div className="category">{category}</div>
      {
        loading
          ? <img className="loader" src={loader} alt="loader" />
          : store.user.info.points >= cost
            ? <button type="button" onClick={redeem}><img className="coin" src={coin} alt="coin" />{cost}</button>
            : <button type="button" disabled><img className="coin" src={coin} alt="coin" />Faltan {cost - store.user.info.points}</button>
      }
    </div>
  );
});
