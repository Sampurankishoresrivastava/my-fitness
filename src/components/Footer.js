import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="35px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '35px' }} />
    </Stack>
    <Typography variant="h4" sx={{ fontSize: { lg: '20px', xs: '20px' } }} 
    mt="41px" textAlign="center" pb="40px">Made with ❤️ by Sampuran</Typography>
  </Box>
);

export default Footer;