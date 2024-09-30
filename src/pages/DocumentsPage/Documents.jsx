import style from "../../styles/Documents.module.scss";
import data from "../../data/products.json";
import downloadIcon from "../../assets/img/icons/download_icon.svg";

export default function Documents() {
  const patents = data.documents.patents;
  const awards = data.documents.awards;
  const instructions = data.documents.instructions;
  const declarations = data.documents.declarations;
  const certificates = data.documents.certificates;

  return (
    <div className={style.wrapper}>
      <h1 className="title">Документы</h1>
      <div className={style.container}>
        <section className={style.sectionDocs}>
          <h2>Патенты</h2>
          <div>
            <ul className={style.patentsContainer}>
              {patents.map((el) => (
                <li key={el.id}>
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
        </section>

        <section className={style.sectionDocs}>
          <h2>Награды</h2>
          <div>
            <ul className={style.awardsContainer}>
              {awards.map((el) => (
                <li key={el.id}>
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
        </section>

        <section className={style.sectionDocs}>
          <h2>Инструкции</h2>
          <div>
            <ul className={style.listing}>
              {instructions.map((el) => (
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
