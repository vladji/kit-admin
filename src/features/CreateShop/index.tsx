import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { MainButton } from 'shared/ui/Buttons/MainButton.tsx';
import { Modal } from 'shared/ui/Modal';

export const CreateShop = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MainButton size="compact" onClick={toggleModal}>
        <FormattedMessage defaultMessage="Создать магазин" />
      </MainButton>
      <Modal show={showModal} onClose={toggleModal}>
        <span>hello</span>
      </Modal>
    </>
  );
};
