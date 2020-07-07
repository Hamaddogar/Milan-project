import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Portfolio from '../../images/portfolio.svg';
import Addresses from '../../images/bookmark.svg';
import Wishlist from '../../images/wishlist.svg';
import Occasion from '../../images/occasion.svg';
import Orders from '../../images/test.svg';
import Logout from '../../images/logout(1).svg';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import MuiPhoneNumber from "material-ui-phone-number";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import '../Header/css/style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "El Messiri" ,
    display: 'block',
      marginLeft: 50,
      marginTop: 80,
    width: '100%',
    maxWidth: 1920,
    color:"#BA1F6A",
    backgroundColor: "#FDFDFD 0% 0%",
    Borderradius: "0 0 8 8",
    flexGrow: 1
  },
  imageIcon: {
    height: '85%'
  },
  iconRoot: {
    textAlign: 'left'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "##888888",
    borderBlockColor: "#00000029"
  },
  textField: {
    marginLeft: 0,
    marginRight: 20,
    
    alignItems: "right"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    
  };
 
  const [Gender, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    
    
    <div className={classes.root}>
        <Grid container justify='left' >
        <Grid item xs={4} style={{marginLeft: 30,marginRight: 20, padding: 20 ,maxWidth: 400 ,height:566}}> 
        <Paper className={classes.paper}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Portfolio}/>
</Icon>
          </ListItemIcon>
          <Typography  className={classes.title} variant="h7" noWrap>
           <span id="back" > Account Information</span>
          </Typography>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Addresses}/>
</Icon>
          </ListItemIcon>
          <Typography  className={classes.title} variant="h7" noWrap>
           <span> My Addresses</span>
          </Typography>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Occasion}/>
</Icon>
          </ListItemIcon>
          <Typography  className={classes.title} variant="h7" noWrap>
           <span> My Ocassions</span>
          </Typography>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Wishlist}/>
</Icon>
          </ListItemIcon>
          <Typography  className={classes.title} variant="h7" noWrap>
           <span> My Wishlist</span>
          </Typography>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Orders}/>
</Icon>
          </ListItemIcon><Typography  className={classes.title} variant="h7" noWrap>
           <span> My Orders</span>
          </Typography>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Portfolio}/>
</Icon>
          </ListItemIcon>
          <Typography id="back" className={classes.title} variant="h7" noWrap>
           <span> My Tickets</span>
          </Typography>
         
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
          <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={Logout}/>
</Icon>
          </ListItemIcon>
          <Typography style={{color: "#BA1F6A"}} className={classes.title}  variant="h7" noWrap>
           <span> Logout</span>
          </Typography>
          
        </ListItem>
      </List>
      </Paper>
      </Grid>
      <Grid item xs={6}   style={{marginLeft: 30,marginRight: 20, padding: 20,maxWidth: 1360 ,height:566}} >
          <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off">
      <TextField
         color="secondary"
          label="Label"
          style={{ margin: 2 ,maxWidth: 600}}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
     
      <TextField style={{marginRight:15, justifyItems: "right", width:300}}
        id="outlined-secondary"
        label="Outlined secondary"
        
        color="secondary"
      />
      <MuiPhoneNumber style={{marginRight:15, justifyItems: "right", width:300}}
        variant="filled"
                    color="secondary"
                    name="phone"
                    label="Phone Number"
                    data-cy="user-phone"
                    defaultCountry={"sa"}
                    value={"this.state.phone"}
                    onChange={"this.handlePhoneChang"}
                  />
        <TextField style={{marginRight:15, justifyItems: "right", width:300}}
        color="secondary"
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2000-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <FormControl style={{marginRight:15, justifyItems: "right", width:300}} className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          
          value={Gender}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          
        </Select>
        
      </FormControl>
        
    </form>
    <Button variant="h5" style={{padding:5, marginLeft:40, marginTop:25,  justifyItems: 'center', width: 600 ,backgroundColor: '#BA1F6A', color: '#FFFFFF'}}>
        Submit
      </Button>
          </Paper>
        </Grid>

        
      </Grid>
    


    </div>
    
  );
};