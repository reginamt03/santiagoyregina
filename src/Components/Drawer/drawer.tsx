import React, { useState } from 'react'
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Button, makeStyles, Theme} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './drawer.css'
import { createNonNullChain } from 'typescript';

const useStyles = makeStyles((theme:Theme) =>({
  list: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    width: 180,
    paddingTop: 20,
  },
  fullList: {
    width: 'auto',
  }
}));

const Drawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const list = () => {
    ;
    
/*    const handleButtonClick = (text: string) => {

    switch (text) {
      case 'Home':
        setOpen(false)
        return document.getElementById('Home')?.scrollIntoView({behavior:'smooth'});
      case 'Ceremonia':
        setOpen(false)
        console.log("Scroll ceremonia")
        let ceremoniaDom = document.getElementById('Ceremonia')
        console.log("Ceremonia DOM: " + ceremoniaDom)
        return document.getElementById('Ceremonia')?.scrollIntoView({behavior:'smooth'});
      case 'Recepción':
        setOpen(false)
        return document.getElementById('Recepción')?.scrollIntoView({behavior:'smooth'});
      case 'Hospedaje':
        setOpen(false)
        return document.getElementById('hotel')?.scrollIntoView({behavior:'smooth'});
      case 'Mesa de Regalos':
        setOpen(false)
        return document.getElementById('MesaRegalos')?.scrollIntoView({behavior:'smooth'});
      case 'Dress Code':
        setOpen(false)
        return document.getElementById('DressCode')?.scrollIntoView({behavior:'smooth'});
      case 'Check In':
        setOpen(false)
        return document.getElementById('CheckIn')?.scrollIntoView({behavior:'smooth'});

    } */

    const handleButtonClick = (text: string) => {

      let target = null
      switch (text) {
        case 'Home':
          target = 'Home'
          break
        case 'Ceremonia':
          target = 'Ceremonia'
          break;
        case 'Recepción':
          target = 'Recepción'
          break;
        case 'Hospedaje':
          target = 'hotel'
          break;
        case 'Mesa de Regalos':
          target = 'MesaRegalos'
          break;
        case 'Dress Code':
          target = 'DressCode'
          break;
        case 'Check In':
          target = 'CheckIn'
          break;
      }
  
      if (target != null)
      {
        setOpen(false)
        window.location.hash = "#" + target
      }
      
    }
    
    
    

   const checkinDom = document.getElementById('CheckIn')
   const listValues = checkinDom != null ? ['Home', 'Ceremonia', 'Recepción', 'Hospedaje', 'Mesa de Regalos', 'Dress Code', 'Check In'] : ['Home', 'Ceremonia', 'Recepción', 'Hospedaje', 'Mesa de Regalos', 'Dress Code']

   return (
      <List className={classes.list}>
        {listValues.map((text) => (
            <ListItem button key={text}  onClick={()=> handleButtonClick(text)}>
            <ListItemText  className='MainColor' primary={text} />
            </ListItem>
        ))}
      </List>
    )
  }


  return (
    <React.Fragment key='drawer'>
    <div className={`drawer ${open ? 'open' : ''}`}>
      <Button onClick={handleDrawerOpen}><MenuIcon/></Button>
      <MUIDrawer open={open} classes={{paper:classes.list}} onClose={handleDrawerClose} style={{pointerEvents: open ? 'all' : 'none'}}>
        {list()}
      </MUIDrawer>
    </div>
    
  </React.Fragment>
  )
}

export default Drawer