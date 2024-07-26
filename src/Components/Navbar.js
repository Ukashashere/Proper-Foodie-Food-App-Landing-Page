/* hit ctrl+K then M, then type react, it enables react intillicence*/   /* OR we could've renamed the file to .jsx*/
/* rafce */      

import React, { useState } from 'react'; /* to use useState hook, important to import this*/
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);  /* this is useState Hook. useState(false): This hook is used to declare a state variable and its setter function. Here, useState is initialized with false. openMenu: This is the state variable that will hold the current state value */
  const menuOptions = [     /* menuOptions: This is an array of objects representing the options in the menu.*/
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];  
  return (
  <nav>                                     {/*These things are the HTML part*/}
    <div className='nav-logo-container'>
      <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container" >
      <a href="">Home</a>  {/*maybe you able to click and hover over these because there is 'href' element attached to it */}
      <a href="">About</a>
      <a href="">Testimonials</a>
      <a href="">Contact</a>
      <a href="">
        <BsCart2 className='navbar-cart-icon' />
      </a>
      <button className="primary-button">Bookings Now</button>
    </div>
    <div className='navbar-menu-container' >
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
    anchor='right'>
      <Box
        sx={{ width: 250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>                                                                                       
          ))}
        </List>  
      </Box>
    </Drawer>
  </nav>
  );
};                                                                                                                            

export default Navbar;  