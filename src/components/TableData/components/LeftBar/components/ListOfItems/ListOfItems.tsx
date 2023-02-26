import { ContextTableData } from "@/components/TableData/context/ContextTableData"
import { usePath } from "@/hooks/usePathName";
import { toBeSingular, toCapitalizefirstLetter } from "@/utils";
import { useContext } from "react"
import { useParams } from "react-router-dom";

interface Props{
    getCenterBar: (id:string, name:string)=>void
}

function ListOfItems({getCenterBar}:Props) {
    const params = useParams();
    const { PATH_NAME } = usePath();
    const { dataOfTableData:{leftBar} } = useContext(ContextTableData)
  return (
    <>
    {
        leftBar?.childs.map((item:any)=>{
            
            return(
                <li key={item.id} className={`itemTableData itemTableData-${params.id === item.id ? 'active' : ''}`} >
                    <p onClick={()=>getCenterBar(item.id, `${item?.name} ${toBeSingular(PATH_NAME)}`)} >{toCapitalizefirstLetter(item.name)} {toBeSingular(PATH_NAME)} <span className="desc-item">{item?.description ? item?.description : "without description" }</span></p>
                </li>
            )
        })
    }
    </>
  )
}
export default ListOfItems