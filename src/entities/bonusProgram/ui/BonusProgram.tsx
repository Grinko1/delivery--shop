/* eslint-disable react/no-unescaped-entities */
import styles from './BonusProgram.module.scss';
import BonusCardImage from './BonusCardImage.png';

const BonusProgram = () => (
  <div className={styles.container}>
    <h4 className={styles.title}>Бонусная программа "Маркет 28"</h4>

    <h5 className={styles.subtitle}> Гарантия лучшей цены</h5>
    <p className={styles.description}>
      Вы уже заметили, что у наз низкие цены? Мы работаем по программе “Гарантия лучшей цены”, если найдете цену ниже, мы
      сделаем вам скидку. Подробнее - читайте в статье...
    </p>

    <h5 className={styles.subtitle}> Бонусная программа </h5>
    <p className={styles.description}>
      Получите или зарегистрируйте виртуальную карту лояльности Маркет28 и накапливайте баллы с каждой покупки, у нас нет
      никаких скрытых условий и можно оплачивать до 100% стоимости бонусными баллами. Карту не нужно носить с собой, скачайте
      приложение Маркет28 с эп стор или плей маркет и войдите в систему, так ваш код лояльности всегда будет в кармане.
    </p>

    <img src={BonusCardImage} alt="BonusCardImage" className={styles.image} />
  </div>
);

export default BonusProgram;
