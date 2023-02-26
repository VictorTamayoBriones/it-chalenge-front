import "./style.scss"

interface Props{
  handleOpenMenu: ()=>void,
  menuIsOpen: boolean
}

function BtnMenu({handleOpenMenu, menuIsOpen}:Props) {
  return (
    <div className="btn-menu" onClick={()=>handleOpenMenu()} >
      <div className="container">
        <div className={`line  ${menuIsOpen ? 'isOpen' : 'isClose'}`}></div>
        <div className={`line  ${menuIsOpen ? 'isOpen' : 'isClose'}`}></div>
        <div className={`line  ${menuIsOpen ? 'isOpen' : 'isClose'}`}></div>        
      </div>
    </div>
  )
}
export default BtnMenu
