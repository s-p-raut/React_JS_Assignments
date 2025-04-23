import { useState } from "react";
import "./App.css";
import PaginationSortComponent from "./components/PaginationSorting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PaginationSortComponent />
    </>
  );
}

export default App;
