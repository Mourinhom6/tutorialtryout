import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function isMobileFunction() {
    const isMobile = useMediaQuery('(max-width:815px)');
    console.log("Ori_isMobile:", isMobile); // Debugging


  return {isMobile};
}

export function useIsSuperTiny() {
    const isSuperTiny = useMediaQuery('(max-width:450px)');
    console.log("Ori_isSuperTiny:", isSuperTiny); // Debugging

    return {isSuperTiny};
}

export function isBigScreen() {
    const isDesktop = useMediaQuery('(min-width:999px)');
    console.log("Ori_isDesktop:", isDesktop); // Debugging

    return {isDesktop};
}
