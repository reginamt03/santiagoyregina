import React, { useState } from 'react'
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Button, makeStyles, Theme} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './drawer.css'

const useStyles = makeStyles((theme:Theme) =>({
  list: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    width: 180
  },
  fullList: {
    width: 'auto',
  },
  drawer : {
    position: 'fixed',
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
    
   const handleButtonClick = (text: string) => {

    switch (text) {
      case 'Home':
        setOpen(false)
        return document.getElementById('Home')?.scrollIntoView({behavior:'smooth'});
      case 'Ceremonia':
        setOpen(false)
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

    }
    
  }

   const checkinDom = document.getElementById('CheckIn')
   const listValues = checkinDom != null ? ['Home', 'Ceremonia', 'Recepción', 'Hospedaje', 'Mesa de Regalos', 'Dress Code', 'Check In'] : ['Home', 'Ceremonia', 'Recepción', 'Hospedaje', 'Mesa de Regalos', 'Dress Code']
    return (
      <List className={classes.list}>
        {listValues.map((text) => (
            <ListItem button key={text}  onClick={()=> handleButtonClick(text)}>
            <ListItemText className='MainColor' primary={text} />
            </ListItem>
        ))}
      </List>
    )
  }
  return (
    <React.Fragment key='drawer'>
    <div className={classes.drawer}  style={{ zIndex: open ? 0: 3000}}>
      <Button onClick={handleDrawerOpen}><MenuIcon/></Button>
    <MUIDrawer open={open} classes={{paper:classes.list}} onClose={handleDrawerClose}>
      {list()}
    </MUIDrawer>
    </div>
    
  </React.Fragment>
  )
}

export default Drawer