import TableDataRoles from "./components/TableDataRoles/TableDataRoles"
import { ProviderRoles } from "./context/ProviderRoles"

function Roles() {
  return (
    <ProviderRoles>
      <div className="tableContainer">
        <TableDataRoles/>
      </div>
    </ProviderRoles>
  )
}
export default Roles