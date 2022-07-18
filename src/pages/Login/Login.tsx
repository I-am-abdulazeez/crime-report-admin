import { useEffect } from 'react';

import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { SubmitHandler, useForm } from 'react-hook-form';

import CrimeHeading from 'src/components/CrimeHeading/CrimeHeading';

import { useStore } from 'src/store';
import { formData } from 'src/types';
import { overlayBg, bgGradient, buttonGradient } from 'src/constants';

const Login = () => {
  const { register, handleSubmit } = useForm<formData>();

  const { isLoadingUser, loginAdmin, user } = useStore();

  useEffect(() => {
    console.log('useEffect', user);
  }, []);

  const handleUserLogin: SubmitHandler<formData> = (data) => {
    const { email, password } = data;
    loginAdmin({ email, password });
  };

  return (
    <Center bg={overlayBg} height={'100vh'} flexDir={'column'} bgSize={'cover'}>
      <CrimeHeading text={'Welcome, Admin'} />
      <Container maxWidth={'350px'}>
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <FormControl my={3}>
            <FormLabel color={'white'}>Admin Email Address</FormLabel>
            <Input
              bgColor={'white'}
              borderRadius={'md'}
              type="email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder={'Email Address'}
            />
          </FormControl>
          <FormControl my={3}>
            <FormLabel color={'white'}>Admin Password</FormLabel>
            <Input
              bgColor={'white'}
              borderRadius={'md'}
              type="text"
              {...register('password', {
                required: true,
              })}
              placeholder={'Password'}
            />
          </FormControl>
          <Box>
            <Button
              type={'submit'}
              width={'full'}
              mt={4}
              bgGradient={bgGradient}
              _hover={buttonGradient}
              _focus={buttonGradient}
              color={'#000'}
              isLoading={isLoadingUser}
            >
              Login
            </Button>
          </Box>
        </form>
      </Container>
    </Center>
  );
};

export default Login;
