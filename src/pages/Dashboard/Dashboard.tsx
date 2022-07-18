import {
  Avatar,
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import AllCrimesTab from 'src/components/AllCrimesTab/AllCrimesTab';

import { useStore } from 'src/store';

const Dashboard = () => {
  const { isLoadingCrime, crimes, user } = useStore();
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
        <HStack>
          <Avatar name="Admin Report" size={'sm'} />
          <Text>{user?.email}</Text>
        </HStack>
      </HStack>

      <Box mt={7}>
        <Tabs variant={'soft-rounded'} colorScheme={'purple'}>
          <TabList>
            <Tab fontSize={'sm'}>All Crimes</Tab>
            {/* <Tab fontSize={'sm'}>Attended Crimes</Tab> */}
          </TabList>
          <TabPanels>
            <TabPanel>
              <AllCrimesTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Dashboard;
