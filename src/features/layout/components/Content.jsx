import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export const Content = () => {
  return (
    <Box
      sx={{
        mt: { xs: 10, sm: 12, md: 14 },
        mb: 7,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", sm: "350px", md: "500px" },
          borderRadius: 3,
          overflow: "hidden",
          backgroundImage: "url('/img/prod.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Capa oscura */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        {/* Contenido del banner */}
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            color: "#fff",
            maxWidth: { xs: "300px", sm: "600px", md: "800px" },
            px: 2,
          }}
        >
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" } }}
          >
            MusicStore
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ mb: 3, fontSize: { xs: "0.85rem", sm: "1rem", md: "1.125rem" } }}
          >
            Convierte tu inspiración en sonido.
            Equipos profesionales para crear, grabar y producir sin límites.
          </Typography>

         <Button
  variant="contained"
  href="https://github.com/AnyeloBenitezzz14/Taller3_eshop_3256502.git"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    mt: 2,
    backgroundColor: "grey",
    color: "white",
    "&:hover": {
      backgroundColor: "#000000"
    }
  }}
>
  Mi repositorio de Github
</Button>
        </Box>
      </Box>
    </Box>
  );
};