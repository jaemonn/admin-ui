import React, { useState } from 'react'
import { Box, Button, Container, Typography, useTheme, Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { designTokens } from '../../theme'
import orderData from '../../data/orderData'
import Header from '../../components/Header'

const TodaysOrders = () => {
    const theme = useTheme()
    const colors = designTokens(theme.palette.mode)
    const [isOrderListOpen, setisOrderListOpen] = useState(true)

    const handleOpenOrderListDetails = () => {
        setisOrderListOpen(true)
    }

    const handleOpenCustomerDetails = () => {
        setisOrderListOpen(false)
    }

    return (
        <Box height="100%">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginX: 5,
                    marginY: {
                        xs: 0,
                        sm: 0,
                        md: 5,
                        lg: 5
                    }
                }}
            >
                <Header title="Today's Pick-up Orders" />
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {
                        orderData.map((order, index) => {
                            return (
                                <Grid item xs={12} md={4} sm={4} key={index}>
                                    <Card
                                        key={index}
                                        sx={{
                                            backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900],
                                            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
                                            marginY: "20px",
                                        }}>
                                        <CardContent>
                                            <Typography
                                                variant="h2"
                                            >
                                                Order # {order.id}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    backgroundColor: order.status === "Completed" ?
                                                        colors.greenAccent[700] :
                                                        order.status === "Preparing" ?
                                                            colors.blueAccent[500] :
                                                            order.status === "Ready for Pickup" ?
                                                                colors.yellowAccent[700] :
                                                                colors.redAccent[600],
                                                    fontWeight: "bold",
                                                    width: "fit-content",
                                                    padding: "3px 10px",
                                                    borderRadius: "100px",
                                                    marginTop: "10px",
                                                }}
                                            >
                                                {order.status}
                                            </Box>
                                            <CardActions
                                                sx={{
                                                    paddingLeft: 0,
                                                    marginTop: 2
                                                }}
                                            >
                                                <Button
                                                    disableRipple
                                                    onClick={handleOpenOrderListDetails}
                                                    sx={{
                                                        borderBottom: isOrderListOpen ? 1 : 0,
                                                        borderColor: colors.redAccent[500],
                                                        borderRadius: 0
                                                    }}
                                                >
                                                    Order
                                                </Button>
                                                <Button
                                                    disableRipple
                                                    onClick={handleOpenCustomerDetails}
                                                    sx={{
                                                        borderBottom: !isOrderListOpen ? 1 : 0,
                                                        borderColor: colors.redAccent[500],
                                                        borderRadius: 0
                                                    }}
                                                >
                                                    Customer
                                                </Button>
                                            </CardActions>
                                            {
                                                isOrderListOpen === true ?
                                                    <Box>
                                                        <Box sx={{
                                                            borderTop: 1,
                                                            borderBottom: 1,
                                                            paddingY: 2,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            overflowY: "auto",
                                                            maxHeight: "200px",
                                                            '&::-webkit-scrollbar': {
                                                                width: '0.4em',
                                                            },
                                                            '&::-webkit-scrollbar-thumb': {
                                                                backgroundColor: colors.black[900]
                                                            },
                                                        }}>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography variant="body1">
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 3.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 18.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>
                                                            <Box display="flex" justifyContent="space-between">
                                                                <Typography>
                                                                    Item 1 1x
                                                                </Typography>
                                                                <Typography>
                                                                    £ 2.99
                                                                </Typography>
                                                            </Box>

                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                paddingY: 2,
                                                                display: "flex",
                                                                justifyContent: "space-between"
                                                            }}
                                                        >
                                                            <Typography>
                                                                <b>Discount</b>
                                                            </Typography>
                                                            <Typography>
                                                                <b>£ 0.00</b>
                                                            </Typography>
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                paddingY: 2,
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                bottom: 20,
                                                            }}
                                                        >
                                                            <Typography variant="h4">
                                                                <b>Total</b>
                                                            </Typography>
                                                            <Typography variant="h4">
                                                                <b>£ 28.96</b>
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    :
                                                    <Box>
                                                        <Typography variant="h4" mb={2}>
                                                            <b>Name:</b> {order.name}
                                                        </Typography>
                                                        <Typography variant="h4" mb={2}>
                                                            <b>Phone #:</b> {order.phoneNum}
                                                        </Typography>
                                                        <Typography variant="h4" mb={2}>
                                                            <b>Pick-up Date:</b> 29-05-2024
                                                        </Typography>
                                                        <Typography variant="h4" mb={2}>
                                                            <b>Pick-up Time</b> 12:00:00
                                                        </Typography>
                                                    </Box>
                                            }
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "end",
                                                    margin: "50px 10px 0px 10px",
                                                }}
                                            >
                                                <Button
                                                    disableRipple
                                                    sx={{
                                                        backgroundColor: theme.palette.mode === 'dark' ? colors.white[100] : colors.black[100],
                                                        color: theme.palette.mode === 'dark' ? colors.black[900] : colors.white[900],
                                                        border: 1,
                                                        margin: "0px 10px",
                                                        fontWeight: "700",
                                                        '&:hover': {
                                                            backgroundColor: 'none',
                                                            border: 1,
                                                            borderColor: theme.palette.mode === 'dark' ? colors.white[100] : colors.black[100],
                                                            color: theme.palette.mode === 'dark' ? colors.black[100] : colors.white[100],
                                                        }
                                                    }}
                                                >
                                                    Update Status
                                                </Button>
                                                <Button
                                                    disableRipple
                                                    sx={{
                                                        backgroundColor: theme.palette.mode === 'dark' ? colors.white[100] : colors.black[100],
                                                        color: theme.palette.mode === 'dark' ? colors.black[900] : colors.white[900],
                                                        border: 1,
                                                        fontWeight: "700",
                                                        '&:hover': {
                                                            backgroundColor: 'none',
                                                            border: 1,
                                                            borderColor: theme.palette.mode === 'dark' ? colors.white[100] : colors.black[100],
                                                            color: theme.palette.mode === 'dark' ? colors.black[100] : colors.white[100],
                                                        }
                                                    }}
                                                >
                                                    Receipt
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default TodaysOrders