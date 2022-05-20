import {Component} from 'react';
import axios from 'axios';

export class StoreUser extends Component {
    constructor(props) {
        super(props);
       this.state = {id: '', name: '', salary: '',gender : '',city : '' , state : '', 
        successMessage: '', errorMessage: ''}
        //this.state =  {id: '', name: '', salary: ''}
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        let userId = parseInt(this.state.id);
        let url = "http://localhost:3008/users"
        axios.post(url, {id: userId, name: this.state.name, salary: this.state.salary,gender:this.state.gender,city:this.state.city,state:this.state.state,})
        .then((response) => this.setState({successMessage : `${userId} is stored`, errorMessage : ''}))
        .catch((error) => this.setState({errorMessage: `${userId} already exists`, successMessage : ''}))
    }
    render() {
        return (<div className='container'>
  
            <h3>Register User</h3>
            <hr />
            <form onSubmit = {this.handleSubmit}>
                <div>
                    Id:   <input type = 'text'  onChange = {(event) => this.setState({id: event.target.value})}></input>
                </div>
                <div>
                    Name: <input type = 'text'  onChange = {(event) => this.setState({name: event.target.value})}></input>
                </div>
                <div>
                 Salary:<input type = 'text'  onChange = {(event) => this.setState({salary: event.target.value})}></input>
                </div>
                
                
                <div>Gender:
                     <input type="radio" value="Male" name="gender" onChange = {(event) => this.setState({gender: event.target.value})}></input>  Male
                     <input type="radio" value="Female" name="gender" onChange = {(event) => this.setState({gender: event.target.value})}></input> Female
                     <input type="radio" value="Other" name="gender" onChange = {(event) => this.setState({gender: event.target.value})}></input>  Other
               </div>
               <div>
                   <div> Address: </div>
                  City:  <input type = 'text'  onChange = {(event) => this.setState({state: event.target.value})}></input>
                   State: <input type = 'text'  onChange = {(event) => this.setState({city: event.target.value})}></input>
                </div>
 

                <div>
              <button variant="primary" 
              style={{ float: 'left', marginBottom: '15px' }}>Add Details</button>
                </div>
            </form>
            <div className = 'text-success'>
                {this.state.successMessage}
            </div>
            <div className = 'text-danger'>
                {this.state.errorMessage}
            </div>
           
        </div>)
    }
}

export class FetchAllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {usersArray:[]}
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = () => {
        let url = "http://localhost:3008/users";
        axios.get(url)
        .then((response) => {
            let data = response.data;
            this.setState({usersArray: data});
        })
        .catch((error) => {
            console.log(error);
        });
    }
  
    handleDelete = (event) => {
        event.preventDefault();
        let userId = parseInt(event.currentTarget.parentElement.firstChild.innerText);
        alert(`Deleted: ${userId}`);
        let url = "http://localhost:3008/users/"+userId
        axios.delete(url)
        //axios.post(url, {id: userId, name: this.state.name, dob: this.state.dob})
        //.then((response) => this.setState({successMessage : `${userId} is deleted`, errorMessage : ''}))
        .then((response) => this.handleClick({successMessage : `${userId} is deleted`, errorMessage : ''}))
        //.then((response) => {const user = this.state.user.filter(item => item.id !== id);  this.setState({successMessage : `${userId} is stored`, errorMessage : ''});} )
        .catch((error) => this.setState({errorMessage: `${userId} donot exists`, successMessage : ''}))
    }

    render() {
        return (<div className = 'container-fluid'>
            <h3>Employee List</h3>
            <button className = 'btn btn-secondary' onClick = {this.handleClick}>Refresh</button>
            <table className = 'table'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Salary</th><th>gender</th><th>City</th><th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //this.state.usersArray.map(user =>( <tr key = {user.userId}>
                        this.state.usersArray.map((user, index) => <tr key = {index}>
                            <td>{user.id}</td><td>{user.name}</td><td>{user.salary}</td>
                            <td>{user.gender}</td><td>{user.city}</td><td>{user.state}</td>
                            <button variant="primary" style={{ float: 'left', marginBottom: '15px' }} 
                            onClick = {this.handleDelete}>Delete</button>
                          
                        </tr>)
                    }
                </tbody>
            </table>
        </div>)
 }
}


export class UpdateData extends Component {
    constructor(props) {
        super(props);
        this.state = {usersArray:[]}
    }

    handleClick = () => {
        let url = "http://localhost:3008/users";
        axios.get(url)
        .then((response) => {
            let data = response.data;
            this.setState({usersArray: data});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    handleUpdate = (event) => {
        event.preventDefault();
        let userId = parseInt(event.currentTarget.parentElement.firstChild.innerText);
        alert(`Updated: ${userId}`);
        let name = event.target.parentElement.children[1].firstChild.value;
        let city = event.target.parentElement.children[4].firstChild.value;
        let state = event.target.parentElement.children[5].firstChild.value;
        let salary = event.target.parentElement.children[2].innerText;
        let gender = event.target.parentElement.children[3].innerText;
        let updateObj = {id : userId, name : name,salary :salary,gender:gender,city : city,state:state};
        let url = "http://localhost:3008/users/"+userId
        axios.put(url,updateObj)
        //axios.post(url, {id: userId, name: this.state.name, dob: this.state.dob})
        .then((response) => this.handleClick({successMessage : `${userId} is deleted`, errorMessage : ''}))
        //.then((response) => {const user = this.state.user.filter(item => item.id !== id);  this.setState({successMessage : `${userId} is stored`, errorMessage : ''});} )
        //.catch((error) => this.setState({errorMessage: `${userId} donot exists`, successMessage : ''}))
    }
    render() {
        return (<div className = 'container-fluid'>
            <h3>Update List</h3>
            <button className = 'btn btn-primary' onClick = {this.handleClick}>Refresh</button>
            <table className = 'table'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Salary</th><th>gender</th><th>City</th><th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //this.state.usersArray.map(user =>( <tr key = {user.userId}>
                        this.state.usersArray.map((user, index) => <tr key = {index}>
                            <td>{user.id}</td>
                            <td><input id='name' defaultValue={user.name} onChange = {(event) => this.setState({name: event.target.value})}/></td>
                            <td>{user.salary}</td>
                            <td>{user.gender}</td>
                            <td><input id='city' defaultValue={user.city} onChange = {(event) => this.setState({city: event.target.value})}/></td>
                            <td><input id='state' defaultValue={user.state} onChange = {(event) => this.setState({state: event.target.value})}/></td>
                            <button className = 'btn btn-primary btnColor'  onClick = {this.handleUpdate}>Update</button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>)
 }
}
