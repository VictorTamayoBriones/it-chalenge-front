import CardOfUser from "../CardOfUser/CardOfUser"
import { useContext } from 'react';
import { ContextUser } from "../../context/ContextUser";


function ListOfUsers() {

  const { allUsers }  = useContext(ContextUser)
  
  return (
    <div className="list" >
      {
        allUsers.length > 0 ?
          allUsers.map((user:any)=>(
            <CardOfUser user={user} key={user.id} />
          ))
        : <p>Dont have users yet</p>
      }
    </div>
  )
}
export default ListOfUsers