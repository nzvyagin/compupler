export const Run = ({pairsCount}) => {
  if(!pairsCount) return null;

  return (
    <div className="d-flex flex-row justify-content-center">
      <button id="runButton" className="btn btn-outline-success mb-5">Сравнить сочетания ({pairsCount})</button>
    </div>
  );
};
