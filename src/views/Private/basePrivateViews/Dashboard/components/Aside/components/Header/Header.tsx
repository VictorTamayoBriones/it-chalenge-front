import { useSelector } from 'react-redux';
import { AppStore } from '../../../../../../../../redux/store';
import "./style-header.scss"
import { toCapitalizefirstLetter } from '../../../../../../../../utils/toCapitalizeFirstLetter';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '@/models';

function Header() {
  const { user_email } = useSelector((store:AppStore)=>store.user)
  const menuIsOpen = useSelector((store:AppStore)=>store.asideMenu)

  const navigate = useNavigate()

  const navigateToProfile = ()=> navigate(`${PRIVATE_ROUTES.PROFILE}`)

  return (
    <div className={`header-aside ${menuIsOpen ? 'open' : 'close'}`}>
      <div className="profile" onClick={ navigateToProfile } >

        <img src={`https://avatars.dicebear.com/api/avataaars/admin.svg`} alt="photo by avatars api avataaars" />
        
        <p>{  toCapitalizefirstLetter(user_email?.split('@')[0] ? user_email?.split('@')[0] : '')}</p>
      </div>
    </div>
  )
}
export default Header