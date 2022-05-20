import logo from './logo.svg';
import './App.css';
import './index.css';
//import '..src/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Form } from './components/Form';
import { FetchAllUsers, StoreUser,UpdateData } from './components/UserCrud';
import { Link, Route, Routes } from 'react-router-dom';

function MainLink() {
 
  return (<div>
    <Link to = '/StoreUser'>Store Data</Link> /
    <Link to = '/fetchAll'>Display All Employee</Link> /
    <Link to = '/UpdateData'>Update Employee</Link> 
  </div>)
  
}
function App() {
  return (<div className = 'container-fluid'>
    <h1 className = 'text-center'>Employee Data</h1>
    
    <div className = 'row'>
      <div className = 'col'>
        <MainLink />
      </div>
    </div>
    <div className = 'row'>
      <div className = 'col'>
        <Routes>
          <Route path = '/StoreUser' element = {<StoreUser />} />
          <Route path = '/fetchAll' element = {<FetchAllUsers />} />
          <Route path = '/UpdateData' element = {<UpdateData />} />
         </Routes>
      </div>
    </div>
   
  </div>)
}
export default App;
