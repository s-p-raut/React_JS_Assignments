import React from "react";
import "../DashboardWidget.css";

function DashboardWidget({
  totalUsers,
  activeUsers,
  inactiveUsers,
  onTotalClick,
}) {
  return (
    <div className="dashboard-widgets">
      <div className="widget-card" onClick={onTotalClick}>
        <div className="widget-info">
          <p className="widget-title">Total Users</p>
          <p className="widget-count">{totalUsers}</p>
        </div>
        <div className="widget-icon orange">
          <span className="material-icons">groups</span>
        </div>
      </div>

      <div className="widget-card">
        <div className="widget-info">
          <p className="widget-title">Active Users</p>
          <p className="widget-count">{activeUsers}</p>
        </div>
        <div className="widget-icon green">
          <span className="material-icons">groups</span>
        </div>
      </div>

      <div className="widget-card">
        <div className="widget-info">
          <p className="widget-title">Inactive Users</p>
          <p className="widget-count">{inactiveUsers}</p>
        </div>
        <div className="widget-icon red">
          <span className="material-icons">groups</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardWidget;
