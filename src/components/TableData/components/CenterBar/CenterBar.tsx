import BodyCenterBar from "./components/BodyCenterBar/BodyCenterBar";
import Header from "./components/Header/Header";
import { ProviderCenterBar } from "./context/ProviderCenterBar";

interface Props{
  getDetails: (id:string)=>void
}

function CenterBar({getDetails}:Props) {  
  return (
    <ProviderCenterBar>
      <article>
        <ul className="listTableData" >
          <li className="sectionTableHeader" >
            <Header/>
          </li>
          <BodyCenterBar getDetails={getDetails} />
        </ul>
      </article>
    </ProviderCenterBar>
  )
}
export default CenterBar