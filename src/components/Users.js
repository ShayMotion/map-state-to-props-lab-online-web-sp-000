import React, { Component } from 'react';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
      {this.props.numberOfUsers}
        <ul>
        {users}
         
        
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};


export default Users
