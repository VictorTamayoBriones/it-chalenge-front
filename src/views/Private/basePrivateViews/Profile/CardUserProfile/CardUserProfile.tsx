import { PRIVATE_ROUTES } from "@/models"
import { AppStore } from "@/redux/store"
import { sessionDelete } from "@/utils/SessionPersistence/SessionDelete"
import { toCapitalizefirstLetter } from "@/utils/toCapitalizeFirstLetter"
import { Button, ButtonGroup, Card, CardBody, CardFooter } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

export const CarduserProfile = ()=>{

    const { user_email, role_name } = useSelector((store:AppStore)=>store.user)

    const navigate = useNavigate()

    return(
        <Card className='profile-card'backgroundColor='white' >
        <CardBody>
          <img src={`https://avatars.dicebear.com/api/avataaars/admin.svg`} alt="photo by avatars api avataaars" />
          <h3>{ toCapitalizefirstLetter(user_email?.split('@')[0] || '')}</h3>
          <p>{user_email}</p>
          <p>Role: {role_name}</p>
        </CardBody>
        <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' onClick={()=>navigate(PRIVATE_ROUTES.UPDATE_OWN_PASSWORD)} >
            Update Password
          </Button>
          <Button variant='solid' colorScheme='red' onClick={()=>sessionDelete()} >
            Close session
          </Button>
        </ButtonGroup>
        </CardFooter>
      </Card>
    )
}