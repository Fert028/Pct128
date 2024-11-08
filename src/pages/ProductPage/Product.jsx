import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./Product.module.scss";
import data from "../../data/products.json";
import classNames from "classnames";

export default function Product() {
  const params = useParams();
  const [disabled, setDisabled] = useState(false);
  const [notOrder, setNotOrder] = useState();
  // const [price, setPrise] = useState();
  const item = data.items.find((el) => el.id === parseInt(params.id));
  document.title = `ПХТ - ${item.name}`;

  useEffect(() => {
    if (item.linksAltair === null) {
      setDisabled(true);
      setNotOrder(
        <p className={style.textNotOrder}>
          К сожалению, товара временно нет в наличии.
        </p>,
      );
    } else {
      setNotOrder(
        <p className="text">
          *Заказать товар можно у нашего партнера{" "}
          <a href="https://altairpb.ru">altairpb.ru</a> по кнопке ниже
        </p>,
      );
      // setPrise(<p>Розничная цена: {item.price}р.</p>);
    }
  }, [disabled]);

  // const description = item.description; 

  return (
    <div className={style.wrapper}>
      <div className={style.container}>

        <div className={style.contentProduct}>
          <div className={style.title}>
            <h1>"{item.name}"</h1>
            {notOrder}
            <form action={item.linksAltair} target="_blank">
              <button className={classNames("button", style.orderButton)} disabled={disabled}>
                Заказать
              </button>
            </form>
          </div>

          <img className={style.imageProduct} src={`../../${item.img}`} alt={`Не удалось загрузить изображение ${item.name}`} />

        </div>

        <div className={style.description}>
          <p>{item.description}</p>
        </div>
                
        <div className={classNames(style.docsLi, "docsList")}>
          <h3>Документы:</h3>
          <ul>
            {item.documents.map(el => (
              <li>
                <a key={el.id} className={style.linkToDocs} href={`../../${el.documentLink}`} target="blank">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
