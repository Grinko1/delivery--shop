import Button from '../Button';
import { Icon } from '../Icon/Icon';
import styles from './styles.module.scss';
import AvatarIcon from 'shared/assets/icons/AvatarIcon.svg';
import EditIcon from 'shared/assets/icons/EditIcon.svg';
import ListIcon from 'shared/assets/icons/ListIcon.svg';
import LogoutIcon from 'shared/assets/icons/LogoutIcon.svg';
const Profile = ({ onClose }: { onClose: () => void }) => {
  // const { user, setIsAuth, setUser } = useContext(UserContext);

  // const { push } = useRouter();

  // const handleLogout = () => {
  //   setIsAuth(false);
  //   setUser({});
  //   localStorage.removeItem('token');
  //   // push('/');
  // };
  const user = {
    email: 'sdfsdf',
    role: 'ADMIN'
  };

  return (
    <div className={styles.profileModal_content}>
      {/* <CustomImage src="/AvatarIcon.svg" className={styles.profileModal_content_avatarIcon} alt="AvatarIcon" /> */}
      <Icon Svg={AvatarIcon} className={styles.profileModal_content_avatarIcon} />
      <div className={styles['profileModal_content-user']}>
        Пользователь: <span> {user.email}</span>I
      </div>

      {user.role === 'ADMIN' && (
        <Button
          className={styles['admin-button']}
          onClick={() => {
            // push('/admin');
            onClose();
          }}
        >
          <>
            <Icon Svg={EditIcon} className={styles['profileModal_content_button-icon']} />
            Админ-панель
          </>
        </Button>
      )}

      <div className={styles.buttons}>
        <Button onClick={() => {}}>
          <>
            <Icon Svg={ListIcon} className={styles['profileModal_content_button-icon']} />
            Мои заказы
          </>
        </Button>

        <Button className={styles.profileModal_content_exit} onClick={() => {}}>
          <>
            <Icon Svg={LogoutIcon} className={styles['profileModal_content_button-icon']} />
            Выйти
          </>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
