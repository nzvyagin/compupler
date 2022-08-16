export const Run = ({entries, getPairs, setResultList}) => {
  const pairsCount = getPairs().length;
  const handleRunCompare = () => {
    setResultList([...entries]);
  };

  if(!pairsCount) return null;

  return (
    <div className="d-flex flex-row justify-content-center">
      <button id="runButton" onClick={handleRunCompare} className="btn btn-outline-success mb-5">Сравнить сочетания ({pairsCount})</button>
    </div>
  );
};
