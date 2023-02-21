import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { INPUTS_TO_RENDER } from "../../config";
import { ContextLogin } from '../../context/ContextLogin';

function Inputs() {

  const { dataLoginForm, handleInputChange } = useContext(ContextLogin)
  
  return (
    <>
      {
        INPUTS_TO_RENDER.map(input=>{
          let inputValue = Object.entries(dataLoginForm).filter(item=>item.includes(input.name))[0][1]
          
          return(
            <FormControl key={input.id} marginBottom="10" >
              <FormLabel>{input.form_label}</FormLabel>
              <Input type={input.type} name={input.name} value={typeof(inputValue) === 'string' ? inputValue : ''} maxLength={ input.max_length } minLength={ input?.min_length } required={ input.isRequired } onChange={(e)=>handleInputChange(e)} />
            </FormControl>
          )

        })
      }
    </>
  )
}
export default Inputs