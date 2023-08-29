import { useState } from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SigIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckOutSideMenu'

import './App.css'

// muestra una pagina distinta dependiendo la url //
const AppRoutes = () => {
  let routes = useRoutes ( [
    {path: '/',element: <Home />},
    {path: '/clothes',element: <Home />},
    {path: '/electronics',element: <Home />},
    {path: '/fornitures',element: <Home />},
    {path: '/toys',element: <Home />},
    {path: '/others',element: <Home />},
    {path: '/my-order',element: < MyOrder/>},
    {path: '/my-orders',element: < MyOrders/>},
    {path: '/my-orders/last',element: < MyOrders/>},
    {path: '/my-orders/:id',element: < MyOrders/>},
    {path: '/my-account',element: < MyAccount/>},
    {path: '/*',element: < NotFound/>},
    {path: '/sign-in',element: < SigIn/>},
  ])
  return routes;
}

function App() {

  return (
    <>  
        <ShoppingCartProvider>
          <BrowserRouter>
            <AppRoutes />
            <Navbar />
            <CheckoutSideMenu />
          </BrowserRouter>
        </ShoppingCartProvider>
        
    </>
  )
}

export default App
