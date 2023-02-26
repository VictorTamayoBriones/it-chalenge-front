import { ArrToObjec, toCapitalizefirstLetter } from '@/utils'
import { Button, FormControl, FormLabel, Input, Switch, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { ContextTableData } from '../../../../context/ContextTableData';
import { useUpdateElement } from '@/hooks/updateElement/useUpdateElement';
import { useParams } from 'react-router-dom';
import { INPUTS_TO_EXIST } from './config';
import { motion } from 'framer-motion';

interface Props{
  rightBar: any,
  isEditting: boolean
}

function FormToUpdate({rightBar, isEditting}:Props) {
  const [formValues, setFormValues]=useState<any>({})
  const updateElement = useUpdateElement()
  const { dataOfTableData } = useContext(ContextTableData)
  const { idContent } = useParams()
  const sectionToAdd = dataOfTableData?.centerBar?.title.split(' ')[0].trim()
  
  useEffect(()=>{
    
    setFormValues(ArrToObjec(Object.entries(rightBar.data)
      .filter((input:any)=> INPUTS_TO_EXIST[sectionToAdd].includes(input[0]))
        .map((item:any)=>({[item[0]]:item[1]}))
    ))

  },[])

  const handleChange = (e:React.ChangeEvent<any>)=>{
    
    if(e.target.name === 'is_active'){

      if(e.target.checked){      
        setFormValues({
          ...formValues,
          is_active:e.target.checked
        })

      }else{
        setFormValues({
          ...formValues,
          is_active: false,
        })
      }

    }else{
      
      setFormValues({
        ...formValues,
        [e.target.name]:e.target.value
      })
    }
  }
  

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    if(idContent){
      if(sectionToAdd === 'actions'){
        if(formValues?.action_name === rightBar?.data?.action_name){
          const data = {
            ...formValues,
            action_name: ''
          }
          updateElement(sectionToAdd, idContent, data)
        }else{
          updateElement(sectionToAdd, idContent, formValues)
        }
      }else{
        updateElement(sectionToAdd, idContent, formValues)
      }
    }
    
  }
  
  return (
    <motion.form initial={{ opacity:0 }} animate={{opacity:1}} onSubmit={(e)=>handleSubmit(e)} >
    {
      Object.entries(formValues).length > 0 &&
      Object.entries(rightBar.data).filter((input:any)=> INPUTS_TO_EXIST[sectionToAdd].includes(input[0]))
      .map((item:any, i:number)=>{
        if( item[0] != 'id' && item[0] != 'module_id' && item[0] != 'module_name' ){
          if(item[0] === 'description'){
            return(
              <FormControl className={isEditting ? 'inputNormal' : 'inputOnlyRead'} key={`${item}-${i}`} marginBottom="10" >
                <FormLabel>{toCapitalizefirstLetter(item[0])}</FormLabel>
                <Textarea placeholder='Some words to describe...' name={item[0]} value={formValues[item[0]]} maxHeight="100px" onChange={(e)=>handleChange(e)}/>
              </FormControl>
            )
          }
          if(item[0] === 'is_active'){
            
            return(
              <FormControl className={isEditting ? 'inputNormal' : 'inputOnlyRead'} key={`${item}-${i}`} marginBottom="10" >
                <FormLabel>{item[1] ? 'Disable' : 'Enable'}</FormLabel>
                <Switch id='email-alerts' name="is_active" isChecked={formValues[`${item[0]}`]} onChange={(e)=>handleChange(e)} />
              </FormControl>
            )
          }
          return(
            <FormControl className={isEditting ? 'inputNormal' : 'inputOnlyRead'} key={`${item}-${i}`} marginBottom="10" >
              <FormLabel>{toCapitalizefirstLetter(item[0])}</FormLabel>
              <Input type="text" name={item[0]} value={formValues[item[0]]} maxLength={ 125 } minLength={ 5 } required={ true } onChange={(e)=>handleChange(e)} />
            </FormControl>
          )
        }   
      })
    }
    {
      isEditting &&
      <Button type='submit' width="100%" colorScheme='blue'>Update</Button>
    }
    </motion.form> 
  )
}

export default FormToUpdate