/* eslint-disable max-len */

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function FilterList(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </SvgIcon>
  );
}

FilterList.muiName = 'SvgIcon';

export default FilterList;
