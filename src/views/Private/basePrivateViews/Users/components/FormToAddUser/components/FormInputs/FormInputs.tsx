import Selector from '@/components/Selector/Selector'
import { ArrOfObjectsToSingleObject } from '@/utils'
import { Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { INPUTS_TO_RENDER } from '../../models/InputsToRender'

import { useAddUser } from '../../hooks/useAddUser'
import { updateDataAlert } from '@/redux/baseStates/AlertToDelete/AlertToDeleteSlice';
import { AppStore } from '@/redux/store';
import { ContextUser } from '../../../../context/ContextUser';

function FormInputs() {
  
  const dispatch = useDispatch()

  const { handleIsCreating, mountUsers } = useContext(ContextUser)

  const selectorData = useSelector((store:AppStore)=>store.selectorData)

  const data = INPUTS_TO_RENDER.map(input => ({[input.name]: input.value}))

  let INITIAL_STATE:any = ArrOfObjectsToSingleObject(data)

  const [inputsValue, setInputsValue] = useState<any>(INITIAL_STATE)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputsValue({...inputsValue, [e.target.name]:e.target.value})
  }

  const addUser = useAddUser()

  const handleSubmitNewUser = async (e:React.FormEvent)=>{
    e.preventDefault();
    const dataNewUser = {
      ...inputsValue,
      role_id: selectorData
    }
    addUser(dataNewUser)
    mountUsers()
    handleIsCreating(false)
    dispatch(updateDataAlert({status:false, title:``, body: "", toDelete:{id:'', section:''} }))
  }

  return (
    <form onSubmit={(e)=>handleSubmitNewUser(e)} >
    {
        INPUTS_TO_RENDER.map((input:any)=>{
            if(input.name === 'role_name'){
              return(
                <Selector key={input.id} show="roles" /> 
              )
            }
            return(
              <FormControl key={input.id} marginBottom="10" >
                <FormLabel>{input.form_label}</FormLabel>
                <Input type={input.type} name={input.name} value={inputsValue[`${input.name}`]} required={ input.isRequired } onChange={(e)=>handleChange(e)} />
              </FormControl>
            )
        })
    }
    <Container p="0" m="0" display="flex" justifyContent="flex-end" >
        <Button variant="ghost" colorScheme='red'  mr={3} onClick={()=>handleIsCreating(false)}>
            Cancel
        </Button>
        <Button type="submit" variant='solid'colorScheme="blue" >Save</Button>
    </Container>
    </form>
  )
}

export default FormInputs