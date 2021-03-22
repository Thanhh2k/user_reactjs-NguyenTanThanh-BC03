import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: data,
    };
  }
  getDeleteUser = (idUser) => {
    let location = this.state.userList.findIndex((index) => {
      return index.id === idUser;
    });
    let userList = [...this.state.userList];
    if (location !== -1) {
      userList.splice(location, 1);
      this.setState({
        userList,
      });
    }
  };
  getAddUser = (user) => {
    console.log(user);
    const userNew = [...this.state.userList];
    userNew.push(user);
    this.setState({
      userList: userNew,
    });
  };
  handleAdd = () => {
    document.getElementById("btnUpdate").classList.add("d-none");
    document.getElementById("btnAdd").classList.remove("d-none");
  };
  findById = function (id) {
    const userList = [...this.state.userList];
    for (var i = 0; i < userList.length; i++) {
      if (userList[i].id === id) return i;
    }
    return -1;
  };
  getUpdateUser = (userUpdate) => {
    const userList = [...this.state.userList];
    const foundedIndex = this.findById(userUpdate);
    if (foundedIndex === -1) return alert("đã xảy ra lỗi");
    const updateUser = userList[foundedIndex];
    document.getElementById("id").value = updateUser.id;
    document.getElementById("userName").value = updateUser.userName;
    document.getElementById("name").value = updateUser.name;
    document.getElementById("email").value = updateUser.email;
    document.getElementById("phoneNumber").value = updateUser.phoneNumber;
    document.getElementById("type").value = updateUser.type;
  };
  handleGetUpdateUser = () => {
    let id = parseInt(document.getElementById("id").value);
    let userName = document.getElementById("userName").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let type = document.getElementById("type").value;

    const userList = [...this.state.userList];
    const foundedIndex = this.findById(id);
    if (foundedIndex === -1) return alert("đã xảy ra lỗi");
    //lưu lại thông tin mới của user
    userList[foundedIndex].name = name;
    userList[foundedIndex].userName = userName;
    userList[foundedIndex].email = email;
    userList[foundedIndex].phoneNumber = phoneNumber;
    userList[foundedIndex].type = type;
    this.setState({
      userList,
    });
  };
  handleGetSearchUser = () => {
    let keyWord = document.getElementById("txtSearch").value;
    keyWord = keyWord.toLowerCase().trim();
    const userList = [...this.state.userList];
    const result = [];
    for (var i = 0; i < userList.length; i++) {
      let covertedFullName = userList[i].name.toLowerCase();
      if (userList[i].id === keyWord || covertedFullName.includes(keyWord)) {
        result.push(userList[i]);
      }
    }
    this.setState({
      userList: result,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search handleGetSearchUser={this.handleGetSearchUser} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={this.handleAdd}
          >
            Add User
          </button>
        </div>
        <Users
          userList={this.state.userList}
          getDeleteUser={this.getDeleteUser}
          getUpdateUser={this.getUpdateUser}
        />
        <Modal
          getAddUser={this.getAddUser}
          handleGetUpdateUser={this.handleGetUpdateUser}
        />
      </div>
    );
  }
}

export default Home;
