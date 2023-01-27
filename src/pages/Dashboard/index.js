import {useContext} from 'react';

import { AuthContext } from '../../contexts/auths';

 function Dashboard(){
  const { signOut } = useContext(AuthContext);

  return(
    <div>
        <h1>PAGINA DASHBOARD</h1>
        <button onClick={ () => signOut()}>Logout</button>
    </div>
  )
}

export default Dashboard;
