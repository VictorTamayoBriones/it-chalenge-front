import CenterBar from "../CenterBar/CenterBar"
import LeftBar from "../LeftBar/LeftBar"
import RightBar from "../RightBar/RightBar"
import { useContext, useEffect } from 'react';
import { ContextTableData } from "../../context/ContextTableData";

interface Props{
  data:any,
  getCenterBar:(id: string)=>void,
  getDetails: (id: string)=>void
}

function MainTableData({data, getCenterBar, getDetails}:Props) {

  const { updateData } = useContext(ContextTableData)
  
  useEffect(()=>{
    updateData(data)
  }, [data])

  return (
    <>
      <LeftBar getCenterBar={getCenterBar} />
      <CenterBar getDetails={getDetails} />
      <RightBar/>
    </>
  )
}
export default MainTableData