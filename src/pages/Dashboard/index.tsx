import NavBar from './items/NavBar';
import Filters from './components/Filters';
import CreateRoom from './items/CreateRoom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardImg from './items/CardImg';
import { Box, Grid, Stack } from '@mui/material';


const Dashboard = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    if(!accessToken) {
      navigate('/')
    }
  },[accessToken])

  return (
    <>
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
        <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
          <Filters />
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={12}
          >
            {Array.from(Array(13)).map((_, index) => (
            <Grid xs={4} key={index}>
              <CardImg img={"https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" } />
            </Grid>
            ))}
          </Grid>
          <CreateRoom />
        </Stack>
      </Box>
    </>
  )

}

export default Dashboard;