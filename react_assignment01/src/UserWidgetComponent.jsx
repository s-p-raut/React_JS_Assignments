import React from "react";
import "./Widget.css";
import { MoreVertical } from "lucide-react";

const UserWidgetComponent = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.image} alt={user.name} className="user-avatar" />
      <div className="user-info">
        <h4 className="user-name">{user.name}</h4>
        <p className="user-email">{user.email}</p>
        <div className="user-status">
          <span className="status-indicator"></span>
          <span className="status">{user.status}</span>
        </div>
      </div>
      <div className="menu-icon">
        <MoreVertical size={18} color="#9ca3af" />
      </div>
    </div>
  );
};

export default UserWidgetComponent;
