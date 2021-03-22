import React, { Component } from "react";

class UserItem extends Component {
  handleDeleteUser = (idUser) => {
    this.props.getDeleteUser(idUser);
  };
  handleUpdateUser = (idUser) => {
    document.getElementById("btnUpdate").classList.remove("d-none");
    document.getElementById("btnAdd").classList.add("d-none");
    this.props.getUpdateUser(idUser);
  };
  render() {
    const { user } = this.props;

    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            type="button"
            onClick={() => {
              this.handleUpdateUser(user.id);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.handleDeleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
