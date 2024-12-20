import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function isMobileFunction() {
    const isMobile = useMediaQuery('(max-width:815px)');

  return {isMobile};
}
