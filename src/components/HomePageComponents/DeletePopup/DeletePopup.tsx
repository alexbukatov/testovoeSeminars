import styles from './DeletePopup.module.scss';
import { Button } from 'ui/Button';
import { Popup } from 'ui/Popup';
import { useDispatch } from 'react-redux';
import { deleteSeminar } from '../../../redux/slices/seminarsSlice';
import { AppDispatch } from '../../../redux/store';

type TPropsPopup = {
  id: number;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const DeletePopup = ({ id, open, setOpen }: TPropsPopup) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    await dispatch(deleteSeminar(id));
    setOpen(false); // Закрываем попап
  };

  return (
    <Popup id={id} setOpen={() => setOpen(false)}>
      <span className={styles.popup__text}>Do you really want to delete the seminar?</span>
      <div className={styles.popup__buttonBlock}>
        <Button className={styles.popup__buttonClose} onClick={() => setOpen(false)} alt="Close" />
        <Button className={styles.popup__buttonDelete} onClick={handleDelete} alt="Delete" />
      </div>
    </Popup>
  );
};

export { DeletePopup };
