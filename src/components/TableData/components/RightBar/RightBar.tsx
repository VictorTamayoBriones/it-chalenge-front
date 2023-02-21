import { usePath } from "@/hooks/usePathName";
import { toCapitalizefirstLetter } from "@/utils/toCapitalizeFirstLetter"
import { useState, useContext } from 'react';
import { ContextTableData } from "../../context/ContextTableData";
import FormToUpdate from "./components/FormToUpdate/FormToUpdate";
import HeaderRightBar from "./components/HeaderRightBar/HeaderRightBar";
import { ProviderCheckBoxes } from "./context/ProviderCheckBoxes";
import ListOfCheckBox from "./listOfCheckBox";

function RightBar() {

  const [isEditting, setEditting]=useState(false);
  
  const { dataOfTableData:{rightBar} } = useContext(ContextTableData)
  
  const { PATH_NAME } = usePath()

  return (
    
    <article>
      <ul className="listTableData" >
        <li className="sectionTableHeader" >
          <HeaderRightBar isEditting={isEditting} setEditting={setEditting} />
        </li>
        {
          //Verificamos que la data sea un Array
          Array.isArray(rightBar?.data) ?
          PATH_NAME === 'roles' ? //Verificamos que nos encontramos en el modulo de roles
          //Si todo es así entonces renderizamos la lista de checkboxes
          <ProviderCheckBoxes>
            <ListOfCheckBox module={rightBar?.title?.split(' ')[2]} />               
          </ProviderCheckBoxes>
          :
          rightBar?.data?.map((item:any, i:number)=>{
            return(
              <li className={`itemTableData `} key={item.action_id} >
                <p >{item?.action_name ? `${toCapitalizefirstLetter(item?.action_name)} - ` : ''} {item.name} <span className="desc-item">{item?.description ? item?.description : "without description"}</span> </p>
              </li>
            )
          }):''
        }
        <li className="detailsTableHeader" >
          <section>
            {
              rightBar?.data ?
              !Array.isArray(rightBar?.data) &&
              <FormToUpdate rightBar={rightBar} isEditting={isEditting} />
              :
              <span className="message-span" >Select an item from left bar</span>

            }
          </section>
        </li>
      </ul>
    </article>
  
  )
}
export default RightBar