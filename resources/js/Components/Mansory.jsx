import * as React from 'react';

import { styled } from '@mui/material/styles';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';

import Zoom from '@mui/material/Zoom';


// export default function ImageMasonry(itemData) {
//     console.log('itemData:', itemData);
//     const PicData=itemData.itemData
//     // console.log('theme:', theme);
//   return (
//     <Box sx={{ width: 500, minHeight: 829 }}>
//       <Masonry columns={3} spacing={2}>
//         {PicData.map((item, index) => (
//           <div key={index}>
//             <img
//               key={index}
//               srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=162&auto=format`}
//               alt={item.title}
//               loading="lazy"
//               style={{
//                 borderBottomLeftRadius: 4,
//                 borderBottomRightRadius: 4,
//                 display: 'block',
//                 width: '100%',
//               }}
//             />
//           </div>
//         ))}
//       </Masonry>
//     </Box>
//   );
// }



export default function ImageMasonry({ itemData }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  const getColumns = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    return 4; // for larger screens
  };

  return (
    <Box sx={{ width: '100%', my:3, padding: theme.spacing(2) }}>
      <Masonry columns={getColumns()} spacing={3}>
        {itemData.map((item, index) => (
          <Zoom in={true} style={{ transitionDelay: `${index * 150}ms` }} key={index}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: theme.shadows[5],
                '&:hover': {
                  boxShadow: theme.shadows[15],
                  '& .overlay': {
                    opacity: 1,
                  },
                },
                transition: 'box-shadow 0.3s ease-in-out',
              }}
            >
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: theme.spacing(2),
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                <Typography variant="subtitle1" color="white">
                  {item.title}
                </Typography>
                {/* <Typography variant="body2" color="white">
                  {item.author}
                </Typography> */}
              </Box>
            </Box>
          </Zoom>
        ))}
      </Masonry>
    </Box>
  );
}



