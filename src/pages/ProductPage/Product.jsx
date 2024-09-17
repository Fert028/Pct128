import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import style from '../../styles/ProductCard.module.scss';
import data from '../../data/products.json';

export default function Product() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const res = data.items.find((item) => item.id === parseInt(params.id));
    setProduct(res);
  },[])

  return (
    <div className={style.product}>
      <img src={`../../${product.img}`} alt={product.name} />
      <h2>{product.name}</h2>
    </div>
  )
}