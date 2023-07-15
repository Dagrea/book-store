import React from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  
<Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , background: '#0a1929', marginTop: '50px', minHeight: '400px'}} component="footer" square variant="outlined">
      <Container >
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="body1" color="#fff">
           Copyright © 2023. All rights are reserved
          </Typography>
        </Box>
      </Container>
    </Paper>
    )
export default Footer;



