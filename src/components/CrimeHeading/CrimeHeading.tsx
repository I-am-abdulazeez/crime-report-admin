import { Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type CrimeHeadingProps = {
  text: string;
};

const CrimeHeading: React.FC<CrimeHeadingProps> = ({ text }) => {
  const navigate = useNavigate();
  return (
    <>
      <Heading
        onClick={() => navigate('/')}
        cursor={'pointer'}
        fontSize={'2xl'}
        color={'white'}
        fontWeight={'black'}
      >
        CrimeReport.
      </Heading>
      <Text my={'0.6rem'} color={'white'} fontSize={'lg'}>
        {text}
      </Text>
    </>
  );
};

export default CrimeHeading;
