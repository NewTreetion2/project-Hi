import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import Header from "components/Header/Header";

import { Main, NotFound, GetWork } from "pages";

function App() {
  return (
    <div>
      <div className="header-section">
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/getWork" element={<GetWork />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
