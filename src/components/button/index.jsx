/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';

export default React.memo(function Button({ onClick = () => {}, children }) {
  return (
    <button type="button" className="black" onClick={onClick}>
      {children}
    </button>
  );
});
