import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import styled from '@mui/material';
import { designTokens } from '../../theme';

// const StyledDataGrid = styled(DataGrid)()

const PickupOrder = () => {
  const theme = useTheme()
  const colors = designTokens(theme.palette.mode)

  // Order #, Name, Phone Number, Pickup Date & Time, Status, Order Details
  const orderData = [
    {
      id: 1,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Preparing",
      orderDetails: "View Order"
    },
    {
      id: 2,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Completed",
      orderDetails: "View Order"
    },
    {
      id: 3,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "New Order",
      orderDetails: "View Order"
    },
    {
      id: 4,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "New Order",
      orderDetails: "View Order"
    },
    {
      id: 5,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Completed",
      orderDetails: "View Order"
    },
    {
      id: 6,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Ready for Pickup",
      orderDetails: "View Order"
    },
    {
      id: 7,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Ready for Pickup",
      orderDetails: "View Order"
    },
    {
      id: 8,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Ready for Pickup",
      orderDetails: "View Order"
    },
    {
      id: 9,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Completed",
      orderDetails: "View Order"
    },
    {
      id: 10,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "Completed",
      orderDetails: "View Order"
    },
    {
      id: 11,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "New Order",
      orderDetails: "View Order"
    },
    {
      id: 12,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "New Order",
      orderDetails: "View Order"
    }, {
      id: 13,
      name: "Jon Snow",
      phoneNum: "07861828232",
      pickupDateTime: "25-05-2024 18:30:00",
      status: "New Order",
      orderDetails: "View Order"
    }
  ]

  const columns = [
    {
      field: "id",
      headerName: "Order #",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 200,
    },
    {
      field: "phoneNum",
      headerName: "Phone Number",
      width: 200,
    },
    {
      field: "pickupDateTime",
      headerName: "Pickup Data & Time",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="80%"
            m="10px 0px"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={
              status === "Completed" ?
                colors.greenAccent[700] :
                status === "Preparing" ?
                  colors.blueAccent[500] :
                  status === "Ready for Pickup" ?
                    colors.yellowAccent[700] :
                    colors.redAccent[600]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px", fontWeight: "bold" }}>
              {status}
            </Typography>
          </Box>
        )
      }
    },
    {
      field: "orderDetails",
      headerName: "Order Details",
      width: 200,
    },
  ]

  return (
    <Box
      sx={{
        maxWidth: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      padding="20"
    >
      <Box
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: "bold",
            fontSize: "15px"
          },
          width: {
            sm: "calc(80vw - 50px)",
            md: "calc(80vw - 50px)",
            lg: "calc(90vw - 250px)"
          },
          height: "fit-content"
        }}
      >
        <DataGrid
          rows={orderData}
          columns={columns}
          pageSizeOptions={[5, 10, 25, 100]}
          autoHeight
          sx={{
            '--DataGrid-overlayHeight': '300px',
            maxWidth: "100%",
          }}
          disableColumnResize={true}
        />
      </Box>
    </Box >
  )
}

export default PickupOrder