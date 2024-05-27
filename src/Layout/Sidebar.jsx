import * as React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

// Icon imports
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

// Import data and assets
import { designTokens } from '../theme'
import chefProfile from '../assets/MasterChef.jpg'

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Item = ({ title, to, icon, selected, setSelected, open, active, currentLocation }) => {
  const theme = useTheme()
  const colors = designTokens(theme.palette.mode)
  const location = currentLocation !== "" ? currentLocation : "/"

  return (
    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setSelected(title)}>
      <NavLink
        to={to}
        style={() => ({
          color: location === to ? colors.greenAccent[500] : colors.grey[100],
          textDecoration: 'none',
        })}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: location === to ? colors.greenAccent[500] : colors.grey[100],
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  )
}

console.log(window.innerWidth)

export default function MiniDrawer() {
  const theme = useTheme()
  const colors = designTokens(theme.palette.mode)
  const [open, setOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  const [isActive, setIsActive] = useState(false)
  const location = useLocation().pathname.substring(1)

  useEffect(() => {
    console.log(window.innerWidth)
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
    setMobileOpen(false)
  };

  const handleDrawerTransitionEnd = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setMobileOpen(true)
  };

  return (
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          style: {
            border: 'none', flexShrink: { sm: 0 },
            boxShadow: 2,
            height: "100vh",
            
          }
        }}
      >
        <DrawerHeader
          sx={{
            color: colors.grey[100],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {
            open === false ? (
              <IconButton onClick={handleDrawerOpen}>
                <ChevronRightIcon />
              </IconButton>) : (
              <>
                <Typography variant="h2" color={colors.grey[100]}>
                  Tsukiji Sushi
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </>
            )
          }

        </DrawerHeader>
        <Divider />
        {
          open && (
            <List>
              <ListItem mb="25px" sx={{
                maxWidth: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={chefProfile}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </ListItem>
              <ListItem sx={{
                maxWidth: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Rhys Payot
                  </Typography>
                </Box>
              </ListItem>
            </List>
          )
        }

        <List>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            open={open}
            currentLocation={location}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: open ? "15px 0 5px 20px" : '15%' }}
          >
            Orders
          </Typography>

          <Item
            title="Pickup Orders"
            to="pickup-orders"
            icon={<ShoppingBagOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            open={open}
            currentLocation={location}
          />

          <Item
            title="Delivery Orders"
            to="delivery-orders"
            icon={<DeliveryDiningOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            open={open}
            currentLocation={location}
          />
        </List>
      </Drawer>
  );
}
