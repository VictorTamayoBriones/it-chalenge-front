import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

import { useContext } from 'react';
import { ContextUser } from '../../context/ContextUser';
import FormInputs from './components/FormInputs/FormInputs';

function FormToUpdateUser() {

    const { isEditing, mountUsers } = useContext(ContextUser)

  return (
    <>
    <Modal isOpen={isEditing} onClose={mountUsers}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update user</ModalHeader>
        <ModalBody>  
          <FormInputs/>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )

}

export default FormToUpdateUser