import { ContextTableData } from '@/components/TableData/context/ContextTableData';
import { toCapitalizefirstLetter } from '@/utils';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePath } from '../../../../../../hooks/usePathName';

interface Props{
  getDetails: (id:string, name?:string)=>void
}

function ListOfItems({getDetails}:Props) {

  const { id, idContent } = useParams();

  const { dataOfTableData:{centerBar} } = useContext(ContextTableData)

  const { PATH_NAME } = usePath()
  
  const handleClick = (id:string, name?:string)=>{
    
    if( PATH_NAME != 'roles' ){

      getDetails(id)
    
    }else{
      
      getDetails(id, name)
    
    }

  }

  return (
    <>
    {
      !id ? 
      <li className="itemTableData"><span className="message-span" >Select an item from left bar</span></li> :
      
      centerBar?.childs?.map((item:any)=>{
        
        return(
          <li key={`${item.action_id}-${item.name}`} className={`itemTableData itemTableData-${idContent && idContent === item?.action_id || idContent=== item.id ? 'active' : ''}`} >
            <p onClick={()=>handleClick(item?.action_id || item?.id, item?.name)} >
              {item?.action_name ? `${toCapitalizefirstLetter(item?.action_name)} - ` : ''} {item.name} 
              <span className="desc-item">{item?.description ? item?.description : "without description"}</span> 
            </p>
          </li>
        )
      })
    }
    </>
  )
}
export default ListOfItems