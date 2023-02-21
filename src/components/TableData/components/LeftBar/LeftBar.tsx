import Header from "./components/Header/Header";
import { ProviderLeftBar } from "./context/ProviderLeftBar";
import BodyLeftBar from "./components/BodyLeftBar/BodyLeftBar";

interface Props{
  getCenterBar: (id:string, name:string)=>void
}

function LeftBar({getCenterBar}:Props) {
  
  return (
    <ProviderLeftBar>
      <article>
        <ul className="listTableData" >
          <li className="sectionTableHeader" >
            <Header/>
          </li>
          <BodyLeftBar getCenterBar={getCenterBar} />
        </ul>
      </article>
    </ProviderLeftBar>
  )

}
export default LeftBar