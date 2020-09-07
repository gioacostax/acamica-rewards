/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';
import redux from 'src/redux';
import loader from 'src/assets/img/loader.gif';
import box from 'src/assets/img/box.svg';

export default React.memo(function History() {
  const store = redux.useSelector((states) => states);

  return (
    <div className="history">
      <div className="title"><img className="box" src={box} alt="box" />HISTORIAL</div>
      <div className="list">
        {
          store.user.info.loading
            ? <img className="loader" src={loader} alt="loader" />
            // eslint-disable-next-line no-extra-boolean-cast
            : !!store.user.redeemHistory.list.length
              ? store.user.redeemHistory.list.map((item) => (
                <div key={Math.random().toString(36).substring(7)} className="history-item">
                  <div className="name">{item.name}</div>
                  <div className="date">{item.createDate.split('T')[0]}</div>
                </div>
              ))
              : 'No has redimido aún'
        }
      </div>
    </div>
  );
});
