import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import useOutsideClick from './useOutsideClick';
import { classNames } from 'shared/lib/classNames/classNames';
import CaretDownIcon from 'shared/assets/icons/CaretDownIcon.svg';
import { Icon } from '../Icon/Icon';
import GeolocationIcon from 'shared/assets/icons/GeolocationIcon.svg';

interface selectProps {
  isLocatonImage?: boolean;
  onSelect: (option: Option) => void;
  selected: Option;
  values: Array<{
    title: string;
    id: string | number;
  }>;
}

export interface Option {
  id: string | number;
  title: string;
}

const Select = ({ isLocatonImage = true, onSelect, selected, values }: selectProps) => {
  const [showList, setShowList] = useState(false);
  const [header, setHeader] = useState(selected ?? values[0]);
  const [options, setOptions] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  console.log('selected', selected);
  useEffect(() => {
    setHeader(selected || values[0]);
  }, [selected, values]);

  useEffect(() => {
    if (!values?.length) return;
    setOptions((s) => {
      let copy = [...s];
      copy = values?.filter((l) => l.id !== selected?.id);
      return copy;
    });
  }, [selected?.id, values]);

  useOutsideClick(ref, () => {
    setShowList(false);
  });

  useEffect(() => {
    if (!header) return;
    setShowList(false);
    setOptions((s) => {
      let copy = [...s];
      copy = values.filter((l) => l.id !== selected?.id);
      return copy;
    });
  }, [header, selected?.id, values]);

  const onClick = (option: any) => {
    onSelect(option);
    setHeader(option);
  };

  return (
    <>
      <div ref={ref} className={classNames('', { [styles.opened]: showList })}>
        <div className={styles.cover}>
          <button
            type="button"
            className={classNames('', {}, [styles.header, styles.button])}
            style={{
              background: showList ? 'white' : '',
              borderTop: showList ? '1px solid #eee7f3' : '',
              borderRight: showList ? '1px solid #eee7f3' : '',
              borderLeft: showList ? '1px solid #eee7f3' : ''
            }}
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <span className={styles.headerText}>
              {isLocatonImage && <Icon Svg={GeolocationIcon} width={20} height={20} />}

              {header?.title}
            </span>

            <Icon
              Svg={CaretDownIcon}
              className={classNames(styles.caretIcon, {
                [styles['caret-up']]: showList
              })}
            />
          </button>

          {showList && (
            <div className={styles.list}>
              {options.map((option: any) => (
                <button
                  className={classNames('', {}, [styles.button, styles.item])}
                  key={option.id}
                  onClick={() => {
                    onClick(option);
                  }}
                >
                  <span className={styles.text}>{option.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Select);
