import { Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useContext } from 'react';
import { ContextUser } from '../../../../context/ContextUser';
import {useState} from 'react';
import { useServiceToUpdatePassword } from '../../../FormToAddUser/hooks/useServiceToUpdatePassword';

function InputsToUpdatePassword() {

    const { handleIsUpdatingPassword, userToUpdate } = useContext(ContextUser)

    const serviceToUpdatePasswords = useServiceToUpdatePassword()

    const[formValues, setFormValues]=useState<any>({new_password: '',confirm_password:''})

    const hanldeChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const onClose = ()=>{
        setFormValues({new_password: '',confirm_password:''})
        handleIsUpdatingPassword(false)
    }

    const handleSubmit = (e:React.FormEvent)=>{
        
        e.preventDefault();

        if( formValues.new_password === formValues.confirm_password ){
        
            const data={
                new_password: formValues.new_password,
                password_confirmation: formValues.confirm_password
            }
            serviceToUpdatePasswords(data, userToUpdate.id)
            onClose()
            
        }

    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} >
        <FormControl marginBottom="10" >
            <FormLabel>New Password</FormLabel>
            <Input type="password" name="new_password" value={formValues.new_password} maxLength={50} minLength={ 8 } required={ true } onChange={(e)=>hanldeChange(e)} />
        </FormControl>

        <FormControl marginBottom="10" >
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" name="confirm_password" value={formValues.confirm_password} maxLength={50} minLength={ 8 } required={ true } onChange={(e)=>hanldeChange(e)} />
        </FormControl>

        <Container p="0" m="0" display="flex" justifyContent="flex-end" >
            <Button variant="ghost" colorScheme='red'  mr={3} onClick={()=>handleIsUpdatingPassword(false)}>
                Cancel
            </Button>
            <Button type="submit" variant='solid'colorScheme="blue" >Update</Button>
        </Container>
    </form>
  )
}

export default InputsToUpdatePassword