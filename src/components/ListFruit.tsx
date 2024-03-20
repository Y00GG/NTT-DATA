import { Grid } from "@mui/material"
import Fruit from "./Fruit"
import { useFruit } from "../store/fruits"
import { useEffect } from "react"



const ListFruit = () => {

    const { fruits, getFruits } = useFruit()

    useEffect(() => {
        getFruits()
    }, [])


    return (
        <Grid container spacing={3} >
            {fruits.map((item, index) => {
                return <Fruit
                    {...item}
                    key={index}
                />
            })}
        </Grid>
    )
}

export default ListFruit
