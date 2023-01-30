import "./Button.css";

export default function Button({ onClickHandler, title, className }) {
  return (
    <button className={className} onClick={onClickHandler}>
      {title}
    </button>
  );
}
