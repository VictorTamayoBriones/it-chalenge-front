import { TableData } from '@/components'
import { useContext } from 'react';
import { ContextRoles } from '../../context/ContextRoles';

function TableDataRoles() {
  
  const { dataOfRoles, getCenterBar, getDetailsRightBar } = useContext(ContextRoles)
  
  return (
    <TableData data={ dataOfRoles } getCenterbar={getCenterBar} getDetails={getDetailsRightBar} />
  )
}

export default TableDataRoles