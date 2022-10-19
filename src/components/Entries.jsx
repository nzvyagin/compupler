import { Entry } from '../components';

export const Entries = ({entries, setEntries}) => {
  if(!entries.length) return null;

  return (
    <div className="text-right">
      <div className="text-left">
        {entries.map((entry) => <Entry key={entry.id} id={entry.id} text={entry.text} setEntries={setEntries} entries={entries} />)}
      </div>
    </div>
  );
};
