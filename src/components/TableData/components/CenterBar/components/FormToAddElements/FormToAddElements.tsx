import { animate, motion } from "framer-motion"
import { Button, Container, FormControl, FormLabel, Input, Select, Spinner, Textarea } from "@chakra-ui/react"
import { InputsToCreate } from "./config/InputsToCreate"
import { useContext, useEffect } from 'react';
import { ContextTableData } from '../../../../context/ContextTableData';
import { Switch } from '@chakra-ui/react'
import Selector from "@/components/Selector/Selector";
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../../../../../redux/store';
import { useCreateElement } from '../../../../../../hooks/createElement/createElement';
import { updateAlert } from "@/redux/baseStates/Alert/AlertSlice";
import { AlertModel } from "@/components/Alert";
import { usePath } from "@/hooks";
import { toBeSingular } from '../../../../../../utils/toBeSingular';
import { useParams } from 'react-router-dom';
import { ContextCenterBar } from "../../context/ContextCenterBar";
import { updateSectionToReload } from "@/redux/baseStates/needToReload/needToReload";

function FormToAddElements() {

    const { dataOfTableData:{centerBar} } = useContext(ContextTableData)
    const { fileToUpdate, handleIsCreating } = useContext(ContextCenterBar)
    const { PATH_NAME } = usePath()
    const { id }=useParams()
    const inputs = Object.entries(InputsToCreate).filter(item=>item.includes(centerBar?.title.split(' ')[0]))[0][1]
    const preparetState = inputs.map((input:any)=> ({[input.name]: input.value}))
    const dataSelector = useSelector((store:AppStore)=>store.selectorData)
    const dispatch = useDispatch()
    const createElement = useCreateElement()
    
    let finalObj = {};
    // loop elements of the array 
    for(let i = 0; i < preparetState.length; i++ ) {
        Object.assign(finalObj, preparetState[i]);
    }
    
    const [ formValues, setFormValues ] = useState<any>({})

    useEffect(()=>{
        if(finalObj){
            if(PATH_NAME.includes('modules')){
                const data ={
                    ...finalObj,
                    module_id: id
                }
                setFormValues(data)
            }else{
                setFormValues(finalObj)
            }
        }
        
    }, [])


    const handleChange = (e:React.ChangeEvent<any>) => {
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
        
        if(formValues){
            if(PATH_NAME.includes('modules')){
                const data = {
                    ...formValues,
                    module_id: id
                }
                
                const moduleToAdd = centerBar.title.split(' ')[0]
                createElement(moduleToAdd, data)
                handleIsCreating(false)
                dispatch(updateSectionToReload(PATH_NAME))

            }else{
                const data = {
                    ...formValues,
                    module_id: dataSelector
                }
                if(dataSelector){
                    console.log(data)
                    const moduleToAdd = centerBar.title.split(' ')[0]
                    createElement(moduleToAdd, data)
                    handleIsCreating(false)
                    dispatch(updateSectionToReload(PATH_NAME))
    
                }else{
                    const alert:AlertModel = {
                        isVisible: true,
                        status: 'error',
                        title: 'Bad data',
                        description: 'Please select a module'
                    }
        
                    dispatch(updateAlert(alert))
                    
                }
            }
        }
    }

    return (
        <Container p={25} >
            <motion.form initial={{ opacity:0 }} animate={{opacity:1}}  onSubmit={(e)=>handleSubmit(e)}>
            {      Object.values(formValues).length > 0 ?
                inputs.map((input:any)=>{
                    if( input.name === 'description' ){
                        return(
                            <FormControl key={input.id} marginBottom="10" >
                                <FormLabel>{input.form_label}</FormLabel>
                                <Textarea placeholder={input.helper_text} name={input.name} value={formValues[`${input.name}`]} onChange={(e)=>handleChange(e)} />
                            </FormControl>
                        )
                    }
                    if( input.name === 'is_active' ){
                        return(
                            <FormControl w="100%" key={input.id} display='flex' alignItems='flex-star' mb='25px'>
                                <FormLabel w="max-content" htmlFor='status' >
                                  {input.helper_text}
                                </FormLabel>
                                <Switch id='status' name={input.name} isChecked={formValues[`${input.value}`]} value={formValues[`${input.name}`]} onChange={(e)=>handleChange(e)}/>
                            </FormControl>
                        )
                    }
                    if( input.name === 'module_id' ){
                        if(PATH_NAME.includes('modules')){
                            return(
                                <FormControl key={input.id} marginBottom="10" className={PATH_NAME.includes('modules') ? 'inputOnlyRead' : ''} >
                                    <FormLabel>{ toBeSingular(input.form_label)}</FormLabel>
                                    <Input placeholder={input.helper_text} type={input.type} name={input.name} value={fileToUpdate.name} required={ input.isRequired } onChange={(e)=>handleChange(e)} />
                                </FormControl>  
                            )
                        }else{
                            return(
                                <div key={input.id} >
                                    <Selector show={input.form_label} />
                                </div>
                            )
                        }
                        
                    }
                    return(
                        <FormControl key={input.id} marginBottom="10" >
                          <FormLabel>{input.form_label}</FormLabel>
                          <Input placeholder={input.helper_text} type={input.type} name={input.name} value={formValues[`${input.name}`]} required={ input.isRequired } onChange={(e)=>handleChange(e)} />
                        </FormControl>
                    )
                }):
                <div className="spiner-checkboxes"><Spinner color='teal' size='xl' /></div> 
            }
                <Button type="submit" w="100%" colorScheme="blue" >Save</Button>
            </motion.form>
        </Container>
    )
}
export default FormToAddElements