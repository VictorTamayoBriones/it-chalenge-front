import { Container, Heading } from "@chakra-ui/react"
import SpukyLogo from '../../../../assets/images/logo.svg'
import { FORM_TITLE } from "../../config"
import './style.scss'

function Header() {
  return (
    <Container marginBottom="10" display="flex" alignItems="center" gap="3" padding="0" >
        
      <Heading as='h1' pointerEvents="none" >
        { FORM_TITLE.text }
      </Heading>

      <img src={SpukyLogo} className="logo"/>
      
    </Container>
  )
}
export default Header