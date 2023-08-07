import React, { useEffect, useState } from 'react'
import styles from "./redux.module.scss"
import { add, remove } from "../../store/cartSlice"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/productSlice'

const Index = () => {
  // const [products, setProducts] = useState([])

  const { data: products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const handleAdd = (product) => {
    dispatch(add(product))
  }
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  useEffect(() => {
    dispatch(fetchProducts());
    // setProducts(data);
    // const fecthproducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // }
    // fecthproducts()
  }, [])




  return (
    <>
      <div className={styles.products}>
        {/* {products.map((product) => {
              <div><div/>
            })} */}
        {products?.map(product => {
          return <div className={styles.product} key={product?.id}>
            <h5 className={styles.title}> {product?.title}</h5>
            <img alt="imaages" className={styles.image} src={product?.image} />
            <p> {product?.category} </p>
            <p> <b>Price: </b> {product?.price}/- INR</p>
            <div className={styles.btndiv}>
              <button className={`${styles.btn} ${styles.addbtn}`} onClick={() => { handleAdd(product) }}> Add to Cart </button>
              <button className={`${styles.btn} ${styles.rembtn}`} onClick={() => { handleRemove(product.id) }}> Remove from Cart </button>
            </div>

          </div>
        })}
      </div>
    </>
  )
}

export default Index