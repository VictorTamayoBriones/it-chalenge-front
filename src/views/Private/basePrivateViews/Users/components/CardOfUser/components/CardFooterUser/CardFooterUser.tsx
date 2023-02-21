import { Icons } from "@/assets"
import { updateDataAlert } from "@/redux/baseStates/AlertToDelete/AlertToDeleteSlice";
import { CardFooter, IconButton, Tooltip } from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { ContextUser } from '../../../../context/ContextUser';

interface Props{
    userData: any
}

function CardFooterUser({userData}:Props) {
    const dispatch = useDispatch()
    const handleDelete = (id:string, name:string)=> {
        dispatch(updateDataAlert({status:true, title:`Delete ${name}`, body: "Are you sure? You can't undo this action afterwards.", toDelete:{id, section:'users'} }))
    }

    const { isEditing, handleIsEditing, handleIsUpdatingPassword } = useContext(ContextUser)

  return (
    <CardFooter>

        <Tooltip label="Delete User" >
            <IconButton aria-label='Delete user' colorScheme="red" variant="ghost" onClick={()=>handleDelete(userData.id, userData.email)} >
                <Icons.DELETE/>
            </IconButton>
        </Tooltip>

        <Tooltip label="Edit User"  >
            <IconButton aria-label="Edit User" colorScheme="blue" variant="ghost" marginX="1" onClick={()=>handleIsEditing(!isEditing, userData)} >
                <Icons.EDIT/>
            </IconButton>
        </Tooltip>

        <Tooltip label="Change Password" >
            <IconButton  onClick={()=>handleIsUpdatingPassword(true, userData)} aria-label="Change Password" colorScheme="teal" variant="ghost" >
                <Icons.KEY/>
            </IconButton>
        </Tooltip>

    </CardFooter>
  )
}
export default CardFooterUser