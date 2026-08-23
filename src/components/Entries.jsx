import { Entry } from './Entry.jsx';

export const Entries = ({ entries, setEntries }) => {
  if (!entries.length) return null;
  return <ul className="list-group">{entries.map((entry) => <Entry key={entry.id} entry={entry} setEntries={setEntries} />)}</ul>;
};
