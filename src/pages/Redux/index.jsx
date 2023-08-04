import React, { useEffect, useState } from 'react'
import styles from "./redux.module.scss"

const Index = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fecthproducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
    fecthproducts()
  }, [])
  return (
    <>
      <div className={styles.products}>
        {/* {products.map((product) => {
              <div><div/>
            })} */}
        {products.map(product => {
          return <div className={styles.product} key={product.id}>
            <h2> {product.title}</h2>
            <img alt="imaages" className={styles.image} src={product.image} />
            <p> {product.category} </p>
            <p> {product.description}</p>
            <button> Add to Cart </button>

          </div>
        })}
      </div>
    </>
  )
}

export default Index