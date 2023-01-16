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
      <div className="header-section">
        <Header />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
