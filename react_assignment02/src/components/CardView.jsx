import React from "react";
import "../css/CardView.css";

const CardView = ({ userData }) => {
  return (
    <div className="user-card">
      <img src={userData.picture.medium} className="user-image" alt="User" />
      <div className="user-info">
        <h4 className="user-name">
          {userData.name.first} {userData.name.last}
        </h4>
        <p>
          {userData.email} <br />
          {userData.phone}
        </p>
      </div>
    </div>
  );
};

export default CardView;
