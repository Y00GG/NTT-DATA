import { Grid, Typography, Box } from "@mui/material"
import { GiFruiting } from "react-icons/gi";
import LoginForm from "../components/LoginForm";
import { useAuthStore } from "../store/auth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";


const Login = () => {

    const { user } = useAuthStore()

    useEffect(() => {
        if (user) {
            <Navigate to={'/home'} />
        }
    }, [user])


    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={false} sm={4} md={7} sx={{
                    backgroundImage: 'url(https://fotografias.larazon.es/clipping/cmsimages02/2022/07/01/07EC75DA-2AAD-4949-A1B8-A722C16E7034/98.jpg?crop=7008,3943,x0,y365&width=1900&height=1069&optimize=low&format=webply)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} />
                <Grid item sx={{ display: "flex", placeItems: 'center', background: '#FAA613' }} xs={12} sm={8} md={5}>
                    <Box sx={{
                        margin: '8rem 8rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        placeItems: 'center',
                    }} >
                        <Box sx={{ border: '2px solid black', backgroundColor: 'black', borderRadius: '50%', padding: '20px' }}>
                            <GiFruiting size={'100px'} color="white" />
                        </Box>
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 800, color: 'white' }}>
                            FRUITS-NTT
                        </Typography>
                        <LoginForm />
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default Login