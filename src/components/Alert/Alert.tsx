import { AppStore } from '@/redux/store'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './style.scss'
import { updateAlert } from '@/redux/baseStates/Alert/AlertSlice';
import { AlertModel } from './model/AlertModel';

function SpukyAlert() {
  
  const { isVisible, status, title, description } = useSelector((store:AppStore)=>store.alert)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(isVisible){
      setTimeout(()=>{
        
        const alert:AlertModel = {
          isVisible: false,
          status: 'error',
          title: '',
          description: ''
        }

        dispatch(updateAlert(alert))
      }, 5000)
    }
  }, [isVisible])

  return (
    <div className={ `mainAlertContainer ${isVisible ? 'visible' : 'hidden'}` }>
      <Alert status={status}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  )
}
export default SpukyAlert