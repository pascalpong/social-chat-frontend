import { Box, Button, CssBaseline, CssVarsProvider, GlobalStyles, IconButton, Stack, Typography } from "@mui/joy";
import { auth , googleProvider} from "../../service/Firebase";
import { signInWithPopup } from "firebase/auth";
import ColorSchemeToggle from "../../components/Chat/ColorSchemeToggle";
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import GoogleIcon from './GoogleIcon';
import { useAuthRegisterMutation } from "../../api/authService";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => { 
  const navigate = useNavigate();

  const [ authentication ] = useAuthRegisterMutation();
  const AuthUser = localStorage.getItem('AuthUser');
  const { slug } = useParams();

  useEffect(() => {
    if(AuthUser) {
      navigate('/chat');
    }
  },[AuthUser])

  const signInWithGoogle = async () => {
    try {
      const details = await signInWithPopup(auth, googleProvider);
      const { accessToken, displayName, email, phoneNumber, photoURL, uid } = details.user as any;
      const AuthUser = { accessToken, displayName, email, phoneNumber, photoURL, uid }
      localStorage.setItem('AuthUser', JSON.stringify(AuthUser))

      const signin = await authentication({details: details.user, roomToken: slug});
      if(signin) {
        
      }
    } catch (err){
      console.error(err);
    }
  };

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level="title-lg">Company logo</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Button
                variant="soft"
                color="neutral"
                fullWidth
                startDecorator={<GoogleIcon />}
                onClick={() => signInWithGoogle()}
              >
                Continue with Google
              </Button>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
          },
        })}
      />
    </CssVarsProvider>
  )
}

export default Login;