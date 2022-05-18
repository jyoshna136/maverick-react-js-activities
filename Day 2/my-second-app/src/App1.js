import logo from './logo.svg';
import './App.css';
import Profile, {Picture} from './profile';
function App() {
  return (
    <div>
      <h1>This is App Component </h1>
      <Profile username = 'Raj' age = '35' />
      <Picture url = "data:image/jpeg;base64,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" />
      
    </div>
  );
}
export default App;

--------------------------------------------------------
import logo from './logo.svg';
import './App.css';
import Profile, {Picture} from './profile';


function DateFormatter(props)
{
  return(
    <div>
    <p> <b> Date : </b> {props.date.toLocaleDateString()} </p>
    </div>
  );
}

function Author(props)
{
  return(
  <div>
    <img src = {props.profile.imageURL} width = "50" height= "50"/>
    <p><b> Author : </b> <i> {props.profile.name}</i></p>
  </div> );
}

function Comment(props)
{
  return(
    <div>
     <Author profile = {props.profile}/>
     <p><b>Comment : </b>{props.text}</p>
     <p><b>Likes : </b>{props.likes}</p>
     <DateFormatter date = {props.date}/>
    </div>
  );
}
function App() {
  let comment1 = {
    text : "Hi What's Up?",
    profile : {
      name :  "Mark Zukarberg" , imageURL : "data:image/jpeg;base64,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"
    },
    Likes : 10,
    date : new Date()
  };
  let comment2 = {
    text : "I am learning React",
    profile : {
      name :  "Bill Gates" , imageURL : "data:image/jpeg;base64,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"
    },
    Likes : 3,
    date : new Date()
  }
  return(
    <div>
      <h1>This is App Component</h1>
      <Comment text = {comment1.text} profile = {comment1.profile} Likes = {comment1.Likes} date = {comment1.date}/>
      <Comment text = {comment2.text} profile = {comment2.profile} Likes = {comment2.Likes} date = {comment2.date}/>
    </div>
  );
 }

export default App;
