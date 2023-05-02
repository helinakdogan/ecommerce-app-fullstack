import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';


const Products = () => {

  const dispatch = useDispatch();
  // These two come from productSlice.js
  const {products, productsStatus} = useSelector(state => state.products);

  console.log(products, "products");

  useEffect (() => {
      dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      {
        productsStatus == "LOADING" ? <Loading/> :
        <div>
          {
            products?.map((product, i) => (
              <Product key={i} product={product}/>
            ))
          }
        </div>

      }
    </div>
  )
}

export default Products