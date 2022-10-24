export const Entry = ({id, text, setEntries, entries}) => {
  const handleEntryDelete = (e) => setEntries(entries.filter((entry) => entry.id !== e.target.parentNode.id));

  return (
    <div id={id} className="mb-2 d-flex align-items-center bg-light">
      <div className="flex-grow-1 mx-1 overflow-hidden text-nowrap">{text}</div>
      <button onClick={handleEntryDelete} className="btn btn-danger btn-sm">Удалить</button>
    </div>
  );
};
