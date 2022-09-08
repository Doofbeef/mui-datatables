/* eslint-disable max-len */

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function ViewColumn(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" />
    </SvgIcon>
  );
}

ViewColumn.muiName = 'SvgIcon';

export default ViewColumn;
