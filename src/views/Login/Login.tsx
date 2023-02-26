import { Card, Container } from '@chakra-ui/react'
import { Buttons, Header, Inputs } from './components'
import { ProviderLogin } from './context/ProviderLogin'

function Login() {

  return (
    <Container height="100vh" display="flex" justifyContent="center" alignItems="center" >
      <ProviderLogin>
        <Card width="100%" border="1px" borderColor="gray.300" borderRadius="5" padding="10" variant="unstyled" >
          <Header/>
          <Inputs/>
          <Buttons/>
        </Card>
      </ProviderLogin>
    </Container>
  )
}
export default Login