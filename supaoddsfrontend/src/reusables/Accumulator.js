import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {getAccumulationUrl} from '../api/Api';
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
  Button,
} from '@chakra-ui/react';
import './Accumulator.css';

function Accumulator() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  const [data, setData] = useState([])

  const btnRef = React.useRef(null);

useEffect(() => {
  const fetchAccumulation = async () => {
    try {
      const response = await axios.get(getAccumulationUrl);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  fetchAccumulation();
}, [])
// console.log(data
  return (
    <>
      <Button mt={3} ref={btnRef} onClick={onOpen}>
        Accumulator
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        size="xl"
      >
        <ModalOverlay className='modal-overlay' />
        <ModalContent>
          <ModalHeader className='modal-header'>Accumulated Games</ModalHeader>
          <ModalCloseButton className='closebtn' />
          <ModalBody className='modal-body'>
            Selected for Sun 27 Aug, 2023
            
            {/* Accumulated games table */}
            <table>
                <tr>
                    <th>Teams</th>
                    <th>Outcomes</th>
                </tr>
                {data.map((item)=>{
                  return (<tr key={item._id}>
                  <td>{item.nameOfLeague}</td>
                    <td>{item.outcome}</td>
                  </tr>)
                })}
                {/* // <tr>
                //     <td>Man United v Chelsea</td>
                //     <td>GG</td>
                // </tr>
                // <tr>
                //     <td>Brentford v Fulham</td>
                //     <td>1</td>
                // </tr>
                // <tr>
                //     <td>Napoli v Atalanta</td>
                //     <td>X</td>
                // </tr>
                // <tr>
                //     <td>Sporting v Benfica</td>
                //     <td>2</td>
                // </tr>
                // <tr>
                //     <td>Young Boys v FC Zurich</td>
                //     <td>1x</td>
                // </tr>
                // <tr>
                //     <td>Atletic Bilbao v Levante</td>
                //     <td>X</td>
                // </tr> */}
                </table>


            <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
              {/* Render radio buttons for scroll behavior */}
             
            </RadioGroup>
            {/* Place accumulated games list here */}
          </ModalBody>
          <ModalFooter>
            <Button className='footerbtn' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Accumulator;
