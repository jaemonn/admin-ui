import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import styled from '@mui/material';
import { designTokens } from '../../theme';
import orderData from '../../data/orderData';
import Header from '../../components/Header';

// const StyledDataGrid = styled(DataGrid)()

const DeliveryOrder = () => {
  const theme = useTheme()
  const colors = designTokens(theme.palette.mode)

  const columns = [
    {
      field: "id",
      headerName: "Order #",
      minWidth: 100,
      headerClassName: "pickup-order-table--header",
    },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      minWidth: 200,
      headerClassName: "pickup-order-table--header",
    },
    {
      field: "phoneNum",
      headerName: "Phone Number",
      minWidth: 200,
      headerClassName: "pickup-order-table--header",
    },
    {
      field: "pickupDateTime",
      headerName: "Pickup Data & Time",
      minWidth: 200,
      headerClassName: "pickup-order-table--header",
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 200,
      headerClassName: "pickup-order-table--header",
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
      minWidth: 200,
      flex: 1,
      headerClassName: "pickup-order-table--header",
    },
  ]

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
        <Header title="Delivery Orders" />
      </Box>
      <Box
        sx={{
          maxWidth: "fit-content",
          marginLeft: {
            xs: 5,
            sm: 10,
            md: "auto",
            lg: "auto",
          },
          marginRight: {
            xs: 5,
            sm: 10,
            md: "auto",
            lg: "auto"
          },
          backgroundColor: theme.palette.mode === 'dark' ? colors.black[700] : colors.white[900]
        }}
      >

        <Box
          sx={{
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: "bold",
              fontSize: "15px",
            },
            '& .MuiDataGrid-columnHeaderRow': {
              color: 'red'
            },
            '& .pickup-order-table--header': {
              backgroundColor: theme.palette.mode === 'dark' ? colors.black[500] : colors.white[700],
            },
            width: {
              sm: "calc(80vw - 50px)",
              md: "calc(80vw - 50px)",
              lg: "calc(90vw - 250px)"
            },
            height: "fit-content",
            padding: "20px",
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
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
              border: 0,
            }}
          // disableColumnResize={true}
          />
        </Box>
      </Box >
    </Box>

  )
}

export default DeliveryOrder