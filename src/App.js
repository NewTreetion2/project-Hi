import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import { Header, MyModal, Footer } from "components";
import { Main, NotFound, WorkList, MyPage, WorkDetail } from "pages";
import { signInUser } from "store";

import { useResetRecoilState } from "recoil";

// TODO
function App() {
  const resetUserID = useResetRecoilState(signInUser);
  window.onbeforeunload = () => {
    resetUserID();
  };

  return (
    <div className={styles.project}>
      <div className={`${styles.header}`}>
        <Header />

        <MyModal />
      </div>
      <div className={`${styles.content}`}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/getWork" element={<WorkList />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/work-detail/:workNum" element={<WorkDetail />} />
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
