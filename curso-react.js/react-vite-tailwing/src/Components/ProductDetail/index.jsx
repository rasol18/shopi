import './styles.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import {useContext} from 'react'
import { ShoppingCartContext} from '../../Context'

const ProductDetail = () => {
    //si is ProductDetailOpen es true le da flex al aside y lo muestra en pantalla sino le da hidden//
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${context.isProductItemOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XCircleIcon className='w-6 h-6 text-black cursor-pointer' onClick={()=> {context.StateProductDetail()}}/>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-72 rounded-lg' src={context.productToShow.image} alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6 mb-2'>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md '>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;