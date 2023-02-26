import ListOfItems from "../ListOfItems/ListOfItems"
import { useContext } from 'react';
import { ContextLeftBar } from '../../context/ContextLeftBar';
import FormToAddElement from "../FormToAddElement/FormToAddElement";

interface Props{
    getCenterBar: (id:string, name: string)=>void
}

function BodyLeftBar({getCenterBar}:Props) {

  const { isCreating } = useContext(ContextLeftBar)

  return (
    isCreating ?
    <FormToAddElement/> :
    <ListOfItems getCenterBar={getCenterBar} />
  )
}
export default BodyLeftBar