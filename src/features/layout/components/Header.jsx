import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'

import HomeIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LocalMall from '@mui/icons-material/LocalMall'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { AppBar, Button, Stack, Typography, Box, Toolbar, Badge, useMediaQuery, Drawer } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ShopContext } from '../../view/hooks/useContext1'

export const Header = () => {
    const { cart, favorites } = useContext(ShopContext)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const navLinks = (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={isMobile ? 2 : 1}>
            <Button component={NavLink} to="/" startIcon={<HomeIcon />} sx={{ color: isMobile ? 'black' : 'white' }}>
                Inicio
            </Button>
            <Button component={NavLink} to="/articles" startIcon={<NewspaperIcon />} sx={{ color: isMobile ? 'black' : 'white' }}>
                Articulos
            </Button>
            <Button component={NavLink} to="/products" startIcon={<LocalOfferIcon />} sx={{ color: isMobile ? 'black' : 'white' }}>
                Productos
            </Button>
            <Button component={NavLink} to="/mybuys" startIcon={<LocalMall />} sx={{ color: isMobile ? 'black' : 'white' }}>
                Mis Compras
            </Button>
            <Button 
                component={NavLink} 
                to="/cart" 
                sx={{ color: isMobile ? 'black' : 'white' }}
            >
                <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </Button>
            <Button 
                component={NavLink} 
                to="/myfavorites" 
                sx={{ color: isMobile ? 'black' : 'white' }}
            >
                <Badge badgeContent={favorites.length} color="error">
                    <BookmarkIcon />
                </Badge>
            </Button>
            <Button component={NavLink} to="/offers" startIcon={<LocalOfferIcon />} sx={{ color: isMobile ? 'black' : 'white' }}>
                Ofertas
            </Button>
        </Stack>
    )

    return (
        <AppBar
            position="fixed"
            sx={{
                background: 'linear-gradient(to right, #00ffff 0%, #2f84d3 100%)',
                boxShadow: 3,
                zIndex: 1300
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', flexShrink: 0 }}>
                    MusicStore
                </Typography>

                {isMobile ? (
                    <>
                        <Button onClick={toggleMenu} sx={{ color: 'white', ml: 'auto' }}>
                            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </Button>
                        <Drawer
                            anchor="top"
                            open={mobileMenuOpen}
                            onClose={toggleMenu}
                        >
                            <Box sx={{ p: 2, width: '100%', mt: 6 }}>
                                {navLinks}
                                <Box component="form" role="search" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                                    <input
                                        type="search"
                                        placeholder="Buscar..."
                                        style={{
                                            padding: '10px 10px',
                                            borderRadius: '20px',
                                            outline: 'none',
                                            border: 'none',
                                            flex: 1
                                        }}
                                    />
                                    <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: '#fffdfd' }}>
                                        <SearchIcon />
                                    </Button>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                                    <Button component={NavLink} to="/myaccount" startIcon={<AccountBoxIcon />} fullWidth>
                                        Cuenta
                                    </Button>
                                </Box>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{ flex: 1 }}
                        >
                            {navLinks}
                        </Stack>

                        <Box component="form" role="search" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <input
                                type="search"
                                placeholder="Buscar..."
                                style={{
                                    padding: '10px 10px',
                                    borderRadius: '20px',
                                    outline: 'none',
                                    border: 'none',
                                    width: '150px'
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '20px',
                                    backgroundColor: '#fffdfd',
                                    '&:hover': {
                                        backgroundColor: '#18abe6'
                                    }
                                }}
                            >
                                <SearchIcon />
                            </Button>
                        </Box>

                        <Button component={NavLink} to="/myaccount" startIcon={<AccountBoxIcon />} sx={{ color: 'white' }}>
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}
