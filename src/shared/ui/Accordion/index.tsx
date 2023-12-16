import { useState, type ReactNode } from 'react';
import styles from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import MinusIcon from 'shared/assets/icons/MinusIcon.svg';
import PlusIcon from 'shared/assets/icons/PlusIcon.svg';
import { Icon } from '../Icon/Icon';
interface accordionProps {
  title: string | ReactNode;
  children?: any;
}

const Accordion = ({ title, children }: accordionProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.title}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {isOpen ? <Icon Svg={MinusIcon} width={15} height={2} /> : <Icon Svg={PlusIcon} width={25} height={15} />}
        <p> {title}</p>
      </div>

      <div className={classNames(styles['accordion-item'], { [styles.collapsed]: !isOpen })}>
        <div className={classNames(styles['accordion-content'])}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
