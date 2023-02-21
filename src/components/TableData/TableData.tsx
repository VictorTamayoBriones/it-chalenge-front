import { TrimValuesOfAnObject } from "@/utils/TrimValuesOfAnObject";
import CenterBar from "./components/CenterBar/CenterBar"
import LeftBar from './components/LeftBar/LeftBar';
import MainTableData from "./components/MainTableData/MainTableData";
import RightBar from "./components/RightBar/RightBar"
import { ProviderTableData } from "./context/ProviderTableData";
import "./style.scss"

interface Props{
  data:{
    leftBar:{
      title: string,
      childs: any[],
    },
    centerBar:{
      title: string,
      childs: any[],
    },
    rightBar:{
      title: string,
      data: any
    }
  },
  getCenterbar:(id?:string)=>void,
  getDetails:(id?:string)=>void
}

function TableData({ data, getCenterbar, getDetails }:Props) {
  const test = {
    name: 'jdkjshfkjshdkfj '
  }
  return (
    <article className="TableData" >
      <ProviderTableData>
        <MainTableData data={data} getCenterBar={getCenterbar} getDetails={getDetails} />
      </ProviderTableData>
    </article>
  )
}
export default TableData