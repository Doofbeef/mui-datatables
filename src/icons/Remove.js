/* eslint-disable max-len */

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Remove(props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 13H5v-2h14v2z" />
    </SvgIcon>
  );
}

Remove.muiName = 'SvgIcon';

export default Remove;
