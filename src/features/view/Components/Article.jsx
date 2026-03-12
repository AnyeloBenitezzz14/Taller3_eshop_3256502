import React, { useContext } from 'react'
import { Box } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { ShopContext } from '../hooks/useContext1'


export const Article = () => {

  const { favorites, addFavorite, removeFavorite, cart, addToCart } = useContext(ShopContext)

  const productos = [
    {
      id: 1,
      image: "/public/img/krk.jpeg",
      title: "Bocinas KRK",
      description:
        "Monitores de estudio diseñados para una reproducción de sonido clara y precisa. Ideales para mezcla y producción musical en home studio o entornos profesionales."
    },
    {
      id: 2,
      image: "/public/img/mc.jpg",
      title: "Guitarra electrica",
      description:
        "Instrumento versátil con gran presencia en géneros como rock, pop y música acústica. Perfecta tanto para estudio como para presentaciones en vivo."
    },
    {
      id: 3,
      image: "/public/img/midi.jpg",
      title: "Piano MIDI",
      description:
        "Controlador MIDI sensible a la velocidad, ideal para producción digital. Compatible con DAWs como Ableton, FL Studio y Logic Pro."
    },
    {
      id: 4,
      image: "/public/img/interfaz.jpg",
      title: "Interfaz de audio Focusrite 4i4",
      description:
        "Interfaz de audio USB con excelente calidad de preamplificadores. Permite grabar instrumentos y voces con baja latencia y sonido profesional."
    },
    {
      id: 5,
      image: "/public/img/audio.jpg",
      title: "Microfono Audiotechnica AT2020",
      description:
        "Micrófono de condensador con captación clara y detallada. Ideal para grabación de voces, instrumentos y podcasts."
    },
    {
      id: 6,
      image: "/public/img/technica.jpg",
      title: "Audifonos Audio Technica ATH-M50X",
      description:
        "Audífonos cerrados de alta fidelidad con excelente respuesta en graves. Perfectos para monitoreo, mezcla y sesiones largas de producción."
    }
  ]

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

      {productos.map((product) => {

        const isFavorite = favorites.some(item => item.id === product.id)
        const isInCart = cart.some(item => item.id === product.id)

        const handleFavorite = () => {
          if (isFavorite) {
            removeFavorite(product.id)
          } else {
            addFavorite(product)
          }
        }

        return (
          <Card sx={{ maxWidth: { xs: "100%", sm: "280px", md: "345px" } }} key={product.id}>

            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
            />

            <CardContent>

              <Typography gutterBottom variant="h5">
                {product.title}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>

            </CardContent>

            <CardActions sx={{ pt: 0, gap: 1, flexDirection: { xs: "column", sm: "row" } }}>

              {/* BOTON CARRITO */}
              <Button
  size="small"
  variant="contained"
  startIcon={<ShoppingCartIcon />}
  onClick={() => addToCart(product)}
  disabled={isInCart}
  sx={{
    backgroundColor: "black",
    color: "white",
    flex: { xs: 1, sm: "0 1 auto" },
    "&:hover": {
      backgroundColor: "#222"
    }
  }}
>
  {isInCart ? "En carrito" : "Comprar"}
</Button>

              {/* BOTON FAVORITO */}
              <Button
                size="small"
                onClick={handleFavorite}
                sx={{ color: isFavorite ? "error.main" : "inherit" }}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>

            </CardActions>

          </Card>
        )
      })}

    </Box>
  );
};