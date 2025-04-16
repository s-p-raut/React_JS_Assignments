import React, { useState } from "react";
import "../css/AddUser.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      id: "",
      image: "",
      name: "",
      email: "",
      phone: "",
      last_login: "",
      role: "",
      status: "",
    }
  );

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.email && formState.phone) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    if (defaultValue) {
      toast.info("User updated successfully!");
    } else {
      toast.success("User added successfully!");
    }

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form action="">
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={formState.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-login">Last Login</label>
            <input
              type="text"
              name="last_login"
              placeholder="Last Login"
              value={formState.last_login}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select name="role" value={formState.role} onChange={handleChange}>
              <option value="" disabled selected hidden>
                Select Role
              </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Select Status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
