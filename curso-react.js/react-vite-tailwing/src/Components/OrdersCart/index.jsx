import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCart = props => {

    const {totalPrice, totalProducts} = props;

    return(
        <div className="flex justify-between item-center mb-2 border border-black w-90 p-4 rounded-lg ">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>25/08/2023</span>
                    <span className='font-light'>{totalProducts} Articulos</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </p>
                
            </div>
            
        </div>
    )
}

export default OrdersCart