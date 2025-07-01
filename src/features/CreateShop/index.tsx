import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { toast } from 'sonner';
import { QueryKeys } from 'app/api/constants.ts';
import { NICKNAME_REGEXP, PASSWORD_REGEXP } from 'shared/lib/regExp.ts';
import { MainButton } from 'shared/ui/Buttons/MainButton.tsx';
import { Modal } from 'shared/ui/Modal';
import { TextField } from 'shared/ui/SubjectFields/TextField.tsx';
import { usePostCreateShop } from './api/usePostCreateShop.ts';
import type { ShopMinimalDataProps } from './types.ts';

export const CreateShop = () => {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { createShop, loading } = usePostCreateShop();

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm<ShopMinimalDataProps>({
    mode: 'onSubmit',
  });

  const onSubmit = async (data: ShopMinimalDataProps) => {
    const response = await createShop(data);

    reset();
    toggleModal();

    if (response.success) {
      toast.success('Success');
      await queryClient.refetchQueries({
        queryKey: [QueryKeys.GetShopsList],
      });
    }
  };

  return (
    <>
      <MainButton size="compact" onClick={toggleModal}>
        <FormattedMessage defaultMessage="Создать магазин" />
      </MainButton>
      <Modal
        title={<FormattedMessage defaultMessage="Новый магазин" />}
        show={showModal}
        onClose={toggleModal}
      >
        <form className="flex-col-gap-6" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex-col-gap-5">
            <TextField
              control={control}
              error={errors.uniqId}
              fieldName="uniqId"
              label={<FormattedMessage defaultMessage="Уникальное имя" />}
              regExpPattern={NICKNAME_REGEXP}
              minLength={8}
              maxLength={32}
              required
            />
            <TextField
              control={control}
              error={errors.rootPass}
              fieldName="rootPass"
              label={<FormattedMessage defaultMessage="Пароль владельца" />}
              regExpPattern={PASSWORD_REGEXP}
              minLength={8}
              maxLength={32}
              required
            />
            <TextField
              control={control}
              error={errors.shopAdminPass}
              fieldName="shopAdminPass"
              label={
                <FormattedMessage defaultMessage="Пароль администратора" />
              }
              regExpPattern={PASSWORD_REGEXP}
              minLength={8}
              maxLength={32}
              required
            />
          </fieldset>
          <MainButton type="submit" disabled={loading}>
            <FormattedMessage defaultMessage="Создать" />
          </MainButton>
        </form>
      </Modal>
    </>
  );
};
