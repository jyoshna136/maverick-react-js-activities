import logo from './logo.svg';
import './App.css';
import {User} from './components/User';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { FetchAllUsers, StoreUser , DeleteUser,FetchOneUser } from './components/UserCrud';
function App() {
  
  return (<div className = 'container-fluid'>
    <h1>This is Root component</h1>
    <div className = 'row'>
      <div className = 'col'>
        <StoreUser />
      </div>

      <div className = 'col'>
          <FetchAllUsers />
      </div>
      
    
    <div className = 'col'>
          <DeleteUser />
      </div>

      <div className = 'col'>
          <FetchOneUser />
      </div>
       
    </div>
  </div>)
}
export default App;
