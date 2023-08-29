import { useState } from 'react'
import Layout from  '../../Components/Layout/index'
import OrdersCart from '../../Components/OrdersCart'
import {useContext} from 'react'
import { ShoppingCartContext} from '../../Context'
import { Link } from 'react-router-dom'


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex w-80 items-center relative justify-center mb-4'>
      <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
          
         {
          //renderiza la card y te redirije a la card si le haces click//
          context.order.map((order, index) =>  (
          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCart totalProduct= {order.totalProduct} totalPrice= {order.totalPrice}/>
        </Link>))
         }
        
         </Layout>
  )
}

export default MyOrders