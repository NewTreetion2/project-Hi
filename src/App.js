import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Login from "pages/Login";
import Header from "component/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
