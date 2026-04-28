import {
  Container,
  Box,
  Button,
  Typography,
  Link,
  Stack,
  TextField,
  alpha,
  useTheme,
} from '@mui/material';

import Header from './components/layout/Header.tsx';

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Header />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 4,
            alignItems: 'center',
            mt: 4,
            '@media (min-width: 960px)': {
              gridTemplateColumns: '1.05fr 0.95fr',
            },
          }}
        >
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'inline-block',
                mb: 2,
                letterSpacing: '0.24em',
                color: 'secondary.main',
              }}
            >
              FRONTEND OBSERVABILITY
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.05,
                mb: 3,
                fontSize: { xs: '3rem', md: '4.25rem' },
              }}
            >
              Build fast, modern experiences with confidence.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.05rem',
                mb: 4,
                maxWidth: 560,
              }}
            >
              A polished frontend dashboard for teams that want modern UI, predictable workflows,
              and a clean developer experience.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 1 }}
              sx={{ alignItems: { xs: 'stretch', sm: 'flex-end' } }}
            >
              <TextField
                placeholder="Your work e-mail"
                variant="filled"
                size="medium"
                fullWidth
                InputProps={{
                  sx: {
                    bgcolor: alpha(theme.palette.common.white, 0.08),
                    color: 'common.white',
                    borderRadius: 3,
                    '& .MuiFilledInput-input': {
                      py: '18px',
                      color: 'common.white',
                      '&::placeholder': {
                        color: 'rgba(255,255,255,0.68)',
                      },
                    },
                    '& .MuiFilledInput-root': {
                      '&:before, &:after': {
                        borderBottom: 'none',
                      },
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: { xs: 3.5, sm: 4 },
                  py: '16px',
                  minWidth: 170,
                  minHeight: 56,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontWeight: 700,
                  boxShadow: '0 20px 40px rgba(132, 94, 255, 0.2)',
                }}
              >
                Start for free
              </Button>
            </Stack>

            <Typography sx={{ mt: 2, color: 'text.secondary' }}>
              Datadog bill too high? Migrate today, the rest of your contract is on us. Migration
              assistance and bespoke onboarding included.{' '}
              <Link href="/contact" underline="hover" color="secondary.main">
                Book a consultation
              </Link>
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              minHeight: 420,
              bgcolor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.35)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at top right, rgba(59,130,246,0.22), transparent 30%), radial-gradient(circle at bottom left, rgba(236,72,153,0.18), transparent 30%)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ position: 'relative', p: { xs: 3, md: 4 }, height: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: 'text.secondary',
                    letterSpacing: '0.18em',
                  }}
                >
                  Telemetry
                </Typography>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: 999,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    color: 'secondary.main',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                  }}
                >
                  Map
                </Box>
              </Box>

              <Box
                sx={{
                  height: 260,
                  borderRadius: 3,
                  bgcolor: 'rgba(15,23,42,0.75)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    right: 24,
                    bottom: 24,
                    bgcolor: 'rgba(14, 23, 42, 0.9)',
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </Box>

              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: '0.8rem' }}>
                    Active alerts
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.25rem' }}>24</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: '0.8rem' }}>
                    Services
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.25rem' }}>12</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
