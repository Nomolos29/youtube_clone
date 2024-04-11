import { Stack, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './'

const Feed = () => {
  const [activeCategory, setActiveCategory] = useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${activeCategory}`)
  }, [activeCategory]);

  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"} }}>
      <Box sx={{ height: { sx: "auto", md: "86.9vh" }, borderRight: '1px solid #333', px: { sx: 0, md: 2 }  }}>
        <Sidebar 
          activeCategory = {activeCategory}
          setActiveCategory = {setActiveCategory}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2024, Nomolos29.
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '100vh', flex: '2'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {activeCategory} <span style={{ color: '#F31503'}}>vidoes</span>
        </Typography>

        <Videos video={[]}/>
      </Box>
    </Stack>
  );
}

export default Feed