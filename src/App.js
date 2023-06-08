import { Route, Routes } from "react-router-dom";
import "./App.css";
import FilmsPresentation from "./Components/FilmsPresentation";
import Header from "./Components/Header";
import Detail from "./Components/Detail";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="" element={<Main/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
