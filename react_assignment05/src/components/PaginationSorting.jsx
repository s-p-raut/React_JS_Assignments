import React, { useState } from "react";
import "../PaginationSorting.css";

const usersData = [
  { id: 1, name: "Alice", role: "User", createdAt: "2024-03-05", updatedAt: "2024-05-10" },
  { id: 2, name: "Bob", role: "User", createdAt: "2024-01-22", updatedAt: "2024-03-14" },
  { id: 3, name: "Charlie", role: "Admin", createdAt: "2024-02-18", updatedAt: "2024-03-03" },
  { id: 4, name: "David", role: "User", createdAt: "2024-04-01", updatedAt: "2024-04-22" },
  { id: 5, name: "Eve", role: "User", createdAt: "2024-02-10", updatedAt: "2024-04-11" },
  { id: 6, name: "Frank", role: "Admin", createdAt: "2024-03-17", updatedAt: "2024-04-27" },
  { id: 7, name: "Grace", role: "User", createdAt: "2024-01-30", updatedAt: "2024-03-20" },
  { id: 8, name: "Heidi", role: "Admin", createdAt: "2024-03-09", updatedAt: "2024-03-28" },
  { id: 9, name: "Ivan", role: "Admin", createdAt: "2024-04-04", updatedAt: "2024-04-25" },
  { id: 10, name: "Judy", role: "User", createdAt: "2024-02-25", updatedAt: "2024-03-19" },
  { id: 11, name: "Karl", role: "User", createdAt: "2024-03-12", updatedAt: "2024-04-01" },
  { id: 12, name: "Laura", role: "Admin", createdAt: "2024-04-06", updatedAt: "2024-05-01" },
  { id: 13, name: "Mike", role: "Admin", createdAt: "2024-01-18", updatedAt: "2024-02-26" },
  { id: 14, name: "Nina", role: "User", createdAt: "2024-02-14", updatedAt: "2024-03-05" },
  { id: 15, name: "Oscar", role: "Admin", createdAt: "2024-03-21", updatedAt: "2024-04-15" },
];

const sortFunctions = {
  "A-Z": (a, b) => a.name.localeCompare(b.name),
  "Z-A": (a, b) => b.name.localeCompare(a.name),
  "Created Date": (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  "Last Updated": (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
};

const PaginationSortComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState("5");
  const [sortKey, setSortKey] = useState("");
  const [filterKey, setFilterKey] = useState("");

  const filteredUsers = filterKey
    ? usersData.filter((user) => user.role === filterKey)
    : usersData;

  const sortedUsers = sortKey
    ? [...filteredUsers].sort(sortFunctions[sortKey])
    : filteredUsers;
  const totalPages = Math.ceil(sortedUsers.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentUsers = sortedUsers.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const changePage = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next" && prev < totalPages) return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          className="pagination-select"
        >
          <option value="" disabled>
            Sort By
          </option>
          <option value="A-Z">Alphabetical A-Z</option>
          <option value="Z-A">Alphabetical Z-A</option>
          <option value="Created Date">Created Date</option>
          <option value="Last Updated">Last Updated</option>
        </select>

        <div className="pagination-controls-role">
          <select
            value={filterKey}
            onChange={(e) => setFilterKey(e.target.value)}
            className="pagination-select"
          >
            <option value="" disabled>
              Filter by
            </option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div>
          <span>Users per page: </span>
          <select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="pagination-select"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      <ul className="user-list">
        {currentUsers.map((user) => (
          <li key={user.id} className="user-list-item">
            <strong>{user.name}</strong>
            <div className="user-role">Role: {user.role}</div>
            <div className="user-info">Created: {user.createdAt}</div>
            <div className="user-info">Updated: {user.updatedAt}</div>
          </li>
        ))}
      </ul>

      <div className="pagination-footer">
        <button
          onClick={() => changePage("prev")}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          &lt;
        </button>

        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => changePage("next")}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationSortComponent;
