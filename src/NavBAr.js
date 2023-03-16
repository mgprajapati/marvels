import './NavBAr.css';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Stack, Button, Typography, Menu, MenuItem} from '@mui/material';


const NavBar =()=>{

    return(
        <div>
            <AppBar>
            <Toolbar>
             <Typography  variant='h6' component='div' sx={{flexGrow: 1 }}>Marvels</Typography>
            <Stack direction='row' spacing={3}>
               
              <Button className='btn-header'><Link to="/Home" className='btn-Nav'>Home</Link></Button> 
              <Button className='btn-header'><Link to="/Contact"  className='btn-Nav'>Contact</Link></Button> 
              <Button className='btn-header' ><Link to="/Contact"  className='btn-Nav'>Resource</Link></Button> 
              <Button className='btn-header' ><Link to="/Demo_greed"  className='btn-Nav'>Demo_greed</Link></Button>
              <Button className='btn-header'><Link to="/Table_data"  className='btn-Nav'>Datafortable</Link></Button>  
              </Stack>
                       
            </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar