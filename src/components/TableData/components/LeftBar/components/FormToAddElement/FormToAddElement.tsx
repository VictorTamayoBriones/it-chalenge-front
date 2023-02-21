import { usePath } from "@/hooks/usePathName"
import { Button, Container, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { InputsToCreate } from "./config/InputsToCreate";
import { useState, useEffect, useContext } from 'react';
import { useAddElementFromLeftBar } from '../../hooks/useAddElementFromLeftBar';
import { ContextLeftBar } from '../../context/ContextLeftBar';
import { motion } from 'framer-motion';

function FormToAddElement() {

    const { PATH_NAME } = usePath()
    const { handleIsCreating } = useContext(ContextLeftBar)
    const inputs = Object?.entries(InputsToCreate).filter(item=>item.includes(PATH_NAME))[0][1]
    const addElement  = useAddElementFromLeftBar()
    let INITIAL_STATE:any = {}

    useEffect(()=>{
        inputs.map((item:any)=>{
            return {[item.name]:''}
        }).forEach((item:any)=>{
            INITIAL_STATE={
                ...INITIAL_STATE,
                ...item
            }
        })

        setFormValues(INITIAL_STATE)

    }, [])

    const [formValues, setFormValues]=useState<any>({})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) =>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        addElement(formValues)
        handleIsCreating(false)
    }
    
    return (
        <Container p={25} >
            <motion.form initial={{ opacity:0 }} animate={{opacity:1}} onSubmit={(handleSubmit)}>
                {
                    Object.keys(formValues).length > 0 &&
                    inputs.map((input:any)=>{
                        if( input.name === 'description' ){
                            return(
                                <FormControl key={input.id} marginBottom="10" >
                                    <FormLabel>{input.form_label}</FormLabel>
                                    <Textarea maxHeight={120} name={input.name} placeholder={input.helper_text} onChange={(e)=>handleChange(e)} />
                                </FormControl>
                            )
                        }
                        return(
                            <FormControl key={input.id} marginBottom="10" >
                              <FormLabel>{input.form_label}</FormLabel>
                              <Input placeholder={input.helper_text} type={input.type} name={input.name} value={formValues[`${input.name}`]} required={ input.isRequired } onChange={(e)=>handleChange(e)} />
                            </FormControl>
                        )
                    })
                }
                <Button type="submit" w="100%" colorScheme="blue" >Save</Button>
            </motion.form>
        </Container>
    )
}
export default FormToAddElement