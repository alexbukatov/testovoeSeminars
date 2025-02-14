import type { TContactsFooter } from './Footer.type';
import styles from './Footer.module.scss';


export const CONTACT_ITEMS: TContactsFooter[] = [
  {
    content: '+7 (900) 924 79-67',
    href: 'tel:+7 (900) 924 74 67',
    className: styles.footer__headContactsItem_tel,
  },
  {
    content: 'alexei.buckatov@yandex.ru',
    href: 'malito:alexei.buckatov@yandex.ru',
    className: styles.footer__headContactsItem_malito,
  },
];
