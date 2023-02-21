import AsideMain from "./components/AsideMain/AsideMain"
import { Header } from "./components/Header"
import { ProviderAside } from "./context/ProviderAside"


function Aside() {
  return (
    <ProviderAside>
      <AsideMain/>
    </ProviderAside>
  )
}
export default Aside