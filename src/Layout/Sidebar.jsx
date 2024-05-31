import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Item from './components/Item'

// Icon imports
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';

// Import data and assets
import { designTokens } from '../theme'
import chefProfile from '../assets/MasterChef.jpg'
import { useOpen } from '../contexts/SidebarContext'

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

export default function Sidebar() {
    const theme = useTheme()
    const colors = designTokens(theme.palette.mode)
    const [open, setOpen] = useState(true)
    const [selected, setSelected] = useState("Dashboard")
    const location = useLocation().pathname.substring(1)
    const [expandedAccordion1, setexpandedAccordion1] = useState(false)
    const [expandedAccordion2, setexpandedAccordion2] = useState(false)
    const mobileSidebarOpen = useOpen()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleDrawerOpen = () => {
        setOpen(true)
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    const handleAccordionOpen = () => {
        setexpandedAccordion1(true)
    }

    const handleAccordionClose = () => {
        setexpandedAccordion1(false)
    }

    const handleAccordion_1_Expansion = () => {
        setexpandedAccordion1((prevexpandedAccordion1) => !prevexpandedAccordion1)
    }

    const handleAccordion_2_Expansion = () => {
        setexpandedAccordion2((prevexpandedAccordion2) => !prevexpandedAccordion2)
    }

    return (
        <>
            <Box
                sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 12px',
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'initial',
                        lg: 'initial'
                    }
                }}
            >
                <Drawer
                    variant="permanent"
                    open={open}
                    PaperProps={{
                        style: {
                            border: 'none', flexShrink: { sm: 0 },
                            height: "100%",
                            backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900]
                        }
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
                        {
                            open === false ? (
                                <IconButton onClick={handleDrawerOpen}>
                                    <ChevronRightIcon />
                                </IconButton>) : (
                                <>
                                    <Typography variant="h2" color={colors.grey[100]}>
                                        Tsukiji Sushi
                                    </Typography>
                                    <IconButton onClick={() => {
                                        handleDrawerClose()
                                    }}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </>
                            )
                        }
                    </DrawerHeader>
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



                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900],
                                '&:before': {
                                    backgroundColor: 'transparent !important',
                                },
                                display: 'block',
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={open ? <ExpandMoreIcon /> : ''}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                onClick={() => {
                                    handleAccordion_1_Expansion()
                                    handleDrawerOpen()
                                }}
                            >
                                <ShoppingBagOutlinedIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 2 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                />
                                {
                                    open && (
                                        <Typography sx={{
                                            opacity: open ? 1 : 0,
                                        }}>
                                            Pick-up Orders
                                        </Typography>
                                    )
                                }
                            </AccordionSummary>
                            <AccordionDetails>
                                <Item
                                    title="All Orders"
                                    to="pickup-orders"
                                    icon={<FastfoodOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                    open={open}
                                    currentLocation={location}
                                />

                                <Item
                                    title="Today's Orders"
                                    to="pickup-orders/today"
                                    icon={<TodayOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                    open={open}
                                    currentLocation={location}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900],
                                '&:before': {
                                    backgroundColor: 'transparent !important',
                                },
                                display: 'block',
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={open ? <ExpandMoreIcon /> : ''}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                onClick={() => {
                                    handleAccordion_2_Expansion()
                                    handleDrawerOpen()
                                }}
                            >
                                <DeliveryDiningOutlinedIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 2 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                />
                                {
                                    open && (
                                        <Typography sx={{
                                            opacity: open ? 1 : 0,
                                        }}>
                                            Delivery Orders
                                        </Typography>
                                    )
                                }
                            </AccordionSummary>
                            <AccordionDetails>
                                <Item
                                    title="All Orders"
                                    to="delivery-orders"
                                    icon={<FastfoodOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                    open={open}
                                    currentLocation={location}
                                />

                                <Item
                                    title="Today's Orders"
                                    to="delivery-orders/today"
                                    icon={<TodayOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                    open={open}
                                    currentLocation={location}
                                />
                            </AccordionDetails>
                        </Accordion>
                    </List>
                </Drawer>
            </Box >
        </>
    );
}
