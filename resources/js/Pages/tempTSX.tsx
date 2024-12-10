import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function TextSkeleton() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mt: 4,
          py: 2,
          border: '1px solid grey',
          borderRadius: 1,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Page Title
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Placeholder for content.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Additional information or footer text.
        </Typography>
      </Box>
    </Container>
  );
}
