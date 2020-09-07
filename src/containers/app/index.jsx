/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles.scss';
import React from 'react';
import { Menu, Products } from 'src/containers';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRlYWNjMDc0MjM1MjAwMWVkOTA5OWYiLCJpYXQiOjE1OTg5OTE1NTJ9.XzYOIUHAf_5KdVRvZGMVR5dc5dfUt6Q9PfNuI-8alnM';

export default function App() {
  return (
    <div className="app">
      <Menu token={TOKEN} />
      <Products token={TOKEN} />
    </div>
  );
}
