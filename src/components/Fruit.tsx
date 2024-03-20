import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton, Paper } from '@mui/material';
import { MdAddShoppingCart } from "react-icons/md";
import { IFruits } from '../interfaces/IFruits';
import { FC } from 'react';



const Fruit: FC<IFruits> = ({ nombre, precio, descripcion, imagen }) => {


    return (
        <Grid container item xs={3} sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Paper sx={{ width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '0px 50px 0px 0px', overflow: 'hidden', border: '1px solid #ccc' }}>
                <img src={imagen} alt={nombre} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                <Box sx={{ p: 2, flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>
                </Box>
                <Box sx={{ p: 2, pt: 0, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">${precio} COP</Typography>
                    <IconButton color='warning'><MdAddShoppingCart /></IconButton>
                </Box>
            </Paper>
        </Grid>
    );


}

export default Fruit


