import { Icons } from "@/assets"
import { ContextTableData } from "@/components/TableData/context/ContextTableData"
import { usePath } from "@/hooks"
import { updateDataAlert } from "@/redux/baseStates/AlertToDelete/AlertToDeleteSlice"
import { toCapitalizefirstLetter } from "@/utils"
import { ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react"
import { useContext } from "react"
import { useDispatch } from 'react-redux';

interface Props{
    isEditting: boolean,
    setEditting: (status: boolean)=>void   
}

function HeaderRightBar({isEditting, setEditting}:Props) {

    const { dataOfTableData:{rightBar, centerBar} } = useContext(ContextTableData)
    
    const { PATH_NAME } = usePath()
    const TITLE_HEADER =  PATH_NAME != 'roles' ? `${ toCapitalizefirstLetter(rightBar?.data?.action_name || '')} - ${rightBar?.data?.module_name || ''}` : `${ toCapitalizefirstLetter(rightBar?.data?.action_name || '')} modules ${rightBar?.data.module_name || ''}`
    const dispatch = useDispatch()
    const sectionToDelete = centerBar?.title?.split(' ')[0]
    const handleDelete = (id:string)=> dispatch(updateDataAlert({status:true, title:`Delete ${`${rightBar?.data?.action_name || ''} - ${rightBar?.data.module_name || ''} `}`, body: "Are you sure? You can't undo this action afterwards.", toDelete:{id, section:sectionToDelete&&sectionToDelete} }))
  
    return (
    <section>
    {
      rightBar?.data ?
      <>
        <p>{rightBar?.title} {TITLE_HEADER}</p>
        {
          !PATH_NAME.includes('roles') &&
            <ButtonGroup gap='1'>
              <Tooltip label={isEditting ? 'Cancel Edit' : 'Edit'} >
                <IconButton aria-label={isEditting ? 'Cancel Edit' : 'Edit'} onClick={()=>setEditting(!isEditting)}  transform={isEditting ? "rotate(45deg)" : ''} variant="ghost" size="xs" colorScheme={isEditting ? 'red' : 'blue'}>{isEditting ? <Icons.PLUS/> : <Icons.EDIT/>}</IconButton>
              </Tooltip>
              {
                !isEditting &&
                <Tooltip label={`Delete`} >
                  <IconButton aria-label="Delete" onClick={()=>handleDelete(rightBar.data.id)}   variant="ghost" size="xs" colorScheme='red'>{<Icons.DELETE/>}</IconButton>
                </Tooltip>
              }
            </ButtonGroup>
        }
        
      </> :
      <span className="message-span" >In comming</span>
    }
    </section>
  )
}
export default HeaderRightBar