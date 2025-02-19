import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";


import { Navbar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components';
import './index.css';


const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000', padding: 1 }}>
            <Navbar />
            <Feed />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App