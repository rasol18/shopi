import Layout from  '../../Components/Layout/index'
import Card  from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import {useContext} from 'react'
import { ShoppingCartContext} from '../../Context'

function Home() {
 
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
   
          //si la lista de filtered  tiene algun item lo mostrara sino no//
          if(context.filteredItems?.length > 0){
            return(
                //? pregunta si existe filteredItems, si existe .map hara que por cada item se muestre una card//
          context.filteredItems?.map((item) => (
            //le envia a la card dentro de la variable data, toda la informacion del item correspondiente//
            <Card data={item} key = {item.id}/>
          )))
          }else{
            return(
              <div>No tenemos ese producto</div>
            )
          }
   
  }

  return (
    
      <Layout>
        <div className='flex w-80 items-center relative justify-center mb-4'>
      <h1 className='font-medium text-xl'>Productos Exclusivos</h1>
      </div>
      <input type='text' placeholder='Busca tu producto'
       className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
       onChange={
        //toma lo que escribimos en el buscador y lo mete en la variable searchByTitle//
        (event)=> context.setSearchByTitle(event.target.value)}></input>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
         renderView()
        }
        </div> 
        
      
        <ProductDetail/>
      </Layout>
    
  )
}

export default Home
