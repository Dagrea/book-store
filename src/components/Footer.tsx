import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const theme = createTheme({
  spacing: 2,
  typography: {
    body1: {
      fontSize: '20px',
    },
  },
});

interface linkBlock {
  [key: string]: string;
}

interface Links {
  'For clients': linkBlock;
  Information: linkBlock;
  Contacts: linkBlock;
}

const footerLinks: Links = {
  'For clients': {
    'Contact Us': '',
    'FAQ (Frequently Asked Questions)': '',
    'Terms of Service': '',
    'Privacy Policy': '',
    News: '',
  },
  Information: {
    Сharity: '',
    'Gift certificates': '',
    Careers: '',
    'Shipping Details': '',
    'Return Policy and Refunds': '',
  },
  Contacts: {
    '+38 (050) 640 89 35': '',
    '+38 (067) 492 64 97': '',
    '+38 (044) 378 00 37': '',
    'Пн - Пт 10:00 - 20:00': '',
    'Сб - Нд 10:00 - 18:00': '',
  },
};

const Footer = () => (
  <ThemeProvider theme={theme}>
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0a1929',
        marginTop: '50px',
        minHeight: '500px',
      }}
      component='footer'
      square
      variant='outlined'
    >
      <Container>
        <Grid container>
          {Object.entries(footerLinks).map((item, i) => {
            return (
              <Grid container item xs={3} spacing={2} key={i}>
                <Grid container item xs={12}>
                  <Typography variant='h5' color='#427dff'>
                    {Object.entries(footerLinks)[i][0]}
                  </Typography>
                </Grid>
                {Object.keys(Object.entries(footerLinks)[i][1]).map((item, j) => (
                  <Grid container item xs={12} key={j}>
                    <Typography variant='body1' color='#fff'>
                      {item}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            );
          })}
          <Grid container item xs={3} spacing={2}>
            <Grid container item xs={2}>
              <Divider orientation='vertical' flexItem sx={{ borderColor: '#fff', minHeight: '100%' }} />
            </Grid>
            <Grid container item xs={10} spacing={1} justifyContent='center'>
              <Typography variant='h4' color='#fff'>
                Newsletter
              </Typography>
              <TextField
                id='filled-basic'
                label='Enter your e-mail'
                variant='filled'
                fullWidth
                sx={{ input: { backgroundColor: '#fff', fontSize: '15px' } }}
              />
              <Button variant='contained' size='medium' color='info' sx={{ width: '100%', height: '50px' }}>
                Subscibe
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent='center' sx={{ marginTop: '50px' }}>
            <Divider sx={{ borderColor: '#fff', minHeight: '1px', minWidth: '100%' }} />
            <Typography align='right' variant='body1' color='#fff' sx={{ marginTop: '50px' }}>
              Copyright © 2023. All rights are reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  </ThemeProvider>
);
export default Footer;
