import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Button, Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import './style.scss'
import { toCapitalizefirstLetter } from '../../../utils/toCapitalizeFirstLetter';
import { sessionDelete } from '@/utils/SessionPersistence/SessionDelete';
import { useLocation } from 'react-router-dom';
import { CarduserProfile } from './CardUserProfile/CardUserProfile';
import FormToUpdatePassword from './FormToUpdatePassword/FormToUpdatePassword';

function Profile() {

  const { pathname } =  useLocation()

  return (
    <Container height="80vh" display="flex" justifyContent="center" alignItems="center"   >
      {
        pathname.includes('update-password') ?
        <FormToUpdatePassword/> :
        <CarduserProfile/>
      }
    </Container>
  )

}

export default Profile