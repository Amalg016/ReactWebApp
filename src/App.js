import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [modules, setModules] = useState(["Ticket", "Contacts"]);
  const [selectedModuleIndex, setModuleIndex] = useState(0);

  const [records, setRecords] = useState([]);
  useEffect(() => {
    setRecords([
      { name: "Record 1" },
      { name: "Record 2" },
      { name: "Record 3" },
    ]);
  }, [modules]);

  function changeModule(index) {
    setModuleIndex(index);
    setRecords([{ name: "Amal" }, { name: "Tom" }, { name: "Record 3" }]);
  }

  console.log("rerender");
  return (
    <div className="App">
      <Topbar
        items={modules}
        selectedIndex={selectedModuleIndex}
        setIndex={changeModule}
      />
      <div className="mid">
        <Sidebar />
        <Main records={records} />
      </div>
    </div>
  );
}

export default App;
