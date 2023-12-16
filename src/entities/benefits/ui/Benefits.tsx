import styles from './styles.module.scss';
import CircleIcon from './CheckCircleIcon.svg';
import { Icon } from 'shared/ui/Icon/Icon';

const Benefits = () => (
  <>
    <p className={styles.tagline}>
      Равным образом, внедрение современных методик создаёт необходимость включения в производственный план целого ряда
      внеочередных мероприятий с учётом комплекса благоприятных перспектив.
    </p>

    <div className={styles.benefits}>
      <div className={styles.benefit}>
        <Icon Svg={CircleIcon} className={styles.Img} />

        <p>Аптека28 - всегда рядом.</p>
      </div>
      <div className={styles.benefit}>
        <Icon Svg={CircleIcon} className={styles.Img} />

        <p>Программа лояльности Гарантия лучшей цены.</p>
      </div>
      <div className={styles.benefit}>
        <Icon Svg={CircleIcon} className={styles.Img} />

        <p>Заказать доставку домой можно сразу на сайте.</p>
      </div>
      <div className={styles.benefit}>
        <Icon Svg={CircleIcon} className={styles.Img} />

        <p>Попробуйте уже сейчас воспользуйтесь поиском.</p>
      </div>
    </div>
  </>
);

export default Benefits;
