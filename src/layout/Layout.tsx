import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRoutes from 'routers/AppRoutes';

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="content">
          <AppRoutes />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
