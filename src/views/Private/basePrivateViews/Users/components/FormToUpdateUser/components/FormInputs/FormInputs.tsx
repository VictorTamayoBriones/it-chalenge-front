import Selector from '@/components/Selector/Selector';
import { useUpdateElement } from '@/hooks/updateElement/useUpdateElement';
import { AppStore } from '@/redux/store';
import { ArrOfObjectsToSingleObject } from '@/utils';
import { Button, Container, FormControl, FormLabel, Input, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContextUser } from '../../../../context/ContextUser';
import { INPUTS_TO_RENDER } from '../../models/InputsTorender'


function FormInputs() {


    const { handleIsEditing } = useContext(ContextUser)

    const { userToUpdate } = useContext(ContextUser)
    const updateElement = useUpdateElement()
    const dataSelector = useSelector((store:AppStore)=>store.selectorData)

    const data = INPUTS_TO_RENDER.map(input => ({[input.name]: input.value}))

    let INITIAL_STATE:any = ArrOfObjectsToSingleObject(data)

    const [inputsValue, setInputsValue] = useState<any>({
        ...INITIAL_STATE,
        is_active: userToUpdate.is_active,
        email: userToUpdate.email,
        role_id: userToUpdate.role_id
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'is_active'){

            if(e.target.checked){
                setInputsValue({
                    ...inputsValue,
                    is_active:e.target.checked
                })
            }else{
                setInputsValue({
                    ...inputsValue,
                    is_active:false
                })
            }

        }else{
            setInputsValue({...inputsValue, [e.target.name]:e.target.value})
        }
    }

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        
        const data={
            ...inputsValue,
            role_id: dataSelector
        }
        
        updateElement('users', userToUpdate.id, data)
        handleIsEditing(false)
    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} >
        {
            INPUTS_TO_RENDER.map((input:any)=>{
                if( input.name === 'is_active' ){
                    
                    return(
                        <FormControl key={input.id} display='flex' alignItems='center' mb="10">
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                {
                                    inputsValue?.is_active ?
                                    'Disable this user?' 
                                     :
                                    'Enable this user?'
                                }
                            </FormLabel>
                            <Switch name='is_active' isChecked={inputsValue?.is_active} id='email-alerts' onChange={(e)=>handleChange(e)} />
                        </FormControl>
                    )
                }

                if( input.name === 'role_name' ){
                    
                    return(
                        <Selector key={input.id} show='roles' showValueById={userToUpdate.role_id}/>
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
            <Button variant="ghost" colorScheme='red'  mr={3} onClick={()=>handleIsEditing(false)}>
                Cancel
            </Button>
            <Button type="submit" variant='solid'colorScheme="blue" >Save</Button>
        </Container>
    </form>
  )
}

export default FormInputs