// import Skeleton from '@mui/material/Skeleton';



// export function LoadingSkeleton({ children, loading }) {
//     return loading ? (
//       <Skeleton variant="rounded" width="100%" height="100%">
//         {children}
//       </Skeleton>
//     ) : children;
//   }


// export function SkeletonList({ count = 5 }) {
//     return Array(count).fill().map((_, index) => (
//       <Skeleton key={index} variant="rectangular" width="100%" height={118} sx={{ mb: 2 }} />
//     ));
//   }


//   <Stack spacing={1}>
//       {/* For variant="text", adjust the height via font-size */}
//       <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
//       {/* For other variants, adjust the size with `width` and `height` */}
//       <Skeleton variant="circular" width={40} height={40} />
//       <Skeleton variant="rectangular" width={210} height={60} />
//       <Skeleton variant="rounded" width={210} height={60} />
//     </Stack>

import React from 'react';
import Skeleton from '@mui/material/Skeleton';

// // Componente para Skeleton de texto
// export const TextSke = ({ children, loading, width = '100%', fontSize = '1rem', ...props }) => {
//   return loading ? (
//     <Skeleton variant="text" sx={{ fontSize, width }} {...props} />
//   ) : children;
// };

// Componente para Skeleton circular
// export default function CircularSke({ children, loading, size = 40, ...props }){
//   return loading ? (
//     <Skeleton variant="circular" width={size} height={size} {...props} />
//   ) : children;
// };

// Componente para Skeleton retangular
export const RectangularSke = ({ children, loading, width = 210, height = 60, ...props }) => {
  return loading ? (
    <Skeleton variant="rectangular" width={width} height={height} {...props} />
  ) : children;
};

// Componente para Skeleton arredondado
// export const RoundedSke = ({ children, loading, width = 210, height = 60, ...props }) => {
//   return loading ? (
//     <Skeleton variant="rounded" width={width} height={height} {...props} />
//   ) : children;
// };

export const RoundedSke = ({ children, loading, ...props }) => {
    return loading ? (
      <Skeleton variant="rounded" {...props} />
    ) : children;
  };

// Componente para criar múltiplos Skeletons
export const MultiSke = ({ children, loading, count = 1, SkeletonComponent, ...props }) => {
  if (!loading) return children;

  return (
    <>
      {Array(count).fill().map((_, index) => (
        <SkeletonComponent key={index} loading={true} {...props} />
      ))}
    </>
  );
};
