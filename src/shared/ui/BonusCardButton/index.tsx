import styles from './styles.module.scss';
import Button from '../Button';
import { classNames } from 'shared/lib/classNames/classNames';
import CreditCardIcon from 'shared/assets/icons/CreditCardIcon.svg';
import { Icon } from '../Icon/Icon';
interface bonusCardButtonProps {
  className?: string;
}

const BonusCardButton = ({ className }: bonusCardButtonProps) => (
  <Button className={classNames(styles.container, {}, [className])}>
    <>
      <Icon Svg={CreditCardIcon} width={20} height={15} style={{ marginRight: '14px' }} />
      Получить бонусную карту
    </>
  </Button>
);

export default BonusCardButton;
