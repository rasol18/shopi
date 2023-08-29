import {useContext} from 'react'
import { ShoppingCartContext} from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = (data) => {
    //lee el estado global de ShoppingCartContext //
    const context = useContext(ShoppingCartContext)

     //muestra el producto en el detailProductAside//
     const ShowProduct = (productDetail) => {
        context.StateProductDetail()
        context.setProductToShow(productDetail)
     }

     //suma el producto al carrito
     const addProductToCart = (event, productData) => {
         // Evita que openProductDetail se muestre siempre que se haga clic en el agregar producto//
         event.stopPropagation();
        context.setCount(context.count + 1);
        //crea un nuevo array, le pone todo lo que tiene cartProducts y le agrega el nuevo producto//
        context.setCartProducts ([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.StateProductDetail(false)
     } 

      //
    const renderIcon = (id) => {
        //si el producto esta dentro de cartProducts devolvera true
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        
        // si el producto esta en la lista mostrara el check sino para agregarlo mostrara el circulo//
        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 text-white"> 
                    <CheckIcon className='w-6 h-6'></CheckIcon>
                    </div>
            )
        }else {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"> 
                <PlusIcon className='w-6 h-6' onClick={(event) => {
                addProductToCart(event, data.data)}}
                 ></PlusIcon></div>
            )
        }
    }
    return (
        <div className="bg-white cursor-pointer wd-56 h-60 rounded-lg"
         onClick={()=> {ShowProduct(data.data)}}> 
            <figure className=" relative mb-3 wd-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"> {data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.description}></img>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    )
}

export default Card