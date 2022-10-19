export const Undo = ({setResultList}) => {
  return (
    <div className="d-flex flex-row justify-content-center mb-3">
      <button onClick={() => setResultList(null)} className="btn btn-outline-danger">Начать заново</button>
    </div>
  );
};
