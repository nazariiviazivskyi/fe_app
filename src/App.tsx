import { useState } from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}
            >
              React + Material UI + Vite
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              Beautiful, responsive, and modern web applications
            </Typography>
          </Box>

          {/* Counter Card */}
          <Card sx={{ mb: 4, boxShadow: 3 }}>
            <CardHeader
              title="Counter Example"
              subheaderTypographyProps={{ variant: 'body2' }}
              subheader="Interactive counter with Material-UI"
            />
            <Divider />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <Typography variant="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {count}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => setCount((c) => c + 1)}
                  >
                    Increment
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    startIcon={<RemoveIcon />}
                    onClick={() => setCount((c) => c - 1)}
                  >
                    Decrement
                  </Button>
                  <Button
                    variant="outlined"
                    color="warning"
                    size="large"
                    startIcon={<RestartAltIcon />}
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card sx={{ boxShadow: 3 }}>
            <CardHeader title="Getting Started" />
            <Divider />
            <CardContent>
              <Stack spacing={2}>
                <Typography>
                  Edit{' '}
                  <code
                    style={{ backgroundColor: '#f5f5f5', padding: '4px 8px', borderRadius: '4px' }}
                  >
                    src/App.tsx
                  </code>{' '}
                  and save to test HMR
                </Typography>
                <Typography>
                  Learn more about{' '}
                  <Link href="https://mui.com" target="_blank" rel="noopener noreferrer">
                    Material-UI
                  </Link>{' '}
                  and{' '}
                  <Link href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    Vite
                  </Link>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
