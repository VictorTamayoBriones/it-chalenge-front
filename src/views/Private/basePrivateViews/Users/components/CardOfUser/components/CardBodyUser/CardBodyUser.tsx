import { toCapitalizefirstLetter } from "@/utils"
import { CardBody, Stack, Text } from "@chakra-ui/react"


interface Props{
  userData: any
}

function CardBodyUser({userData}:Props) {
  return (
    <CardBody className="card-user-body" >
      <h3>{toCapitalizefirstLetter(userData?.email?.split('@')[0])} - {toCapitalizefirstLetter(userData?.role_name)} </h3>
      <Stack direction={['column', 'row']} >
        <p>This user is </p>
        <Text color={userData.is_active ? 'green' : 'red'} fontSize="md" >{userData.is_active ? 'active' : 'unactive'}</Text>
      </Stack>
      <p>{userData.email}</p>
      <p>{userData.credits} credits</p>
    </CardBody>
  )
}
export default CardBodyUser