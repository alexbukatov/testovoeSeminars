import React, { Children } from 'react';
import styles from './Popup.module.scss';
import { Button } from 'ui/Button';

type TPropsPopup = { id?: number; setOpen: () => void; children: React.ReactNode };

const Popup: React.FC<TPropsPopup> = ({ setOpen, children }) => {
  return (
    <div onClick={() => setOpen()} className={styles.popup}>
      <div onClick={(e) => e.stopPropagation()} className={styles.popup__content}>
        {children}
      </div>
    </div>
  );
};

export { Popup };
