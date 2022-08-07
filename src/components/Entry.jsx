export const Entry = ({id, text, setEntries, entries}) => {
  const handleEntryDelete = (e) => setEntries(entries.filter((entry) => entry.id !== e.currentTarget.id));

  return (
    <div id={id} onClick={handleEntryDelete} className="mb-2 d-flex align-items-center bg-light">
      <div className="flex-grow-1 mx-1">{text}</div>
      <button className="btn btn-danger btn-sm">Удалить</button>
    </div>
  );
};
