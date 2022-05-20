import {Component} from 'react';
import axios from 'axios';

export class StoreUser extends Component {
    constructor(props) {
        super(props);
        this.state = {id: '', name: '', dob: '', successMessage: '', errorMessage: ''}
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        let userId = parseInt(this.state.id);
        let url = "http://localhost:3009/users"
        axios.post(url, {id: userId, name: this.state.name, dob: this.state.dob})
        .then((response) => this.setState({successMessage : `${userId} is stored`, errorMessage : ''}))
        .catch((error) => this.setState({errorMessage: `${userId} already exists`, successMessage : ''}))
    }
    render() {
        return (<div>
            <h3>Register User</h3>
            <hr />
            <form onSubmit = {this.handleSubmit}>
                <div>
                    Id: <input type = 'number' onChange = {(event) => this.setState({id: event.target.value})}></input>
                </div>
                <div>
                    Name: <input type = 'text' onChange = {(event) => this.setState({name: event.target.value})}></input>
                </div>
                <div>
                    Dob: <input type = 'date' onChange = {(event) => this.setState({dob: event.target.value})}></input>
                </div>
                <div>
                    <input type = "submit" value = "Register"></input>
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
    }
    handleClick = () => {
        let url = "http://localhost:3009/users";
        axios.get(url)
        .then((response) => {
            let data = response.data;
            this.setState({usersArray: data});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (<div className = 'container-fluid'>
            <h3>Users List</h3>
            <button className = 'btn btn-secondary' onClick = {this.handleClick}>Refresh</button>
            <table className = 'table'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>DOB</th></tr>
                </thead>
                <tbody>
                    {
                        this.state.usersArray.map((user, index) => <tr key = {index}>
                            <td>{user.id}</td><td>{user.name}</td><td>{user.dob}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>)
 }
}

export class DeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state = {id: '', name: '', dob: '', successMessage: '', errorMessage: ''}
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let userId = parseInt(this.state.id);
        let url = "http://localhost:3009/users/"+userId
        axios.delete(url)
        //axios.post(url, {id: userId, name: this.state.name, dob: this.state.dob})
        .then((response) => this.setState({successMessage : `${userId} is deleted`, errorMessage : ''}))
        //.then((response) => {const user = this.state.user.filter(item => item.id !== id);  this.setState({successMessage : `${userId} is stored`, errorMessage : ''});} )
        .catch((error) => this.setState({errorMessage: `${userId} donot exists`, successMessage : ''}))
    }
    render() {
        return (<div>
            <h3>Delete User</h3>
            <hr />
            <form onSubmit = {this.handleSubmit}>
                <div>
                    Id: <input type = 'number'  onChange = {(event) => this.setState({id: event.target.value})}></input>
                </div>
                
                <div>
                    <input type = "submit" value = "Delete"  ></input>
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

export class FetchOneUser extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'',name:'',dob:'',usersArray:[]};
        this.handleClick =  this.handleClick.bind(this);
    }
    
    handleClick = (event) => {
        event.preventDefault();
        let userId = parseInt(this.state.id);
        console.log(userId);
        let url = `http://localhost:3009/users/"+${userId}`;
        axios.get(url)
        .then((response) => {
            let data = response.data;
            console.log(data)
            this.setState({usersArray: [data]});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (<div className = 'container-fluid'>
            <h3>Users Detail</h3>
            <hr/>
            <form>
                <div>
                    Id: <input type = 'number'  onChange = {(event) => this.setState({id: event.target.value})}></input>
                </div>
                
                
            </form>
            <div>
                <button className = 'btn btn-secondary' onClick = {this.handleClick}>get User Details</button>
                </div>
            
            
            <table className = 'table'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>DOB</th></tr>
                </thead>
                <tbody>
                    {
                        
                        this.state.usersArray.map((user, index) => <tr key = {index}>
                            <td>{user.id}</td><td>{user.name}</td><td>{user.dob}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>)
    }
}