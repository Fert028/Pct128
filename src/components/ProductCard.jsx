import { NavLink } from "react-router-dom";
import style from "../styles/ProductCard.module.scss";
import data from "../data/products.json";
import { useState, useEffect } from "react";
import classNames from "classnames";
import arrowDown from "../assets/img/icons/arrow-down.svg";

export default function ProductCard(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const res = data.items.find(
      (item) => item.id === parseInt(props.productId),
    );
    setProduct(res);
  }, [product]);

  return (
    <NavLink
      to={`/product/${product.id}`}
      className={style.card}
      title={`Перейти к ${product.name}`}
    >
      <div className={style.card__container}>
        <div className={style.img__container}>
          <img src={product.img} />
        </div>
        <div className={style.product__title}>
          <h4>{product.name}</h4>
          <p>{product.price}р.</p>
          <p className={classNames(style.goText, "text")}>Перейти к товару</p>
          <img className={style.arrowDown} src={arrowDown} alt="" />
        </div>
      </div>
    </NavLink>
  );
}
