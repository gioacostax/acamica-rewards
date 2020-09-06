/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import redux, { user } from 'src/redux';
import { Profile, Points } from 'src/components';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 250,
  height: '100%',
  padding: 25,
  backgroundColor: '#65727B',
  boxSizing: 'border-box',
  color: '#fff'
};

export default function User({ token }) {
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  useEffect(() => {
    dispatch(user.getUser(token));
  }, [dispatch, token]);

  return (
    <div style={style}>
      <Profile />
      <Points token={token} />
    </div>
  );
}
