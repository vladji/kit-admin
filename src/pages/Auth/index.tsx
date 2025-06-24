import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TextField } from 'shared/ui/SubjectFields/TextField.tsx';
import { Typography } from 'shared/ui/Typography';
import type { AuthProps } from './types.ts';
import { EyeButton } from './ui/EyeButton.tsx';
import { Header } from './ui/Header.tsx';
import { MainButton } from '../../shared/ui/Buttons/MainButton.tsx';

export const AuthPage = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<AuthProps>({
    mode: 'onSubmit',
  });

  const onSubmit = (values: AuthProps) => {
    return null;
  };

  return (
    <>
      <Header />
      <div className="screen-padding flex-col-gap-7 flex-1 items-center pt-[10%]">
        <Typography as="h2" type="h2">
          <FormattedMessage defaultMessage="Вход в кабинет" />
        </Typography>
        <form className="flex-col-gap-5" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            control={control}
            error={errors.name}
            fieldName="name"
            label={<FormattedMessage defaultMessage="Имя" />}
            required
          />
          <TextField
            type={hidePassword ? 'password' : 'text'}
            control={control}
            error={errors.password}
            fieldName="password"
            label={<FormattedMessage defaultMessage="Пароль" />}
            endAdornment={
              <EyeButton isHide={hidePassword} onClick={toggleHidePassword} />
            }
            required
          />
          <MainButton className="w-full">
            <FormattedMessage defaultMessage="Вход" />
          </MainButton>
        </form>
      </div>
    </>
  );
};
