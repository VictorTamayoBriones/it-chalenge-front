import { Header } from "../Header"
import "../.././style-aside.scss"
import AsideBody from "../AsideBody/AsideBody";
import { useSelector } from 'react-redux';
import { AppStore } from "@/redux/store";

function AsideMain() {
  const  menuIsOpen  = useSelector((store:AppStore)=>store.asideMenu)

  return (
    <section className={ `aside-nav ${menuIsOpen ? 'menuIsOpen' : 'menuIsClose'}` } >
      <Header/>
      <AsideBody/>
    </section>
  )
}
export default AsideMain