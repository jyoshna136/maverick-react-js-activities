import logo from './logo.svg';
import './App.css';

function Profile(props){
  let name = props.username;
  let age = props.age;
  return(
  <div>
 <p> name : {name}, Age : {age}</p>
  </div>
  )
}
export function Picture(props){
let imageURL = props.url;
return(
  <div>
  <img src = {imageURL} width = '100' height = '100'/>
  </div>
  )
}
export default Profile;