import { useMemo, useState } from 'react';
import forkMeRibbon from '../assets/forkme_right_orange_ff7600.svg';
import { combinePairwise } from '../utils.js';
import { Clear, Compare, Entries, Input, OnboardingPanel, Run } from './index.js';

export const App = () => {
  const [entries, setEntries] = useState([]);
  const [resultList, setResultList] = useState(null);
  const pairs = useMemo(() => combinePairwise(entries), [entries]);

  return (
    <>
      <a href="https://github.com/nzvyagin/compupler">
        <img className="position-absolute top-0 end-0" src={forkMeRibbon} alt="Fork me on GitHub" />
      </a>
      <main className="container py-5">
        <div className="mx-auto app-content">
          <h1 className="text-center mb-5">Compupler</h1>
          {resultList ? (
            <Compare pairs={pairs} resultList={resultList} setResultList={setResultList} />
          ) : (
            <>
              <OnboardingPanel />
              <Input setEntries={setEntries} />
              <Run entries={entries} pairs={pairs} setResultList={setResultList} />
              <Clear entries={entries} setEntries={setEntries} />
              <Entries entries={entries} setEntries={setEntries} />
            </>
          )}
        </div>
      </main>
    </>
  );
};
