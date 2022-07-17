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
  Text,
} from '@chakra-ui/react';

const Dashboard = () => {
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

      </Box>
    </Container>
  );
};

export default Dashboard;
