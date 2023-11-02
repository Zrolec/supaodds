import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  RadioGroup,
  Button, Stack, Radio
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Grid } from '@chakra-ui/react';
import './Plans.css';
import Basicplanimage from '../assets/images/Basicplanimage.png';

function Plans() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  // endpoint logic

  const btnRef = React.useRef(null);

 
  return (
    <>
    <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
          <Radio value='inside'></Radio>
        </Stack>
      </RadioGroup>

      <Button mt={3} ref={btnRef} onClick={onOpen}>
        Plans
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        // size="xl"
      >
        <ModalOverlay className='modal-overla' />
        <ModalContent>
          <ModalHeader className='modal-header'><b>Supaodds Subscription Plans</b></ModalHeader>
          <ModalCloseButton className='closebtn' />
          <ModalBody className='modal-body'>
            {/* card group containing the subscription plans */}
            {/* templateColumns='repeat(auto-fill, minmax(200px, 1fr))' */}

            
            <Grid className='grid-container' 
            >
                <Card className='card-look'>
                    <CardHeader>
                    <Heading size='md'><b>Monthly Plan</b></Heading>
                    </CardHeader>
                    <CardBody>
                    <img className='Bas'
                        src={Basicplanimage}
                        alt='Basicplanimage' 
                    />
                    <h1 className='Nk'>N10K</h1>
                    </CardBody>
                    <CardFooter>
                    <Button className='btncolor'>Subscribe</Button>
                    </CardFooter>
                </Card>
                <Card className='card-look'>
                    <CardHeader>
                    <Heading size='md'><b>Quarterly Plan</b></Heading>
                    </CardHeader>
                    <CardBody>
                    <img className='Bas'
                        src={Basicplanimage}
                        alt='Basicplanimage' 
                    />
                    <h1 className='Nk'>N35K</h1>
                    </CardBody>
                    <CardFooter>
                    <Button className='btncolor'>Subscribe</Button>
                    </CardFooter>
                </Card>
                <Card className='card-look'>
                    <CardHeader>
                    <Heading size='md'><b>Yearly Plan</b></Heading>
                    </CardHeader>
                    <CardBody>
                    <img className='Bas'
                        src={Basicplanimage}
                        alt='Basicplanimage' 
                    />
                    <h1 className='Nk'>N100K</h1>
                    </CardBody>
                    <CardFooter>
                    <Button className='btncolor'>Subscribe</Button>
                    </CardFooter>
                </Card>
                </Grid>
            


            
            {/* Place accumulated games list here */}
          </ModalBody>
          <ModalFooter>
            {/* <Button className='footerbtn' onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Plans;
