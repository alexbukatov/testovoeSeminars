import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BaseLink.module.scss';
import type { TBaseLinkProps } from './BaseLink.type';
import clsx from 'clsx';

const BaseLink: React.FC<TBaseLinkProps> = ({ className, to, children, ariaLabel, tabIndex }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => clsx(styles.link, className, { [styles.active]: isActive })}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </NavLink>
  );
};

export { BaseLink };
