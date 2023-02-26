import TableDataModules from "./components/TableDataModules/TableDataModules"
import { ProviderModule } from "./context/ProviderModule"

function Modules() {
  return (
    <ProviderModule>
      <div className="tableContainer">
        <TableDataModules/>
      </div>
    </ProviderModule>
  )
}
export default Modules