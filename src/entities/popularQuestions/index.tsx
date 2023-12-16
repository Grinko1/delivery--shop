import { MOKK_POPULAR_QUESTIONS } from 'shared/consts/common';
import styles from './styles.module.scss';
import Accordion from 'shared/ui/Accordion';

const PopularQuestions = () => (
  <div className={styles.container}>
    {MOKK_POPULAR_QUESTIONS.map((item) => (
      <Accordion key={item} title={item}>
        <p className={styles['accordion-content']}>Продаваемая продукция строго контролируется законодательством.</p>
      </Accordion>
    ))}
  </div>
);

export default PopularQuestions;
