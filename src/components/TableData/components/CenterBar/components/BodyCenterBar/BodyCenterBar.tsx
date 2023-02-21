import ListOfItems from "../ListOfItems/ListOfItems"
import { useContext } from 'react';
import { ContextCenterBar } from "../../context/ContextCenterBar";
import FormToAddElements from "../FormToAddElements/FormToAddElements";
import FormToUpdate from "../FormToUpdate/FormToUpdate";

interface Props{
  getDetails: (id:string)=>void
}

function BodyCenterBar({getDetails}:Props) {

  const { isCreating, isEditing } = useContext(ContextCenterBar)

  return (
    isCreating ?
    <FormToAddElements/>
    :
    isEditing ?
    <FormToUpdate/>
    :
    <ListOfItems getDetails={getDetails} /> 
  )
}
export default BodyCenterBar