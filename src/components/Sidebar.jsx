import { Box, Stack } from '@mui/material';

import { categories } from '../utils/constants'; 

const Sidebar = ({ activeCategory, setActiveCategory }) => (
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
    onClick={() => setActiveCategory(category.name)}
    style={{ 
      background: category.name === activeCategory && '#fc1503',
      color: '#fff'
    }}
    key={category.name}
   >
    <span style={{ color: category.name === activeCategory ? 'white' : 'red' }}>{category.icon}</span>
  <span style={{opacity : category.name === activeCategory ?  '1.0' : '0.8'}}>{category.name}</span>
   </button>
  ))}
 </Stack>
)

export default Sidebar