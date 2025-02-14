import React, { useState } from 'react';
import styles from './ModifyPopup.module.scss';
import { useDispatch } from 'react-redux';
import { editSeminar } from '../../../redux/slices/seminarsSlice';
import { Popup } from 'ui/Popup';
import { Button } from 'ui/Button';
import { AppDispatch } from 'redux/store';
import { TModifyPopupProps } from './ModifyPopup.type';

const ModifyPopup: React.FC<TModifyPopupProps> = ({
  id,
  title: initialTitle,
  description: initialDescription,
  date: initialDate,
  time: initialTime,
  open,
  setOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  const handleSubmit = () => {
    dispatch(editSeminar({ id, title, description, date, time }));
    setOpen(false);
  };

  return (
    <Popup setOpen={() => setOpen(false)}>
      <div className={styles.modifyPopup}>
        <h3>Modify seminar</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название" />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
        />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <div className={styles.modifyPopup__buttonBlock}>
          <Button alt="Close" onClick={() => setOpen(false)} />
          <Button alt="Modify" onClick={handleSubmit} />
        </div>
      </div>
    </Popup>
  );
};

export { ModifyPopup };
