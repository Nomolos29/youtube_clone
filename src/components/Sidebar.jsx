import { Box, Stack } from '@mui/material';

import { categories } from '../utils/constants';

const activeCategory = 'New';

const Sidebar = () => (
 <Stack 
  direction='row'
  sx={{ 
   overflowY: "auto",
   height: { sx: 'auto', md: '94%' },
   flexDirection: { md: "column" } }}
 >
  {categories.map((category) => (
   <button
    className='category-btn'
    style={{ 
      background: category.name === activeCategory && '#fc1503',
      color: '#fff'
    }}
   >
    <span>{category.icon}</span>
    <span>{category.name}</span>
   </button>
  ))}
 </Stack>
)

export default Sidebar