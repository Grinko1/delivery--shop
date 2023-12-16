import { useState } from 'react';
import styles from './Admin.module.scss';
import Button from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import CreateCategoryModal from 'entities/admin/ui/CreateCategoryModal/CreateCategoryModal';
import CreateProductModal from 'entities/admin/ui/CreateProductModal/CreateProductModal';

const Admin = () => {
  //   const { user } = useContext(UserContext);
  //   const { push } = useRouter();
  const user = { role: 'ADMIN' };
  const push = (a: any) => {};

  const [isOpenCreateCategory, setIsOpenCreateCategory] = useState<boolean>(false);

  const [isOpenCreateProduct, setIsOpenCreateProduct] = useState<boolean>(false);

  if (user.role !== 'ADMIN') {
    push('/');

    return <></>;
  }
  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          setIsOpenCreateCategory(true);
        }}
      >
        Создать категорию
      </Button>

      <Button
        onClick={() => {
          setIsOpenCreateProduct(true);
        }}
      >
        Создать продукт
      </Button>

      <Button
        className={styles.toMain}
        onClick={() => {
          push('/');
        }}
      >
        На главную
      </Button>

      <CreateCategoryModal
        isOpen={isOpenCreateCategory}
        onClose={() => {
          setIsOpenCreateCategory(false);
        }}
      />

      <Modal
        isOpen={isOpenCreateProduct}
        onClose={() => {
          setIsOpenCreateProduct(false);
        }}
        className={classNames(styles.createProductModal, {}, [styles.createProductModalContainer])}
      >
        <CreateProductModal />
      </Modal>
    </div>
  );
};

export default Admin;
