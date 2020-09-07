/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';
import success from 'src/assets/img/success.svg';
import error from 'src/assets/img/error.svg';

export default React.memo(function Modal({
  type = 'success',
  onRequestClose = () => {},
  children = ''
}) {
  return (
    <div className="modal" type={type}>
      <div className="window">
        {
          type === 'success'
            ? <img src={success} alt="success" />
            : <img src={error} alt="error" />
        }
        { children }
        <button type="button" onClick={onRequestClose}>Aceptar</button>
      </div>
    </div>
  );
});
