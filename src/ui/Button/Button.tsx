import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import type { TButtonProps } from './Button.type';

const Button: React.FC<TButtonProps> = ({
  onClick,
  type = 'button',
  isDisabled = false,
  icon,
  children,
  alt,
  className = '',
  tabIndex,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={clsx(styles.button, className)}
      tabIndex={tabIndex}
    >
      {icon ? (
        <img src={icon} alt={alt} className={isDisabled ? styles.button__svgDisabled : ''} />
      ) : (
        <span>{alt}</span>
      )}
      {children}
    </button>
  );
};

export { Button };
