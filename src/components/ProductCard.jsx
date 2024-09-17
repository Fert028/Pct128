import { NavLink } from 'react-router-dom';
import style from '../styles/ProductCard.module.scss';
import data from '../data/products.json';
import { useState, useEffect } from 'react';

export default function ProductCard(props) {
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    const res = data.items.find((item) => item.id === parseInt(props.id));
    setProduct(res);
  },[])

  return (
    <NavLink to={`/product/${product.id}`} className={style.card} title={`Перейти к ${product.name}`}> 
      <img src={product.img} />
      <div className={style.card__title}>
        <h3>{product.name}</h3>
      </div>
    </NavLink>
  )
}
