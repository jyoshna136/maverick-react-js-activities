import logo from './logo.svg';
import './App.css';
import Profile, {Picture} from './profile';


function SimpleArray(){
  let fruits = ["Apple","Mango","Grapes","Orange"];

  return <div>
   <h2>Fruits List :-</h2>
    <ul>
      {fruits.map((fruit,index) => <li key = {index}> {fruit} </li> )}
    </ul>
  </div>
}
function App() {
  return (<div className = 'container-fluid'>
   <h1>This is root componenet</h1>
   <SimpleArray/>
  </div>)
 }

export default App;
