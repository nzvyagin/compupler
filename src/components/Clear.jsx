export const Clear = ({entries, setEntries}) => {
  if(!entries.length) return null;

  return (
    <div className="d-flex flex-row justify-content-end">
      <button onClick={() => setEntries([])} className="btn btn-outline-danger btn-sm mb-2">Очистить всё ({entries.length})</button>
    </div>
  );
};
