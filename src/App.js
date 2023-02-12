import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import { Header, MyModal } from "components";
import { Main, NotFound, WorkList } from "pages";

// TODO
function App() {
  return (
    <div>
      <div className={`${styles.header}`}>
        <Header />

        <MyModal />
      </div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/getWork" element={<WorkList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
