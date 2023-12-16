import { Modal } from 'shared/ui/Modal/Modal';
import styles from './CreateCategoryModal.module.scss';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';

// import { createType } from '../../http/deviceAPI';

interface CreateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const CreateCategoryModal = ({ isOpen, onClose }: CreateCategoryModalProps) => {
  const createCategory = (event: any) => {
    event.preventDefault();

    const { name } = event.target;

    if (!name.value) {
      alert('Название категории не может быть пстой строкой');
    }

    // createType({ name: name.value })
    //   .then((data) => {
    //     alert(`Успешное создание категории ${data.name}`);
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.message);
    //   });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.categoryModal}>
      <form className={styles.form} onSubmit={createCategory}>
        <Input name="name" placeholder="Категория" />

        <Button type="submit">Создать категорию</Button>
      </form>
    </Modal>
  );
};

export default CreateCategoryModal;
