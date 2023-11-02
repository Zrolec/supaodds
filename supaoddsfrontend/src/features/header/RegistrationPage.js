import React from 'react';
import './RegistrationPage.css';
import SigninPage from './SigninPage';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
  useDisclosure
} from '@chakra-ui/react';

function RegistrationPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // Function to handle link click and close the modal
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <button onClick={onOpen}>Subscribe</button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay className='modal-size' />
        <ModalContent className='modal-content'>
          <ModalHeader className='modal-header'>Create your account</ModalHeader>
          <ModalCloseButton className='modal-close' />
          <ModalBody pb={6}>
            {/* ... form fields ... */}
            <FormControl>
              <FormLabel className='form-label'>First name</FormLabel>
              <Input className='input-box' ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input className='input-box' placeholder='Last name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input className='input-box' placeholder='Enter email' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input className='input-box' placeholder='Enter password' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Confirm password</FormLabel>
              <Input className='input-box' placeholder='Confirm password' />
            </FormControl>

          </ModalBody>

          <Button className='submitbtn'>Submit</Button>

          <ModalFooter>
            <section>
              {/* Add an onClick event to the anchor tag */}
              <p>
                Already have an account?{' '}
                <a href="signin" >signin
                  <SigninPage />
                </a>
              </p>
            </section>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegistrationPage;



{/* <Button onClick={handleLinkClick, onOpen}>Signin</Button> */}







