import {
  Avatar,
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Tab,
  TabList,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';


import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

import AllCrimesTab from 'src/components/AllCrimesTab/AllCrimesTab';

type DashboardProps = {
  crimes: QueryDocumentSnapshot<DocumentData>[];
  isLoading: boolean;
};

const Dashboard: React.FC<DashboardProps> = ({ crimes, isLoading }) => {
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
            <AllCrimesTab crimes={crimes} isLoading={isLoading} />
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Dashboard;
