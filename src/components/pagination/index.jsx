/* eslint-disable no-plusplus */
/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';

export default React.memo(function Pagination({
  size = 1,
  sizePage = 1,
  setPage = () => {},
  actualPage = 1
}) {
  const buttons = [];

  // Cantidad de botones según páginas
  for (let i = 0; i < size / sizePage; i++) {
    buttons[i] = (
      <button
        key={`pag-${i}`}
        type="button"
        onClick={() => setPage(i + 1)}
        className="pag"
        actual={actualPage === i + 1 ? 'true' : undefined}
      >
        {i + 1}
      </button>
    );
  }

  return <div className="pagination">{buttons}</div>;
});
