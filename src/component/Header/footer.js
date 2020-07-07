import '../Header/css/style.css'
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Yaward from '../../images/download_app.svg'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 230,
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: '0',
    backgroundColor:"#BA1F6A",
    fontFamily: "El Messiri"
  },
  demo: {
    backgroundColor: "#BA1F6A",
    fontFamily: "El Messiri"
    
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    fontSize: 16,
    fontWeight: "bold",
    
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className={classes.root}>
        <footer className={classes.footer}>
      <CssBaseline />
     
      <div className={classes.root}>
     
     <Grid container spacing={1}>
       <Grid item xs={2} md={2}>
         <Typography variant="h7" className={classes.title}>
           YaWard
         </Typography>
         <div className={classes.demo}>
           <List>
            
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   variant="h7"
                 />
               </ListItem>
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
             
           </List>
         </div>
       </Grid>
       <Grid item xs={2} md={2}>
         <Typography variant="h7" className={classes.title}>
           Support
         </Typography>
         <div className={classes.demo}>
           <List>
            
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
             
           </List>
         </div>
       </Grid>
       <Grid item xs={2} md={2}>
         <Typography variant="h7" className={classes.title}>
           Shops
         </Typography>
         <div className={classes.demo}>
           <List>
            
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   secondary={secondary ? 'Secondary text' : null}
                 />
               </ListItem>
               <ListItem>
                 <ListItemText
                   primary="Single-line item"
                   
                 />
               </ListItem>
             
           </List>
         </div>
       </Grid>
       <Grid item xs={3} md={3}>
         <Typography variant="h7" className={classes.title}>
           Follow Us
         </Typography>
         <div className={classes.demo}>
           
         </div>
       </Grid>
       <Grid item xs={3} md={3}>
         <Typography variant="h7" className={classes.title}>
           Download App
         </Typography>
         <div className={classes.demo}>
         <img style={{paddingRight:25, paddingTop:30 ,maxHeight:71 , justify: "center" }} src={Yaward} alt="logo" className={classes.demo} />
         </div>
       </Grid>
     </Grid>
   </div>
        

        
      </footer>
    </div>
  );
}