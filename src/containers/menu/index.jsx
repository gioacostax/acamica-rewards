/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React, { useEffect } from 'react';
import redux, { user } from 'src/redux';
import { Profile, Points, History } from 'src/components';

export default function User({ token }) {
  const dispatch = redux.useDispatch();

  // Cargamos datos de usuario al iniciar
  useEffect(() => {
    dispatch(user.getUser(token));
  }, [dispatch, token]);

  return (
    <div className="menu">
      <Profile />
      <Points token={token} />
      <History />
    </div>
  );
}
