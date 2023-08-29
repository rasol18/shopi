import { useState } from 'react'
import Layout from  '../../Components/Layout/index'
import {useContext} from 'react'
import { ShoppingCartContext} from '../../Context'
import OrderCart from '../../Components/OrderCart'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  //index nos mostrara que es lo que sigue despues de '/' en la url// 
  let index = currentPath.substring(currentPath.lastIndexOf('/')-1)
  //si el index es igual a last le pone en la url la posicion donde se encuentra esa orden para mostrarla en pantalla
  if(index === last) {
    index === context.order?.length -1
  }

  return (
    <Layout>
           <div className='flex w-80 items-center relative justify-center mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
           <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          
          <h1>My Order</h1>
          
        </div>
         <div className='flex flex-col w-80'>
            {   //si tiene una orden muestra el ultimo elemento de la orden//
               context.order?.[index].products.map(product => { 
                    <OrderCart key={product.id} title={product.title} price={product.price} imageUrl={product.images} id={product.id}/>
                })
            }
        </div>
         </Layout>
  )
}

export default MyOrder