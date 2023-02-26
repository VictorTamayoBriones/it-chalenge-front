import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useContext } from 'react';
import { ContextUser } from '../../context/ContextUser';
import InputsToUpdatePassword from './components/Inputs/InputsToUpdatePassword';

function FormToUpdatePassword() {
  
    const { isUpdatingPassword, mountUsers } = useContext(ContextUser)

  return (
    <>
    <Modal isOpen={isUpdatingPassword} onClose={mountUsers}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Password</ModalHeader>
        <ModalBody>  
          <InputsToUpdatePassword/>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}

export default FormToUpdatePassword