import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <>
      <div className={`${styles.menuBarTitle}`}>메뉴</div>
      <div className={`${styles.menuBarContent}`}>
        <p className={`${styles.menuBarContentFont}`}>대화창</p>
      </div>
    </>
  );
}

//이후 디벨롭 예정 -> 페이지 이동으로 관리할 것인지, 렌더링으로 관리할 것인지
