export const Entry = ({ entry, setEntries }) => {
  const removeEntry = () => setEntries((entries) => entries.filter((item) => item.id !== entry.id));
  return (
    <li className="list-group-item d-flex align-items-center gap-3">
      <span className="flex-grow-1 text-truncate" title={entry.text}>{entry.text}</span>
      <button className="btn btn-outline-danger btn-sm" type="button" onClick={removeEntry}>Удалить</button>
    </li>
  );
};
