import React from "react";
import { useState } from "react";
import "../css/TableView.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import DeleteConfirmation from "./DeleteConfirmation";
import { toast } from "react-toastify";

const TableView = ({ userRows, deleteRow, editRow }) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Last Login</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userRows.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>
                    <span className="user-name">
                      <img
                        src={row.image}
                        className="user-image"
                        alt="User Avatar"
                      />
                      {row.name}
                    </span>
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.last_login}</td>
                  <td>{row.role}</td>
                  <td className={`status status-${row.status}`}>
                    {row.status}
                  </td>
                  <td>
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => {
                          setRowToDelete(index);
                          setDeleteOpen(true);
                        }}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(index)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {deleteOpen && (
        <DeleteConfirmation
          closeDelete={() => setDeleteOpen(false)}
          deleteRow={() => {
            deleteRow(rowToDelete);
            setDeleteOpen(false);
            setRowToDelete(null);
            toast.error("User deleted successfully!");
          }}
        />
      )}
    </>
  );
};

export default TableView;
