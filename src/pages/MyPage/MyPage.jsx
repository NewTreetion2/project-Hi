import styles from "./MyPage.module.scss";

import Menu from "components/Menu/Menu";
import Profile from "components/Profile/Profile";
import Summary from "components/Summary/Summary";

import { Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { projectSearchStatus } from "store";

export default function MyPage() {
  const [searchState, setSearchState] = useRecoilState(projectSearchStatus);
  function onChangeHandler(e) {
    setSearchState(e.target.value);
  }
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.infoMenuBox}`}>
        <div className={`${styles.userInfo}`}>
          <Profile />
        </div>
        <div className={`${styles.menuBar}`}>
          <Menu />
        </div>
      </div>
      <div className={`${styles.contentBox}`}>
        <div className={`${styles.summary}`}>
          <h5>판매관리</h5>
          <Summary />
        </div>
        <div className={`${styles.search}`}>
          <Form.Select
            className={`${styles.select}`}
            onChange={onChangeHandler}
          >
            <option value="request">던져준 일</option>
            <option value="proceed">받은 일</option>
            <option value="all_project">등록된 프로젝트</option>
          </Form.Select>
        </div>
        <div className={`${styles.workList}`}>워크 리스트</div>
        {/* 현재 내가 참여하고 있는 프로젝트를 등록순으로 정리, 이후 검색에 따라 나열순서가 변경된다*/}
      </div>
    </div>
  );
}
