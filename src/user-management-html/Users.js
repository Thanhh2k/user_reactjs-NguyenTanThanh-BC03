import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderUserList = () => {
    const { userList } = this.props;
    return userList.map((item) => {
      return (
        <UserItem
          key={item.id}
          user={item}
          getDeleteUser={this.props.getDeleteUser}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
