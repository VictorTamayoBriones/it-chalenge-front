import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import { updateDataAlert } from '@/redux/baseStates/AlertToDelete/AlertToDeleteSlice';
import { useDeleteService } from '@/services/DELETE/deleteService';
import { updateAlert } from '@/redux/baseStates/Alert/AlertSlice';
import { AlertModel } from '../Alert/model/AlertModel';
import {useState} from 'react';
import { updateSectionToReload } from '@/redux/baseStates/needToReload/needToReload';
import { usePath } from '../../hooks/usePathName';

function AlertToDelete() {

  const cancelRef:any = useRef();

  const ALERT = useSelector((store:AppStore)=>store.alertToDelete)
  const { PATH_NAME } = usePath()
  const dispatch = useDispatch();
  const serviceToDelete = useDeleteService()
  const [preventDelete, setPreventDelete]=useState(false);
  const [inputPreventDelete, setInputPreventDelete]=useState('');

  const handleClose = ()=>{
    dispatch(updateDataAlert({status:false, title:'', body:'', toDelete:{id:'', section:''}}))
    setInputPreventDelete('')
    setPreventDelete(false);
  }

  const titleToVerify = `I want to delete${ALERT.title}`.replaceAll('Delete', '')

  const handleToDelete= async ()=>{

    if( inputPreventDelete.trim() === titleToVerify.trim() ){
      await serviceToDelete(`${ALERT.toDelete?.section}/${ALERT?.toDelete.id}`)
      dispatch(updateSectionToReload(PATH_NAME))
      handleClose()

    }else{
      const alert:AlertModel = {
        isVisible: true,
        status: 'error',
        title: 'Invalid Data',
        description: `The words does not be the same.`
      }
      dispatch(updateAlert(alert))
    }

  
  }

  const handlePreventDelete = () =>{
    setPreventDelete(true)
  }

  const hanldeChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
    setInputPreventDelete(e.target.value)
  }

  return (
    <AlertDialog
        isOpen={ALERT.status}
        leastDestructiveRef={cancelRef}
        onClose={()=>handleClose()}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              { ALERT.title }
            </AlertDialogHeader>

            <AlertDialogBody>
              { 
                preventDelete ?
                <p className='alertBody' >Please confirm that you really want to delete this file. typing in the box <strong>{titleToVerify}</strong> after confirm you'll cannot revert this action.</p> :
                ALERT.body
              }
            </AlertDialogBody>

            <AlertDialogFooter>
              {
                preventDelete ?
                <Container margin={0} padding={0} >
                  <FormControl marginBottom="10" >
                    <FormLabel>Confirm plase</FormLabel>
                    <Input  type='text' name='deleteConfirm' value={inputPreventDelete} maxLength={50} required={true} onChange={(e)=>hanldeChange(e)} />
                  </FormControl> 
                  <Button w="45%" marginRight="5%" onClick={handleClose} >Cancel</Button>
                  <Button w="45%" marginLeft="5%" colorScheme="red" onClick={handleToDelete} >Delete</Button>
                </Container>
                :
                <>
                  <Button ref={cancelRef} onClick={()=>handleClose()}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={()=>handlePreventDelete()} ml={3}>
                    Delete
                  </Button>
                </>
              }
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

  )
}

export default AlertToDelete