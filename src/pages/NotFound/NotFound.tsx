import React from 'react';
import errorImage from 'assets/image/errorImage.png';
import styles from './NotFound.module.scss';
import { Button } from 'ui/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(-1);
  };
  return (
    <figure className={styles.notFound}>
      <figcaption className={styles.notFound__textBlock}>
        <span className={styles.notFound__textTop}>Oops....</span>
        <h3>Page not found</h3>
        <p className={styles.notFound__textBottom}>
          This Page doesn`t exist or was removed! We suggest you go back.
        </p>
        <Button
          className={styles.notFound__button}
          onClick={handleLogoClick}
          type="button"
          alt="Go back"
          tabIndex={7}
        />
      </figcaption>
      <img className={styles.notFound__image} src={errorImage} alt="Image error" />
    </figure>
  );
};

export default NotFound;
