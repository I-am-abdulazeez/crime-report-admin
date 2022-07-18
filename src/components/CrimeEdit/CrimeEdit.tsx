import { EditIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  chakra,
  ModalCloseButton,
  ModalBody,
  SimpleGrid,
  Input,
  ModalFooter,
  ButtonGroup,
  Button,
  Text,
  Select,
  Checkbox,
} from '@chakra-ui/react';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CrimeEdit: React.FC<{ crime: QueryDocumentSnapshot<DocumentData> }> = ({
  crime,
}) => {
  const { register, handleSubmit } = useForm();
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    console.log('useEffect', crime);
  });

  const handleCrimeEdit = (data: any) => {
    const newData = {
      crime: data.crime,
      email: data.email,
      name: data.name,
      phoneNumber: data.phoneNumber,
      attendedTo: data.attendedTo,
    };
    console.log(newData);
  };
  return (
    <Box>
      <IconButton
        aria-label="edit-button"
        size="sm"
        colorScheme="secondary"
        variant="ghost"
        onClick={onOpen}
        icon={<EditIcon />}
      />
      <Modal
        isCentered
        size="lg"
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={'sm'}>
            Edit {crime?.data().name} reported crime on {crime?.data().crime}
          </ModalHeader>
          <ModalCloseButton size="sm" />
          <form onSubmit={handleSubmit(handleCrimeEdit)}>
            <ModalBody>
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing={6}
                textAlign="left"
              >
                <Input
                  {...register('name', {
                    required: true,
                  })}
                  size={'sm'}
                  value={crime?.data().name || ''}
                  type="text"
                  rounded={'md'}
                  placeholder="Name"
                />
                <Input
                  {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  size={'sm'}
                  value={crime?.data().email || ''}
                  type="email"
                  rounded={'md'}
                  placeholder="Email Address"
                />
                <Select
                  {...register('crime')}
                  placeholder="Select crime"
                  value={crime?.data().crime || ''}
                  rounded={'md'}
                  size={'sm'}
                >
                  <option>Armed Robbery</option>
                  <option>Murder</option>
                  <option>Kidnapping</option>
                  <option>Bugling</option>
                  <option>Hijacking</option>
                  <option>Accident</option>
                </Select>
                <Input
                  {...register('phoneNumber', {})}
                  size={'sm'}
                  value={crime?.data().phoneNumber || ''}
                  type="text"
                  rounded={'md'}
                  placeholder="Name"
                />
                <Checkbox
                  {...register('attendedTo')}
                  isChecked={crime?.data().attendedTo || false}
                >
                  Crime is Attended to
                </Checkbox>
              </SimpleGrid>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup mt={4} spacing={2}>
                <Button size="sm" type="submit" variant="solid">
                  Edit Crime
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CrimeEdit;
