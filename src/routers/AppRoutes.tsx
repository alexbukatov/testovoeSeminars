import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './AppRoutes.constant';
import { Loader } from 'ui/Loader';

const AppRoutes = () => (
  <Routes>
    {ROUTES.map(({ path, Element }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<Loader />}>
            <Element />
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRoutes;
