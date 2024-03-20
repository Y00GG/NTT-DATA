import { Container } from "@mui/material"
import FruitsMenu from "../components/FruitsMenu"
import ListFruit from "../components/ListFruit"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/auth"

const Home = () => {

    const { user } = useAuthStore()


    useEffect(() => {
        if (!user) {
            <Navigate to={'/'} replace={true} />
        }
    }, [user])

    return (
        <>
            <FruitsMenu />
            <Container sx={{ py: '50px' }}>
                <ListFruit />
            </Container>
            {!user && (
                <Navigate to="/" replace={true} />
            )}
        </>
    )
}

export default Home
