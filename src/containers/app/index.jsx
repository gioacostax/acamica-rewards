/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles.scss';
import React from 'react';
import { Menu, Products } from 'src/containers';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk';

export default function App() {
  return (
    <div className="app">
      <Menu token={TOKEN} />
      <Products token={TOKEN} />
    </div>
  );
}
