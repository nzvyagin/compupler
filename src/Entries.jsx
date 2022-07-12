import { Entry } from './Entry';

export const Entries = ({entries, setEntries}) => {
  return (
    <div className="text-right">
      <button className="btn btn-outline-danger btn-sm mb-2">Очистить всё ({entries.length})</button>
      <div className="text-left">
        {entries.map((entry) => <Entry key={entry.id} id={entry.id} text={entry.text} setEntries={setEntries} entries={entries} />)}
      </div>
    </div>
  );
};
