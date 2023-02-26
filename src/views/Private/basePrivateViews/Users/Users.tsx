import "./style.scss"
import ListOfUsers from './components/ListOfUsers/ListOfUsers';

import { ProviderUser } from "./context/ProviderUsers";
import FormToAddUser from "./components/FormToAddUser/FormToAddUser";
import FormToUpdateUser from "./components/FormToUpdateUser/FormToUpdateUser";
import FormToUpdatePassword from "./components/FormToUpdatePassword/FormToUpdatePassword";
import { ButtonsToHandleUsers } from "./components/ButtonsTohandleUsers";

function Users() {

  return (
    <ProviderUser>
      <>
        <ButtonsToHandleUsers/>
        <div className="container-users">
          <ListOfUsers/>
        </div>
        <FormToAddUser/>
        <FormToUpdateUser/>
        <FormToUpdatePassword/>
      </>
    </ProviderUser>

  )
  
}
export default Users
