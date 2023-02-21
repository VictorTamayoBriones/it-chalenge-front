import "./style-nav.scss"

import Logo from '@/assets/images/logo.svg'
import { useDispatch, useSelector } from "react-redux"
import { AppStore } from "@/redux/store"
import { toogleAsideMenu } from "@/redux/baseStates/AsideMenu/AsideMenuSlice"
import { usegetCurrentModuleName } from "@/hooks"
import { toCapitalizefirstLetter } from '../../../../../../utils/toCapitalizeFirstLetter';
import BtnMenu from "./components/BtnMenu/BtnMenu"

function Navbar() {

  const menuIsOpen = useSelector((store:AppStore)=>store.asideMenu)
  const dispatch = useDispatch()
  
  const moduleName = usegetCurrentModuleName() 

  const handleOpenMenu = () =>{
    dispatch(toogleAsideMenu(!menuIsOpen))
  }

  const searchesInBar = useSelector((store:AppStore)=>store.searchesInBar)

  return (
    <nav className="navbar">
      
      <div className={ `logo ${menuIsOpen ? 'isOpenNav' : 'isCloseNav'}` }>
      
        <div className={`brand ${menuIsOpen ? 'isOpenNav' : 'isCloseNav'}`}>  
          <h1>Palmer</h1>
          <img src={Logo} alt="spuky" />
        </div>
        
        <BtnMenu handleOpenMenu={handleOpenMenu} menuIsOpen={menuIsOpen} />

        <h3>{toCapitalizefirstLetter(moduleName ? (moduleName === 'searches' ? 'search' :  moduleName) : '')}</h3>
      </div>
      
      <p className="credits" >{ searchesInBar < 0 ? 0 : searchesInBar } Credits </p>
    </nav>
  )
}
export default Navbar