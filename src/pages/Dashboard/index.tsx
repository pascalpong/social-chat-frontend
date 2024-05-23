import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';

import NavBar from './components/NavBar';
import RentalCard from './components/RentalCard';
import Filters from './components/Filters';
import Pagination from './components/Pagination'; 
import CreateRoom from './items/CreateRoom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate()
  const tokens = localStorage.getItem('tokens');
  useEffect(() => {
    if(!tokens) {
      navigate('/')
    }
  },[tokens])

    return (
        <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <NavBar />
        <Box
          component="main"
          sx={{
            height: 'calc(100vh - 55px)',
            display: 'grid',
            gridTemplateColumns: { xs: 'auto', md: 'auto' },
            gridTemplateRows: 'auto ',
          }}
        >
          <Stack
            sx={{
              backgroundColor: 'background.surface',
              px: { xs: 2, md: 4 },
              py: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
          </Stack>
          <Box
            sx={{
              gridRow: 'span 3',
              display: { xs: 'none', md: 'flex' },
              backgroundColor: 'background.level1',
              backgroundSize: 'cover',
            }}
          />
          <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
            <Filters />
            <CreateRoom />
            <Stack spacing={2} sx={{ overflow: 'auto' }}>
              <RentalCard
                title="Designer NY style loft"
                category="Entire loft in central business district"
                liked
                image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="Designer NY style loft"
                category="Entire loft in central business district"
                liked
                image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400"
              />
            </Stack>
          </Stack>
          <Pagination />
        </Box>
      </CssVarsProvider>
    )

}

export default Dashboard;