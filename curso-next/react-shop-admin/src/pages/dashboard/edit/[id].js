import FormProduct from '@components/FormProducts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  //lee el id cuando esta disponible//
  useEffect(() => {
    //nos trae el valor de id//
    const { id } = router.query;
    //si no tenemos la informacion en router no retorna nada//
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
    //va a esperar que la informacion en router este correcto para empezar el efecto//
  }, [router?.isReady]);

  return <FormProduct product={product}></FormProduct>;
}
