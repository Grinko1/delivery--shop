import { useState } from 'react';
import styles from './styles.module.scss';
import { AREAS_OPTIONS } from './constants';
import AreasList from './AreasList';
import NavLinksList from './NavLinksList';
import Profile from './Profile';
import Logo from '../Logo';
import Select from '../Select';
import BasketWidget from '../BasketWidget';
import BonusCardButton from '../BonusCardButton';
import ModalNew from '../ModalNew';
import CatalogIcon from 'shared/assets/icons/CatalogIcon.svg';
import LogoIcon from 'shared/assets/icons/LogoIcon.svg';
import GeolocationIcon from 'shared/assets/icons/GeolocationIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import PhoneIcon from 'shared/assets/icons/PhoneIcon.svg';
import { Icon } from '../Icon/Icon';

const Information = () => {
  const [selectedArea, setSelectedArea] = useState<any>({
    title: 'мкр. Транспортный'
  });

  const [areasListIsOpen, setAreasListIsOpen] = useState<boolean>(false);
  const [navLinksListIsOpen, setNavLinksListIsOpen] = useState<boolean>(false);
  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);

  // const { push } = useRouter();
  return (
    <>
      <div className={styles.container}>
        <Logo />

        <Icon
          Svg={CatalogIcon}
          className={styles['catalog-icon']}
          onClick={() => {
            setNavLinksListIsOpen(true);
          }}
        />
        <Icon Svg={LogoIcon} className={styles.logo} />
        <div className={styles['geolocation-block']}>
          <Select
            values={AREAS_OPTIONS}
            onSelect={(packet) => {
              setSelectedArea(packet);
            }}
            selected={selectedArea}
          />
        </div>

        <Icon
          Svg={GeolocationIcon}
          onClick={() => {
            setAreasListIsOpen(true);
          }}
          className={styles.geolocationIcon}
        />

        <BasketWidget className={styles.basket} />
        <div className={styles['phone-block']}>
          <Icon Svg={PhoneIcon} />
          <div>
            <a className={styles['phone-block_number']} href="tel:+79141234567" target="_blanc">
              8 914 123 45 67
            </a>

            <span className={styles['phone-block_description']}>
              Горячая линия онлайн <strong>24/7</strong>
            </span>
          </div>
        </div>
        <BonusCardButton className={styles.button} />
        <Icon
          Svg={ProfileIcon}
          className={styles.profileIcon}
          onClick={() => {
            setProfileIsOpen(true);
          }}
        />
      </div>

      <ModalNew
        isOpen={areasListIsOpen}
        onClose={() => {
          setAreasListIsOpen(false);
        }}
        containerClassName={styles.modal}
      >
        <AreasList
          selectedArea={selectedArea}
          setSelectedArea={(value) => {
            setSelectedArea(value);
            setAreasListIsOpen(false);
          }}
        />
      </ModalNew>

      <ModalNew
        isOpen={navLinksListIsOpen}
        onClose={() => {
          setNavLinksListIsOpen(false);
        }}
        containerClassName={styles.ModalNew}
      >
        <NavLinksList
          onClose={() => {
            setNavLinksListIsOpen(false);
          }}
        />
      </ModalNew>

      <ModalNew
        isOpen={profileIsOpen}
        onClose={() => {
          setProfileIsOpen(false);
        }}
        containerClassName={styles.profileModalNew}
      >
        <Profile
          onClose={() => {
            setProfileIsOpen(false);
          }}
        />
      </ModalNew>
    </>
  );
};

export default Information;
