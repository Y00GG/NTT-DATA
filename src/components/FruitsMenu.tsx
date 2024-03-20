import { Box, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { useAuthStore } from "../store/auth";
import { GiExitDoor } from "react-icons/gi";


const FruitsMenu = () => {
    const { logout, user } = useAuthStore();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        if (event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleLogout = () => {
        logout();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FAA613' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <GiFruitBowl />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fruits NTT
                    </Typography>
                    {user && (
                        <div>
                            {user.email}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <GiExitDoor />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default FruitsMenu;