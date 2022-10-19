export const Run = ({entries, getPairs, setResultList}) => {
  const pairsCount = getPairs().length;
  const handleRunCompare = () => {
    setResultList([...entries]);
  };

  if(!entries.length) return null;

  return (
    <div className="d-flex flex-row justify-content-center">
      <button onClick={handleRunCompare} className="btn btn-outline-success mb-5" disabled={!pairsCount}>Сравнить сочетания ({pairsCount})</button>
    </div>
  );
};
