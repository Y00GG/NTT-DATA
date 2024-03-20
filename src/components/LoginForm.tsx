import { Box, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { ILoginForm } from "../interfaces/ILoginForm";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchemas } from "../schemas/LoginSchemas";


const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        resolver: zodResolver(LoginSchemas)
    });
    const { login, user } = useAuthStore()

    const onSubmit = (data: ILoginForm) => {
        login(data)
        // navegate("/home")
        console.log(data)
    };

    return (
        <Box component={'form'} sx={{ width: '100%' }} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register('email')}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Email"
                type="email"
                autoFocus
                error={!!errors.email}
                helperText={!!errors.email ? errors.email.message : ''}
            />
            <TextField
                {...register('password')}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={!!errors.password ? errors.password.message : ''}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                >
                    Iniciar Sesion
                </Button>
            </Box>
            {user && (
                <Navigate to="/home" replace={true} />
            )}
        </Box>
    )
}

export default LoginForm
