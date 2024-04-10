import { Stack, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import Sidebar from './Sidebar'

const Feed = () => (
  <Stack sx={{ flexDirection: {sx: "column", md: "row"} }}>
    <Box sx={{ height: { sx: "auto", md: "86.9vh" }, borderRight: '1px solid #333', px: { sx: 0, md: 2 },  }}>
      <Sidebar />

      <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
        Copyright 2024, Nomolos29.
      </Typography>
    </Box>
  </Stack>
)

export default Feed