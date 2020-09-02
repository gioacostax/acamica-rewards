/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { User, Products } from 'src/containers';

const style = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
  boxSizing: 'border-box',
};

export default function App() {
  return (
    <div style={style}>
      <User />
      <Products />
    </div>
  );
}
