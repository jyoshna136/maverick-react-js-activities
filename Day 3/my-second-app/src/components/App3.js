import logo from './logo.svg';
import './App.css';
import Profile, {Picture} from './profile';


function Button(){
  return <div>
    <button className = 'btn btn-primary'>MyButton</button>
    <button className = 'btn btn-secondary'>MyButton</button>
  </div>
}
function App() {
  return (<div className = 'container-fluid'>
   <h1>This is root componenet</h1>
   <Button/>
  </div>

  )
 }

export default App;
