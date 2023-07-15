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
    }
  },
});

const Footer = () => (
  <ThemeProvider theme={theme}>
<Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , background: '#0a1929', marginTop: '50px', minHeight: '500px'}} component="footer" square variant="outlined">
      <Container >
       <Grid container >
       <Grid container xs={3} spacing={1} >
       <Grid container item xs={12}>
            <Typography variant="h5" color="#427dff" >
             For clients
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             Contact Us 
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
            FAQ (Frequently Asked Questions)
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
            Terms of Service
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             Privacy Policy 
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             News
            </Typography>
          </Grid>
          </Grid>
          <Grid container xs={3} spacing={2}>
          <Grid container item xs={12}>
            <Typography variant="h5" color="#427dff">
             Information
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             Сharity
            </Typography>
            </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             Gift certificates
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             Shipping Details 
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             Shipping Details 
            </Typography>
          </Grid>
        <Grid container item xs={12}>
          <Typography variant="body1" color="#fff">
           Return Policy and Refunds
          </Typography>
          </Grid>
          </Grid>
          <Grid container xs={3} spacing={2}>
          <Grid container xs={10}>
          <Grid container item xs={12}>
            <Typography variant="h5" color="#427dff">
             Contacts
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             +38 (050) 640 89 35
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             +38 (067) 492 64 97
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant="body1" color="#fff">
             +38 (044) 378 00 37
            </Typography>
          </Grid>
          <Grid container item xs={12}>
          <Typography variant="body1" color="#fff">
           Пн - Пт 10:00 - 20:00
          </Typography>
          </Grid>
          <Grid container item xs={12}>
          <Typography variant="body1" color="#fff">
           Сб - Нд 10:00 - 18:00
          </Typography>
          </Grid>
          </Grid>
          <Grid container item xs={2}>
          <Divider orientation="vertical" flexItem sx={{borderColor: '#fff', minHeight: '100%'}}/>
          </Grid>
          </Grid>
          <Grid container xs={3} spacing={1} justifyContent="center" >
          <Typography variant="h4" color="#fff">
          Newsletter
          </Typography>
          <TextField id="filled-basic" label="Enter your e-mail" variant="filled" fullWidth sx={{input: { backgroundColor: '#fff', fontSize: '15px', }}}/>
          <Button variant="contained"  size="medium" color="info" sx={{width: '100%', height: '50px'}}>Subscibe</Button>
          </Grid>
          <Grid container xs={12} justifyContent="center" sx={{marginTop: '50px'}}>
          <Divider sx={{borderColor: '#fff', minHeight:'1px', minWidth: '100%'}}/>
          <Typography align='right' variant="body1" color="#fff"  sx={{marginTop: '50px'}}>
           Copyright © 2023. All rights are reserved
          </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    </ThemeProvider>
    )
export default Footer;



