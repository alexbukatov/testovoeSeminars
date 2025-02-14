import { useLocation, useNavigate } from 'react-router-dom';
import logoNeoflex from 'assets/image/logo.svg';
import styles from './Footer.module.scss';
import { CONTACT_ITEMS } from './Footer.constant';
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <figure className={styles.footer__head}>
          <button>
            <img src={logoNeoflex} onClick={handleLogoClick} alt="Logo" aria-label="Logo" />
          </button>
          <figcaption>
            <address>
              <ul className={styles.footer__headContactsItems}>
                {CONTACT_ITEMS.map(({ className, href, content }, index) => (
                  <li key={content} className={styles.footer__headContactsItem}>
                    <a className={className} href={href} aria-label={href} tabIndex={11 + index}>
                      {content}
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </figcaption>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
