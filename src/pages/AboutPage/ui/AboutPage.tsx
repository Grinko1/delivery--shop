import { memo } from 'react';
import styles from './AboutPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Pharm from './pharm.jpeg';
import Benefits from 'entities/benefits/ui/Benefits';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo((props: AboutPageProps) => {
  const { className } = props;
  return (
    <div className={classNames(styles.AboutPage, {}, [className])}>
      <h1 className={styles.title}>О компании</h1>

      <div className={styles.why}>
        <div className={styles['why-text_wrapper']}>
          <h4 className={styles['why-text_title']}>Почему Аптека28?</h4>

          <p className={styles['why-text']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat, neque labore quod amet repellat eius
            officia. Quos hic recusandae illo aliquam nesciunt dolorum ratione, obcaecati, exercitationem deleniti, quasi
            autem?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat,
          </p>
        </div>

        <img src={Pharm} alt="AboutImage" className={styles.AboutImage} />
      </div>
      <Benefits />
      {/* <Benefits />

      <DetailsAndLicense /> */}
    </div>
  );
});
