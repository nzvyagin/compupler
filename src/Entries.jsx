import { Entry } from './Entry';

export const Entries = ({entries, setEntries}) => {
  return (
    <div className="text-right">
      <div className="text-left">
        {entries.map((entry) => <Entry key={entry.id} id={entry.id} text={entry.text} setEntries={setEntries} entries={entries} />)}
      </div>
    </div>
  );
};
