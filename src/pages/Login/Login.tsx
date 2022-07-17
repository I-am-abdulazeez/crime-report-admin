import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

import { overlayBg, bgGradient, buttonGradient } from 'src/constants';

const Login = () => {
  return (
    <Center bg={overlayBg} height={'100vh'} flexDir={'column'} bgSize={'cover'}>
      <Heading color={'white'} fontSize={'2xl'} fontWeight={'black'}>
        CrimeReport.
      </Heading>
      <Text color={'white'} my={'0.6rem'} fontSize={'lg'}>
        Welcome, Admin
      </Text>
      <Container maxWidth={'350px'}>
        <FormControl my={3}>
          <FormLabel color={'white'}>Admin Email Address</FormLabel>
          <Input
            bgColor={'white'}
            borderRadius={'md'}
            type="email"
            placeholder={'Email Address'}
          />
        </FormControl>
        <FormControl my={3}>
          <FormLabel color={'white'}>Admin Password</FormLabel>
          <Input
            bgColor={'white'}
            borderRadius={'md'}
            type="text"
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
          >
            Login
          </Button>
        </Box>
      </Container>
    </Center>
  );
};

export default Login;
