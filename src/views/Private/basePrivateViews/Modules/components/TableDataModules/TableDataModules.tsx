import { TableData } from "@/components/TableData"
import { useContext } from 'react';
import { ContextModules } from '../../context/ContextModule';

function TableDataModules() {

  const { dataOfModules, getCenterBar, getDetailsRightBar } = useContext(ContextModules)
  
  return (
    <TableData data={ dataOfModules } getCenterbar={getCenterBar} getDetails={getDetailsRightBar} />
  )
}
export default TableDataModules