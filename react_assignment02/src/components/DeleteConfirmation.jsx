import React from "react";
import "../css/DeleteConfirmation.css";

const DeleteConfirmation = ({ closeDelete, deleteRow }) => {
  // const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="delete-container">
      <div className="delete-card">
        <div className="delete-text">
          <b>Delete Confirmation</b>
          <div className="sub-text">
            Are you sure you want to delete this user
          </div>
        </div>
        <div className="delete-btns">
          <button className="delete" onClick={deleteRow}>
            Delete
          </button>
          <button className="cancel" onClick={closeDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
