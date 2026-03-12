import { useContext } from "react";
import { ShopContext } from "../../view/hooks/useContext1";

import { Box } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const Myfavorites = () => {

  const { favorites, removeFavorite } = useContext(ShopContext);

  return (

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 2, sm: 3, md: 10 },
        mt: { xs: 10, sm: 12, md: 20 },
        mb: 6,
        px: { xs: 1, sm: 2, md: 0 },
        justifyContent: "center",
      }}
    >

      {favorites.length === 0 && (
        <Typography variant="h5">
          No tienes productos favoritos
        </Typography>
      )}

      {favorites.map((item) => (

        <Card sx={{ maxWidth: { xs: "100%", sm: "280px", md: "345px" } }} key={item.id}>

          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
          />

          <CardContent>

            <Typography gutterBottom variant="h5">
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              $ {item.price?.toLocaleString?.() || "Precio no disponible"}
            </Typography>

          </CardContent>

          <CardActions>

            <Button
              size="small"
              color="error"
              variant="contained"
              onClick={() => removeFavorite(item.id)}
            >
              Eliminar
            </Button>

          </CardActions>

        </Card>

      ))}

    </Box>
  );
};