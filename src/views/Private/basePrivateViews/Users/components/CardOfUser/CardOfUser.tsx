import { Card, CardHeader, CardBody, CardFooter, Button, Image, Stack } from '@chakra-ui/react'
import CardBodyUser from './components/CardBodyUser/CardBodyUser'
import CardFooterUser from './components/CardFooterUser/CardFooterUser'
import ImageUserProfile from './components/ImageUserProfile/ImageUserProfile'

interface Props{
  user: any
}

function CardOfUser({user}:Props) {
  return (
    <Card 
      className='card-user'
      overflow="hidden"
      direction={{ base: 'column', sm: 'row' }}
      variant='outline' >

      <ImageUserProfile userMail={user?.email} />
      
      <Stack className='user-stack'>
        <CardBodyUser userData={user} />
        <CardFooterUser userData={user} />
      </Stack>
    </Card>
  )
}
export default CardOfUser