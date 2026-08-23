export const Run = ({ entries, pairs, setResultList }) => {
  if (!entries.length) return null;
  const startComparison = () => setResultList(entries.map((entry) => ({ ...entry, rating: 0 })));
  return (
    <div className="d-flex justify-content-center mb-4">
      <button className="btn btn-outline-success" type="button" disabled={!pairs.length} onClick={startComparison}>
        Сравнить сочетания ({pairs.length})
      </button>
    </div>
  );
};
