import { useState, type SyntheticEvent } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Box, Button } from '@mui/material';

function Header() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ mb: 4, px: { xs: 2, md: 0 } }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: 'rgba(5, 10, 22, 0.88)',
          backdropFilter: 'blur(18px)',
          color: 'common.white',
          border: '1px solid rgba(255,255,255,0.08)',
          py: 1,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, md: 3 },
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: { xs: 1, md: 2 } }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #ffffff 0%, #8b5cf6 45%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FE App
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="main navigation tabs"
              sx={{ minHeight: 48 }}
            >
              <Tab label="Home" sx={{ minWidth: 80 }} />
              <Tab label="Sign In" sx={{ minWidth: 90 }} />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ textTransform: 'none', px: 3, minWidth: 100 }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
