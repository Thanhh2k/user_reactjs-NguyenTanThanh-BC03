import React, { Component } from "react";
import userNew from "./userNew";

class Modal extends Component {
  handleAddUser = () => {
    let id = Math.random();
    let userName = document.getElementById("userName").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let type = document.getElementById("type").value;
    const user = new userNew(id, name, userName, email, phoneNumber, type);
    this.props.getAddUser(user);
    document.getElementById("btnReset").click();
  };
  handleUpdateUser = () => {
    this.props.handleGetUpdateUser();
    document.getElementById("btnReset").click();
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group d-none">
                  <label>ID</label>
                  <input type="text" className="form-control" id="id" />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" id="userName" />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" id="type">
                    <option value="USER">USER</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.handleAddUser}
                  id="btnAdd"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="btnUpdate"
                  onClick={this.handleUpdateUser}
                >
                  Update
                </button>
                <button type="reset" id="btnReset" className="d-none">
                  reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
