import './styles.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import {useContext} from 'react'
import { ShoppingCartContext} from '../../Context'
import OrderCart from '../OrderCart'
import {totalPrice} from '../../utils'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
    //si is ProductDetailOpen es true le da flex al aside y lo muestra en pantalla sino le da hidden//
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        //!=id hara un array con todos los elementos del array menos el que coincide con el id que elegimos//
        const filteredProducts =  context.cartProducts.filter (product => product.id !=id)
        context.setCartProducts (filteredProducts)
    }

//envia los productos del checkout a las ordenes confirmadas//
const handleCheckout = () => {
    const orderToAdd = {
        date:'24/08/2023',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder ([...context.order, orderToAdd]);
    //limpia el cartProducts para que no vuelvan a aparecer los productos//
    context.setCartProducts([])
    //limpia los filtersearch//
    context.setSearchByTitle(null)
}
   
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
          <XCircleIcon
            className='h-6 w-6 text-white bg-black cursor-pointer rounded-full'
            onClick={() => context.closeCheckoutSideMenu()}></XCircleIcon>
        </div>
            </div>
        <div className='px-6 overflow-y-scroll flex-1'>
            {   //en el sideMenu arma una card con cada producto seleccionado y lo muestra//
                context.cartProducts.map(product => { return (
                    <OrderCart key={product.id} title={product.title} price={product.price} imageUrl={product.images} id={product.id} handleDelete={handleDelete}/>
                )})
            }
        </div>
        <div className='px-6 mb-6'>
            <p className='flex justify-between items-center mb-2'>
                <span className='font-medium'>Total</span>
                <span className='font-medium text-xl'>{totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
                <button onClick={() => handleCheckout()} className=' bg-black py-3 w-full text-white rounded-lg'>Checkout</button>
            </Link>
            
        </div>
        
        </aside>
    )
}

export default CheckoutSideMenu;