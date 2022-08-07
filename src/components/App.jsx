import { useCallback, useState } from 'react';
import { Entries, Input, Run, Clear } from '../components';
import { combinePairwise } from '../utils';

export const App = () => {
  const [entries, setEntries] = useState([]);
  const getPairs = useCallback(() => combinePairwise([...entries]), [entries]);

  return (
    <>
      <a href="https://github.com/nzvyagin/compupler">
        <img src="./forkme_right_orange_ff7600.svg" className="position-absolute" style={{ top: 0, right: 0 }} alt="Fork me on GitHub"/>
      </a>
      <main className="container pt-5">
        <h1 className="text-center w-100 mt-5 mb-5">Compupler</h1>
        <Input entries={entries} setEntries={setEntries} />
        <Run pairsCount={getPairs().length} />
        <Clear entries={entries} setEntries={setEntries} />
        <Entries entries={entries} setEntries={setEntries} />
      </main>
    </>
  );
};
