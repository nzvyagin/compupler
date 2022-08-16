import { useCallback, useState } from 'react';
import { Entries, Input, Run, Clear, Undo, Compare } from '../components';
import { combinePairwise } from '../utils';

export const App = () => {
  const [entries, setEntries] = useState([]);
  const [resultList, setResultList] = useState(null);
  const getPairs = useCallback(() => combinePairwise([...entries]), [entries]);

  console.log('resultList', resultList);

  return (
    <>
      <a href="https://github.com/nzvyagin/compupler">
        <img src="./forkme_right_orange_ff7600.svg" className="position-absolute" style={{ top: 0, right: 0 }} alt="Fork me on GitHub"/>
      </a>
      <main className="container pt-5">
        <h1 className="text-center w-100 mt-5 mb-5">Compupler</h1>
        {resultList && (
          <>
            <Compare getPairs={getPairs} resultList={resultList} setResultList={setResultList} />
            <Undo setResultList={setResultList} />
          </>
        )}
        {!resultList && (
          <>
            <Input entries={entries} setEntries={setEntries} />
            <Run entries={entries} getPairs={getPairs} setResultList={setResultList} />
            <Clear entries={entries} setEntries={setEntries} />
            <Entries entries={entries} setEntries={setEntries} />
          </>
        )}
      </main>
    </>
  );
};
