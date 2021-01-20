import "./Backdrop.css";

const Backdrop = ({ show, clicked }) => {
  return <div className={`backdrop ${show && "show"}`} onClick={clicked}></div>;
};

export default Backdrop;
