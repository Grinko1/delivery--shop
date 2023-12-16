import styles from './styles.module.scss';

import { AREAS_OPTIONS } from './constants';
import { classNames } from 'shared/lib/classNames/classNames';

interface areasListProps {
  selectedArea: {
    title: string;
    id: number;
  };
  setSelectedArea: (value: { title: string; id: number }) => void;
}

const AreasList = ({ selectedArea, setSelectedArea }: areasListProps) => {
  const dataAreas = AREAS_OPTIONS.map(({ id, title }) => {
    if (+id === +selectedArea.id) return { id, title, isActive: true };

    return { id, title, isActive: false };
  });

  return (
    <ul>
      {dataAreas.map(({ id, title, isActive }) => (
        <li
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: isActive
          })}
          key={id}
          onClick={() => {
            setSelectedArea({ id, title });
          }}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default AreasList;
