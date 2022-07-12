import { useState } from 'react';
import { Entries } from './Entries';
import { Input } from './Input';

export const App = () => {
  const [entries, setEntries] = useState([]);

  return (
    <>
      <a href="https://github.com/nzvyagin/compupler">
        <img src="./forkme_right_orange_ff7600.svg" className="position-absolute" style={{ top: 0, right: 0 }} alt="Fork me on GitHub"/>
      </a>
      <main className="container pt-5">
        <h1 className="text-center w-100 mt-5 mb-5">Compupler</h1>
        <Input entries={entries} setEntries={setEntries} />
        <Entries entries={entries} setEntries={setEntries} />
      </main>
    </>
  );
};
