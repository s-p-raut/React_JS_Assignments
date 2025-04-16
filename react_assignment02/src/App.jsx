import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CardView from "./components/CardView";
import TableView from "./components/TableView";
import Modal from "./components/AddUserComponent";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // * Card View *

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     let userData;
  //     try {
  //       const response = await fetch("https://randomuser.me/api/?results=6");
  //       userData = (await response.json()).results;
  //     } catch (error) {
  //       console.log(error);
  //       userData = [];
  //     }
  //     setUsers(userData);
  //   })();
  // }, []);

  // Table View with user functionalities
  const [formOpen, setformOpen] = useState(false);

  const [userRows, setUserRows] = useState([
    {
      id: "1",
      image: "user-avatar01.jpg",
      name: "Rowan Torres",
      email: "rowantorres@gmail.com",
      phone: "1234567890",
      last_login: "6 Days ago",
      role: "User",
      status: "Active",
    },
    {
      id: "2",
      image: "user-avatar02.jpg",
      name: "Alonzo Peres",
      email: "alonzoperes@gmail.com",
      phone: "9876543210",
      last_login: "2 Days ago",
      role: "User",
      status: "Active",
    },
    {
      id: "3",
      image: "user-avatar03.jpg",
      name: "Syler Lane",
      email: "skylerlane@gmail.com",
      phone: "7894561230",
      last_login: "1 Days ago",
      role: "User",
      status: "Inactive",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setUserRows(userRows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setformOpen(true);
  };

  const handleSubmit = (newUserRow) => {
    rowToEdit === null
      ? setUserRows([...userRows, newUserRow])
      : setUserRows(
          userRows.map((currRow, index) => {
            if (index !== rowToEdit) return currRow;

            return newUserRow;
          })
        );
  };

  return (
    <>
      <div className="App">
        {/* CardView Rendering */}
        {/* <div className="cards-container">
          {users.map((user, index) => (
            <CardView userData={user} key={index} />
          ))}
        </div> */}

        {/* TableView Rendering */}
        <TableView
          userRows={userRows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />

        <ToastContainer position="top-right" autoClose={3000} />

        <button className="add-btn" onClick={() => setformOpen(true)}>
          Add User
        </button>
        {formOpen && (
          <Modal
            closeModal={() => {
              setformOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && userRows[rowToEdit]}
          />
        )}

        
      </div>
    </>
  );
}

export default App;
