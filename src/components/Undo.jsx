export const Undo = ({ onReset }) => {
  return <div className="d-flex justify-content-center"><button className="btn btn-outline-danger" type="button" onClick={onReset}>Начать заново</button></div>;
};
