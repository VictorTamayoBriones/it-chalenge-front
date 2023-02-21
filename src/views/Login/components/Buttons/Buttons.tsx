import { Button } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { BUTTONS_TO_RENDER } from '../../config';
import { useContext } from 'react';
import { ContextLogin } from '../../context/ContextLogin';

function Buttons() {

  const { handleSubmitLogin } = useContext(ContextLogin)

  return (
    <>
      {
        BUTTONS_TO_RENDER.map(button=>{
          let buttonKey = v4();

          if( button.text === 'Login'){

            return(
              <Button onClick={ handleSubmitLogin } key={ buttonKey } w={button.width} colorScheme={button.color} >{ button.text }</Button>
            )

          }


        })
      }
    </>
  )
}
export default Buttons