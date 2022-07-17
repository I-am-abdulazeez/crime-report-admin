import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

type DashboardProps = {
  crimes: QueryDocumentSnapshot<DocumentData>[];
  isLoading: boolean;
};

const Dashboard: React.FC<DashboardProps> = ({ crimes }) => {
  console.log(crimes);
  return (
    <Container maxWidth={'container.lg'}>
      <HStack py={4}>
        <Heading fontSize={'xl'} fontWeight={'black'}>
          CrimeReport.
        </Heading>
        <Badge colorScheme={'purple'} rounded={'lg'}>
          Admin
        </Badge>
        <Spacer />
        <Box>
          <Menu isLazy arrowPadding={4} placement={'right-start'}>
            <MenuButton>
              <Avatar name="Crime Report" size={'sm'} />
            </MenuButton>
            <MenuList fontSize={'sm'}>
              <MenuItem>Dark mode</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>

      <Box mt={7}>
        <Tabs variant={'soft-rounded'} colorScheme={'purple'}>
          <TabList>
            <Tab fontSize={'sm'}>All Crimes</Tab>
            <Tab fontSize={'sm'}>Attended Crimes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TableContainer border={'1px solid #EDF2F7'} rounded={'lg'}>
                <Table variant="striped">
                  <TableCaption>CrimeReport. Data</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Email Address</Th>
                      <Th>Name</Th>
                      <Th>Phone Number</Th>
                      <Th>Crime</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {crimes &&
                      crimes.map((crime) => {
                        const id = crime.id;
                        return (
                          <Tr key={id}>
                            <Td>{crime.data().email}</Td>
                            <Td>{crime.data().name}</Td>
                            <Td>{crime.data().phoneNumber}</Td>
                            <Td>{crime.data().crime}</Td>
                          </Tr>
                        );
                      })}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Phone Number</Th>
                      <Th>Crime</Th>
                      <Th>Email Address</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Dashboard;
