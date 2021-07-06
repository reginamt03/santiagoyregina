import { makeStyles, Grid, Typography, Theme, Button } from "@material-ui/core";
import hotelPescador from '../../pictures/elpescadorhotel-850px.jpg';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main
      },
      item: {
        marginTop: '10px',
      },
    button:{
        marginBottom: '10px',
        marginTop: '10px',
        color: theme.palette.primary.main
    }

}))


export default function Pescador (){
    const classes = useStyles();
    return (
            <div>
                <Grid container spacing ={3} direction='column' justify='center' alignItems='center'>                  

                <Grid item xs={11}>
                    Hotel Del Pescador <br/>
                    <img src={hotelPescador} alt="hotel" />
                </Grid>
                
                    <Grid item xs={11} classes={{root: classes.item}}>
                        <Typography>Reservaciones: página web <br/> Código de descuento: <br/> 
                        'reginaysantiago'
                        </Typography>
                    </Grid>          
                
                <Grid container direction='row' wrap='wrap' justify='center'alignItems='center'>
                    <Grid item xs={11} classes={{root: classes.item}}>
                        <Typography> Carretera Chapala-Jocotepec 960 <br/> 
                        45920 Ajijic, Jal.
                        </Typography>
                    </Grid>                
                    <Grid item xs={6}>
                        <Button target="_blank" variant='outlined' href='https://goo.gl/maps/8ZqCP8p9Vsgjuzez9' className={classes.button}>Ir al mapa</Button>
                    </Grid>  
                </Grid>
                <Grid item xs={11}>
                <Button target="_blank" variant='outlined' href='https://www.hoteldelpescador.com/' className={classes.button}>Ir a Sitio Web</Button>
                </Grid>  
                </Grid>
            </div>
            )
           
}
