import CustomImage from '../CustomImage';
import styles from './styles.module.scss';

interface helpfullCardProps {
  id: number;
  title: string;
  description: string;
}

const HelpfullCard = ({ id, title, description }: helpfullCardProps) => {
  // const { push } = useRouter();

  return (
    <div className={styles.container}>
      <CustomImage src="/MokkHelpfullImage.png" alt="MokkHelpfullImage" className={styles.cover} />
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
      <div className={styles['read-more']} onClick={() => { console.log(`/help/${id}`); }}>
        Читать далее
      </div>
    </div>
  );
};

export default HelpfullCard;
