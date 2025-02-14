import { Link, useNavigate } from 'react-router-dom';
import logoSvg from 'assets/image/logo.svg';
import styles from './Header.module.scss';
import { Button } from 'ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const goToOnlineBank = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__items}>
        <Link to="/" aria-label="Logo" tabIndex={1}>
          <img src={logoSvg} alt="Logo" />
        </Link>
        <Button onClick={goToOnlineBank} isDisabled={false} alt="Go to seminars" tabIndex={6} />
      </div>
    </header>
  );
};

export default Header;
