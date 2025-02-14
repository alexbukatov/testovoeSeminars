import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';

export const ROUTES = [
  {
    path: '/',
    Element: Home,
  },
  {
    path: '*',
    Element: NotFound,
  },
];
