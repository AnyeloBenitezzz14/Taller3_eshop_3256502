import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Checkbox,
    FormControlLabel
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Myaccount() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const passwordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);

    const formValid = emailValid && passwordValid;

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f5f5f5"
        >

            <Card sx={{ width: 400, borderRadius: 3, boxShadow: 5 }}>
                <CardContent>

                    {/* HEADER */}
                    <Box display="flex" alignItems="center" mb={3}>
                        <Typography variant="h6">
                            Iniciar Seccion
                        </Typography>
                    </Box>

                    <Typography variant="h5" align="center" mb={3}>
                        Bienvenido
                    </Typography>

                    {/* EMAIL */}
                    <TextField
                        fullWidth
                        label="Correo electrónico"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        color={emailValid ? "success" : "primary"}
                        error={email !== "" && !emailValid}
                        helperText={
                            email !== "" && !emailValid
                                ? "Correo no válido"
                                : ""
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            )
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Contraseña"
                        margin="normal"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        color={passwordValid ? "success" : "primary"}
                        error={password !== "" && !passwordValid}
                        helperText={
                            password !== "" && !passwordValid
                                ? "Mínimo 8 caracteres, 1 número y 1 carácter especial (!@#$%^&*)"
                                : ""
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <Box display="flex" justifyContent="space-between" mt={1}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Recordarme"
                        />

                        <Typography
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                        >
                            ¿Olvidaste tu contraseña?
                        </Typography>
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        disabled={!formValid}
                        color={formValid ? "success" : "primary"}
                        sx={{ mt: 2 }}
                        onClick={() => window.location.reload()}
                    >
                        Iniciar sesion
                    </Button>

                    <Typography
                        align="center"
                        mt={3}
                        variant="body2"
                    >
                        ¿No tienes cuenta? <b>Regístrate</b>
                    </Typography>

                </CardContent>
            </Card>

        </Box>
    );
}