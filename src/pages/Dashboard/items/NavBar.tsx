
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ColorSchemeToggle from './ColorSchemeToggle';
import FollowerSide from './NavItems/FollowerSide';
import FollowingSide from './NavItems/FollowingSide';
import { Avatar, Box, Grid } from '@mui/material';

export default function HeaderSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        top: 0,
        px: 1.5,
        py: 1,
        zIndex: 10000,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
      }}
    >
      
      {/* <ColorSchemeToggle sx={{ alignSelf: 'center' }} /> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        sx={{ flexGrow: 1 }}
      >
        <Grid item xs={4} sm={4} md={4} key={1}> 
          <Avatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          /> 
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={2}>
          <FollowerSide/>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={2}>
          <FollowingSide/>
        </Grid>
      </Grid>
    </Box>
  );
}
