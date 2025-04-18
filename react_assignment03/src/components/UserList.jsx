import React, { useState } from "react";
import "../css/UserList.css";

const UserList = () => {
  let userData = [
    {
      id: 1,
      name: "Lionel Messi",
      email: "lionelmessi@heaptrace.com",
      phone: 3216549870,
    },
    {
      id: 2,
      name: "Abraham Benjamin de Villiers",
      email: "abdevilliers@heaptrace.com",
      phone: 6549873210,
    },
    {
      id: 3,
      name: "Rohit Sharma",
      email: "rohitsharma@heaptrace.com",
      phone: 1234567890,
    },
    {
      id: 4,
      name: "Virat Kohli",
      email: "viratkohli@heaptrace.com",
      phone: 4567891230,
    },
    {
      id: 5,
      name: "Hardik Pandya",
      email: "hardikpandya@heaptrace.com",
      phone: 7894561230,
    },
  ];

  const [userDataArray, setUserDataArray] = useState(userData);

  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");

  const addUserHandler = () => {
    let id = userDataArray.length + 1;

    setUserDataArray([
      ...userDataArray,
      { name: userName, email: userEmail, phone: userPhone, id: id },
    ]);
    setuserName("");
    setuserEmail("");
    setuserPhone("");
  };

  const deleteUser = (id) => {
    const newUserList = userDataArray.filter((record) => record.id !== id);
    setUserDataArray(newUserList);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = userDataArray.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="searchDiv" style={{ marginBottom: "15px" }}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="row addDiv">
        <div className="col-3">
          <input
            className="form-control"
            value={userName}
            placeholder="Enter name"
            name="userName"
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="col-3">
          <input
            className="form-control"
            value={userEmail}
            placeholder="Enter email"
            name="userEmail"
            onChange={(e) => setuserEmail(e.target.value)}
          />
        </div>
        <div className="col-3">
          <input
            className="form-control"
            value={userPhone}
            placeholder="Enter phone no"
            name="userPhone"
            onChange={(e) => setuserPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="col-3">
        <button className="btn btn-success" onClick={addUserHandler}>
          Add User
        </button>
      </div>

      <table className="table table-striped table-bordered table-hover user-table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button className="btn btn-danger btn"onClick={() => {deleteUser(user.id)}} >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
