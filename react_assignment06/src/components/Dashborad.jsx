import React, { useState } from "react";
import DashboardWidget from "./DashboardWidget";

function Dashboard() {
  const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
    { id: 4, name: "David", active: false },
    { id: 5, name: "Eve", active: true },
    { id: 6, name: "Frank", active: true },
  ];

  const [showUsers, setShowUsers] = useState(false);

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.active).length;
  const inactiveUsers = totalUsers - activeUsers;

  const handleTotalClick = () => {
    setShowUsers((prev) => !prev);
  };

  return (
    <div>
      <DashboardWidget
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        inactiveUsers={inactiveUsers}
        onTotalClick={handleTotalClick}
      />

      {showUsers && (
        <div className="user-list-container">
          <h3>User List</h3>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id}>
                <span>{user.name}</span>
                <span
                  className={`user-status ${
                    user.active ? "active" : "inactive"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
