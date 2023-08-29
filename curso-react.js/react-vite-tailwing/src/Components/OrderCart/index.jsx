import { XCircleIcon } from '@heroicons/react/24/solid'

const OrderCart = props => {

    const {title, imageUrl, price, id, handleDelete} = props;
    //si en las props viene handleDelete muestra el boton para borrar//
    let renderXMarkIcon 
    if (handleDelete) {
        <XCircleIcon className='w-6 h-6 text-black cursor-pointer' onClick={()=> handleDelete(id)}/>
    }

    return(
        <div className="flex justify-between item-center mb-2">
            <div className='flex item-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover truncate hover:overflow-x-visible' src={imageUrl} alt={title}/>
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className=' text-lg font-medium'> {price}</p>
                {renderXMarkIcon}
            </div>
            
        </div>
    )
}

export default OrderCart