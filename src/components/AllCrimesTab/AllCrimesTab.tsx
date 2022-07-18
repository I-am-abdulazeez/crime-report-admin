import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Center,
  Spinner,
  Tbody,
  Td,
} from '@chakra-ui/react';

import CrimeEdit from '../CrimeEdit/CrimeEdit';

import { useStore } from 'src/store';

const AllCrimesTab = () => {
  const { isLoadingUser, crimes } = useStore();

  return (
    <TableContainer border={'1px solid #EDF2F7'} rounded={'lg'}>
      <Table variant="striped">
        <TableCaption>CrimeReport. Data</TableCaption>
        {isLoadingUser ? (
          <Thead p={4}>
            <Tr>
              <Th>
                <Center>
                  <Spinner emptyColor="gray.200" color="purple.500" />
                </Center>
              </Th>
            </Tr>
          </Thead>
        ) : (
          <Thead>
            <Tr>
              <Th>Email Address</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>
              <Th>Crime</Th>
            </Tr>
          </Thead>
        )}
        <Tbody>
          {crimes &&
            crimes.map((crime) => {
              const id = crime.id;
              return (
                <Tr key={id}>
                  {/* <Td>
                    <CrimeEdit crime={crime} />
                  </Td> */}
                  <Td>{crime.data().email}</Td>
                  <Td>{crime.data().name}</Td>
                  <Td>{crime.data().phoneNumber}</Td>
                  <Td>{crime.data().crime}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AllCrimesTab;
