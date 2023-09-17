import { useEffect, useState } from 'react';
import { Entries, Input, Run, Clear, Undo, Compare, OnboardingPanel } from '../components';
import { combinePairwise } from '../utils';

export const App = () => {
  const [entries, setEntries] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [resultList, setResultList] = useState(null);

  useEffect(() => {
    setPairs(combinePairwise(entries));
  }, [entries]);

  return (
    <>
      <main className="container pt-5">
        <h1 className="text-center w-100 mt-5 mb-5">Compupler</h1>
        {resultList && (
          <>
            <Compare pairs={pairs} resultList={resultList} setResultList={setResultList} />
            <Undo setResultList={setResultList} />
          </>
        )}
        {!resultList && (
          <>
            <OnboardingPanel />
            <Input entries={entries} setEntries={setEntries} />
            <Run entries={entries} pairs={pairs} setResultList={setResultList} />
            <Clear entries={entries} setEntries={setEntries} />
            <Entries entries={entries} setEntries={setEntries} />
          </>
        )}
      </main>
    </>
  );
};
