import { Button, Container } from '@chakra-ui/react'
import { usePermissions } from '../../../../../../hooks/usePermissions';
import { useContext } from 'react';
import { ContextUser } from '../../context/ContextUser';

function ButtonsToHandleUsers() {

    const { currentPermissions } = usePermissions()
    
    const { handleIsCreating } = useContext(ContextUser)

    return (
        currentPermissions.includes('create') &&
        <Container mx={0} my={5} >
            <Button colorScheme="blue" onClick={() => handleIsCreating(true)} >Add user</Button>
        </Container>
    )
}

export default ButtonsToHandleUsers