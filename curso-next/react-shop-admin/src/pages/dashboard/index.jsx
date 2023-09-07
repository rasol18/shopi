import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import  {Chart} from '@common/Chart'
  
  export default function Dashboard() {
    const PRODUCT_LIMIT = 5;
    const PRODUCT_OFFSET = 5;
    const products= useFetch(endPoints.products.getProducts(PRODUCT_LIMIT,PRODUCT_OFFSET))
    //trae todas las categorias que hayan en los distintos productos//
    const categoryNames = products?.map(product => product.category)
    //trae los nombres de las categorias//
    const categoryCount = categoryNames?.map(category => category.name)
    //usa el reduce para iterar cada categoria para extraer cada categoria y suma cuantas veces se repite cada una//
    const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
    //da los valores de la grafica//
    const data ={
      datasets: [{
        label:'Categoria',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0']
      }]
    }
    return (
      <>
        <Chart chartData={data} className="mb-8 mt-2"></Chart>
        
      </>
    );
  }