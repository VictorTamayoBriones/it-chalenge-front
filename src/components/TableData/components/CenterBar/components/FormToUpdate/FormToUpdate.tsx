import Selector from '@/components/Selector/Selector'
import { usePath } from '@/hooks'
import { Button, Container, FormControl, FormLabel, Input, Switch, Textarea } from '@chakra-ui/react'
import React from 'react'
import { INPUTS_TO_RENDER } from './models/InputsToRender/InputsToRender'
import { useContext } from 'react';
import { ContextCenterBar } from '../../context/ContextCenterBar';
import {useState} from 'react';
import { useToUpdateFile } from './hooks/useToUpdateFile';
import { useDispatch } from 'react-redux';
import { updateSectionToReload } from '@/redux/baseStates/needToReload/needToReload'
import { useUpdateElement } from '@/hooks/updateElement/useUpdateElement'
import { motion } from 'framer-motion';

export default function FormToUpdate() {

    const { PATH_NAME }  = usePath()

    const INPUTS = INPUTS_TO_RENDER[`${PATH_NAME}`]

    const { fileToUpdate, handleIsEditing } = useContext(ContextCenterBar)

    const [formValues, setFormValues]=useState(fileToUpdate)

    const updateFile = useToUpdateFile()

    const dispatch = useDispatch()

    const updateElement = useUpdateElement()

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        if(formValues){

            updateElement(PATH_NAME, fileToUpdate.id, formValues)
            dispatch(updateSectionToReload(PATH_NAME))
            handleIsEditing(false)
            
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    
    return (
        <Container padding={25} >
            <motion.form initial={{ opacity:0 }} animate={{opacity:1}} onSubmit={(e)=>handleSubmit(e)} >
                {   
                    fileToUpdate &&
                    formValues &&
                    INPUTS.map((input:any)=>{
                        if( input.name === 'description' ){
                            return(
                                <FormControl key={input.id} marginBottom="10" >
                                    <FormLabel>{input.form_label}</FormLabel>
                                    <Textarea name={input.name} placeholder={input.helper_text} value={formValues[`${input.name}`]} onChange={(e)=>handleChange(e)} />
                                </FormControl>
                            )
                        }
                        if( input.name === 'is_active' ){
                            return(
                                <FormControl w="100%" key={input.id} display='flex' alignItems='flex-star' mb='25px'>
                                    <FormLabel w="max-content" htmlFor='status' >
                                      {input.helper_text}
                                    </FormLabel>
                                    <Switch id='status' />
                                </FormControl>
                            )
                        }
                        if( input.name === 'module_id' ){
                            return(
                                <Selector show={input.form_label} />
                            )
                        }
                        return(
                            <FormControl key={input.id} marginBottom="10" >
                                <FormLabel>{input.form_label}</FormLabel>
                                <Input type={input.type} name={input.name} value={formValues[`${input.name}`]} maxLength={ input.max_length } minLength={ input?.min_length } required={ input.isRequired } onChange={(e)=>handleChange(e)} />
                            </FormControl>
                        )
                    })
                }

                <Button type='submit' colorScheme="blue" w="100%" >Update</Button>
            </motion.form>
        </Container>
    )
}
