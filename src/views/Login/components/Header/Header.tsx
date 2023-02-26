import { Container, Heading } from "@chakra-ui/react"
import logo_utt from '../../../../assets/images/Logo_utt.png'
import { FORM_TITLE } from "../../config"
import './style.scss'

function Header() {
  return (
    <Container marginBottom="10" display="flex" alignItems="center" gap="3" padding="0" >
        
      <Heading as='h1' pointerEvents="none" >
        { FORM_TITLE.text }
      </Heading>

      <img src={logo_utt} className="logo"/>
      
    </Container>
  )
}
export default Header