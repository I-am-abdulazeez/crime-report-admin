import { Button, Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CrimeHeading from 'src/components/CrimeHeading/CrimeHeading';

import { bgGradient, buttonGradient, overlayBg } from 'src/constants';

const Home = () => {
  return (
    <Center
      color={'white'}
      bg={overlayBg}
      height={'100vh'}
      flexDir={'column'}
      bgSize={'cover'}
    >
      <CrimeHeading text={'Welcome to our Admin page.'} />
      <Button
        bgGradient={bgGradient}
        _hover={buttonGradient}
        _focus={buttonGradient}
        color={'#000'}
        as={Link}
        to={'/login'}
      >
        Admin Login
      </Button>

      <Heading fontSize={'sm'} mt={'2rem'}>
        designed by Olagbile Abdul Samad
      </Heading>
    </Center>
  );
};

export default Home;
