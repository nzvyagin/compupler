export const Run = ({getPairs, setResultList}) => {
  const pairsCount = getPairs().length;
  const handleRunCompare = () => setResultList(getPairs());

  if(!pairsCount) return null;

  return (
    <div className="d-flex flex-row justify-content-center">
      <button id="runButton" onClick={handleRunCompare} className="btn btn-outline-success mb-5">Сравнить сочетания ({pairsCount})</button>
    </div>
  );
};
