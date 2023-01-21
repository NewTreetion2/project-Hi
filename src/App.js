import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import Header from "components/Header";

import { Login, Main, NotFound } from "pages";

function App() {
  return (
    <div>
      <div className="header-section">
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
