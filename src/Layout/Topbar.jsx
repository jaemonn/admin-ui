import * as React from 'react';
import {
    Box,
    IconButton,
    Typography,
    Drawer,
    Button,
    ListItem,
    List
} from "@mui/material"
import { styled, useTheme } from '@mui/material/styles'
import { useContext, useState } from "react"
import { ColorModeContext, designTokens } from "../theme"
import { useLocation } from 'react-router-dom'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';

import { useOpen, useUpdateOpen } from "../contexts/SidebarContext"
import Item from './components/Item';
import chefProfile from '../assets/MasterChef.jpg'

export default function Topbar() {
    const theme = useTheme();
    const colors = designTokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const location = useLocation().pathname.substring(1)
    const toggleSidebar = useUpdateOpen()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Box onClick={toggleDrawer(anchor, false)}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon />}
                        open={true}
                        currentLocation={location}
                    />
                </Box>

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Orders
                </Typography>

                <Accordion
                    sx={{
                        '&:before': {
                            backgroundColor: 'transparent !important',
                        },
                        backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900],
                        display: 'block',
                    }}
                    elevation={0}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            minHeight: 48,
                            justifyContent: 'initial',
                            px: 2.5,
                        }}
                    >
                        <ShoppingBagOutlinedIcon
                            sx={{
                                minWidth: 0,
                                mr: 2,
                                justifyContent: 'center',
                            }}
                        />

                        <Typography sx={{
                            opacity: 1,
                        }}>
                            Pick-up Orders
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Box onClick={toggleDrawer(anchor, false)}>
                            <Item
                                title="All Orders"
                                to="pickup-orders"
                                icon={<FastfoodOutlinedIcon />}
                                open={true}
                                currentLocation={location}
                            />
                        </Box>

                        <Box onClick={toggleDrawer(anchor, false)}>
                            <Item
                                title="Today's Orders"
                                to="pickup-orders/today"
                                icon={<TodayOutlinedIcon />}
                                open={true}
                                currentLocation={location}
                            />
                        </Box>

                    </AccordionDetails>
                </Accordion>

                <Accordion
                    sx={{
                        '&:before': {
                            backgroundColor: 'transparent !important',
                        },
                        display: 'block',
                        backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900],
                    }}
                    elevation={0}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            minHeight: 48,
                            justifyContent: 'initial',
                            px: 2.5,
                        }}
                    >
                        <DeliveryDiningOutlinedIcon
                            sx={{
                                minWidth: 0,
                                mr: 2,
                                justifyContent: 'center',
                            }}
                        />

                        <Typography sx={{
                            opacity: 1,
                        }}>
                            Delivery Orders
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            onClick={toggleDrawer(anchor, false)}
                        >
                            <Item
                                title="All Orders"
                                to="delivery-orders"
                                icon={<FastfoodOutlinedIcon />}
                                open={true}
                                currentLocation={location}
                            />
                        </Box>

                        <Box onClick={toggleDrawer(anchor, false)}>
                            <Item
                                title="Today's Orders"
                                to="delivery-orders/today"
                                icon={<TodayOutlinedIcon />}
                                open={true}
                                currentLocation={location}
                            />
                        </Box>

                    </AccordionDetails>
                </Accordion>

            </List>
        </Box>
    );

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p="2px 10px 2px 0px"
            sx={{
                justifyContent: {
                    xs: "space-between",
                    sm: "space-between",
                    md: "end",
                    lg: "end",
                }
            }}
        >
            <Box
                display="flex"
                ml={2}
                sx={{
                    display: {
                        xs: "flex",
                        sm: "flex",
                        md: "none",
                        lg: "none",
                    },
                }}
            >
                <Button
                    disableRipple
                    onClick={toggleDrawer('left', true)}
                    sx={{
                        display: {
                            xs: 'initial',
                            sm: 'initial',
                            md: "none",
                            lg: "none",
                        },
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent",
                        }
                    }}
                >
                    <MenuOutlinedIcon />
                </Button>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    PaperProps={{
                        style: {
                            border: 'none', flexShrink: { sm: 0 },
                            height: "100%",
                        }
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900],
                            height: "100vh"
                        }}
                    >

                        <DrawerHeader
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: 0,
                            }}
                        >
                            <Typography variant="h2" color={colors.grey[100]}>
                                Tsukiji Sushi
                            </Typography>
                        </DrawerHeader>

                        <List
                            sx={{

                            }}
                        >
                            <ListItem mb="25px" sx={{
                                maxWidth: 'fit-content',
                                marginLeft: 'auto',
                                marginRight: 'auto',
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


                        {list('left')}

                    </Box>
                </Drawer>
            </Box>
            <Box display="flex" gap={2}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ?
                        (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                </IconButton>
                <IconButton >
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box >
    )
}