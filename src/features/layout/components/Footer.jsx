import React from 'react'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 'auto',
        bgcolor: 'rgba(10, 29, 44, 0.85)',
        color: 'white',
        width: '100%',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; 2026 Niggapollon SAS. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  )
}