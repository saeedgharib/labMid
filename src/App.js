import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import IosApp from "./components/IosApp";

import Main from "./components/Main";
import Menu from "./components/Menu";
import QeaTrophy from "./components/QeaTrophy";
import Teams from "./components/Teams";


function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/qeaTrophy" element={<QeaTrophy/>}/>
    <Route path="/iosApp" element={<IosApp/>}/>
  </Routes>
    {/* <LeftSidebar/>
    <Main/> */}
  </>
  );
}

export default App;
