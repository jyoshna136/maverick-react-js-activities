import logo from './logo.svg';
import './App.css';
import {User} from './components/User';



function App() {
  return (<div className = 'container-fluid'>
   <h1>This is root componenet</h1>
   <div>
     <User username = "Alex"/>
     </div>
  </div>)
 }

export default App;
