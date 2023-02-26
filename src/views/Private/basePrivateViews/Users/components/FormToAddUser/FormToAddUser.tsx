import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useContext } from 'react';
import { ContextUser } from "../../context/ContextUser";

import FormInputs from "./components/FormInputs/FormInputs";

function FormToAddUser() {
    
  const { isCreating, mountUsers } = useContext(ContextUser)

  return (
    <>
    <Modal isOpen={isCreating} onClose={mountUsers}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new user</ModalHeader>
        <ModalBody>  
          <FormInputs/>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}
export default FormToAddUser