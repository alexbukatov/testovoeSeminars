import React from 'react';
import styles from './CardSeminars.module.scss';
import clearImg from 'assets/image/clear.svg';
import modifyImg from 'assets/image/modify.svg';
import { TSeminarsItem } from 'pages/Home/Home.type';
import { DeletePopup } from '../DeletePopup';
import { ModifyPopup } from '../ModifyPopup';

const CardSeminars: React.FC<TSeminarsItem> = ({ id, title, description, date, time, photo }) => {
  const [openPopupDelete, setOpenPopupDelete] = React.useState<boolean>(false);
  const [openPopupEdit, setOpenPopupEdit] = React.useState<boolean>(false);

  return (
    <>
      <li className={styles.card}>
        <article className={styles.card__item}>
          <img className={styles.card__item_image} src={photo} alt="Image seminars" />
          <div className={styles.card__item_textBlock}>
            <div className={styles.card__item_descBlock}>
              <h3 className={styles.cards__item_title}>{title}</h3>
              <p className={styles.card__item_desc}>{description}</p>
            </div>
            <p className={styles.card__item_date}>
              Дата проведения : {date} в {time}
            </p>
          </div>
          <div className={styles.card__buttonBlock}>
            <button
              onClick={() => setOpenPopupEdit(true)}
              className={styles.card__buttonBlock_modify}
            >
              <img src={modifyImg} alt="modify" />
            </button>
            <button
              onClick={() => setOpenPopupDelete(true)}
              className={styles.card__buttonBlock_clear}
            >
              <img src={clearImg} alt="clear" />
            </button>
          </div>
        </article>
      </li>
      {openPopupDelete && (
        <DeletePopup id={id} open={openPopupDelete} setOpen={setOpenPopupDelete} />
      )}
      {openPopupEdit && (
        <ModifyPopup
          id={id}
          title={title}
          description={description}
          date={date}
          time={time}
          open={openPopupEdit}
          setOpen={setOpenPopupEdit}
        />
      )}
    </>
  );
};

export { CardSeminars };
