/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';
import redux from 'src/redux';
import coin from 'src/assets/img/coin.svg';
import loader from 'src/assets/img/loader.gif';

export default React.memo(function Profile() {
  const store = redux.useSelector((states) => states);

  return (
    <div className="profile">
      {
        store.user.info.loading
          ? <img className="loader" src={loader} alt="loader" />
          : (
            <>
              <div className="name">{store.user.info.name}</div>
              <div className="points"><img className="coin" src={coin} alt="coin" />{store.user.info.points}</div>
            </>
          )
      }
    </div>
  );
});
