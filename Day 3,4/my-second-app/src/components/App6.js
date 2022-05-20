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

function UserItem(props)
{
  let user = props.user;
  return( <div>
    <p>
      Hello {user.name},your dob is {user.dob},and gender is {user.gender}
    </p>
  </div>
  
  )
}
function UserArray(){
  let users = [ {name : "Ajay", dob : 2008-12-11 , gender: "Male"},
                {name : "Jay", dob : 1995-12-11 , gender: "Male"},
                {name : "Charli", dob : 1998-12-11 , gender: "Female"},
              ];
   return(<div>
     {
       users.map((user,index) => <UserItem key = {index} user = {user}/>)
     }
   </div>)

}

function App() {
  return (<div className = 'container-fluid'>
   <h1>This is root componenet</h1>
   <div className='row'>
   <div className='col-4'>
   <SimpleArray/>
   </div>
   <div className='col-8'>
   <UserArray/>
   </div>
   </div>
  </div>)
 }

export default App;
