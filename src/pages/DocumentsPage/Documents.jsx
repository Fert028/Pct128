import style from "./Documents.module.scss";
import data from "../../data/products.json";
import downloadIcon from "../../assets/img/icons/download_icon.svg";
import classNames from "classnames";

export default function Documents() {
  document.title = "ПХТ - Документы";

  const patents = data.documents.patents;
  const awards = data.documents.awards;
  const instructions = data.documents.instructions;
  const declarations = data.documents.declarations;
  const certificates = data.documents.certificates;

  return (
    <div className={style.wrapper}>
      <h1 className="title">Документы</h1>
      <div className="container">
        
        <section>
          <div className="slider__wrapper">
            <h2>Патенты</h2>
            <div className={classNames(style.documents__slider, "slider")}>
              <ul className={classNames(style.documents__slideContainer, "slider__container")}>
                {patents.map((el) => (
                  <li key={el.id} className="slider__slide">
                    <a href={`../../${el.documentLink}`} target="blank">
                      <img
                        className={style.imgDocs}
                        src={`../../${el.documentLink}`}
                        alt=""
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="slider__wrapper">
            <h2>Награды</h2>
            <div className={classNames(style.documents__slider, "slider")}>
              <ul className={classNames(style.documents__slideContainer, "slider__container")}>
                {awards.map((el) => (
                  <li key={el.id} className="slider__slide">
                    <a href={`../../${el.documentLink}`} target="blank">
                      <img
                        className={style.imgDocs}
                        src={`../../${el.documentLink}`}
                        alt=""
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={style.sectionDocs}>
          <h2>Инструкции</h2>
          <div>
            <ul className={style.listing}>
              {instructions.map((el) => (
                <li key={el.id} className={style.docsLinks}>
                  <a
                    href={`../../${el.documentLink}`}
                    title="Скачать этот файл"
                    download
                  >
                    <img
                      className={style.downloadIcon}
                      src={downloadIcon}
                      alt="Скачать"
                    />
                  </a>
                  <a
                    href={`../../${el.documentLink}`}
                    target="blank"
                    className="link"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={style.sectionDocs}>
          <h2>Декларации</h2>
          <div>
            <ul className={style.listing}>
              {declarations.map((el) => (
                <li key={el.id} className={style.docsLinks}>
                  <a
                    download={`../../${el.documentLink}`}
                    title="Скачать этот файл"
                  >
                    <img
                      className={style.downloadIcon}
                      src={downloadIcon}
                      alt="Скачать"
                    />
                  </a>
                  <a
                    href={`../../${el.documentLink}`}
                    target="blank"
                    className="link"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={style.sectionDocs}>
          <h2>Сертификаты</h2>
          <div>
            <ul className={style.listing}>
              {certificates.map((el) => (
                <li key={el.id} className={style.docsLinks}>
                  <a
                    download={`../../${el.documentLink}`}
                    title="Скачать этот файл"
                  >
                    <img
                      className={style.downloadIcon}
                      src={downloadIcon}
                      alt="Скачать"
                    />
                  </a>
                  <a
                    href={`../../${el.documentLink}`}
                    target="blank"
                    className="link"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
