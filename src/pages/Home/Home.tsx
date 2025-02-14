import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeminars } from '../../redux/slices/seminarsSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { Loader } from 'ui/Loader';
import { ErrorMessage } from 'ui/ErrorMessage';
import { CardSeminars } from 'components/HomePageComponents/CardSeminars';
import styles from './Home.module.scss';
import { TSeminarsItem } from './Home.type';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, isLoading, error } = useSelector((state: RootState) => state.seminars);

  useEffect(() => {
    dispatch(fetchSeminars());
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage title="Ошибка" text="Не удалось загрузить семинары" />;

  return (
    <section className={styles.seminars}>
      <h2 className={styles.seminars__title}>Наши семинары:</h2>
      <ul className={styles.seminars__items}>
        {items.map((seminar: TSeminarsItem) => (
          <CardSeminars key={seminar.id} {...seminar} />
        ))}
      </ul>
    </section>
  );
};

export default Home;
