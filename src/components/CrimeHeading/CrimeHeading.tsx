import { Heading, Text } from '@chakra-ui/react';

type CrimeHeadingProps = {
  text: string;
};

const CrimeHeading: React.FC<CrimeHeadingProps> = ({ text }) => {
  return (
    <>
      <Heading fontSize={'2xl'} fontWeight={'black'}>
        CrimeReport.
      </Heading>
      <Text my={'0.6rem'} fontSize={'lg'}>
        {text}
      </Text>
    </>
  );
};

export default CrimeHeading;
