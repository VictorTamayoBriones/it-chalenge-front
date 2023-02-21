import { Icons } from "@/assets";
import { ContextTableData } from "@/components/TableData/context/ContextTableData";
import { usePermissions } from "@/hooks"
import { usePath } from "@/hooks/usePathName"
import { toCapitalizefirstLetter } from "@/utils"
import { Button, IconButton, Tooltip } from "@chakra-ui/react"
import { useContext } from 'react';
import { ContextLeftBar } from '../../context/ContextLeftBar';

function Header() {

  const { PATH_NAME } = usePath()
  const { currentPermissions } = usePermissions()
  const { dataOfTableData:{leftBar} } = useContext(ContextTableData)
    
  const { isCreating, handleIsCreating } = useContext(ContextLeftBar)
  
  return (
    <section>
        <p>{toCapitalizefirstLetter( !leftBar?.title ? PATH_NAME : leftBar?.title)}</p>
        <Tooltip label={isCreating ? 'Cancel' : `Add ${PATH_NAME}`} >
          {
            currentPermissions?.includes('create') ?
            <IconButton 
              aria-label={isCreating ? 'Cancel' : `Add ${PATH_NAME}`}
              variant="ghost" 
              size="xs"
              transform={isCreating ? "rotate(45deg)" : ''}
              colorScheme={isCreating ? 'red' : 'teal'}
              onClick={()=>handleIsCreating(!isCreating)}
              >
              
                {<Icons.PLUS/>}
              </IconButton>
              : ''
          }
        </Tooltip>
    </section>
  )
}
export default Header