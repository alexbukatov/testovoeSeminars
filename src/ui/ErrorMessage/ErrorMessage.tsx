import React from 'react';
import styles from './ErrorMessage.module.scss';

type TSuccessMessageProps = {
  title: string;
  text: string;
};

const ErrorMessage: React.FC<TSuccessMessageProps> = ({ title, text }) => {
  return (
    <div className={styles.errorMessage}>
      <h3 className={styles.errorMessage__title}>{title}</h3>
      <p className={styles.errorMessage__desc}>{text}</p>
    </div>
  );
};

export { ErrorMessage };
