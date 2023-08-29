import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext ();

export const ShoppingCartProvider = ({children}) => {

     //almacena la información del a api//
    const [items, setItems] = useState(null);
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);
    const [count, setCount] = useState(0);
    const [isProductItemOpen, setIsProductItemOpen] = useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    
  //llama a la api//
  useEffect (() => {
    //fetch trae la info de la api en modo promesa y dentro del then la transformamos en JSON para ingresarlo dentro del setItem//
    fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => setItems(data))
  }, [])

    //abre los detalles del producto//
    const StateProductDetail = () => setIsProductItemOpen (!isProductItemOpen)
    
    //abre el checkout menu//
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //retorna un item si este tiene en su titulo algo parecido que searchByTitle// 
    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    //retorna un item si este tiene en su titulo algo parecido que searchByTitle// 
    const filteredItemsByCategory = (items, searchByCategory) => {
      
      console.log(searchByCategory)
      return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))

    }

    //decide que filtrado se va a usar para buscar items//
    const filteredBy = (type, items, searchByTitle, searchByCategory) =>{
      if(type === 'TITLE') {
       return  filteredItemsByTitle(items, searchByTitle)
      }
      if(type === 'CATEGORY') {
        return  filteredItemsByCategory(items, searchByCategory)
       }
      if(type === 'TITLE_AND_CATEGORY') {
        return  filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      } 
      if(!type) {
        return  items
       }
    }

    useEffect (() => {
      if(searchByTitle && searchByCategory)
        setFilteredItems(filteredBy('TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
      if(searchByTitle && !searchByCategory)
        setFilteredItems(filteredBy('TITLE',items,searchByTitle,searchByCategory))
      if(searchByCategory && !searchByTitle)
      setFilteredItems(filteredBy('CATEGORY',items,searchByTitle, searchByCategory))
      if(!searchByCategory && !searchByTitle)
      setFilteredItems(filteredBy(null,items,searchByTitle, searchByCategory))
    }, [items, searchByTitle,searchByCategory])

     
    

    return (
        <ShoppingCartContext.Provider value = {
            {
                count,
                setCount,
                isProductItemOpen,
                setIsProductItemOpen,
                StateProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                setIsCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
         )
}