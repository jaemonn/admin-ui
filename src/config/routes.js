import React from 'react'

// - Pages
const Dashboard = React.lazy(() => import('../Views/Dashboard'))
const PickupOrder = React.lazy(() => import('../Views/PickupOrder'))
const PickupOrderEdit = React.lazy(() => import('../Views/PickupOrder/edit'))
const DeliveryOrder = React.lazy(() => import('../Views/DeliveryOrder'))
const DeliveryOrderEdit = React.lazy(() => import('../Views/DeliveryOrder/edit'))

// - Routes array
const routes = [
    { path: '/', name: 'Dashboard', element: Dashboard },
    { path: 'pickup-orders', name: 'PickupOrder', element: PickupOrder },
    { path: 'pickup-orders/edit/:id', name: 'PickupOrderEdit', element:  PickupOrderEdit},
    { path: 'delivery-orders', name: 'DeliveryOrder', element: DeliveryOrder },
    { path: 'delivery-orders/edit/:id', name: 'DeliveryOrderEdit', element: DeliveryOrderEdit },
]

export default routes