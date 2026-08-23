export const Clear = ({ entries, setEntries }) => {
  if (!entries.length) return null;
  return (
    <div className="d-flex justify-content-end mb-2">
      <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => setEntries([])}>
        Очистить всё ({entries.length})
      </button>
    </div>
  );
};
