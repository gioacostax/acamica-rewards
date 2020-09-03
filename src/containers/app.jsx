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

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk';

export default function App() {
  return (
    <div style={style}>
      <User token={TOKEN} />
      <Products token={TOKEN} />
    </div>
  );
}
