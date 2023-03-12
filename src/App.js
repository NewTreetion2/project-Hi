import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import { Header, MyModal, Footer } from "components";
import { Main, NotFound, WorkList, MyPage } from "pages";

// TODO
function App() {
  return (
    <div>
      <div className={`${styles.header}`}>
        <Header />

        <MyModal />
      </div>
      <div className={`${styles.content}`}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/getWork" element={<WorkList />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className={`${styles.footer}`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
