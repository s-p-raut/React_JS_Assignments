import React from "react";
import UserWidgetComponent from "./UserWidgetComponent";
import userAvatar from "./assets/user-avatar.jpg";

function App() {
  const user = {
    name: "Rowan Torres",
    email: "rowantorres@gmail.com",
    status: "Active",
    image: userAvatar,
  };

  return (
    <div>
      <UserWidgetComponent user={user} />
    </div>
  );
}

export default App;
